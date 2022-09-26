import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";

import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { FaDirections, FaChevronUp, FaChevronDown } from "react-icons/fa";
import { MdCall } from "react-icons/md";

export const loader: LoaderFunction = async ({ params }) => {
  return params.sessionId;
};

const Timer = () => {
  return (
    <div className="p-3 rounded bg-slate-100">
      <div className="flex flex-row gap-3">
        <span className="text-slate-700 text-8xl grow">0:00</span>
        <ul className="flex flex-col gap-2">
          <li className="grow">
            <button
              type="button"
              className="flex items-center justify-center gap-2 border border-green-500 bg-white px-3 py-2 rounded w-full hover:drop-shadow hover:bg-green-100"
            >
              <BsPlayFill />
              Start
            </button>
          </li>
          <li className="grow">
            <button
              type="button"
              className="flex items-center justify-center gap-2 border border-slate-500 bg-white px-3 py-2 rounded w-full hover:drop-shadow hover:bg-slate-200"
            >
              <BsPauseFill />
              Pause
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Session = () => {
  const sessionId = useLoaderData();

  return (
    <div className="flex flex-col gap-5 px-3 max-w-[1440px] mx-auto">
      <h1 className="text-3xl text-slate-700">Session</h1>
      <div className="grid gap-7 grid-cols-[2fr_1fr]">
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-[1fr_3fr] gap-3">
            <div className="p-3 rounded bg-slate-100">
              <div className="flex flex-col">
                <span className="font-bold">When</span>
                <span>Sat, 01 Sep</span>
                <span>9:00 &mdash; 17:00</span>
              </div>
            </div>
            <div className="p-3 rounded bg-slate-100">
              <div className="grid grid-cols-[3fr_1fr_1fr] gap-3 min-h-full">
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold">Getting there</h3>
                  <div className="h-card flex flex gap-[0.25rem]">
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
          <div className="flex flex-col gap-3 p-3 rounded bg-slate-100">
            <div className="flex gap-3">
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold text-slate-700">
                  Pick &#x23;1: Rising Sun
                </h2>
                <p>
                  Lead your clan to victory through negotiation, combat,
                  monsters and favors from Kami.
                </p>
              </div>
              <img
                src="https://cf.geekdo-images.com/iwevA6XmiNLHn1QnGUucqw__imagepagezoom/img/Pjl5062rAod_8ypRjpDZMJxaDY4=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic3880340.jpg"
                alt="Rising Sun boardgame box art"
                className="max-w-[100px]"
              />
            </div>
            <div className="border-t border-slate-300 flex flex-col gap-3">
              <button className="flex justify-between p-3">
                <h3 className="font-bold">Prep material</h3>
                <FaChevronUp />
              </button>
              <div className="px-3 py-1">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/0eNIX8WT9Oc"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 p-3 rounded bg-slate-100">
            <div className="flex gap-3">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                  <h2 className="text-2xl font-bold text-slate-700">
                    Pick &#x23;2: Terraforming mars
                  </h2>
                  <p>
                    Lead your clan to victory through negotiation, combat,
                    monsters and favors from Kami.
                  </p>
                </div>
              </div>
              <img
                src="https://cf.geekdo-images.com/iwevA6XmiNLHn1QnGUucqw__imagepagezoom/img/Pjl5062rAod_8ypRjpDZMJxaDY4=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic3880340.jpg"
                alt="Rising Sun boardgame box art"
                className="max-w-[100px]"
              />
            </div>
            <div className="border-t border-slate-300 flex flex-col gap-3">
              <button className="flex justify-between p-3">
                <h3 className="font-bold">Prep material</h3>
                <FaChevronDown />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-3">
            <Timer />
            <button
              type="button"
              className="flex items-center justify-center gap-2 text-white bg-red-500 px-3 py-2 rounded w-full hover:drop-shadow hover:bg-red-600"
            >
              End session
            </button>
            <div className="p-3 rounded bg-slate-100">Something</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Session;
