import clsx from "clsx";
import styles from "./Icon.module.css";

export type IconProps = {
  size?: "small" | "medium" | "large";
  children: JSX.Element;
  classNameExtend?: string;
};

export const Icon = ({
  size = "medium",
  children,
  classNameExtend,
  ...restProps
}: IconProps): JSX.Element => {
  return (
    <div className={clsx([styles[size], classNameExtend])} {...restProps}>
      {children}
    </div>
  );
};
