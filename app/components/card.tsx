import type { ReactNode } from "react";

export const Card = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={
        `flex flex-col gap-3 border border-solid border-slate-200 rounded-md p-2 h-[300px] w-[250px] ` +
        className
      }
    >
      {children}
    </div>
  );
};
