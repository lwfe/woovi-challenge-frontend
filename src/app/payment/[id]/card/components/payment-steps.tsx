import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

export function PaymentSteps({
  installments,
  value,
}: {
  installments: number;
  value: string;
}) {
  return (
    <ul className="py-5">
      <li className="flex items-center justify-between">
        <p className="font-semibold">
          <Checkbox className="w-4 h-4 mr-2 border-success" checked disabled />
          1ª no Pix
        </p>
        <span className="font-extrabold">{value}</span>
      </li>

      {Array.from({ length: installments - 1 }).map((_, index) => (
        <>
          <div
            className={cn(
              "w-[2px] h-[25px] -mb-[5px] -mt-[5px] ml-[7px] bg-border",
              index === 0 && "-mt-[10px]"
            )}
          ></div>
          <li key={index} className="flex items-center justify-between">
            <p className="font-semibold">
              <Checkbox className="w-4 h-4 mr-2 border-success" disabled />
              {index + 2}ª no cartão
            </p>
            <span className="font-extrabold">{value}</span>
          </li>
        </>
      ))}
    </ul>
  );
}
