import { Link } from "@remix-run/react";
import { FaDirections, FaPlay } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { Button, button } from "~/components/Button";

import { Card } from "~/components/card";

export default function Index() {
  return (
    <div className="space-y-5">
      <div className="p-7 bg-purple-50 rounded-xl flex flex-col gap-5 md:flex-row justify-between md:items-center">
        <h3 className="text-xl flex-1 text-purple-700 font-bold">
          You haven't got any sessions running!
        </h3>
        <div>
          <Button className="w-fit">Setup a Sesh</Button>
        </div>
      </div>
      <section className="grid md:grid-cols-[1fr_2fr] gap-3">
        <Card className="flex flex-col divide-y p-0 bg-slate-50">
          <div className="flex flex-col flex-grow p-5 gap-4">
            <header className="flex justify-between">
              <div>
                <h2 className="font-bold">Today</h2>
                <span className="text-2xl">12:00 - 17:00</span>
              </div>
              <div>
                <Link
                  to="/session/1234567"
                  className={button({
                    size: "small",
                  })}
                >
                  <FaPlay className="text-xs" />
                  Play
                </Link>
              </div>
            </header>
            <ul className="text-sm flex gap-1">
              <li className="after:content-[',']">Rising Sun</li>
              <li>Teraforming Mars</li>
            </ul>
            <ul className="flex flex-wrap gap-1">
              <li>
                <div className="rounded-full bg-green-200 border border-green-300 px-2 text-xs">
                  119
                </div>
              </li>
              <li>
                <div className="rounded-full bg-green-200 border border-green-300 px-2 text-xs">
                  Dayne
                </div>
              </li>
              <li>
                <div className="rounded-full bg-green-200 border border-green-300 px-2 text-xs">
                  Nizmox
                </div>
              </li>
              <li>
                <div className="rounded-full bg-red-200 border border-red-300 px-2 text-xs">
                  Simon
                </div>
              </li>
              <li>
                <div className="rounded-full bg-slate-200 border border-slate-300 px-2 text-xs">
                  +5
                </div>
              </li>
            </ul>
          </div>
          <ul className="flex gap-3 p-5">
            <li className="w-full">
              <a
                href="tel:0411757997"
                className={button({ intent: "secondary", class: "lg:w-full" })}
                target="_blank"
                rel="noreferrer"
              >
                <MdCall />
                Contact
              </a>
            </li>
            <li className="w-full">
              <a
                href="https://www.google.com/maps/dir//1+Fleming+Dr,+Campbelltown+NSW+2560/@-34.0658335,150.78311,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x6b12ee335124753d:0x9ac89184e66355f0!2m2!1d150.7852987!2d-34.0658335!3e0"
                className={button({ intent: "secondary", class: "lg:w-full" })}
                target="_blank"
                rel="noreferrer"
              >
                <FaDirections />
                Directions
              </a>
            </li>
          </ul>
        </Card>
        <Card>
          <header className="pb-3 flex justify-between">
            <h2 className="font-bold">Upcoming sessions</h2>
            <Link to="/">
              <span className={button({ intent: "tertiary", size: "xsmall" })}>
                All sessions
              </span>
            </Link>
          </header>
          <ul className="divide-y border-t">
            <li className="py-2 flex flex-row flex-wrap items-center justify-between">
              <div className="flex-grow sm:flex-grow-0">
                02/10/22 @ 12:00 - 17:00
              </div>
              <ul className="flex w-full sm:w-auto gap-2">
                <li className="w-full sm:w-auto">
                  <Button intent="secondary" mood="negative" size="small">
                    Absent
                  </Button>
                </li>
                <li className="w-full md:w-auto">
                  <Button size="small">Going</Button>
                </li>
              </ul>
            </li>
            <li className="py-2 flex flex-row flex-wrap items-center justify-between">
              <div className="flex-grow md:flex-grow-0">
                02/10/22 @ 12:00 - 17:00
              </div>
              <ul className="flex gap-2">
                <li>
                  <Link
                    to="/session/1234567"
                    className={button({
                      intent: "tertiary",
                      size: "small",
                    })}
                  >
                    Details
                  </Link>
                </li>
                <li>
                  <Link
                    to="/session/1234567"
                    className={button({
                      intent: "tertiary",
                      size: "small",
                    })}
                  >
                    Edit
                  </Link>
                </li>
              </ul>
            </li>
            <li className="py-2 flex flex-row flex-wrap items-center justify-between">
              <div className="flex-grow md:flex-grow-0">
                02/10/22 @ 12:00 - 17:00
              </div>
              <Link
                to="/session/1234567"
                className={button({
                  intent: "tertiary",
                  size: "small",
                })}
              >
                Details
              </Link>
            </li>
            <li className="py-2 flex flex-row flex-wrap items-center justify-between">
              <div className="flex-grow md:flex-grow-0">
                02/10/22 @ 12:00 - 17:00
              </div>
              <Link
                to="/session/1234567"
                className={button({
                  intent: "tertiary",
                  size: "small",
                })}
              >
                Details
              </Link>
            </li>
          </ul>
        </Card>
      </section>
      <section>
        <Card className="space-y-2">
          <header className="flex justify-between">
            <h2 className="font-bold">Past games</h2>
          </header>
          <table className="w-full">
            <thead className="[&>th]:p-1 border-b">
              <th className="text-left">Boardgame</th>
              <th className="text-left">Avg. turn time</th>
              <th className="text-left">Play length</th>
              <th className="text-left">Score</th>
              <th className="text-left">Result</th>
              <th></th>
            </thead>
            <tbody>
              <tr className="odd:bg-slate-50">
                <td colSpan={6} className="bg-white">
                  <div className="my-3 p-3 bg-blue-50 rounded flex justify-between items-center">
                    <span className="text-sm text-blue-700">
                      Have to play some games first...
                    </span>
                  </div>
                </td>
              </tr>
              <tr className="text-sm odd:bg-slate-50">
                <td>Rising Sun</td>
                <td>10 min</td>
                <td>240 min</td>
                <td>100 pts</td>
                <td className="p-2 text-green-500">Win</td>
                <td>
                  <Link
                    to="/"
                    className={button({
                      intent: "tertiary",
                      size: "small",
                    })}
                  >
                    Details
                  </Link>
                </td>
              </tr>
              <tr className="text-sm odd:bg-slate-50">
                <td>Teraforming Mars</td>
                <td>10 min</td>
                <td>240 min</td>
                <td>30 pts</td>
                <td className="p-2 text-red-500">Loss</td>
                <td>
                  <Link
                    to="/"
                    className={button({
                      intent: "tertiary",
                      size: "small",
                    })}
                  >
                    Details
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
      </section>
    </div>
  );
}
