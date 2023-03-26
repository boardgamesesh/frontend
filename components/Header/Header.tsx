import styles from "./Header.module.css";
import Link from "next/link";
import { Button, Container, List, Logo } from "@honeycomb";

export const Header = () => (
  <header className={styles.base}>
    <Container className="flex justify-between items-centre">
      <Link href="/dashboard">
        <Logo />
      </Link>
      <nav>
        <List horizontal alignY="centre">
          <li>
            <Button onClick={() => {}} size="small">
              Start Sesh
            </Button>
          </li>
          <li>
            <Link href="/" className="font-bold">
              Invites
            </Link>
          </li>
          <li>
            <Link href="/" className="font-bold">
              Manage sessions
            </Link>
          </li>
          <li>
            <Link href="/">Settings</Link>
          </li>
        </List>
      </nav>
    </Container>
  </header>
);
