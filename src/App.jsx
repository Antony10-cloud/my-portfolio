import profile from "./assets/profile.png";

export default function PortfolioWebsite() {
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
              <a
                href="#projects"
                className="bg-cyan-500 hover:bg-cyan-400 transition px-6 py-3 rounded-2xl font-medium"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-slate-600 hover:border-cyan-400 transition px-6 py-3 rounded-2xl font-medium"
              >
                Contact Me
              </a>
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
      <section className="px-8 md:px-20 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-lg">
            <p className="text-slate-300 text-lg leading-relaxed">
              I am an aspiring Data Analyst currently building my skills in
              Excel, SQL, Python, and Power BI through ALX. I enjoy solving
              real-world problems using data and creating insights that improve
              decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 md:px-20 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
        <p className="text-slate-300 mb-8">
          I'm open to internships and entry-level opportunities in Data
          Analytics.
        </p>

        <a
          href="mailto:your.email@example.com"
          className="bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 rounded-2xl font-medium"
        >
          Email Me
        </a>
      </section>
    </div>
  );
}