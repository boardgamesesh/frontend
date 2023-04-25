import "~styles/global.css";

export const metadata = {
  title: "BoardgameSesh",
  description: "Organise your next boardgame session with ease.",
  openGraph: {
    title: "BoardgameSesh",
    description: "Organise your next boardgame session with ease.",
    url: "https://boardgamesesh.com",
    siteName: "BoardgameSesh",
    images: [
      {
        url: "../public/logomark.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
