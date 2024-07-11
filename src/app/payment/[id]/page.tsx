"use client";

import Image from "next/image";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

import { demoData } from "@/lib/data";

import { Footer } from "@/components/footer";
import { Helper } from "./components/helper";
import { Copy } from "@/components/icons/copy";
import { Button } from "@/components/ui/button";
import { WooviLogo } from "@/components/icons/woovi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PaymentSteps } from "./components/payment-steps";
import { ExpirationDate } from "@/components/expiration-date";

export default function Payment({ params }: { params: { id: string } }) {
  const data = demoData[parseInt(params.id) - 1];
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText("woovi-frontend-challenge-qrcode");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <main className="flex flex-col items-center min-h-full w-full p-6">
      <Helper />
      <WooviLogo />

      <h1 className="mt-10 text-2xl text-center text-foreground font-extrabold">
        {data.installments === 1 &&
          `João, faça o pagamento de ${data.totalAmount} no Pix`}
        {data.installments !== 1 &&
          `João, pague a entrada de ${data.value} pelo Pix`}
      </h1>

      <div className="border-2 rounded-md border-success p-2 mt-5">
        <Image src="/qrcode.png" alt="qrcode" width={250} height={250} />
      </div>

      <Button
        variant={"secondary"}
        size={"sm"}
        className="px-6 mt-5 "
        onClick={handleCopy}
      >
        {!copied && (
          <>
            Clique para copiar QR CODE <Copy className="ml-2" />
          </>
        )}
        {copied && (
          <>
            Copiado <CheckCircle size={16} className="ml-2" />
          </>
        )}
      </Button>

      <ExpirationDate />

      <div className="w-full max-w-md divide-y-2">
        <PaymentSteps installments={data.installments} value={data.value} />

        <div className="py-5 flex justify-between items-center font-semibold">
          <p className="text-sm">CET: 0,5%</p>
          <span className="text-lg">Total: {data.totalAmount}</span>
        </div>

        <Accordion type="single" className="py-5" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-extrabold">
              Como funciona?
            </AccordionTrigger>
            <AccordionContent>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <p className="flex flex-col items-center my-5 font-semibold text-center">
        Identificador:{" "}
        <span className="font-extrabold">{data.paymentIdentifier}</span>
      </p>

      <Footer />
    </main>
  );
}
