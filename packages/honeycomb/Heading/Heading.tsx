import { ReactNode } from "react";
import styles from "./Heading.module.css";
import clsx from "clsx";
import { createElement } from "react";

type HeadingProps = {
  children: ReactNode;
  className?: string;
  level?: "1" | "2" | "3" | "4" | "5" | "6";
  element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const Heading = ({
  children,
  className,
  element,
  level,
}: HeadingProps) => {
  const determineLevel = (
    element: HeadingProps["element"],
    level: HeadingProps["level"]
  ): HeadingProps["level"] => {
    if (level) return level;

    switch (element) {
      case "h1":
        return "1";
      case "h2":
        return "2";
      case "h3":
        return "3";
      case "h4":
        return "4";
      case "h5":
        return "5";
      case "h6":
        return "6";
    }
  };

  const headingStyle = clsx(
    styles[`level-${determineLevel(element, level)}`],
    className
  );

  return createElement(
    element || `h${level}`,
    { className: headingStyle },
    children
  );
};
