import profile from "./assets/profile.png";

export default function PortfolioWebsite() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Hero Section */}
      <section className="px-8 md:px-20 py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <div>
            <p className="text-cyan-400 font-semibold tracking-wide uppercase mb-3">
              Aspiring Data Analyst
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Antony Mugo
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Passionate about transforming data into actionable insights that
              help businesses and organizations make smarter decisions.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToProjects}
                className="bg-cyan-500 hover:bg-cyan-400 transition px-6 py-3 rounded-2xl font-medium shadow-lg"
              >
                View Projects
              </button>

              <button
                onClick={scrollToContact}
                className="border border-slate-600 hover:border-cyan-400 transition px-6 py-3 rounded-2xl font-medium"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Photo Section */}
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

      {/* About Section */}
      <section id="about" className="px-8 md:px-20 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-lg">
            <p className="text-slate-300 text-lg leading-relaxed">
              I am an aspiring Data Analyst currently building my skills in Excel, SQL,
              Python, Power BI, and Tableau through ALX. I am also an ALX Certified
              Virtual Assistant, with training in communication, calendar management,
              research, and productivity tools. I enjoy solving real-world problems using
              data and creating insights that help businesses make smarter decisions.
            </p>
          </div>
        </div>
      </section>

{/* Projects Section */}
<section id="projects" className="px-8 md:px-20 py-24">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-4xl font-bold mb-8">Featured Projects</h2>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Tableau Project */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-lg hover:border-cyan-400 transition">
        <h3 className="text-2xl font-semibold mb-3">
          Airbnb Market Analysis Dashboard
        </h3>

        <p className="text-slate-300 leading-relaxed mb-4">
          Built an interactive Tableau dashboard analyzing Airbnb listings,
          pricing trends, and revenue opportunities to help hosts and investors
          identify the most profitable neighborhoods.
        </p>

        <a
          href="https://public.tableau.com/views/AirBnBProject_17721908016270/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-cyan-500 hover:bg-cyan-400 transition px-5 py-2 rounded-xl font-medium"
        >
          View Dashboard
        </a>
      </div>

      {/* SQL Project */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-lg hover:border-cyan-400 transition">
        <h3 className="text-2xl font-semibold mb-3">
          SQL Customer Analysis
        </h3>

        <p className="text-slate-300 leading-relaxed">
          Used SQL queries to uncover insights on customer retention,
          purchasing patterns, and churn risk.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section
        id="contact"
        className="px-8 md:px-20 py-20 text-center bg-slate-900"
      >
        <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>

        <p className="text-slate-300 mb-8 text-lg">
          I'm open to internships and entry-level opportunities in Data
          Analytics.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {/* Email Button */}
          <a
            href="mailto:antonymugo66@gmail.com"
            className="inline-block bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 rounded-2xl font-medium shadow-lg"
          >
            Email Me
          </a>

          {/* LinkedIn Button - Replace with your actual LinkedIn URL */}
          <a
            href="https://www.linkedin.com/in/antonymugo"
            target="_blank"
            rel="noreferrer"
            className="inline-block border border-slate-600 hover:border-cyan-400 hover:text-cyan-400 transition px-8 py-4 rounded-2xl font-medium"
          >
            LinkedIn
          </a>

          {/* GitHub Button */}
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