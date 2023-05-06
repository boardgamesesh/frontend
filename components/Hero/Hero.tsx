"use client";

import clsx from "clsx";
import styles from "./Hero.module.css";
import Link from "next/link";
import { ReactNode } from "react";

export type HeroProps = {
  title: ReactNode;
  description: ReactNode;
  classNameExtend?: string;
  callToAction?: {
    href: string;
    text: ReactNode;
  };
};

export const Hero = ({
  title,
  description,
  classNameExtend,
  callToAction,
}: HeroProps): JSX.Element => {
  return (
    <div className={clsx([styles.base, classNameExtend])}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroText}>{description}</p>
      </div>
      {callToAction && (
        <Link href={callToAction.href} className={styles.heroCallToAction}>
          {callToAction.text}
        </Link>
      )}
    </div>
  );
};
