import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  NavLink,
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
  title: "New Remix App",
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
        <div className="grid grid-cols-[260px_1fr] min-h-screen">
          <div className="bg-purple-800">
            <div className="border-solid border-b border-purple-700 bg-purple-800">
              <a href="/" className="px-6 py-3 block text-white font-bold">
                Boarganise
              </a>
            </div>
            <nav className="p-5">
              <ul>
                <li className="mb-1">
                  <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                      `inline-block py-1 px-3 rounded-md min-w-full text-white ${
                        isActive ? "bg-purple-600" : undefined
                      }`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/groups"
                    end
                    className={({ isActive }) =>
                      `inline-block py-1 px-3 rounded-md min-w-full text-white ${
                        isActive ? "bg-purple-600" : undefined
                      }`
                    }
                  >
                    Groups
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/groups/1234567"
                    className={({ isActive }) =>
                      `inline-block py-1 px-3 rounded-md min-w-full text-white ${
                        isActive ? "bg-purple-600" : undefined
                      }`
                    }
                  >
                    1234567
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <main className="p-8">
            <div className="mx-auto max-w-screen-lg">
              <Outlet />
            </div>
          </main>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
