import { ReactSVG } from "react-svg";
import logomark from "../assets/logomark.svg";

export default function Logo() {
  return <ReactSVG src={logomark} className="w-[35px]" />;
}
