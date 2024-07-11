import { CheckboxCard } from "@/app/payment/components/checkbox-card";

export const demoData = [
  {
    id: 1,
    installments: 1,
    value: "R$ 30.500,00",
    auxiliar: () => {
      return (
        <CheckboxCard.AuxiliarText className="text-success">
          Ganhe <CheckboxCard.TextBold>3%</CheckboxCard.TextBold> de cashback
        </CheckboxCard.AuxiliarText>
      );
    },
    banner: () => {
      return (
        <CheckboxCard.Banner>
          🤑 <CheckboxCard.TextBold>R$ 300,00</CheckboxCard.TextBold> de volta
          no seu Pix na hora
        </CheckboxCard.Banner>
      );
    },
  },
  {
    id: 2,
    installments: 2,
    value: "R$ 15.300,00",
    auxiliar: "Total: R$ 30.600,00",
  },
  {
    id: 3,
    installments: 3,
    value: "R$ 10.196,66",
    auxiliar: "Total: R$ 30.620,00",
  },
  {
    id: 4,
    installments: 4,
    value: "R$ 7.725,00",
    auxiliar: "Total: R$ 30.900,00",
    banner: () => {
      return (
        <CheckboxCard.Banner>
          <CheckboxCard.TextBold>-3% de juros: </CheckboxCard.TextBold>
          Melhor opção de parcelamento
        </CheckboxCard.Banner>
      );
    },
  },
  {
    id: 5,
    installments: 5,
    value: "R$ 6.300,00",
    auxiliar: "Total: R$ 31.500,00",
  },
  {
    id: 6,
    installments: 6,
    value: "R$ 5.283,33",
    auxiliar: "Total: R$ 31.699,98",
  },
  {
    id: 7,
    installments: 7,
    value: "R$ 4.542,85",
    auxiliar: "Total: R$ 31.800,00",
  },
];
