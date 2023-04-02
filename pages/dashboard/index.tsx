import { BsChevronRight } from "react-icons/bs";
import { FaDirections, FaPlay } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import Link from "next/link";
import Head from "next/head";
import DashboardLayout from "~layouts/DashboardLayout";

import { Actions, Button, Card, Heading, List, Text } from "~honeycomb";

export default function Page() {
  return (
    <DashboardLayout>
      <Head>
        <title>Dashboard</title>
        <meta
          name="description"
          content="Dashing through the snow"
          key="desc"
        />
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
            <h2>Past games</h2>
            <table>
              <thead>
                <tr>
                  <th>Boardgame</th>
                  <th>Avg. turn time</th>
                  <th>Play length</th>
                  <th>Score</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={6}>
                    <div className="flex justify-between items-center">
                      <span>Have to play some games first...</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Rising Sun</td>
                  <td>10 min</td>
                  <td>240 min</td>
                  <td>100 pts</td>
                  <td>Win</td>
                  <td>
                    <Link href="/">Details</Link>
                  </td>
                </tr>
                <tr>
                  <td>Teraforming Mars</td>
                  <td>10 min</td>
                  <td>240 min</td>
                  <td>30 pts</td>
                  <td>Loss</td>
                  <td>
                    <Link href="/">Details</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section>
          <h2 className="font-bold">Invites</h2>
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
