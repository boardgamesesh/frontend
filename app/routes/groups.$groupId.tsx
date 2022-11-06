import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node"; // or cloudflare/deno

export const loader: LoaderFunction = async ({ params }) => {
  return params.groupId;
};

const Group = () => {
  const groupId = useLoaderData();

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-6xl font-bold text-red-700">
        This is a group {groupId}
      </h1>
      <div className="flex flex-col gap-5">
        <section>
          <h2>Members</h2>
          <ul className="flex flex-wrap gap-3">
            <li>
              <Link to="/app/member/geoff">Geoff</Link>
            </li>
            <li>
              <Link to="/app/member/119">119</Link>
            </li>
          </ul>
        </section>
        <section>
          <h2>Sessions</h2>
          <ul className="flex flex-wrap gap-3">
            <li className="min-w-[250px]">
              <Link to="/app/session/1234567">
                <div className="flex flex-column border border-solid border-slate-200 rounded-md p-5 hover:drop-shadow bg-white">
                  Date: 12/06/22
                </div>
              </Link>
            </li>
            <li className="min-w-[250px]">
              <Link to="/app/session/1234567">
                <div className="flex flex-column border border-solid border-slate-200 rounded-md p-5 hover:drop-shadow bg-white">
                  Date: 12/06/22
                </div>
              </Link>
            </li>
            <li className="min-w-[250px]">
              <Link to="/app/session/12345679">
                <div className="flex flex-column border border-solid border-slate-200 rounded-md p-5 hover:drop-shadow bg-white">
                  Date: 12/06/22
                </div>
              </Link>
            </li>
            <li className="min-w-[250px]">
              <Link to="/app/session/123456">
                <div className="flex flex-column border border-solid border-slate-200 rounded-md p-5 hover:drop-shadow bg-white">
                  Date: 12/06/22
                </div>
              </Link>
            </li>
            <li className="min-w-[250px]">
              <Link to="/app/session/12345674">
                <div className="flex flex-column border border-solid border-slate-200 rounded-md p-5 hover:drop-shadow bg-white">
                  Date: 12/06/22
                </div>
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Group;
