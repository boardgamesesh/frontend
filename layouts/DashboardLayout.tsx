import Link from "next/link";
import { Logo } from "@components/Logo";
import { Container } from "@components/Container";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <Container>
          <div className="flex gap-2">
            <Link href="/dashboard">
              <Logo />
            </Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/game/1234">Game</Link>
            <Link href="/session/1234">Session</Link>
          </div>
        </Container>
      </header>
      <main>
        <Container>{children}</Container>
      </main>
    </>
  );
}
