import type { QuickFact } from "../../types";
import styles from "./About.module.css";

const PARAGRAPHS: string[] = [
  "I'm a high school student in Kyiv, studying full-stack development through GoIT and designing and building web applications end to end — React and TypeScript on the front, Python and Flask behind it. My attention goes to the layer where design and engineering meet, since that's where an interface either holds up or doesn't.",
  "I work from the system outward rather than screen by screen: tokens before components, constraints before decoration. The same instinct shows up in what I build — RepoLens exists because I wanted to see a codebase's structure rather than infer it from folders.",
  "Outside of code I read and write seriously in French and English. That side of my work — a book, and research — will show up here as it becomes something worth showing.",
];

const QUICK_FACTS: QuickFact[] = [
  { label: "Location", value: "Kyiv, Ukraine" },
  { label: "Languages", value: "Ukrainian, Russian, English, French" },
  { label: "Studies", value: "Full-stack development, GoIT" },
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
