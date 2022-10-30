import { Link } from "@remix-run/react";
import { FaDirections } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { Button, button } from "~/components/Button";

import { Card } from "~/components/card";

export default function Index() {
  return (
    <div className="flex flex-col ">
      <section className="grid lg:grid-cols-[1fr_2fr] gap-3">
        <Card className="flex flex-col divide-y p-0 bg-slate-50">
          <header className="p-3 flex justify-between">
            <div>
              <h2 className="font-bold">Today</h2>
              <span className="text-2xl">9:00 - 17:00</span>
            </div>
            <div>
              <Link to="/session/1234567">
                <span
                  className={button({
                    intent: "secondary",
                    mood: "neutral",
                    size: "small",
                  })}
                >
                  Details
                </span>
              </Link>
            </div>
          </header>
          <div className="flex flex-grow items-center p-3">
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
                className={button({ intent: "secondary" })}
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
                className={button({ intent: "secondary" })}
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
          <header className="pb-2 flex justify-between">
            <h2 className="font-bold">Upcoming sessions</h2>
            <Link to="/">
              <span className={button({ intent: "tertiary", size: "xsmall" })}>
                All sessions
              </span>
            </Link>
          </header>
          <ul className="divide-y border-t">
            <li className="py-2 flex flex-col md:flex-row md:items-center md:justify-between">
              <p>02/10/22 @ 9:00 - 17:00</p>
              <ul className="flex w-full md:w-auto gap-2">
                <li className="w-full md:w-auto">
                  <Button intent="secondary" mood="negative" size="small">
                    Absent
                  </Button>
                </li>
                <li className="w-full md:w-auto">
                  <Button size="small">Attending</Button>
                </li>
              </ul>
            </li>
            <li className="py-2 flex flex-col md:flex-row md:items-center md:justify-between">
              <p>02/10/22 @ 9:00 - 17:00</p>
              <Link to="/session/1234567">
                <div
                  className={button({
                    intent: "secondary",
                    mood: "neutral",
                    size: "small",
                  })}
                >
                  Details
                </div>
              </Link>
            </li>
            <li className="py-2 flex flex-col md:flex-row md:items-center md:justify-between">
              <p>02/10/22 @ 9:00 - 17:00</p>
              <Link to="/session/1234567">
                <div
                  className={button({
                    intent: "secondary",
                    mood: "neutral",
                    size: "small",
                  })}
                >
                  Details
                </div>
              </Link>
            </li>
          </ul>
        </Card>
      </section>
    </div>
  );
}
