import { Button, buttonStyle } from "@components/Button";
import { BsChevronRight } from "react-icons/bs";
import { FaDirections, FaPlay } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { Card } from "@components/Card/Card";
import Link from "next/link";
import DashboardLayout from "@layouts/DashboardLayout";

export default function Page() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="p-7 bg-purple-50 rounded-xl flex flex-col gap-5 md:flex-row justify-between md:items-center">
          <h3 className="text-2xl flex-1 text-purple-700 font-bold">
            You haven&lsquo;t got any sessions running!
          </h3>
          <div>
            <Button>Setup a Sesh</Button>
          </div>
        </div>
        <section className="grid md:grid-cols-[1fr_2fr] gap-3">
          <div className="border-slate-200 rounded-xl flex flex-col divide-y p-2 bg-slate-50">
            <div className="flex flex-col flex-grow p-5 gap-4">
              <header className="flex justify-between">
                <div>
                  <h2 className="font-bold">Today</h2>
                  <span className="text-2xl">12:00 - 17:00</span>
                </div>
                <div>
                  <Link
                    href="/session/1234567"
                    className={buttonStyle({
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
            <ul className="flex gap-3 p-3">
              <li className="w-full">
                <a
                  href="tel:0411757997"
                  className={buttonStyle({
                    intent: "secondary",
                  })}
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
                  className={buttonStyle({
                    intent: "secondary",
                  })}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaDirections />
                  Directions
                </a>
              </li>
            </ul>
          </div>
          <Card>
            <header className="pb-2 flex justify-between border-b">
              <h2 className="font-bold">Upcoming sessions</h2>
            </header>
            {/* <div className="mt-3 p-7 bg-purple-50 rounded-xl flex flex-col gap-5 md:flex-row justify-between md:items-center">
          <span className="text-lg flex-1 text-purple-700 font-bold">
            Accept some invites (3)
          </span>
          <Button size="small" className="w-fit">
            Setup a Sesh
          </Button>
        </div> */}
            <ul className="divide-y flex flex-col flex-grow">
              <li>
                <Link
                  href="/session/1234567"
                  className="p-2 flex flex-row flex-grow flex-wrap items-center justify-between hover:bg-violet-50"
                >
                  <div className="flex-grow md:flex-grow-0">
                    02/10/22 @ 12:00 - 17:00
                  </div>
                  <BsChevronRight />
                </Link>
              </li>
              <li>
                <Link
                  href="/session/1234567"
                  className="p-2 flex flex-row flex-grow flex-wrap items-center justify-between hover:bg-violet-50"
                >
                  <div className="flex-grow md:flex-grow-0">
                    02/10/22 @ 12:00 - 17:00 (Host)
                  </div>
                  <BsChevronRight />
                </Link>
              </li>
              <li>
                <Link
                  href="/session/1234567"
                  className="p-2 flex flex-row flex-grow flex-wrap items-center justify-between hover:bg-violet-50"
                >
                  <div className="flex-grow md:flex-grow-0">
                    02/10/22 @ 12:00 - 17:00
                  </div>
                  <BsChevronRight />
                </Link>
              </li>
              <li>
                <Link
                  href="/session/1234567"
                  className="p-2 flex flex-row flex-grow flex-wrap items-center justify-between hover:bg-violet-50"
                >
                  <div className="flex-grow md:flex-grow-0">
                    02/10/22 @ 12:00 - 17:00
                  </div>
                  <BsChevronRight />
                </Link>
              </li>
            </ul>
            <ul className="flex">
              <li>
                <Link href="/">
                  <span
                    className={buttonStyle({
                      intent: "tertiary",
                      size: "xsmall",
                    })}
                  >
                    See all
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span
                    className={buttonStyle({
                      intent: "tertiary",
                      size: "xsmall",
                    })}
                  >
                    Manage
                  </span>
                </Link>
              </li>
            </ul>
          </Card>
        </section>
        <section>
          <Card>
            <header className="pb-2 flex justify-between border-b">
              <h2 className="font-bold">Invites</h2>
            </header>
            <ul className="divide-y">
              <li className="py-2 flex flex-row flex-wrap items-center justify-between">
                <div className="flex-grow sm:flex-grow-0">
                  02/10/22 @ 12:00 - 17:00 (1 Fleming Drive)
                </div>
                <ul className="flex w-full sm:w-auto gap-2">
                  <li className="w-full sm:w-auto">
                    <Button intent="secondary" mood="negative" size="small">
                      Nope
                    </Button>
                  </li>
                  <li className="w-full md:w-auto">
                    <Button size="small">Going</Button>
                  </li>
                </ul>
              </li>
              <li className="py-2 flex flex-row flex-wrap items-center justify-between">
                <div className="flex-grow sm:flex-grow-0">
                  02/10/22 @ 12:00 - 17:00 (1 Fleming Drive)
                </div>
                <ul className="flex w-full sm:w-auto gap-2">
                  <li className="w-full sm:w-auto">
                    <Button intent="secondary" mood="negative" size="small">
                      Nope
                    </Button>
                  </li>
                  <li className="w-full md:w-auto">
                    <Button size="small">Going</Button>
                  </li>
                </ul>
              </li>
              <li className="py-2 flex flex-row flex-wrap items-center justify-between">
                <div className="flex-grow sm:flex-grow-0">
                  02/10/22 @ 12:00 - 17:00 (1 Fleming Drive)
                </div>
                <ul className="flex w-full sm:w-auto gap-2">
                  <li className="w-full sm:w-auto">
                    <Button intent="secondary" mood="negative" size="small">
                      Nope
                    </Button>
                  </li>
                  <li className="w-full md:w-auto">
                    <Button size="small">Going</Button>
                  </li>
                </ul>
              </li>
            </ul>
          </Card>
        </section>
        <section>
          <Card>
            <header className="pb-2 flex justify-between border-b">
              <h2 className="font-bold">Past games</h2>
            </header>
            <table className="w-full">
              <thead className="border-b text-sm">
                <tr>
                  <th className="px-1 py-2 text-left">Boardgame</th>
                  <th className="px-1 py-2 text-left">Avg. turn time</th>
                  <th className="px-1 py-2 text-left">Play length</th>
                  <th className="px-1 py-2 text-left">Score</th>
                  <th className="px-1 py-2 text-left">Result</th>
                  <th></th>
                </tr>
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
                  <td className="p-1">Rising Sun</td>
                  <td className="p-1">10 min</td>
                  <td className="p-1">240 min</td>
                  <td className="p-1">100 pts</td>
                  <td className="p-1 text-green-500">Win</td>
                  <td className="p-1">
                    <Link
                      href="/"
                      className={buttonStyle({
                        intent: "tertiary",
                        size: "small",
                      })}
                    >
                      Details
                    </Link>
                  </td>
                </tr>
                <tr className="text-sm odd:bg-slate-50">
                  <td className="p-1">Teraforming Mars</td>
                  <td className="p-1">10 min</td>
                  <td className="p-1">240 min</td>
                  <td className="p-1">30 pts</td>
                  <td className="p-1 text-red-500">Loss</td>
                  <td className="p-1">
                    <Link
                      href="/"
                      className={buttonStyle({
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
    </DashboardLayout>
  );
}
