import Link from "next/link";
import styles from "./NextSeshCard.module.css";
import { format, formatDistanceToNow } from "date-fns";
import { FaDirections, FaPlay } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { Card, Heading, List, Text } from "~honeycomb";

export type NextSeshCardProps = { date: Date };

export const NextSeshCard = ({
  date,
  ...restProps
}: NextSeshCardProps): JSX.Element => {
  // Should fetch the game details based on sesh ID
  // Temporarily using the date as a prop

  return (
    <Card variant="highlight" classNameExtend={styles.base}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <Heading element="h1">
            Next sesh is{" "}
            {formatDistanceToNow(date, {
              addSuffix: true,
            })}
          </Heading>
          <Text element="span" size="24" bold>
            {format(date, "do MMM yy @ h:mm aaa")}
          </Text>
        </div>

        <div className="flex gap-28">
          <section>
            <Heading element="h3" level="4">
              Games: &nbsp;
            </Heading>
            <List horizontal gap={4}>
              <li>Rising Sun,</li>
              <li>Teraforming Mars</li>
            </List>
          </section>
          <section>
            <Heading element="h3" level="4">
              Players: &nbsp;
            </Heading>
            <List horizontal>
              <li>
                <div>119</div>
              </li>
              <li>
                <div>Dayne</div>
              </li>
              <li>
                <div>Nizmox</div>
              </li>
              <li>
                <div>Simon</div>
              </li>
            </List>
          </section>
        </div>
        <List gap={16} horizontal classNameExtend={styles.actions}>
          <li>
            <a href="tel:0411757997" target="_blank" rel="noreferrer">
              <MdCall />
              Contact
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/maps/dir//1+Fleming+Dr,+Campbelltown+NSW+2560/@-34.0658335,150.78311,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x6b12ee335124753d:0x9ac89184e66355f0!2m2!1d150.7852987!2d-34.0658335!3e0"
              target="_blank"
              rel="noreferrer"
            >
              <FaDirections />
              Directions
            </a>
          </li>
          <li>
            <Link href="/session/1">
              <FaPlay />
              Play
            </Link>
          </li>
        </List>
      </div>
    </Card>
  );
};
