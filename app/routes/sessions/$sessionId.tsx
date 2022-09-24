import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node"; // or cloudflare/deno

export const loader: LoaderFunction = async ({ params }) => {
  return params.sessionId;
};

const Session = () => {
  const sessionId = useLoaderData();

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-6xl font-bold text-red-700">
        This is a session {sessionId}
      </h1>
    </div>
  );
};

export default Session;
