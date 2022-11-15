import Image from "next/image";
import logomark from "../assets/logomark.svg";

export default function Logo() {
  return <Image src={logomark} alt="Boardgame Sesh" />;
}
