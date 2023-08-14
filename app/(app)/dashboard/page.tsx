"use client";

import styles from "./dashboard.module.css";

import { Actions, Button, Card, Heading, List } from "~honeycomb";
import { NextSeshCard } from "components/NextSeshCard";

export default function Page() {
  // get from database
  const nextSeshDate = new Date("2024-01-01 09:00");

  return (
    <div className="flex flex-col gap-32">
      <section className={styles.hero}>
        <NextSeshCard date={nextSeshDate} />
      </section>

      <div className="flex flex-col gap-20">
        <section className="flex flex-col gap-8">
          <header>
            <h2 className="font-bold">Upcoming sessions</h2>
          </header>
          <List horizontal>
            <li>
              <Card variant="section" classNameExtend="flex flex-col gap-8">
                <List>
                  <li>02/10/22 @ 12:00 - 17:00</li>
                  <li>1 Fleming Drive</li>
                </List>
                <Actions horizontal>
                  <Button onClick={() => {}} intent="secondary" size="small">
                    Details
                  </Button>
                  <Button
                    onClick={() => {}}
                    intent="secondary"
                    mood="negative"
                    size="small"
                  >
                    Can&apos;t go
                  </Button>
                </Actions>
              </Card>
            </li>
            <li>
              <Card variant="section" classNameExtend="flex flex-col gap-8">
                <List>
                  <li>02/10/22 @ 12:00 - 17:00</li>
                  <li>1 Fleming Drive</li>
                </List>
                <Actions horizontal>
                  <Button onClick={() => {}} intent="secondary" size="small">
                    Details
                  </Button>
                  <Button
                    onClick={() => {}}
                    intent="secondary"
                    mood="negative"
                    size="small"
                  >
                    Can&apos;t go
                  </Button>
                </Actions>
              </Card>
            </li>
            <li>
              <Card variant="section" classNameExtend="flex flex-col gap-8">
                <List>
                  <li>02/10/22 @ 12:00 - 17:00</li>
                  <li>1 Fleming Drive</li>
                </List>
                <Actions horizontal>
                  <Button onClick={() => {}} intent="secondary" size="small">
                    Details
                  </Button>
                  <Button
                    onClick={() => {}}
                    intent="secondary"
                    mood="negative"
                    size="small"
                  >
                    Can&apos;t go
                  </Button>
                </Actions>
              </Card>
            </li>
          </List>
        </section>

        <section className="flex flex-col gap-8">
          <header>
            <Heading element="h2">Invites</Heading>
          </header>
          <List horizontal>
            <li>
              <Card variant="section" classNameExtend="flex flex-col gap-8">
                <List>
                  <li>02/10/22 @ 12:00 - 17:00</li>
                  <li>1 Fleming Drive</li>
                </List>
                <Actions horizontal>
                  <Button onClick={() => {}} size="small">
                    RSVP
                  </Button>
                </Actions>
              </Card>
            </li>
            <li>
              <Card variant="section" classNameExtend="flex flex-col gap-8">
                <List>
                  <li>02/10/22 @ 12:00 - 17:00</li>
                  <li>1 Fleming Drive</li>
                </List>
                <Actions horizontal>
                  <Button onClick={() => {}} size="small">
                    RSVP
                  </Button>
                </Actions>
              </Card>
            </li>
          </List>
        </section>
      </div>
    </div>
  );
}
