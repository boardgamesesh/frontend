import { ReactNode } from "react";
import styles from "./Heading.module.css";
import clsx from "clsx";
import { createElement } from "react";

type HeadingProps = {
  children: ReactNode;
  className?: string;
  level?: "1" | "2" | "3";
  element?: "h1" | "h2" | "h3";
};

export const Heading = ({
  children,
  className,
  element,
  level = "1",
}: HeadingProps) => {
  const headingStyle = clsx(
    {
      [styles["level-1"]]: level === "1",
      [styles["level-2"]]: level === "2",
      [styles["level-3"]]: level === "3",
    },
    className
  );

  return createElement(
    element || `h${level}`,
    { className: headingStyle },
    children
  );
};
