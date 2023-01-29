import Link from "next/link";
import { Logo } from "honeycomb-design-system/Logo";
import { Container } from "honeycomb-design-system/Container";
import { List } from "@honeycomb/List";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <Container className="flex">
          <Link href="/dashboard" className="display-block">
            <Logo />
          </Link>
          <nav className="flex gap-2 justify-centre flex-grow">
            <List horizontal alignY="centre" alignX="centre">
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link href="/game/1234">Games</Link>
              </li>
              <li>
                <Link href="/session/1234">Sessions</Link>
              </li>
            </List>
          </nav>
        </Container>
      </header>
      <main>
        <Container>{children}</Container>
      </main>
    </>
  );
}
