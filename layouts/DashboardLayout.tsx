import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/game/1234">Game</Link>
      <Link href="/session/1234">Session</Link>
      <div className="flex flex-col gap-5 px-3 max-w-[1024px] mx-auto">
        {children}
      </div>
    </main>
  );
}
