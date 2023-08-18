"use client";

import { Button, Card, Heading, List } from "~honeycomb";
import Link from "next/link";
import { FaArrowLeft, FaChevronLeft, FaDirections } from "react-icons/fa";
import { MdCall, MdOutlineWarningAmber, MdOutlineAdd } from "react-icons/md";
import Image from "next/image";
import { useState } from "react";

type Player = {
  displayName: string;
  username: string;
};

const PlayerDisplay = ({ displayName, username }: Player) => (
  <>
    <span style={{ textTransform: "capitalize" }}>{displayName}</span> (
    {username})
  </>
);

export default function Page() {
  const [firstPlayer, setFirstPlayer] = useState<number | undefined>(undefined);

  const players = [
    {
      displayName: "geoff",
      username: "@gyfchong",
    },
    {
      displayName: "drew",
      username: "@119",
    },
    {
      displayName: "simon",
      username: "@nizmox",
    },
    {
      displayName: "dayne",
      username: "@dayne",
    },
    {
      displayName: "simon",
      username: "@mercury",
    },
  ];

  return (
    <div className="flex flex-col gap-32">
      <header>
        <h1>Play session</h1>
      </header>
      <section className="flex flex-col gap-20">
        <Heading element="h2">What game are you playing?</Heading>
        <div>
          <select>
            <option>Rising Sun</option>
            <option>Teraforming Mars</option>
          </select>
        </div>
      </section>
      <section className="flex flex-col gap-20">
        <header className="flex gap-8">
          <Heading element="h2">Pick your first player</Heading>
          <Button
            onClick={() => {
              const randomPlayerIndex = Math.floor(
                Math.random() * (players.length - 0) + 0
              );
              if (firstPlayer !== randomPlayerIndex) {
                setFirstPlayer(randomPlayerIndex);
              }
            }}
          >
            Randomise
          </Button>
        </header>
        <List horizontal classNameExtend="flex-wrap">
          {players.map((player, index) => (
            <li key={player.username}>
              <label htmlFor={player.username}>
                <Card
                  variant={firstPlayer === index ? "highlight" : "section"}
                  classNameExtend="flex align-center gap-8"
                >
                  <input
                    type="radio"
                    name="players"
                    id={player.username}
                    onChange={() => {
                      setFirstPlayer(index);
                    }}
                    checked={firstPlayer === index}
                  />
                  <PlayerDisplay {...player} />
                </Card>
              </label>
            </li>
          ))}
        </List>
      </section>
      <section className="flex flex-col gap-20">
        <table>
          <thead>
            <th>Player</th>
            <th>Score</th>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player.username}>
                <td>
                  <PlayerDisplay {...player} />
                </td>
                <td>
                  <input type="text" name="scores" id={player.username} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      {/* 
          - Record game stats
          - Turn timers
        */}
    </div>
  );
}
