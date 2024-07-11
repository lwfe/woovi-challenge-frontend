"use client";

import { useState } from "react";

import { demoData } from "@/lib/data";

import { Footer } from "@/components/footer";
import { WooviLogo } from "@/components/icons/woovi";

import { CheckboxCard } from "./components/checkbox-card";
import { useRouter } from "next/navigation";

export default function Payment() {
  const route = useRouter();
  const [currentId, setCurrentId] = useState(0);

  const handleSelect = (id: number) => {
    setCurrentId(id);
    setTimeout(() => {
      route.push(`/payment/${id}`);
    }, 500);
  };

  return (
    <main className="flex flex-col items-center min-h-full w-full p-6">
      <WooviLogo />

      <h1 className="mt-10 text-2xl text-center text-foreground font-extrabold">
        João, como você quer pagar?
      </h1>

      <div className="relative w-full max-w-md mt-8">
        <span className="absolute -top-2.5 left-4 z-10 px-3 rounded-full bg-border font-extrabold">
          Pix
        </span>
        <ul>
          {demoData
            .filter((item) => item.id === 1)
            .map((item: any) => (
              <CheckboxCard.Container
                key={item.id}
                id={item.id}
                checked={currentId === item.id}
                onCheckedChange={() => handleSelect(item.id)}
              >
                <CheckboxCard.Title>
                  <CheckboxCard.TextBold>
                    {item.installments}x{" "}
                  </CheckboxCard.TextBold>
                  {item.value}
                </CheckboxCard.Title>

                {typeof item.auxiliar === "string" ? (
                  <CheckboxCard.AuxiliarText>
                    {item.auxiliar}
                  </CheckboxCard.AuxiliarText>
                ) : (
                  item?.auxiliar && item.auxiliar()
                )}

                {typeof item.banner === "string" ? (
                  <CheckboxCard.Banner>{item.banner}</CheckboxCard.Banner>
                ) : (
                  item?.banner && item.banner()
                )}
              </CheckboxCard.Container>
            ))}
        </ul>
      </div>

      <div className="relative w-full max-w-md mt-8">
        <span className="absolute -top-2.5 left-4 z-10 px-3 rounded-full bg-border font-extrabold">
          Pix Parcelado
        </span>
        <ul>
          {demoData
            .filter((item) => item.id !== 1)
            .map((item: any) => (
              <CheckboxCard.Container
                key={item.id}
                id={item.id}
                checked={currentId === item.id}
                onCheckedChange={() => handleSelect(item.id)}
              >
                <CheckboxCard.Title>
                  <CheckboxCard.TextBold>
                    {item.installments}x{" "}
                  </CheckboxCard.TextBold>
                  {item.value}
                </CheckboxCard.Title>

                {typeof item.auxiliar === "string" ? (
                  <CheckboxCard.AuxiliarText>
                    {item.auxiliar}
                  </CheckboxCard.AuxiliarText>
                ) : (
                  item?.auxiliar && item.auxiliar()
                )}

                {typeof item.banner === "string" ? (
                  <CheckboxCard.Banner>{item.banner}</CheckboxCard.Banner>
                ) : (
                  item?.banner && item.banner()
                )}
              </CheckboxCard.Container>
            ))}
        </ul>
      </div>

      <Footer />
    </main>
  );
}
