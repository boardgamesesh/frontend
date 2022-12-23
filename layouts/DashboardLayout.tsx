import Link from "next/link";
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
        <div className="lg:max-w-lg">{children}</div>
      </main>
    </>
  );
}
