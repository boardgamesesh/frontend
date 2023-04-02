import { ReactNode } from "react";
import styles from "./Text.module.css";
import clsx from "clsx";
import { createElement } from "react";

type TextProps = {
  children: ReactNode;
  className?: string;
  element?: "p" | "span";
  size?: "8" | "16" | "20" | "24" | "28";
  bold?: boolean;
};

export const Text = ({
  children,
  className,
  size = "16",
  element = "p",
  bold,
}: TextProps) => {
  const headingStyle = clsx(
    {
      [styles["size-8"]]: size === "8",
      [styles["size-16"]]: size === "16",
      [styles["size-20"]]: size === "20",
      [styles["size-24"]]: size === "24",
      [styles["size-28"]]: size === "28",
      [styles.bold]: bold,
    },
    className
  );

  return createElement(element, { className: headingStyle }, children);
};
