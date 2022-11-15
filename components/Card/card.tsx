import { ReactNode } from "react";
import { card, CardVariants } from "./card.css";

type CardTypes = CardVariants & {
  children: ReactNode;
};

export const Card = ({ intent, bordered, ...props }: CardTypes) => (
  <div className={card({ intent, bordered })} {...props} />
);

export const cardStyle = card;
