import Image from "next/image";

import { demoData } from "@/lib/data";

import { generateRandomHexCode } from "@/lib/utils";

import { Footer } from "@/components/footer";
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

export default function Payment({ params }: { params: { id: string } }) {
  const data = demoData[parseInt(params.id) - 1];

  console.log(data);

  return (
    <main className="flex flex-col items-center min-h-full w-full p-6">
      <WooviLogo />

      <h1 className="mt-10 text-2xl text-center text-foreground font-extrabold">
        {data.installments === 1 &&
          "João, faça o pagamento de R$ 15.300,00 no Pix"}
        {data.installments !== 1 &&
          `João, pague a entrada de ${data.value} pelo Pix`}
      </h1>

      <div className="border-2 rounded-md border-success p-2 mt-5">
        <Image src="/qrcode.png" alt="qrcode" width={250} height={250} />
      </div>

      <Button variant={"secondary"} size={"sm"} className="px-6 mt-5">
        Clique para copiar QR CODE <Copy className="ml-2" />
      </Button>

      <div className="flex flex-col items-center font-semibold mt-5">
        <p className="text-muted">Prazo de pagamento:</p>
        <span className="font-bold text-foreground">15/12/2021 - 08:17</span>
      </div>

      <div className="w-full max-w-md divide-y-2">
        <PaymentSteps />

        <div className="py-5 flex justify-between items-center font-semibold">
          <p className="text-sm">CET: 0,5%</p>
          <span className="text-lg">Total: R$ 30.600,00</span>
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
        <span className="font-extrabold">{generateRandomHexCode()}</span>
      </p>

      <Footer />
    </main>
  );
}
