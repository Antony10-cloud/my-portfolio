export default function PortfolioWebsite() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Hero Section */}
      <section className="px-8 md:px-20 py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-cyan-400 font-semibold tracking-wide uppercase mb-3">
              Aspiring Data Analyst
            </p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Antony Mugo
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Passionate about transforming data into actionable insights that help businesses and organizations make smarter decisions.
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

          <div className="flex justify-center">
            <div className="w-72 h-72 rounded-3xl bg-slate-800 shadow-2xl flex items-center justify-center border border-slate-700">
              <span className="text-slate-400 text-lg">Your Photo Here</span>
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
              I am an aspiring Data Analyst currently building my skills in Excel, SQL, Python, Power BI, and data visualization through ALX. I enjoy solving real-world problems using data and creating meaningful insights that improve decision-making.
            </p>

            <p className="text-slate-300 text-lg leading-relaxed mt-6">
              My goal is to work with innovative teams where I can continue learning, grow professionally, and contribute to impactful projects in industries such as healthcare, education, and business intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-8 md:px-20 py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Skills</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Excel & Google Sheets",
              "SQL",
              "Python Basics",
              "Power BI",
              "Data Visualization",
              "Problem Solving",
              "Communication",
              "Research & Analysis",
              "Critical Thinking",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-cyan-400 transition"
              >
                <p className="text-lg font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-8 md:px-20 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Projects</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition duration-300"
              >
                <div className="h-48 bg-slate-800 flex items-center justify-center text-slate-500">
                  Project Image
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">
                    Data Project {project}
                  </h3>

                  <p className="text-slate-300 leading-relaxed mb-6">
                    A data analytics project focused on extracting insights, creating dashboards, and visualizing trends using modern analytics tools.
                  </p>

                  <button className="bg-cyan-500 hover:bg-cyan-400 transition px-5 py-3 rounded-xl font-medium">
                    View Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-8 md:px-20 py-20 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Education & Experience</h2>

          <div className="space-y-8">
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-2">ALX Professional Foundations</h3>
              <p className="text-cyan-400 mb-4">2026 - Present</p>
              <p className="text-slate-300 leading-relaxed">
                Developing professional, technical, teamwork, and communication skills with a focus on Data Analytics and problem-solving.
              </p>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-2">Self-Learning & Personal Projects</h3>
              <p className="text-cyan-400 mb-4">Ongoing</p>
              <p className="text-slate-300 leading-relaxed">
                Continuously improving technical knowledge through online courses, projects, and practical exercises in analytics and visualization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 md:px-20 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let’s Connect</h2>

          <p className="text-slate-300 text-lg leading-relaxed mb-10">
            I’m currently open to internships, collaborations, and entry-level opportunities in Data Analytics.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a
              href="mailto:antonymugo66@gmail.com"
              className="bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 rounded-2xl font-medium"
            >
              Email Me
            </a>

            <a
              href="www.linkedin.com/in/antonymugo"
              target="_blank"
              className="border border-slate-600 hover:border-cyan-400 transition px-8 py-4 rounded-2xl font-medium"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
        © 2026 Antony Mugo. All rights reserved.
      </footer>
    </div>
  );
}
