import { Link } from "@remix-run/react";

import { Card } from "../components/card";

export default function Index() {
  return (
    <div className="flex flex-col gap-4">
      <section>
        <header className="pb-3">
          <h2 className="text-3xl">Upcoming sessions</h2>
        </header>
        <ul className="flex flex-col flex-wrap gap-3">
          <li>
            <article>
              <Card className="flex flex-row">
                <div className="grow flex flex-col gap-3">
                  <div>02/10/22 @ 9:00 - 17:00</div>
                  <ul className="flex flex-wrap gap-1">
                    <li>
                      <div className="rounded-full bg-slate-200 border border-slate-300 px-2 text-sm">
                        119
                      </div>
                    </li>
                    <li>
                      <div className="rounded-full bg-slate-200 border border-slate-300 px-2 text-sm">
                        Dayne
                      </div>
                    </li>
                    <li>
                      <div className="rounded-full bg-slate-200 border border-slate-300 px-2 text-sm">
                        Nizmox
                      </div>
                    </li>
                    <li>
                      <div className="rounded-full bg-red-200 border border-red-300 px-2 text-sm">
                        Simon
                      </div>
                    </li>
                  </ul>
                </div>
                <ul className="flex gap-3">
                  <li className="grow">
                    <button
                      type="button"
                      className="border border-red-500 bg-white px-3 py-2 rounded w-full hover:drop-shadow hover:bg-red-100"
                    >
                      Absent
                    </button>
                  </li>
                  <li className="grow">
                    <button
                      type="button"
                      className="border border-green-500 bg-white px-3 py-2 rounded w-full hover:drop-shadow hover:bg-green-100"
                    >
                      Attending
                    </button>
                  </li>
                </ul>
              </Card>
            </article>
          </li>
          <li>
            <article>
              <Card className="flex flex-row">
                <div className="grow flex flex-col gap-3">
                  <div>12/06/22 @ 9:00 - 17:00</div>
                  <div>
                    <ul className="flex flex-wrap gap-1">
                      <li>
                        <div className="rounded-full bg-green-200 border border-green-300 px-2 text-sm">
                          119
                        </div>
                      </li>
                      <li>
                        <div className="rounded-full bg-green-200 border border-green-300 px-2 text-sm">
                          Dayne
                        </div>
                      </li>
                      <li>
                        <div className="rounded-full bg-green-200 border border-green-300 px-2 text-sm">
                          Nizmox
                        </div>
                      </li>
                      <li>
                        <div className="rounded-full bg-red-200 border border-red-300 px-2 text-sm">
                          Simon
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <Link to="/session/1234567">
                  <div className="border border-slate-200  bg-white px-3 py-2 rounded text-center hover:box-shadow hover:bg-slate-200">
                    Details
                  </div>
                </Link>
              </Card>
            </article>
          </li>
        </ul>
      </section>
    </div>
  );
}
