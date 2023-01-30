import { BsChevronRight } from "react-icons/bs";
import { FaDirections, FaPlay } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import Link from "next/link";
import Head from "next/head";
import DashboardLayout from "@layouts/DashboardLayout";

import { Actions, Button, Card, Heading, List, Text } from "@honeycomb";

export default function Page() {
  return (
    <DashboardLayout>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="flex flex-col gap-24">
        <section>
          <Card variant="highlight">
            <div className="flex flex-col flex-grow gap-8 p-5">
              <div>
                <Heading element="h2" level="1">
                  Next
                </Heading>
                <Text element="span" size="20" bold>
                  4/02/23 &#64; 12:00 - 17:00
                </Text>
              </div>
              <List horizontal>
                <li>Rising Sun</li>
                <li>Teraforming Mars</li>
              </List>
              <List horizontal>
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
              </List>
            </div>
            <List className="flex gap-16">
              <li className="w-full">
                <a
                  href="tel:0411757997"
                  className="flex items-center gap-2 bg-white border border-slate-300 rounded py-3 justify-center"
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
                  className="flex items-center gap-2 bg-white border border-slate-300 rounded py-3 justify-center"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaDirections />
                  Directions
                </a>
              </li>
            </List>
          </Card>
        </section>
        <List>
          <li>Upcoming sessions</li>
          <li>Past games</li>
        </List>
        <section>
          <div className="flex flex-col gap-8">
            <header>
              <h2 className="font-bold">Upcoming sessions</h2>
            </header>
            <List className="divide-y flex flex-col flex-grow">
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
            </List>
            <List className="flex">
              <li>
                <Link href="/">
                  <span className="">See all</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="">Manage</span>
                </Link>
              </li>
            </List>
          </div>
        </section>
        <section>
          <div className="flex flex-col gap-16">
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
                    <Link href="/" className="">
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
                    <Link href="/" className="">
                      Details
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section>
          <header className="pb-2 flex justify-between border-b">
            <h2 className="font-bold">Invites</h2>
          </header>
          <List dividers>
            <li>
              <Card className="flex flex-row flex-wrap items-center justify-between">
                <div className="flex-grow sm:flex-grow-0">
                  02/10/22 @ 12:00 - 17:00 (1 Fleming Drive)
                </div>
                <Actions>
                  <Button onClick={() => {}} intent="secondary" size="small">
                    Details
                  </Button>
                </Actions>
              </Card>
            </li>
            <li>
              <Card className="flex flex-row flex-wrap items-center justify-between">
                <div className="flex-grow">
                  02/10/22 @ 12:00 - 17:00 (1 Fleming Drive)
                </div>
                <List className="flex w-full sm:w-auto gap-2">
                  <li className="w-full sm:w-auto">
                    <Button onClick={() => {}} size="small" intent="secondary">
                      Nope
                    </Button>
                  </li>
                  <li className="w-full md:w-auto">
                    <Button onClick={() => {}} size="small">
                      Going
                    </Button>
                  </li>
                </List>
              </Card>
            </li>
            <li>
              <Card className="flex flex-row flex-wrap items-center justify-between">
                <div className="flex-grow sm:flex-grow-0">
                  02/10/22 @ 12:00 - 17:00 (1 Fleming Drive)
                </div>
                <List className="flex w-full sm:w-auto gap-2">
                  <li className="w-full sm:w-auto">
                    <Button onClick={() => {}} size="small" intent="secondary">
                      Nope
                    </Button>
                  </li>
                  <li className="w-full md:w-auto">
                    <Button onClick={() => {}} size="small">
                      Going
                    </Button>
                  </li>
                </List>
              </Card>
            </li>
          </List>
        </section>
      </div>
    </DashboardLayout>
  );
}
