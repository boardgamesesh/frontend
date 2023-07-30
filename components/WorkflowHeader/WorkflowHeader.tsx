import styles from "./WorkflowHeader.module.css";
import Link from "next/link";
import { List, Logo } from "~honeycomb";

export const WorkflowHeader = () => (
  <div className={styles.base}>
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
  </div>
);
