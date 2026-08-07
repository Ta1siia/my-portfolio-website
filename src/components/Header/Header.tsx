import { useEffect, useState } from "react";
import { navItems } from "../../data/nav";
import { useActiveSection } from "../../hooks/useActiveSection";
import styles from "./Header.module.css";

const sectionIds = navItems.map((item) => item.id);

export function Header() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;
    const { body, documentElement } = document;
    const previous = {
      position: body.style.position,
      top: body.style.top,
      insetInline: body.style.insetInline,
      overflow: documentElement.style.overflow,
    };

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.insetInline = "0";
    documentElement.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      body.style.position = previous.position;
      body.style.top = previous.top;
      body.style.insetInline = previous.insetInline;
      documentElement.style.overflow = previous.overflow;
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 64rem)");
    const onChange = () => {
      if (query.matches) setOpen(false);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const goTo = (event: React.MouseEvent, id: string) => {
    event.preventDefault();
    setOpen(false);
    window.history.replaceState(null, "", `#${id}`);
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ block: "start" });
    });
  };

  const goToTop = (event: React.MouseEvent) => {
    event.preventDefault();
    setOpen(false);
    window.history.replaceState(null, "", window.location.pathname);
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0 });
    });
  };

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <a
          className={styles.mark}
          href="#top"
          aria-label="Back to top"
          onClick={goToTop}
        >
          t1
        </a>

        <nav className={styles.nav} aria-label="Sections">
          <ul className={styles.list}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  className={styles.link}
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "true" : undefined}
                  onClick={(event) => goTo(event, item.id)}
                >
                  <span className={styles.index}>{item.index}</span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className={styles.burger} data-open={open} />
        </button>
      </div>

      <div id="site-menu" className={styles.panel} hidden={!open}>
        <ul className={styles.panelList}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                className={styles.panelLink}
                href={`#${item.id}`}
                onClick={(event) => goTo(event, item.id)}
              >
                <span className={styles.panelIndex}>{item.index}</span>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
