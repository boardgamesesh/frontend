import { Header } from "~components/Header";
import { GlobalLayout, GlobalHeader, GlobalMain } from "~honeycomb";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlobalLayout>
      <GlobalHeader>
        <Header />
      </GlobalHeader>
      <GlobalMain>{children}</GlobalMain>
      <footer>
        <a
          href="https://github.com/boardgamesesh/app/blob/main/README.md"
          target="_blank"
          rel="noreferrer noopner"
        >
          Code of conduct
        </a>
      </footer>
    </GlobalLayout>
  );
}
