import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export const button = cva("rounded flex items-center gap-2", {
  variants: {
    intent: {
      primary: [
        "bg-blue-500",
        "text-white",
        "border-transparent",
        "hover:bg-blue-600",
      ],
      secondary: ["border", "border-blue-500", "text-blue-500", "bg-white"],
      tertiary: ["border-0", "bg-white"],
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
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
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
});

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
