import { ReactNode } from "react";
import { button, ButtonVariants } from "./button.css";

type ButtonTypes = ButtonVariants & {
  children: ReactNode;
  onClick?: () => void;
};

export const Button = ({ intent, size, mood, ...props }: ButtonTypes) => (
  <button className={button({ intent, mood, size })} {...props} />
);

export const buttonStyle = button;
