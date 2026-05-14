import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

const EASE = [0.22, 1, 0.36, 1] as const;

const fade: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay: i * 0.06 },
  }),
};

const projects = [
  {
    title: "Holiday Schedules",
    stack: "Selenium · Java · Cucumber",
    repo: "https://github.com/YeswanthB011/HolidaySchedules_WebApplication",
    note: "BDD-driven holiday calendar testing.",
  },
  {
    title: "ZigWheels Testing",
    stack: "Selenium · Java · TestNG",
    repo: "https://github.com/YeswanthB011/ZigWheels_WebApplication",
    note: "End-to-end suite for an automotive marketplace.",
  },
  {
    title: "QA Playground",
    stack: "Playwright · TypeScript",
    repo: "https://github.com/YeswanthB011/QAPlayground_Playwright",
    note: "Modern Playwright patterns and fixtures.",
  },
  {
    title: "Magento Web App",
    stack: "Selenium · Java · Cucumber · TestNG",
    repo: "https://github.com/YeswanthB011/MagentoWebApp",
    note: "Hybrid framework for an e-commerce stack.",
  },
];

const links = [
  { label: "Email", href: "mailto:yeswanthyes333@gmail.com" },
  { label: "GitHub", href: "https://github.com/YeswanthB011" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yeswanth-b-8748aa1a7/" },
  { label: "Instagram", href: "https://www.instagram.com/yeswanth_11.1/" },
];

function Index() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const o = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  return (
    <div className="grain min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-hairline"
      >
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between text-sm">
          <span className="font-mono tracking-tight">yb.</span>
          <nav className="hidden sm:flex gap-6 text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#work" className="hover:text-foreground transition-colors">Work</a>
            <a href="#writing" className="hover:text-foreground transition-colors">Writing</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </nav>
          <a href="mailto:yeswanthyes333@gmail.com" className="font-mono text-xs underline underline-offset-4">
            say hi
          </a>
        </div>
      </motion.header>

      {/* Hero */}
      <section ref={ref} className="relative pt-40 pb-32 px-6">
        <motion.div style={{ y, opacity: o }} className="mx-auto max-w-5xl">
          <motion.p
            variants={fade} initial="hidden" animate="show" custom={0}
            className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            Chennai · QA Engineer
          </motion.p>

          <motion.h1
            variants={fade} initial="hidden" animate="show" custom={1}
            className="font-display text-[clamp(3.5rem,10vw,8rem)] leading-[0.95] mt-6"
          >
            Yeswanth B<span className="text-accent">.</span>
          </motion.h1>

          <motion.p
            variants={fade} initial="hidden" animate="show" custom={2}
            className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            Hello — you're exploring a tiny corner of the internet. I use this space to project my ideas
            and express my obsessions.
          </motion.p>

          <motion.div
            variants={fade} initial="hidden" animate="show" custom={3}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm"
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank" rel="noreferrer"
                className="group relative"
              >
                <span className="text-foreground">{l.label}</span>
                <span className="absolute -bottom-0.5 left-0 h-px w-full bg-foreground origin-right scale-x-0 group-hover:origin-left group-hover:scale-x-100 transition-transform duration-500" />
              </a>
            ))}
          </motion.div>

          <motion.p
            variants={fade} initial="hidden" animate="show" custom={4}
            className="mt-16 font-mono text-xs text-muted-foreground italic"
          >
            ♪ probably listening to Ilayaraja
          </motion.p>
        </motion.div>
      </section>

      {/* About */}
      <Section id="about" label="01 / about">
        <div className="grid md:grid-cols-12 gap-10">
          <h2 className="md:col-span-4 font-display text-4xl">A short summary.</h2>
          <ul className="md:col-span-8 space-y-6 text-lg leading-relaxed">
            {[
              ["Now", "QA at Cognizant — ensuring high-quality, bug-free builds since Sep 2023."],
              ["Before", "Interned at Cognizant from May 2023 to Sep 2023."],
              ["Age & place", "23, based in Chennai."],
              ["On the side", "A modest blog with 5.44k page views, plus freelance writing."],
            ].map(([k, v], i) => (
              <motion.li
                key={k}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-6 border-b border-hairline pb-6"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground w-24 shrink-0 pt-1.5">
                  {k}
                </span>
                <span className="text-foreground">{v}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Work */}
      <Section id="work" label="02 / automation">
        <h2 className="font-display text-4xl mb-12">Selected work.</h2>
        <div className="border-t border-hairline">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.repo}
              target="_blank" rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group grid grid-cols-12 gap-4 items-baseline border-b border-hairline py-8 hover:bg-surface/60 transition-colors duration-500 px-2 -mx-2"
            >
              <span className="col-span-1 font-mono text-xs text-muted-foreground pt-2">
                0{i + 1}
              </span>
              <div className="col-span-11 sm:col-span-6">
                <h3 className="font-display text-2xl sm:text-3xl group-hover:translate-x-2 transition-transform duration-500">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.note}</p>
              </div>
              <span className="hidden sm:block sm:col-span-4 font-mono text-xs text-muted-foreground">
                {p.stack}
              </span>
              <span className="hidden sm:block sm:col-span-1 text-right text-muted-foreground group-hover:text-foreground transition-colors">
                ↗
              </span>
            </motion.a>
          ))}
        </div>
      </Section>

      {/* Writing */}
      <Section id="writing" label="03 / writing">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <h2 className="md:col-span-5 font-display text-4xl">Words & quiet thoughts.</h2>
          <div className="md:col-span-7 space-y-6 text-lg leading-relaxed">
            <p>
              I keep a small blog where I write about biomedicine, curiosity and the quieter
              side of the internet. It has gathered a humble{" "}
              <span className="text-accent font-medium">5.44k</span> page views — every one of
              them appreciated.
            </p>
            <a
              href="https://biomedicalweeb.blogspot.com/"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm border border-foreground rounded-full px-5 py-2.5 hover:bg-foreground hover:text-background transition-colors duration-500"
            >
              Read the blog <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" label="04 / contact">
        <div className="text-center py-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(2.5rem,8vw,6rem)] leading-[1]"
          >
            Let's talk —
            <br />
            <a
              href="mailto:yeswanthyes333@gmail.com"
              className="italic text-accent hover:underline underline-offset-[12px] decoration-1"
            >
              yeswanthyes333@gmail.com
            </a>
          </motion.h2>
        </div>
      </Section>

      <footer className="border-t border-hairline">
        <div className="mx-auto max-w-5xl px-6 py-10 flex flex-col sm:flex-row gap-4 justify-between text-xs font-mono text-muted-foreground">
          <span>© {new Date().getFullYear()} Yeswanth B</span>
          <span>Built quietly, with care.</span>
        </div>
      </footer>
    </div>
  );
}

function Section({
  id, label, children,
}: { id: string; label: string; children: React.ReactNode }) {
  return (
    <section id={id} className="px-6 py-28 border-t border-hairline">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-12"
        >
          {label}
        </motion.p>
        {children}
      </div>
    </section>
  );
}
