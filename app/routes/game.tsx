import { Link, NavLink, Outlet, useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { useState } from "react";

export const loader: LoaderFunction = async ({ params, request }) => {
  const url = new URL(request.url);
  const session = url.searchParams.get("session");

  // use playId for getting boardgame play data
  // use session to get the session's next boardgame to play

  return { ...params, sessionId: session, nextPlayId: "89054" };
};

const Play = () => {
  const { gameId, nextPlayId, sessionId } = useLoaderData();

  const constructUrl = (page: string) => `${gameId}/${page}?=${sessionId}`;

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-slate-700">Rising Sun</h1>
        <div>
          {!!nextPlayId && (
            <div className="grow border border-violet-700 px-2 py-1 text-violet-700 rounded hover:bg-violet-700 w-full hover:text-white">
              <Link to={`/play/${nextPlayId}?session=1234567`}>
                Play next: Teraforming Mars
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="">
        <nav>
          <ul className="flex gap-3">
            <li>
              <NavLink to={constructUrl("preparing")}>Preparing</NavLink>
            </li>
            <li>
              <NavLink to={constructUrl("playing")}>Playing</NavLink>
            </li>
            <li>
              <NavLink to={constructUrl("scoring")}>Scoring</NavLink>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </>
  );
};

export default Play;
