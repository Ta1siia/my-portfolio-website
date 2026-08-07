import styles from "./App.module.css";
import Hero from "../Hero/Hero.tsx";
import Section from "../Section/Section.tsx";
import About from "../About/About.tsx";
import Work from "../Work/Work.tsx";
import Skills from "../Skills/Skills.tsx";
import Contact from "../Contact/Contact.tsx";
import { Header } from "../Header/Header.tsx";
function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          <Hero />
          <Section id="about" number="01" title="About">
            <About />
          </Section>
          <Section id="work" number="02" title="Work">
            <Work />
          </Section>
          <Section id="skills" number="03" title="Skills">
            <Skills />
          </Section>
          <Section id="contact" number="04" title="Contact">
            <Contact />
          </Section>
        </main>
        <footer className={styles.footer}>
          <p className={styles.footerText}>Taisiia Fedorova — 2026</p>
        </footer>
      </div>
    </>
  );
}

export default App;
