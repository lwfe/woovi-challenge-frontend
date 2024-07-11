"use client";

import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";

export function CheckboxCardContainer({
  id,
  checked,
  onCheckedChange,
  children,
}: {
  id: number;
  checked: boolean;
  onCheckedChange: () => void;
  children: React.ReactNode;
}) {
  return (
    <li
      className={cn(
        "relative min-h-[100px] w-full border-2 border-b-0 p-4 first:rounded-t-md last:rounded-b-md last:border-b-2 transition-all duration-100 ease-in-out",
        checked ? "border-success bg-success/[3%] border-b-2" : "border-border"
      )}
    >
      <label htmlFor={`checkbox-${id}`}>
        <Checkbox
          id={`checkbox-${id}`}
          className="absolute top-4 right-4"
          checked={checked}
          onCheckedChange={onCheckedChange}
        />

        {children}
      </label>
    </li>
  );
}

interface CheckboxCardTitleProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function CheckboxCardTitle({
  children,
  ...props
}: CheckboxCardTitleProps) {
  return (
    <p className={cn("text-2xl font-semibold", props.className)} {...props}>
      {children}
    </p>
  );
}

interface CheckboxCardTextBoldProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export function CheckboxCardTextBold({
  children,
  ...props
}: CheckboxCardTextBoldProps) {
  return (
    <span className={cn("font-bold", props.className)} {...props}>
      {children}
    </span>
  );
}

interface CheckboxCardAuxiliarTextProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function CheckboxCardAuxiliarText({
  children,
  ...props
}: CheckboxCardAuxiliarTextProps) {
  return (
    <p className={cn("text-muted", props.className)} {...props}>
      {children}
    </p>
  );
}

interface CheckboxCardBannerProps {
  children: React.ReactNode;
}
export function CheckboxCardBanner({ children }: CheckboxCardBannerProps) {
  return (
    <div className="w-full mt-1 overflow-hidden">
      <div className="pr-12 w-full p-1 bg-secondary overflow-hidden text-white rounded-l-lg">
        {children}
      </div>
    </div>
  );
}

export const CheckboxCard = {
  Container: CheckboxCardContainer,
  Title: CheckboxCardTitle,
  TextBold: CheckboxCardTextBold,
  AuxiliarText: CheckboxCardAuxiliarText,
  Banner: CheckboxCardBanner,
};
