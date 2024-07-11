import { Checkbox } from "@/components/ui/checkbox";

export function PaymentSteps() {
  return (
    <ul className="py-5">
      <li className="flex items-center justify-between">
        <p className="font-semibold">
          <Checkbox className="w-4 h-4 mr-2 border-success" disabled />
          1ª entrada no Pix
        </p>
        <span className="font-extrabold">R$ 15.300,00</span>
      </li>
      <div className="w-[2px] h-[25px] -mb-[5px] -mt-[5px]  ml-[7px] bg-border"></div>
      <li className="flex items-center justify-between">
        <p className="font-semibold">
          <Checkbox className="w-4 h-4 mr-2" disabled />
          2ª no cartão
        </p>
        <span className="font-extrabold">R$ 15.300,00</span>
      </li>
    </ul>
  );
}
