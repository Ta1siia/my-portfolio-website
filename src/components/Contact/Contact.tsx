import { useEffect, useRef, useState } from "react";
import { SOCIAL_LINKS } from "../../data/socialLinks";
import styles from "./Contact.module.css";
import GithubIcon from "../../icons/GitHubIcon";
import LinkedInIcon from "../../icons/LinkedInIcon";
import BehanceIcon from "../../icons/BehanceIcon";

const EMAIL = "fedorova.taisiia@gmail.com";
const COPIED_DURATION_MS = 1500;

const ICONS = {
  GitHub: GithubIcon,
  LinkedIn: LinkedInIcon,
  Behance: BehanceIcon,
};

function formatTime(date: Date) {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function useLocalTime() {
  const [time, setTime] = useState(() => formatTime(new Date()));

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime(new Date())), 15000);
    return () => clearInterval(id);
  }, []);

  return time;
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const localTime = useLocalTime();

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      return;
    }
    setCopied(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), COPIED_DURATION_MS);
  };

  return (
    <div className={styles.contact}>
      <button type="button" className={styles.email} onClick={handleCopy}>
        <span aria-live="polite">{copied ? "Copied" : EMAIL}</span>
      </button>
      <ul className={styles.links}>
        {SOCIAL_LINKS.map(({ label, href, handle }) => {
          const Icon = ICONS[label as keyof typeof ICONS];
          return (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                <Icon size={18} />
                <span>{handle}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <p className={styles.status}>
        <span className={styles.dot} aria-hidden="true" />
        Open to internships and collaboration — {localTime} Kyiv
      </p>
    </div>
  );
}
