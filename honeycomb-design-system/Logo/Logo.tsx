import Image from "next/image";
import logo from "@assets/logo.svg";

export const Logo = () => (
  <Image
    alt="Boardgame Sesh logo"
    src={logo}
    width={28}
    height={28}
    style={{
      maxWidth: "100%",
      height: "auto",
    }}
  />
);
