import Link from "next/link";
import { sprinklesTailwind } from "@styles/sprinkles.css";
import { Logo } from "@components/Logo";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <Logo />
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/game/1234">Game</Link>
        <Link href="/session/1234">Session</Link>
      </header>
      <main>
        <div
          className={sprinklesTailwind({
            display: "flex",
            flexDirection: "column",
            gap: "size-5",
            marginX: "size-auto",
          })}
        >
          {children}
        </div>
      </main>
    </>
  );
}
