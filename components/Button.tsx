import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export const button = cva(
  "rounded flex items-center gap-2 justify-center w-full lg:w-fit focus-visible:[box-shadow:rgb(255 255 255) 0px 0px 0px 2px, rgb(94 114 255) 0px 0px 0px 4px, rgb(0 0 0 / 14%) 0px 3px 8px 0px, rgb(0 0 0 / 12%) 0px 5px 4px 0px, rgb(0 0 0 / 10%) 0px 5px 3px 0px]",
  {
    variants: {
      intent: {
        primary: [
          "border",
          "bg-violet-500",
          "text-white",
          "border-violet-500",
          "hover:bg-violet-600",
        ],
        secondary: [
          "border",
          "border-violet-500",
          "text-violet-500",
          "bg-white",
          "hover:bg-violet-600",
          "hover:text-white",
        ],
        tertiary: ["border-0", "text-violet-500", "hover:bg-violet-100"],
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
