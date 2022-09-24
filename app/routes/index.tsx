import { Link } from "@remix-run/react";
import { TbArrowRightTail } from "react-icons/tb";
import { GiRollingDices } from "react-icons/gi";

import { Card } from "../components/card";

export default function Index() {
  return (
    <div className="flex flex-col gap-4">
      <section>
        <header className="pb-3 sr-only">
          <h2 className="text-3xl">Sessions</h2>
        </header>
        <ul className="flex flex-wrap gap-3">
          <li>
            <Link to="/sessions/new">
              <Card className="border-violet-800 bg-violet-700 hover:bg-gradient-to-br from-violet-700 to-violet-900 text-white hover:drop-shadow-lg">
                <span className="text-2xl grow">New session</span>
                <span className="text-7xl self-end text-violet-600">
                  <TbArrowRightTail />
                </span>
              </Card>
            </Link>
          </li>
          <li>
            <article>
              <Card className="bg-white">
                <span className="text-7xl text-slate-600 p-5 bg-slate-100 w-full flex justify-center rounded-lg">
                  <GiRollingDices />
                </span>
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
              <Card className="bg-white">
                <span className="text-7xl text-slate-600 p-5 bg-slate-100 w-full flex justify-center rounded-lg">
                  <GiRollingDices />
                </span>
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
                <Link to="/sessions/1234567">
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
