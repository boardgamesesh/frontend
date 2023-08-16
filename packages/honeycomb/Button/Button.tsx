import clsx from "clsx";
import styles from "./Button.module.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick: () => void;
  intent?: string;
  size?: string;
  mood?: string;
}

export const Button = (props: ButtonProps) => (
  <button
    {...props}
    className={clsx(styles.base, {
      [styles.secondary]: props.intent === "secondary",
      [styles.negative]: props.mood === "negative",
      [styles.small]: props.size === "small",
      [styles.large]: props.size === "large",
    })}
  >
    {props.children}
  </button>
);
