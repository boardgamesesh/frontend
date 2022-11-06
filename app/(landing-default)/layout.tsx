import "@styles/globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="p-6">
          Boardgame Sesh <Link href="/login">Login</Link>
          <div className="flex flex-col gap-5 px-3 max-w-[1024px] mx-auto">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
