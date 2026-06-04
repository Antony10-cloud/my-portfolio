import profile from "./assets/profile.png";

const projects = [
  {
    title: "Stema Piustu Advent Booking System",
    label: "Android app + admin portal",
    summary:
      "A branded booking product for hikes, private transport, and moving-service requests with WhatsApp booking flow, Google Sheets storage, secure admin login, booking management, and report export.",
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
      "An interactive Tableau dashboard exploring Airbnb listings, pricing trends, neighborhood patterns, and revenue opportunities for short-term rental decisions.",
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
      "A developing analysis project using SQL to explore customer retention, purchasing behavior, churn risk, and business questions that support smarter decision-making.",
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
          <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:py-20">
            <div>
              <p className="mb-4 inline-flex border border-emerald-300/30 bg-emerald-300/10 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-emerald-200">
                Aspiring Data Analyst | ALX Certified Virtual Assistant
              </p>

              <h1 className="max-w-3xl text-5xl font-bold leading-tight text-white md:text-7xl">
                I turn raw information into clear business action.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-200">
                I am Antony Mugo, a data analyst and digital solutions builder
                focused on dashboards, research, workflow tools, and practical
                systems that help teams work smarter.
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

            <div className="relative">
              <div className="absolute -left-5 top-8 h-40 w-3 bg-emerald-300" />
              <div className="absolute -right-4 bottom-12 h-28 w-3 bg-amber-300" />
              <div className="border border-white/15 bg-zinc-950 p-3 shadow-2xl">
                <img
                  src={profile}
                  alt="Antony Mugo"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
              <div className="mt-4 border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">
                  Available for internships, entry-level data roles, and
                  practical digital solution projects.
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
                Curious, practical, and business-minded.
              </h2>
            </div>

            <div className="border-l border-white/10 pl-6">
              <p className="text-lg leading-8 text-zinc-300">
                Antony Mugo is an aspiring Data Analyst and ALX Certified
                Virtual Assistant passionate about using data and technology to
                solve real-world problems. He is building skills in Excel, SQL,
                Python, Power BI, Tableau, research, communication, and
                productivity tools.
              </p>
              <p className="mt-5 text-lg leading-8 text-zinc-300">
                He also builds digital solutions such as booking systems, admin
                portals, and business workflow tools, with a focus on job
                creation, tourism, education, and business intelligence.
              </p>
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
                <h2 className="mt-3 text-4xl font-bold">Projects with proof.</h2>
              </div>
              <p className="max-w-xl text-zinc-700">
                A mix of analytics work and practical systems that show how I
                approach real business problems.
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
            <h2 className="mt-3 text-4xl font-bold">Skills that connect analysis and execution.</h2>

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
              <h2 className="mt-3 text-4xl font-bold">A short intro is coming next.</h2>
            </div>
            <div className="border border-dashed border-sky-200/30 bg-sky-200/5 p-8">
              <p className="text-lg leading-8 text-zinc-300">
                This section will feature a short video introducing my
                background, my skills, and the value I can bring to employers
                as an aspiring Data Analyst and digital solutions builder.
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
              <h2 className="mt-3 text-4xl font-bold">Let's build something useful.</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-800">
                I am open to internships, entry-level data analytics roles,
                digital solution projects, and professional collaborations.
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
