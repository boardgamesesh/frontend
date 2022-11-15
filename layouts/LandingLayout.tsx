import { Logo } from "@components/Logo";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="p-6">
      <Logo />
      Boardgame Sesh <Link href="/login">Login</Link>
      <div className="flex flex-col gap-5 px-3 max-w-[1024px] mx-auto">
        {children}
      </div>
    </main>
  );
}
