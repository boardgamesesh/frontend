import { cva } from "class-variance-authority";
import type { ReactNode } from "react";

const cardStyles = cva("border-slate-200 rounded-xl p-5 bg-white", {
  variants: {
    bordered: {
      true: "border border-solid",
      false: "",
    },
  },
  defaultVariants: {
    bordered: true,
  },
});

export const Card = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={cardStyles({ class: className })}>{children}</div>;
};
