import { useScramble } from "../../hooks/useScramble";
import { SOCIAL_LINKS } from "../../data/socialLinks";
import styles from "./Hero.module.css";
import { useCursorWeight } from "../../hooks/useCursorWeight";
import { TITLES } from "../../data/titles";
import photo from "../../images/my_photo.jpg";
import LinkedInIcon from "../../icons/LinkedInIcon";
import GithubIcon from "../../icons/GitHubIcon";
import BehanceIcon from "../../icons/BehanceIcon";

const ICONS = {
  GitHub: GithubIcon,
  LinkedIn: LinkedInIcon,
  Behance: BehanceIcon,
};
export default function Hero() {
  const role = useScramble(TITLES);
  const { containerRef, weights } = useCursorWeight<HTMLHeadingElement>();
  return (
    <header className={styles.hero}>
      <div className={styles.top}>
        <div className={styles.identity}>
          <h1 ref={containerRef} className={styles.name}>
            {[..."Taisiia Fedorova"].map((char, i) => (
              <span
                key={i}
                data-char
                style={{ fontVariationSettings: `"wght" ${weights[i] ?? 400}` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
          <p className={styles.role}>{role}</p>
        </div>
        <img src={photo} alt="" className={styles.photo} />
      </div>
      <p className={styles.statement}>
        I design and build web applications end to end, from the data layer to
        the last state of a hover.
      </p>
      <ul className={styles.links}>
        {SOCIAL_LINKS.map(({ label, href, handle }) => {
          const Icon = ICONS[label as keyof typeof ICONS];
          return (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                <Icon size={20} />
                <span>{handle}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
