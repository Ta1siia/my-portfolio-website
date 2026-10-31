import type { QuickFact } from "../../types";
import { t } from "../../i18n";
import styles from "./About.module.css";

const PARAGRAPHS: string[] = t.about.paragraphs;

const QUICK_FACTS: QuickFact[] = [
  t.about.facts.location,
  t.about.facts.languages,
  t.about.facts.studies,
];

export default function About() {
  return (
    <div className={styles.about}>
      {PARAGRAPHS.map((paragraph, index) => (
        <p key={index} className={styles.paragraph}>
          {paragraph}
        </p>
      ))}
      <dl className={styles.facts}>
        {QUICK_FACTS.map(({ label, value }) => (
          <div className={styles.fact} key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
