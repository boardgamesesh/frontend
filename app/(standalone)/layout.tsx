import "@styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main>
          <div className="flex flex-col gap-5 px-3 max-w-[1024px] mx-auto">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
