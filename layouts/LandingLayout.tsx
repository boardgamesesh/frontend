import { Container, Logo } from "~honeycomb";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <Container>
          <div className="flex justify-between">
            <Link href="/" className="flex gap-2">
              <Logo />{" "}
              <span className="font-bold text-green-200">Boardgame Sesh</span>
            </Link>
            <ul>
              <li>
                <Link href="/login">Login</Link>
              </li>
            </ul>
          </div>
        </Container>
      </header>
      <main className="p-6">
        <div className="flex flex-col gap-5 px-3 max-w-[1024px] mx-auto">
          {children}
        </div>
      </main>
      <footer>
        <a
          href="https://github.com/boardgamesesh/app/blob/main/README.md"
          target="_blank"
          rel="noreferrer noopner"
        >
          Code of conduct
        </a>
      </footer>
    </>
  );
}
