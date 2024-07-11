import { CheckboxCard } from "@/app/payment/components/checkbox-card";

export const demoData = [
  {
    id: 1,
    paymentIdentifier: "3484f2bc27cfab910d07b15a2a8614d2",
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
    totalAmount: "R$ 30.500,00",
    installments_options: [
      {
        id: 1,
        value: "1x de R$ 30.500,00",
      },
    ],
  },
  {
    id: 2,
    paymentIdentifier: "693dab3d13cf8082eba95ac86aa82648",
    installments: 2,
    value: "R$ 15.300,00",
    auxiliar: "Total: R$ 30.600,00",
    totalAmount: "R$ 30.600,00",
    installments_options: [
      {
        id: 1,
        value: "1x de R$ 15.300,00",
      },
    ],
  },
  {
    id: 3,
    paymentIdentifier: "159063735422366b867b6d7f073ae3d7",
    installments: 3,
    value: "R$ 10.206,66",
    auxiliar: "Total: R$ 30.620,00",
    totalAmount: "R$ 30.620,00",
    installments_options: [
      {
        id: 1,
        value: "1x de R$ 20.413,32",
      },
      {
        id: 2,
        value: "2x de R$ 10.206,66",
      },
    ],
  },
  {
    id: 4,
    paymentIdentifier: "25de9d923d4d7a9364311a6f957a99c3",
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
    totalAmount: "R$ 30.900,00",
    installments_options: [
      {
        id: 1,
        value: "1x de R$ 23.175,00",
      },
      {
        id: 2,
        value: "2x de R$ 11.587,50",
      },
      {
        id: 3,
        value: "3x de R$ 7.725,00",
      },
    ],
  },
  {
    id: 5,
    paymentIdentifier: "d911b652deed241f373dd060ef75c59c",
    installments: 5,
    value: "R$ 6.300,00",
    auxiliar: "Total: R$ 31.500,00",
    totalAmount: "R$ 31.500,00",
    installments_options: [
      {
        id: 1,
        value: "1x de R$ 25.200,00",
      },
      {
        id: 2,
        value: "2x de R$ 12.600,00",
      },
      {
        id: 3,
        value: "3x de R$ 8.400,00",
      },
      {
        id: 4,
        value: "4x de R$ 6.300,00",
      },
    ],
  },
  {
    id: 6,
    paymentIdentifier: "81325a0ca0a9c22c4be1a4ef02776383",
    installments: 6,
    value: "R$ 5.283,33",
    auxiliar: "Total: R$ 31.699,98",
    totalAmount: "R$ 31.699,98",
    installments_options: [
      {
        id: 1,
        value: "1x de R$ 26.416,65",
      },
      {
        id: 2,
        value: "2x de R$ 13.208,32",
      },
      {
        id: 3,
        value: "3x de R$ 8.805,55",
      },
      {
        id: 4,
        value: "4x de R$ 6.604,16",
      },
      {
        id: 5,
        value: "5x de R$ 5.283,33",
      },
    ],
  },
  {
    id: 7,
    paymentIdentifier: "19f0479d8893f72d3e82ae2be501f882",
    installments: 7,
    value: "R$ 4.542,85",
    auxiliar: "Total: R$ 31.800,00",
    totalAmount: "R$ 31.800,00",
    installments_options: [
      {
        id: 1,
        value: "1x de R$ 27.257,15",
      },
      {
        id: 2,
        value: "2x de R$ 13.628,57",
      },
      {
        id: 3,
        value: "3x de R$ 9.085,71",
      },
      {
        id: 4,
        value: "4x de R$ 6.814,28",
      },
      {
        id: 5,
        value: "5x de R$ 5.451,43",
      },
      {
        id: 6,
        value: "6x de R$ 4.542,85",
      },
    ],
  },
];
