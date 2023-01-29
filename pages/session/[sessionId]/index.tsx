import { Card } from "@honeycomb/Card/Card";
import DashboardLayout from "@layouts/DashboardLayout";
import Link from "next/link";
import { FaDirections } from "react-icons/fa";
import { MdCall, MdOutlineWarningAmber, MdOutlineAdd } from "react-icons/md";

export default function Page() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold text-slate-700">Session</h1>
      <div className="flex flex-col gap-6">
        <section className="flex flex-col gap-3">
          <div className="grid grid-cols-[1fr_3fr] gap-3">
            <div className="p-3 rounded bg-slate-100">
              <div className="flex flex-col">
                <h2 className="font-bold">When</h2>
                <span>Sat, 01 Sep</span>
                <span>9:00 &mdash; 17:00 (8hrs)</span>
              </div>
            </div>
            <div className="p-3 rounded bg-slate-100">
              <div className="grid grid-cols-[3fr_1fr_1fr] gap-3 min-h-full">
                <div className="flex flex-col gap-1">
                  <h2 className="font-bold">Getting there</h2>
                  <div className="h-card flex gap-[0.25rem]">
                    <span className="p-street-address">1 Fleming Dr,</span>
                    <span className="p-locality">Campbelltown</span>
                    <span className="p-region" title="New South Wales">
                      NSW
                    </span>
                    <span className="p-postal-code">2560</span>
                  </div>
                </div>
                <a
                  href="tel:0411757997"
                  className="flex flex-col items-center justify-center gap-2 text-white bg-sky-500 p-3 rounded w-full hover:drop-shadow hover:bg-sky-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MdCall />
                  Contact
                </a>
                <a
                  href="https://www.google.com/maps/dir//1+Fleming+Dr,+Campbelltown+NSW+2560/@-34.0658335,150.78311,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x6b12ee335124753d:0x9ac89184e66355f0!2m2!1d150.7852987!2d-34.0658335!3e0"
                  className="flex flex-col items-center justify-center gap-2 text-white bg-sky-500 p-3 rounded w-full hover:drop-shadow hover:bg-sky-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaDirections />
                  Directions
                </a>
              </div>
            </div>
          </div>
          <div className="p-3 rounded bg-slate-100">
            <div className="flex gap-3">
              <h2 className="font-bold">Attending (5 people):</h2>
              Yourself, nizmox, Dayne, mercury, 119
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-slate-700">Boardgames</h2>
          <ul className="flex gap-3">
            <li>Estimated play time: 4hrs,</li>
            <li className="flex gap-2">
              Historical play time:{" "}
              <span className="text-orange-500">7hrs</span>
              <span className="flex items-center gap-1 px-2 rounded-full bg-orange-200 text-orange-900">
                <MdOutlineWarningAmber />{" "}
                <span className="text-xs">
                  Approaching max play time, please eat.
                </span>
              </span>
            </li>
          </ul>
          <div className="flex flex-col gap-3">
            <div className="p-3 rounded bg-slate-100">
              <div className="flex gap-3">
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-slate-700">
                    Pick &#x23;1: Rising Sun (90 &#45;120 Min)
                  </h3>
                  <div className="flex gap-3">
                    <img
                      src="https://cf.geekdo-images.com/iwevA6XmiNLHn1QnGUucqw__imagepagezoom/img/Pjl5062rAod_8ypRjpDZMJxaDY4=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic3880340.jpg"
                      alt="Rising Sun boardgame box art"
                      className="max-w-[80px] max-h-[80px]"
                    />
                    <div className="flex flex-col gap-2">
                      <p>
                        Lead your clan to victory through negotiation, combat,
                        monsters and favors from Kami.
                      </p>
                      <div className="border border-violet-700 px-2 py-1 max-w-fit text-violet-700 rounded hover:bg-violet-700 hover:text-white">
                        <Link href="/game/1234567?session=1234">
                          Start playing
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3 rounded bg-slate-100">
              <div className="flex gap-3">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-3">
                    <h3 className="text-lg font-bold text-slate-700">
                      Pick &#x23;2: Terraforming mars (120min)
                    </h3>
                    <div className="flex gap-3">
                      <img
                        src="https://cf.geekdo-images.com/wg9oOLcsKvDesSUdZQ4rxw__imagepage/img/FS1RE8Ue6nk1pNbPI3l-OSapQGc=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3536616.jpg"
                        alt="Terraforming mars boardgame box art"
                        className="max-w-[80px] max-h-[80px]"
                      />
                      <div className="flex flex-col gap-2">
                        <p>
                          Compete with rival CEOs to make Mars habitable and
                          build your corporate empire.
                        </p>
                        <div className="border border-violet-700 px-2 py-1 max-w-fit text-violet-700 rounded hover:bg-violet-700 hover:text-white">
                          <Link href="/game/1234567?session=1234">
                            Start playing
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/session/pick-boardgame">
              <Card className="border-violet-800 bg-violet-700 hover:bg-gradient-to-br from-violet-700 to-violet-900 text-white hover:drop-shadow-lg w-full max-h-[150px]">
                <span className="text-2xl grow">Pick boardgame</span>
                <span className="text-7xl self-end text-violet-600">
                  <MdOutlineAdd />
                </span>
              </Card>
            </Link>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
