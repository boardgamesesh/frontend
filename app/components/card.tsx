import { cva } from "class-variance-authority";
import type { ReactNode } from "react";

const cardStyles = cva("border-slate-200 rounded-md p-2 bg-white", {
  variants: {
    bordered: {
      true: "border border-solid",
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
