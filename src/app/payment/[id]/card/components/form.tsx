"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FormSchema = z.object({
  name: z.string({
    required_error: "Nome é obrigatório.",
  }),
  cpf: z.string({
    required_error: "CPF é obrigatório.",
  }),
  card_number: z.string({
    required_error: "Data de expiração é obrigatória.",
  }),
  card_expiration: z.string({
    required_error: "Data de expiração é obrigatória.",
  }),
  cvv: z.string({
    required_error: "CVV é obrigatório.",
  }),
  installments: z.string({
    required_error: "Selecione o número de parcelas.",
  }),
});

export function PaymentForm({ data }: { data: any }) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  function formatCPF(value: string) {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  }

  function formatCardNumber(value: string) {
    const formattedValue = value.replace(/\D/g, "").slice(0, 16);
    return formattedValue.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-6 py-4 pt-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="relative w-full">
              <FormLabel className="absolute -top-1.5 left-3 bg-white px-1">
                Nome Completo
              </FormLabel>

              <FormControl>
                <Input placeholder="Thiago Fernandes Santos" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cpf"
          render={({ field }) => (
            <FormItem className="relative w-full">
              <FormLabel className="absolute -top-1.5 left-3 bg-white px-1">
                CPF
              </FormLabel>

              <FormControl>
                <Input
                  placeholder="238.492.542-32"
                  {...field}
                  onChange={(e) => field.onChange(formatCPF(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="card_number"
          render={({ field }) => (
            <FormItem className="relative w-full">
              <FormLabel className="absolute -top-1.5 left-3 bg-white px-1">
                Número do Cartão
              </FormLabel>

              <FormControl>
                <Input
                  placeholder="2374 2454 5540 0126"
                  {...field}
                  onChange={(e) =>
                    field.onChange(formatCardNumber(e.target.value))
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-3">
          <FormField
            control={form.control}
            name="card_expiration"
            render={({ field }) => (
              <FormItem className="relative w-full">
                <FormLabel className="absolute top-0.5 left-3 bg-white px-1">
                  Vencimento
                </FormLabel>

                <FormControl>
                  <Input placeholder="05/26" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cvv"
            render={({ field }) => (
              <FormItem className="relative w-full">
                <FormLabel className="absolute top-0.5 left-3 bg-white px-1">
                  CVV
                </FormLabel>

                <FormControl>
                  <Input placeholder="664" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="installments"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel className="absolute -top-1.5 left-3 bg-white px-1">
                Parcelas
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a quantidade de parcelas" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {data.installments_options.map((option: any) => (
                    <SelectItem value={String(option.id)} key={option.id}>
                      {option.value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="secondary" className="w-full">
          Pagar
        </Button>
      </form>
    </Form>
  );
}
