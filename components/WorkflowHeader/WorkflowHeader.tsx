import styles from "./WorkflowHeader.module.css";
import Link from "next/link";
import { Button, Container, List, Logo } from "~honeycomb";

export const WorkflowHeader = () => (
  <header className={styles.base}>
    <Link href="/">
      <Logo />
    </Link>
    <nav>
      <List horizontal alignY="centre">
        <li>
          <Link href="/">Contact</Link>
        </li>
      </List>
    </nav>
  </header>
);
