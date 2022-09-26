import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import tailwind from "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwind },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap",
  },
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Boarganise",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="border-b">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex px-3 py-3 justify-between">
              <h1>
                <a href="/" className="block font-bold text-lg">
                  Boarganise
                </a>
              </h1>
              Welcome back, Geoff
            </div>
          </div>
        </div>
        <main className="p-6">
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
