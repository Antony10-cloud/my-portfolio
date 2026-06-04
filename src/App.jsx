import profile from "./assets/profile.png";

const projects = [
  {
    title: "Stema Piustu Advent Booking System",
    label: "Android app + admin portal",
    summary:
      "A travel and logistics business needed a cleaner way to receive bookings, manage requests, and keep records without losing speed. I turned that problem into a branded customer app and a live admin portal.",
    outcome:
      "The result is a practical workflow for hike bookings, private transport, moving-service quotes, WhatsApp handoff, Google Sheets storage, secure admin login, booking management, and report export.",
    tags: ["React", "Android", "Google Sheets", "Vercel"],
    links: [
      {
        href: "https://stema-piustu-advent-admin.vercel.app",
        label: "View Admin Portal",
        primary: true,
      },
      {
        href: "/StemaPiustuAdvent.apk",
        label: "Download APK",
        download: true,
      },
    ],
  },
  {
    title: "Airbnb Market Analysis Dashboard",
    label: "Tableau dashboard",
    summary:
      "Short-term rental data can feel noisy until the right questions are asked. I explored Airbnb listings through pricing, location, and revenue signals to make the market easier to understand.",
    outcome:
      "The dashboard helps viewers compare trends, spot revenue opportunities, and move from scattered listings to clearer investment or hosting decisions.",
    tags: ["Tableau", "Data visualization", "Market analysis"],
    links: [
      {
        href: "https://public.tableau.com/views/AirBnBProject_17721908016270/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
        label: "View Dashboard",
        primary: true,
      },
    ],
  },
  {
    title: "SQL Customer Analysis",
    label: "Portfolio build",
    summary:
      "Customer behavior tells a story before revenue changes show up. This developing SQL project focuses on the patterns behind retention, purchasing behavior, and churn risk.",
    outcome:
      "The goal is to turn customer records into business questions leaders can act on: who is staying, who is drifting, and what signals deserve attention.",
    tags: ["SQL", "Customer analytics", "Retention"],
    links: [{ label: "Coming Soon" }],
  },
];

const skillGroups = [
  {
    title: "Data Analysis",
    items: ["Excel", "SQL", "Python", "Power BI", "Tableau"],
  },
  {
    title: "Operations",
    items: ["Research", "Communication", "Admin support", "Productivity tools"],
  },
  {
    title: "Digital Builds",
    items: ["Booking systems", "Admin portals", "Workflow tools", "Reports"],
  },
];

const stats = [
  ["3", "Portfolio projects"],
  ["ALX", "Certified VA"],
  ["5+", "Analytics tools"],
];

const storySteps = [
  {
    title: "I start with the messy question.",
    text: "Every useful project begins with uncertainty: bookings scattered across messages, listings that are hard to compare, or customer records that do not yet explain behavior.",
  },
  {
    title: "Then I organize the moving parts.",
    text: "I break the problem into data, workflow, user needs, and decisions. That is where analysis and virtual-assistant discipline meet.",
  },
  {
    title: "Finally, I build something people can use.",
    text: "A dashboard, a portal, a report, or a cleaner process should make the next decision easier for the person using it.",
  },
];

export default function PortfolioWebsite() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-[#101214] text-white font-sans">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#101214]/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-left"
            aria-label="Back to top"
          >
            <span className="block text-sm font-semibold uppercase tracking-wide text-emerald-300">
              Antony Mugo
            </span>
            <span className="text-xs text-zinc-400">Data Analyst Portfolio</span>
          </button>

          <div className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
            <button onClick={() => scrollToSection("bio")} className="hover:text-white">
              Bio
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-white"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="hover:text-white"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-white"
            >
              Contact
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#101214_0%,#172019_42%,#29251a_100%)]" />
          <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1.25fr_0.75fr] md:px-8 md:py-20">
            <div>
              <p className="mb-4 inline-flex border border-emerald-300/30 bg-emerald-300/10 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-emerald-200">
                Aspiring Data Analyst | ALX Certified Virtual Assistant
              </p>

              <h1 className="max-w-3xl text-5xl font-bold leading-tight text-white md:text-7xl">
                I find the signal inside messy business problems.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-200">
                I am Antony Mugo. I combine data analysis, research, and
                practical digital tools to help teams understand what is
                happening, decide what matters, and act with more confidence.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="bg-emerald-300 px-5 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-950/40 transition hover:bg-emerald-200"
                >
                  View Projects
                </button>

                <a
                  href="/Antony_Mugo_CV.pdf"
                  download
                  className="border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-amber-300 hover:text-amber-200"
                >
                  Download CV
                </a>

                <button
                  onClick={() => scrollToSection("contact")}
                  className="border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-sky-300 hover:text-sky-200"
                >
                  Contact Me
                </button>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-3 border border-white/10 bg-black/20">
                {stats.map(([value, label]) => (
                  <div key={label} className="border-r border-white/10 p-4 last:border-r-0">
                    <p className="text-2xl font-bold text-amber-200">{value}</p>
                    <p className="mt-1 text-xs text-zinc-300">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative w-full max-w-sm justify-self-center md:justify-self-end">
              <div className="absolute -left-4 top-8 h-32 w-2 bg-emerald-300" />
              <div className="absolute -right-3 bottom-12 h-24 w-2 bg-amber-300" />
              <div className="border border-white/15 bg-zinc-950 p-3 shadow-2xl">
                <img
                  src={profile}
                  alt="Antony Mugo"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
              <div className="mt-4 border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">
                  My work sits where data, operations, and real-world business
                  needs meet.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="bio" className="px-5 py-20 md:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                About
              </p>
              <h2 className="mt-3 text-4xl font-bold text-white">
                From admin discipline to analytical thinking.
              </h2>
            </div>

            <div className="border-l border-white/10 pl-6">
              <p className="text-lg leading-8 text-zinc-300">
                My path into data started with a simple belief: good decisions
                need clear information and organized execution. As an ALX
                Certified Virtual Assistant, I learned how to support work with
                structure, communication, research, and follow-through.
              </p>
              <p className="mt-5 text-lg leading-8 text-zinc-300">
                Now I am building that foundation into data analysis. I use
                Excel, SQL, Python, Power BI, and Tableau to ask better
                questions, uncover patterns, and create tools that help people
                move from confusion to action.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#171a1d] px-5 py-20 md:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-amber-200">
                How I Think
              </p>
              <h2 className="mt-3 text-4xl font-bold">
                The thread running through my work is clarity.
              </h2>
              <p className="mt-5 text-lg leading-8 text-zinc-300">
                I am not only interested in charts or tools. I care about the
                moment when a person looks at information and finally knows what
                to do next.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {storySteps.map((step, index) => (
                <article
                  key={step.title}
                  className="border border-white/10 bg-white/[0.04] p-6"
                >
                  <p className="text-sm font-bold text-emerald-300">
                    0{index + 1}
                  </p>
                  <h3 className="mt-5 text-xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-4 leading-7 text-zinc-300">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="bg-[#f3efe7] px-5 py-20 text-zinc-950 md:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-800">
                  Selected Work
                </p>
                <h2 className="mt-3 text-4xl font-bold">Projects with a before and after.</h2>
              </div>
              <p className="max-w-xl text-zinc-700">
                Each project starts with a practical problem and ends with a
                clearer way to understand, manage, or act on it.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className="flex min-h-[420px] flex-col justify-between border border-zinc-300 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-zinc-900 hover:shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                        {project.label}
                      </span>
                      <span className="text-sm font-bold text-emerald-700">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-5 text-2xl font-bold leading-tight">
                      {project.title}
                    </h3>
                    <p className="mt-4 leading-7 text-zinc-700">{project.summary}</p>
                    <p className="mt-4 border-l-2 border-emerald-500 pl-4 leading-7 text-zinc-800">
                      {project.outcome}
                    </p>
                  </div>

                  <div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.links.map((link) =>
                        link.href ? (
                          <a
                            key={link.label}
                            href={link.href}
                            download={link.download}
                            target={link.download ? undefined : "_blank"}
                            rel={link.download ? undefined : "noreferrer"}
                            className={
                              link.primary
                                ? "bg-zinc-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
                                : "border border-zinc-300 px-4 py-3 text-sm font-semibold text-zinc-900 transition hover:border-zinc-950"
                            }
                          >
                            {link.label}
                          </a>
                        ) : (
                          <span
                            key={link.label}
                            className="border border-zinc-300 px-4 py-3 text-sm font-semibold text-zinc-500"
                          >
                            {link.label}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="px-5 py-20 md:px-8">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-200">
              Toolkit
            </p>
            <h2 className="mt-3 text-4xl font-bold">Skills that connect thinking and execution.</h2>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {skillGroups.map((group) => (
                <div key={group.title} className="border border-white/10 bg-white/[0.04] p-6">
                  <h3 className="text-xl font-bold text-white">{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="border border-white/10 bg-black/20 px-3 py-2 text-sm text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="elevator-pitch" className="border-y border-white/10 bg-[#171a1d] px-5 py-20 md:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-sky-200">
                Elevator Pitch
              </p>
              <h2 className="mt-3 text-4xl font-bold">The next chapter: my voice.</h2>
            </div>
            <div className="border border-dashed border-sky-200/30 bg-sky-200/5 p-8">
              <p className="text-lg leading-8 text-zinc-300">
                This section will feature a short video explaining where I am
                coming from, what I am building toward, and why I care about
                using data to make work clearer, faster, and more useful.
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
              Recommendations
            </p>
            <h2 className="mt-3 text-4xl font-bold">What collaborators notice.</h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <figure className="border border-white/10 bg-white/[0.04] p-6">
                <blockquote className="text-lg leading-8 text-zinc-300">
                  "Antony is reliable, curious, and committed to learning. He
                  brings a strong work ethic and a positive attitude to every
                  project."
                </blockquote>
                <figcaption className="mt-5 font-semibold text-emerald-300">
                  Peer Recommendation
                </figcaption>
              </figure>

              <figure className="border border-white/10 bg-white/[0.04] p-6">
                <blockquote className="text-lg leading-8 text-zinc-300">
                  "Antony demonstrates strong communication, organization, and
                  problem-solving skills, especially in team projects."
                </blockquote>
                <figcaption className="mt-5 font-semibold text-amber-200">
                  Team Member Recommendation
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-emerald-300 px-5 py-20 text-zinc-950 md:px-8">
          <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-950/70">
                Contact
              </p>
              <h2 className="mt-3 text-4xl font-bold">Bring me a messy problem.</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-800">
                I am open to internships, entry-level data analytics roles,
                digital solution projects, and professional collaborations
                where clear thinking and reliable execution matter.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:antonymugo66@gmail.com"
                className="bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
              >
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/antonymugo/"
                target="_blank"
                rel="noreferrer"
                className="border border-zinc-950 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-200"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Antony10-cloud"
                target="_blank"
                rel="noreferrer"
                className="border border-zinc-950 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-200"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#101214] px-5 py-6 md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 text-sm text-zinc-500 md:flex-row">
          <p>Copyright 2026 Antony Mugo. All rights reserved.</p>
          <p>Built with React, Tailwind CSS, GitHub, and Vercel.</p>
        </div>
      </footer>
    </div>
  );
}
