import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  MapPin,
  ArrowUpRight,
  Sparkles,
  Code2,
  Palette,
  Users,
  Lightbulb,
  Heart,
  ExternalLink,
  Phone,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import projProdify from "@/assets/project-prodify.jpg";
import projZeroWaste from "@/assets/project-zerowaste.jpg";
import projGlowie from "@/assets/project-glowie.jpg";
import projEstavine from "@/assets/project-estavine.jpg";
import imgProjectPersonal from "@/assets/project-4.png";
import cert1 from "@/assets/cert1.jpeg";
import cert2 from "@/assets/cert2.jpeg";
import cert3 from "@/assets/cert3.jpeg";
import cert4 from "@/assets/cert4.jpeg";
import cert5 from "@/assets/cert5.jpeg";
import cert6 from "@/assets/cert6.jpeg";
import cert7 from "@/assets/cert7.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marshya Salsabilla — Frontend Developer & UI Designer" },
      {
        name: "description",
        content:
          "Portfolio Marshya Salsabilla — Informatics Engineering student passionate about frontend development and modern UI design.",
      },
      { property: "og:title", content: "Marshya Salsabilla — Frontend Developer & UI Designer" },
      {
        property: "og:description",
        content: "Crafting modern, responsive, and user friendly digital experiences.",
      },
    ],
  }),
  component: Portfolio,
});

const hardSkills = ["Cisco", "HTML", "Python", "Canva", "VsCode", "GitHub", "Figma", "Word"];
const softSkills = [
  { icon: Users, label: "Communication" },
  { icon: Heart, label: "Teamwork" },
  { icon: Sparkles, label: "Creativity" },
  { icon: Palette, label: "Adaptability" },
  { icon: Lightbulb, label: "Problem Solving" },
  { icon: Code2, label: "Friendly" },
];

const experiences = [
  {
    role: "Finance, Marketing & Social Media Designer",
    org: "@estavine.co — Collaborative Business",
    period: "April 2026 — Present",
    desc: "Estavine is a collaborative handmade business where I work as finance and social media designer, responsible for financial management and creative social media content.",
  },
  {
    role: "Cashier & Host Live",
    org: "PT. Selahorje Jaya Abadi",
    period: "May 2025 - September 2025",
    desc: "My experience as a cashier also improved my ability to understand user behavior and create solutions that focus on convenience, efficiency, and better user experience.",
  },
  {
    role: "Digital Marketing",
    org: "Dapoer Pak Jack",
    period: "March 2023 – May 2025",
    desc: "Promoting the business through social media content and handling buffet order reservations.",
  },
  {
    role: "Social Media Designer",
    org: "@brigpasda_ssd",
    period: "February 2023 – December 2024",
    desc: "Created engaging and visually consistent content to support branding and increase audience engagement on social media platforms.",
  },
];

const education = [
  {
    school: "Institut Asia Malang",
    program: "Informatics Engineering — Undergraduate",
    period: "2025 — present",
  },
  { school: "SMKN 1 Dlanggu", program: "Computer and Network Engineering", period: "2022 — 2025" },
  { school: "SMPN 1 Dlanggu", program: "Junior High School", period: "2019 — 2022" },
  { school: "SDN Kertosari", program: "Elementary School", period: "2013 — 2019" },
];

const projects = [
  {
    title: "Prodify",
    tag: "Mobile App · UI Design",
    img: projProdify,
    desc: "Productivity and time management mobile app interface. Clean, user-friendly UI with activity tracking and responsive layouts built in Figma.",
    link: "https://www.figma.com/design/NrcffbhggwkGXjAVA485MX/prodify?node-id=0-1&t=RunDeuTM39JbMtqI-1",
  },
  {
    title: "ZeroWaste",
    tag: "Competition · Fesmaro",
    img: projZeroWaste,
    desc: "A mobile app themed around waste management and sustainability — engaging, intuitive interface to encourage recycling and food waste awareness.",
    link: "https://www.figma.com/design/bvTRe9tCrH5b3ZvzMlX1tb/fesmaro?t=RunDeuTM39JbMtqI-1",
  },
  {
    title: "Glowie",
    tag: "Beauty App · Award Winner",
    img: projGlowie,
    desc: "Beauty and skincare mobile application with soft, modern visuals. Winner of the Informatics Engineering Orientation Program Competition.",
    link: "https://www.figma.com/design/jGVhVepTSGcRf8I5dAnnI3/wireframe-glowiee?node-id=0-1&t=nXOkNY5vmynL3uQO-1",
  },
  {
    title: "@estavine.co",
    tag: "Marketplace Website",
    img: projEstavine,
    desc: "Marketplace concept for handmade accessories and crochet products — aesthetic visual design with product showcases and a responsive UI.",
    link: "https://www.instagram.com/estavine.co/",
  },
  {
    title: "Personal Website",
    tag: "Portofolio",
    img: imgProjectPersonal,
    desc: "First website after learning HTML, CSS and Javascript language",
    link: "",
  },
];

const certificates = [
  { title: "Certificate PKL SMKN 1 Dlanggu", img: cert1 },
  { title: "Certificate of UI/UX Competition", img: cert2 },
  { title: "Certificate of Competence", img: cert3 },
  { title: "Certificate of Competence", img: cert4 },
  { title: "Certificate of UI/UX Competition", img: cert5 },
  { title: "Certificate Course Completion", img: cert6 },
  { title: "Certificate of UI/UX Competition", img: cert7 },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
      />

      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="font-display text-2xl tracking-tight">
            Marshya<span className="text-accent">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition">
              About
            </a>
            <a href="#skills" className="hover:text-foreground transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-foreground transition">
              Projects
            </a>
            <a href="#certificates" className="hover:text-foreground transition">
              Certificates
            </a>
            <a href="#experience" className="hover:text-foreground transition">
              Experience
            </a>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm hover:opacity-90 transition"
          >
            Let's talk <ArrowUpRight className="w-4 h-4" />
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative pt-36 pb-24 overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}
      >
        <img
          src={heroBg}
          alt=""
          width={1536}
          height={1536}
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-multiply pointer-events-none"
        />
        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-4 py-1.5 text-xs text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" /> Available for
              collaborations
            </span>
            <h1 className="mt-6 font-display text-6xl md:text-8xl leading-[0.95]">
              Hi, I'm <em className="italic text-accent">Marshya</em>
              <br />
              <span className="text-foreground/90">a frontend & UI designer</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Informatics Engineering student crafting modern, responsive, and user-friendly
              interfaces that blend functionality with attractive visual design.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3 text-sm font-medium hover:opacity-90 transition"
              >
                View my work <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 backdrop-blur px-7 py-3 text-sm hover:bg-card transition"
              >
                Get in touch
              </a>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Malang, Indonesia
              </span>
              <a
                href="mailto:marshyasalsabilla@gmail.com"
                className="inline-flex items-center gap-2 hover:text-foreground transition"
              >
                <Mail className="w-4 h-4" />
                <span>marshyasalsabilla@gmail.com</span>
              </a>
              <a
                href="https://wa.me/6285856814316"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-foreground transition"
              >
                <Phone className="w-4 h-4" />
                <span>+62 858-5681-4316</span>
              </a>
            </div>
          </div>
          <div className="md:col-span-4">
            <div
              className="relative aspect-[3/4] rounded-3xl overflow-hidden"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className="absolute inset-0" style={{ background: "var(--gradient-warm)" }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-[12rem] italic text-foreground/15 leading-none">
                  M
                </span>
              </div>
              <div
                className="absolute bottom-6 left-6 right-6 rounded-2xl bg-card/80 backdrop-blur p-4 text-sm"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="text-xs text-muted-foreground">Currently</div>
                <div className="mt-1 font-medium">Designing with Figma & code</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              01 — About
            </div>
            <h2 className="mt-3 font-display text-5xl">A little about me.</h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              I'm an Informatics Engineering student deeply interested in{" "}
              <em className="italic text-accent not-italic">frontend development</em> and design. I
              love turning ideas into clean, intuitive interfaces — the kind that feel effortless to
              use.
            </p>
            <p>
              My work sits at the intersection of code and craft. I'm currently exploring new
              technologies, sharpening my design skills, and building creative digital experiences
              that look as good as they work.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 bg-muted/40 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                02 — Skills
              </div>
              <h2 className="mt-3 font-display text-5xl">Tools & strengths.</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-5">
                Hard Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {hardSkills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-card border border-border px-5 py-2.5 text-sm hover:bg-secondary transition"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-5">
                Soft Skills
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {softSkills.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-2xl bg-card border border-border px-4 py-3"
                  >
                    <span
                      className="w-9 h-9 rounded-full flex items-center justify-center"
                      style={{ background: "var(--gradient-warm)" }}
                    >
                      <Icon className="w-4 h-4 text-foreground/70" />
                    </span>
                    <span className="text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-28 max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">
            03 — Selected Work
          </div>
          <h2 className="mt-3 font-display text-5xl md:text-6xl">Recent projects.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group rounded-3xl overflow-hidden bg-card border border-border hover:border-accent/50 transition"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      {p.tag}
                    </div>
                    <h3 className="mt-1 font-display text-3xl">{p.title}</h3>
                  </div>
                  <ArrowUpRight
                    className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition"
                    onClick={() => {
                      window.open(p.link, "_blank");
                    }}
                  />
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Certificates */}
      <section id="certificates" className="py-28 max-w-6xl mx-auto px-6">
        <div className="mb-14 flex items-end justify-between flex-wrap gap-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              03 — Certificates
            </div>
            <h2 className="mt-3 font-display text-5xl md:text-6xl">My certificates.</h2>
          </div>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {certificates.map((c) => (
            <div
              key={c.title}
              className="relative break-inside-avoid rounded-3xl overflow-hidden bg-card border border-border hover:border-accent/50 transition group cursor-pointer"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <img
                src={c.img}
                alt={c.title}
                loading="lazy"
                className="w-full h-auto object-cover transition duration-500 group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                <h3 className="p-5 text-sm md:text-base font-medium text-white translate-y-2 group-hover:translate-y-0 transition duration-300">
                  {c.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <a
            href="https://drive.google.com/drive/folders/11W-XwH2qZ194Nc8w8bALxyjmmUZ5hILd?hl=ID"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-8 py-4 text-base font-medium hover:opacity-90 transition"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <ExternalLink className="w-5 h-5" />
            Show more on Google Drive
          </a>
        </div>
      </section>

      {/* Experience & Education */}
      <section id="experience" className="py-28 bg-muted/40 border-y border-border">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              04 — Experience
            </div>
            <h2 className="mt-3 font-display text-4xl mb-10">Where I've worked.</h2>
            <div className="space-y-8">
              {experiences.map((e) => (
                <div key={e.role} className="relative pl-6 border-l-2 border-accent/40">
                  <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-accent" />
                  <div className="text-xs text-muted-foreground">{e.period}</div>
                  <div className="mt-1 font-medium">{e.role}</div>
                  <div className="text-sm text-foreground/70 italic">{e.org}</div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              05 — Education
            </div>
            <h2 className="mt-3 font-display text-4xl mb-10">My learning path.</h2>
            <div className="space-y-4">
              {education.map((ed) => (
                <div key={ed.school} className="rounded-2xl bg-card border border-border p-5">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <div className="font-medium">{ed.school}</div>
                      <div className="text-sm text-muted-foreground mt-0.5">{ed.program}</div>
                    </div>
                    <div className="text-xs text-muted-foreground whitespace-nowrap">
                      {ed.period}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">
            06 — Contact
          </div>
          <h2 className="mt-4 font-display text-6xl md:text-7xl leading-[1]">
            Let's build something <em className="italic text-accent">beautiful</em>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Have a project in mind, or just want to say hi? I'd love to hear from you.
          </p>
          <a
            href="mailto:marshyasalsabilla@gmail.com"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-8 py-4 text-base font-medium hover:opacity-90 transition"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <Mail className="w-5 h-5" />
            <span>marshyasalsabilla@gmail.com</span>
          </a>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            <a
              href="https://wa.me/6285856814316"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-2xl bg-card border border-border p-4 text-left hover:border-accent/50 transition"
            >
              <span
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "var(--gradient-warm)" }}
              >
                <Phone className="w-4 h-4 text-foreground/70" />
              </span>
              <div>
                <div className="text-sm font-medium">WhatsApp</div>
                <div className="text-xs text-muted-foreground">+62 858-5681-4316</div>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto group-hover:text-accent transition" />
            </a>
            <a
              href="https://www.instagram.com/mrshyaa___/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-2xl bg-card border border-border p-4 text-left hover:border-accent/50 transition"
            >
              <span
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "var(--gradient-warm)" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-foreground/70"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </span>
              <div>
                <div className="text-sm font-medium">Instagram</div>
                <div className="text-xs text-muted-foreground">@mrshyaa___</div>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto group-hover:text-accent transition" />
            </a>
            <a
              href="https://github.com/MarshyaCantek/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-2xl bg-card border border-border p-4 text-left hover:border-accent/50 transition"
            >
              <span
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "var(--gradient-warm)" }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-foreground/70">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c.851.004 1.705.115 2.504.337 2.292-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </span>
              <div>
                <div className="text-sm font-medium">GitHub</div>
                <div className="text-xs text-muted-foreground">MarshyaCantek</div>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto group-hover:text-accent transition" />
            </a>
            <a
              href="https://www.youtube.com/@marshyasalsabilla6714"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-2xl bg-card border border-border p-4 text-left hover:border-accent/50 transition"
            >
              <span
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "var(--gradient-warm)" }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-foreground/70">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </span>
              <div>
                <div className="text-sm font-medium">YouTube</div>
                <div className="text-xs text-muted-foreground">@marshyasalsabilla6714</div>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto group-hover:text-accent transition" />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-between items-center gap-3 text-sm text-muted-foreground">
          <div>© 2026 Marshya Salsabilla.</div>
          <div>Designed & built with care in Malang.</div>
        </div>
      </footer>
    </div>
  );
}
