import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export const button = cva(
  "rounded flex items-center gap-2 justify-center w-full",
  {
    variants: {
      intent: {
        primary: [
          "border",
          "bg-blue-500",
          "text-white",
          "border-blue-500",
          "hover:bg-blue-600",
        ],
        secondary: [
          "border",
          "border-blue-500",
          "text-blue-500",
          "bg-white",
          "hover:bg-blue-600",
          "hover:text-white",
        ],
        tertiary: ["border-0", "text-blue-500", "hover:bg-blue-50"],
      },
      mood: {
        neutral: ["hover:bg-slate-500", "hover:text-white", "text-slate-500"],
        positive: ["border-green-500", "text-green-500", "hover:bg-green-500"],
        negative: [
          "border-red-500",
          "hover:text-white",
          "text-red-500",
          "hover:bg-red-500",
        ],
      },
      size: {
        xsmall: ["text-xs", "py-1", "px-2"],
        small: ["text-sm", "py-1", "px-2"],
        medium: ["text-base", "py-2", "px-3"],
      },
    },
    compoundVariants: [
      { intent: "secondary", mood: "neutral", class: "border-slate-500" },
      { intent: "secondary", mood: "positive", class: "border-green-500" },
      { intent: "secondary", mood: "negative", class: "border-red-500" },
    ],
    defaultVariants: {
      intent: "primary",
      size: "medium",
    },
  }
);

export type ButtonProps = VariantProps<typeof button> &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
  };

export const Button = ({
  intent,
  size,
  mood,
  className,
  ...props
}: ButtonProps) => (
  <button
    className={button({ intent, size, mood, class: className })}
    {...props}
  />
);
