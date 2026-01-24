import { ArrowRight, Layers, LineChart, Code2, Calendar, Cloud, Mail, Github, Linkedin, MapPin, FileText } from "lucide-react"

const WORK_HISTORY = [
  {
    company: "JLL (Client: Google)",
    role: "Lead Software Engineer (Platform-Focused)",
    dates: "2020 – Present",
    description: "Technical owner for frontend and system architecture of a complex enterprise web application supporting Google projects.",
    achievements: [
      "Drive architectural decisions balancing performance, complexity, and evolving business requirements.",
      "Own CI/CD pipelines and DevOps workflows, improving deployment reliability and developer efficiency.",
      "Lead continuous system improvement through refactoring and optimization rather than just feature delivery.",
      "Mentor engineers providing architectural guidance and design reviews."
    ]
  },
  {
    company: "EY Digital",
    role: "Senior UI / UX Developer",
    dates: "2018 – 2020",
    description: "Delivered large-scale enterprise and government web platforms with complex regulatory requirements.",
    achievements: [
      "Designed scalable frontend architectures and reusable component systems.",
      "Collaborated with backend and product teams to ensure maintainability and performance.",
      "Contributed to shared frontend standards and documentation across projects."
    ]
  },
  {
    company: "Adelphi Digital",
    role: "UI / UX Developer",
    dates: "2017 – 2018",
    description: "Built responsive, production-grade web applications for enterprise clients.",
    achievements: [
      "Ensured performance optimisation, accessibility, and cross-browser compatibility.",
      "Delivered enterprise digital solutions within cross-functional teams."
    ]
  },
  {
    company: "Freelance",
    role: "Software Engineer (Full Stack / Systems)",
    dates: "2014 – Present",
    description: "Delivering end-to-end software solutions, owning system design and deployment.",
    achievements: [
      "Built full-stack systems using MERN stack, Electron desktop applications, and custom dashboards.",
      "Designed backend APIs, authentication flows, data models, and frontend systems."
    ]
  }
]

const SKILLS = [
  {
    category: "Languages & Frameworks",
    icon: Code2,
    items: ["JavaScript", "TypeScript", "Python", "Angular", "React", "HTML", "CSS", "SASS"]
  },
  {
    category: "Platform & Tooling",
    icon: Cloud,
    items: ["CI/CD pipelines", "DevOps workflows", "Monitoring", "Production Support"]
  },
  {
    category: "Systems & Architecture",
    icon: Layers,
    items: ["Frontend Systems", "API Integrations", "Data Visualisation", "Enterprise CMS"]
  }
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-8 relative z-10 transition-colors duration-500 space-y-32">
      {/* Hero */}
      <section className="flex max-w-3xl flex-col gap-6 pt-12">
        <h1 className="text-5xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-7xl">
          Akhil Prasenan
        </h1>
        <h2 className="text-2xl font-medium text-[var(--text-secondary)] sm:text-3xl">
          Lead / Principal-track Full Stack Engineer
        </h2>
        <p className="max-w-xl text-lg text-[var(--text-muted)]">
          Specializing in scalable architecture, developer experience, and product-led engineering. 
          I build systems that grow with the business.
        </p>
        
        <div className="flex flex-wrap gap-4 mt-4">
          <a
            href="#work" 
            className="inline-flex items-center rounded-md bg-[var(--text-primary)] px-5 py-2.5 text-sm font-medium text-[var(--bg-color)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            View Work History <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a 
            href="/resume.pdf" 
            className="inline-flex items-center rounded-md border border-white/10 bg-white/5 dark:bg-white/5 dark:text-white light:bg-black/5 light:text-black light:border-black/10 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-white/10"
          >
            Download Resume
          </a>
          <a
            href="#contact" 
            className="inline-flex items-center rounded-md px-5 py-2.5 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
          >
            Contact
          </a>
        </div>
      </section>

      {/* Proof Grid */}
      <section className="grid gap-6 sm:grid-cols-3">
        <div className="group glass-card p-6">
          <Layers className="mb-4 h-8 w-8 text-[#4facfe]" />
          <h3 className="mb-2 text-lg font-bold text-[var(--text-primary)]">Architecture</h3>
          <p className="text-sm text-[var(--text-secondary)]">Designing fault-tolerant distributed systems and scalable data models.</p>
        </div>
        <div className="group glass-card p-6">
          <Code2 className="mb-4 h-8 w-8 text-[#00f2fe]" />
          <h3 className="mb-2 text-lg font-bold text-[var(--text-primary)]">DX & CI/CD</h3>
          <p className="text-sm text-[var(--text-secondary)]">Optimizing build pipelines and creating tooling that developers love.</p>
        </div>
        <div className="group glass-card p-6">
          <LineChart className="mb-4 h-8 w-8 text-[#4facfe]" />
          <h3 className="mb-2 text-lg font-bold text-[var(--text-primary)]">Data-Heavy Apps</h3>
          <p className="text-sm text-[var(--text-secondary)]">Handling high throughput and visualizing complex datasets seamlessly.</p>
        </div>
      </section>

      {/* Toolbox Section */}
      <section id="toolbox" className="scroll-mt-24">
        <div className="mb-12 max-w-2xl">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[var(--text-primary)]">Toolbox</h2>
          <p className="text-lg text-[var(--text-secondary)]">
            The technologies and tools I rely on to build scalable, production-ready software.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((group) => (
            <div key={group.category} className="glass-card p-8">
              <div className="mb-6 flex items-center gap-3">
                <group.icon className="h-6 w-6 text-[#4facfe]" />
                <h2 className="text-xl font-bold text-[var(--text-primary)]">{group.category}</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map(skill => (
                  <span key={skill} className="rounded-md border border-[var(--glass-border)] bg-[var(--glass-bg)] px-3 py-1.5 text-sm text-[var(--text-secondary)]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Work History Section */}
      <section id="work" className="scroll-mt-24">
        <h2 className="mb-16 text-3xl font-bold tracking-tight text-[var(--text-primary)]">Work History</h2>
        <div className="relative border-l border-[var(--glass-border)] pl-8 ml-4 space-y-16 max-w-3xl">
          {WORK_HISTORY.map((job, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[41px] top-0 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--bg-color)] backdrop-blur-sm ring-1 ring-[var(--glass-border)] transition-colors duration-500">
                <div className="h-2 w-2 rounded-full bg-[#4facfe]" />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl font-bold text-[var(--text-primary)]">{job.company}</h3>
                <div className="mt-1 flex items-center text-sm font-medium text-[var(--text-muted)] sm:mt-0">
                  <Calendar className="mr-1.5 h-3.5 w-3.5" />
                  {job.dates}
                </div>
              </div>
              <div className="mt-2 text-lg font-medium text-[#4facfe]">{job.role}</div>
              <p className="mt-4 text-[var(--text-secondary)]">{job.description}</p>
              <ul className="mt-6 space-y-3">
                {job.achievements.map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-[var(--text-secondary)]">
                    <span className="mr-3 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--text-muted)] opacity-50" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-24 pb-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-3xl font-bold text-[var(--text-primary)]">Get in Touch</h2>
            <p className="text-lg text-[var(--text-secondary)]">
              I'm currently looking for new opportunities as a Staff or Principal Engineer. 
              If you have an interesting problem to solve, I'd love to hear about it.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a 
              href="mailto:hello@akhil.dev" 
              className="group flex flex-col items-center justify-center glass-card p-8 hover:border-[#4facfe]/50 hover:bg-[#4facfe]/5"
            >
              <Mail className="mb-4 h-8 w-8 text-[var(--text-muted)] transition-colors group-hover:text-[#4facfe]" />
              <h3 className="mb-1 font-bold text-[var(--text-primary)]">Email</h3>
              <p className="text-xs text-[var(--text-secondary)]">hello@akhil.dev</p>
            </a>
            <a 
              href="https://linkedin.com/in/akhilprasenan" 
              target="_blank" 
              rel="noreferrer"
              className="group flex flex-col items-center justify-center glass-card p-8 hover:border-[#0077b5]/50 hover:bg-[#0077b5]/5"
            >
              <Linkedin className="mb-4 h-8 w-8 text-[var(--text-muted)] transition-colors group-hover:text-[#0077b5]" />
              <h3 className="mb-1 font-bold text-[var(--text-primary)]">LinkedIn</h3>
              <p className="text-xs text-[var(--text-secondary)]">Connect with me</p>
            </a>
            <a 
              href="https://github.com/akhilprasenan" 
              target="_blank" 
              rel="noreferrer"
              className="group flex flex-col items-center justify-center glass-card p-8 hover:border-[#e6edf3]/50 hover:bg-[#e6edf3]/5 dark:hover:bg-white/5 light:hover:bg-black/5"
            >
              <Github className="mb-4 h-8 w-8 text-[var(--text-muted)] transition-colors group-hover:text-[var(--text-primary)]" />
              <h3 className="mb-1 font-bold text-[var(--text-primary)]">GitHub</h3>
              <p className="text-xs text-[var(--text-secondary)]">Check out my code</p>
            </a>
            <a 
              href="/resume.pdf"
              className="group flex flex-col items-center justify-center glass-card p-8 hover:border-green-500/50 hover:bg-green-500/5"
            >
              <FileText className="mb-4 h-8 w-8 text-[var(--text-muted)] transition-colors group-hover:text-green-500" />
              <h3 className="mb-1 font-bold text-[var(--text-primary)]">Resume</h3>
              <p className="text-xs text-[var(--text-secondary)]">Download PDF</p>
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center text-[var(--text-muted)]">
            <MapPin className="mr-2 h-4 w-4" />
            <span>Singapore (Open to Remote)</span>
          </div>
        </div>
      </section>
    </div>
  )
}
