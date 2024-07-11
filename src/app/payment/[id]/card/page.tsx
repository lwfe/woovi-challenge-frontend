"use client";
import { demoData } from "@/lib/data";

import { Footer } from "@/components/footer";
import { WooviLogo } from "@/components/icons/woovi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PaymentSteps } from "./components/payment-steps";
import { PaymentForm } from "./components/form";
import { ExpirationDate } from "@/components/expiration-date";
import { CheckCircle } from "lucide-react";

export default function Payment({ params }: { params: { id: string } }) {
  const data = demoData[parseInt(params.id) - 1];

  return (
    <main className="flex flex-col items-center min-h-full w-full p-6">
      <WooviLogo />

      <h1 className="mt-10 text-2xl text-center text-foreground font-extrabold">
        {data.id !== 1 && (
          <>
            João, pague o restante em{" "}
            {data.installments_options.length === 1
              ? "1x"
              : `até ${data.installments_options.length}x`}{" "}
            no cartão
          </>
        )}
      </h1>

      {data.id === 1 && (
        <div className="flex flex-col items-center p-2 py-24">
          <CheckCircle size={40} className="text-success" />
          <p className="mt-5 text-2xl font-extrabold text-center text-foreground">
            Pagamento realizado com sucesso!
          </p>
        </div>
      )}

      {data.id !== 1 && <PaymentForm data={data} />}
      {data.id !== 1 && <ExpirationDate />}

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
