import type { ReactNode } from "react";
import styles from "./Section.module.css";
type SectionProps = {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
};
export default function Section({ id, number, title, children }: SectionProps) {
  return (
    <section id={id} className={styles.section}>
      <header className={styles.header}>
        <span className={styles.number}>{number}</span>
        <h2 className={styles.title}>{title}</h2>
      </header>
      <div className={styles.body}>{children}</div>
    </section>
  );
}
