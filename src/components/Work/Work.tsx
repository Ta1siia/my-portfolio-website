import styles from "./Work.module.css";
import { PROJECTS } from "../../data/projects";
import GithubIcon from "../../icons/GitHubIcon";
import YoutubeIcon from "../../icons/YouTubeIcon";
import { t } from "../../i18n";

export default function Work() {
  return (
    <div className={styles.list}>
      {PROJECTS.map((project) => (
        <article className={styles.project} key={project.name}>
          <h3 className={styles.name}>{project.name}</h3>
          <p className={styles.blurb}>{project.blurb}</p>
          <p className={styles.notes}>{project.notes}</p>
          <dl className={styles.spec}>
            <div className={styles.specRow}>
              <dt>{t.work.role}</dt>
              <dd>{project.role}</dd>
            </div>
            <div className={styles.specRow}>
              <dt>{t.work.stack}</dt>
              <dd>{project.stack.join(", ")}</dd>
            </div>
            <div className={styles.specRow}>
              <dt>{t.work.status}</dt>
              <dd>{project.status}</dd>
            </div>
            <div className={styles.specRow}>
              <dt>{t.work.year}</dt>
              <dd>{project.year}</dd>
            </div>
          </dl>
          <ul className={styles.links}>
            {project.repo && (
              <li>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon size={16} />
                  <span>{t.work.repo}</span>
                </a>
              </li>
            )}
            {project.demo && (
              <li>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YoutubeIcon size={16} />
                  <span>{t.work.demo}</span>
                </a>
              </li>
            )}
          </ul>
        </article>
      ))}
    </div>
  );
}
