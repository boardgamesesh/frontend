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
    </GlobalLayout>
  );
}
