import profile from "./assets/profile.png";

export default function PortfolioWebsite() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Main Page */}
      <section className="px-8 md:px-20 py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-cyan-400 font-semibold tracking-wide uppercase mb-3">
              Aspiring Data Analyst | ALX Certified Virtual Assistant
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Antony Mugo
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              I transform data into clear insights and build practical digital
              solutions that help businesses work smarter.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("bio")}
                className="bg-cyan-500 hover:bg-cyan-400 transition px-6 py-3 rounded-2xl font-medium shadow-lg"
              >
                My Bio
              </button>

              <button
                onClick={() => scrollToSection("projects")}
                className="border border-slate-600 hover:border-cyan-400 transition px-6 py-3 rounded-2xl font-medium"
              >
                Portfolio
              </button>

              <button
                onClick={() => scrollToSection("elevator-pitch")}
                className="border border-slate-600 hover:border-cyan-400 transition px-6 py-3 rounded-2xl font-medium"
              >
                Elevator Pitch
              </button>

              <button
                onClick={() => scrollToSection("resume")}
                className="border border-slate-600 hover:border-cyan-400 transition px-6 py-3 rounded-2xl font-medium"
              >
                Download CV
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
              <img
                src={profile}
                alt="Antony Mugo"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section id="bio" className="px-8 md:px-20 py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">My Bio</h2>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-lg">
            <p className="text-slate-300 text-lg leading-relaxed">
              Antony Mugo is an aspiring Data Analyst and ALX Certified Virtual
              Assistant passionate about using data and technology to solve
              real-world problems. He is currently building skills in Excel,
              SQL, Python, Power BI, Tableau, research, communication, and
              productivity tools. Antony also builds practical digital solutions
              such as booking systems, admin portals, and business workflow
              tools. He aims to use data analysis and technology to help
              organizations make smarter decisions while contributing to
              meaningful work in areas such as job creation, tourism, education,
              and business intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="projects" className="px-8 md:px-20 py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">My Portfolio</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Stema Piustu Advent Project */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 shadow-lg hover:border-cyan-400 transition">
              <h3 className="text-2xl font-semibold mb-3">
                Stema Piustu Advent Booking System
              </h3>

              <p className="text-slate-300 leading-relaxed mb-5">
                Built a branded Android customer booking app and live admin web
                portal for a travel and logistics business. The system supports
                hike bookings, private transport requests, moving service
                quotes, WhatsApp booking integration, Google Sheets storage,
                secure admin login, booking management, service management, and
                report export.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://stema-piustu-advent-admin.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-cyan-500 hover:bg-cyan-400 transition px-5 py-3 rounded-xl font-medium"
                >
                  View Admin Portal
                </a>

                <a
                  href="/StemaPiustuAdvent.apk"
                  download
                  className="inline-block border border-slate-600 hover:border-cyan-400 hover:text-cyan-400 transition px-5 py-3 rounded-xl font-medium"
                >
                  Download APK
                </a>
              </div>
            </div>

            {/* Tableau Project */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 shadow-lg hover:border-cyan-400 transition">
              <h3 className="text-2xl font-semibold mb-3">
                Airbnb Market Analysis Dashboard
              </h3>

              <p className="text-slate-300 leading-relaxed mb-5">
                Created an interactive Tableau dashboard analyzing Airbnb
                listings, pricing trends, and revenue opportunities.
              </p>

              <a
                href="https://public.tableau.com/views/AirBnBProject_17721908016270/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-cyan-500 hover:bg-cyan-400 transition px-5 py-3 rounded-xl font-medium"
              >
                View Tableau Dashboard
              </a>
            </div>

            {/* SQL Project */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 shadow-lg hover:border-cyan-400 transition">
              <h3 className="text-2xl font-semibold mb-3">
                SQL Customer Analysis
              </h3>

              <p className="text-slate-300 leading-relaxed mb-5">
                Used SQL queries to explore customer retention, purchasing
                patterns, and churn risk. This project is currently being
                developed as part of my data analytics portfolio.
              </p>

              <span className="inline-block border border-slate-600 px-5 py-3 rounded-xl text-slate-300">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Elevator Pitch */}
      <section id="elevator-pitch" className="px-8 md:px-20 py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Elevator Pitch</h2>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-lg">
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Coming soon! This section will feature a short video introducing
              my background, my skills, and the value I can bring to employers
              as an aspiring Data Analyst and digital solutions builder.
            </p>

            <div className="bg-slate-950 border border-dashed border-slate-700 rounded-2xl p-10 text-center">
              <p className="text-slate-400">
                Elevator pitch video placeholder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="px-8 md:px-20 py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">
            Testimonials & Recommendations
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 shadow-lg">
              <p className="text-slate-300 leading-relaxed mb-4">
                “Antony is reliable, curious, and committed to learning. He
                brings a strong work ethic and a positive attitude to every
                project.”
              </p>

              <p className="text-cyan-400 font-semibold">
                — Peer Recommendation
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 shadow-lg">
              <p className="text-slate-300 leading-relaxed mb-4">
                “Antony demonstrates strong communication, organization, and
                problem-solving skills, especially in team projects.”
              </p>

              <p className="text-cyan-400 font-semibold">
                — Team Member Recommendation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resume */}
      <section id="resume" className="px-8 md:px-20 py-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Download My CV</h2>

          <p className="text-slate-300 text-lg mb-8">
            View or download my resume to learn more about my education, skills,
            certifications, and experience.
          </p>

          <a
            href="/Antony_Mugo_CV.pdf"
            download
            className="inline-block bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 rounded-2xl font-medium shadow-lg"
          >
            Download CV
          </a>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="px-8 md:px-20 py-20 text-center bg-slate-900"
      >
        <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>

        <p className="text-slate-300 mb-8 text-lg">
          I'm open to internships, entry-level data analytics roles, digital
          solution projects, and professional collaborations.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:antonymugo66@gmail.com"
            className="inline-block bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 rounded-2xl font-medium shadow-lg"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/antonymugo/"
            target="_blank"
            rel="noreferrer"
            className="inline-block border border-slate-600 hover:border-cyan-400 hover:text-cyan-400 transition px-8 py-4 rounded-2xl font-medium"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Antony10-cloud"
            target="_blank"
            rel="noreferrer"
            className="inline-block border border-slate-600 hover:border-cyan-400 hover:text-cyan-400 transition px-8 py-4 rounded-2xl font-medium"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-6">
        <div className="max-w-6xl mx-auto px-8 md:px-20 text-center">
          <p className="text-slate-500 text-sm">
            © 2026 Antony Mugo. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}