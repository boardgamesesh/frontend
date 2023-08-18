import styles from "./AppHeader.module.css";
import Link from "next/link";
import { Button, Container, List, Logo } from "~honeycomb";

export const AppHeader = () => (
  <div className={styles.base}>
    <Link href="/">
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
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/">Invites</Link>
        </li>
        <li>
          <Link href="/">Manage sessions</Link>
        </li>
        <li>
          <Link href="/">Settings</Link>
        </li>
      </List>
    </nav>
  </div>
);
