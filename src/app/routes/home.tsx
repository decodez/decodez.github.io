import { Link } from "react-router-dom"
import { ArrowRight, Layers, LineChart, Code2 } from "lucide-react"

export default function Home() {

  return (
    <div className="container mx-auto px-4 py-16 sm:px-8 relative z-10 transition-colors duration-500">
      {/* Hero */}
      <section className="mb-24 flex max-w-3xl flex-col gap-6">
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
          <Link 
            to="/work" 
            className="inline-flex items-center rounded-md bg-[var(--text-primary)] px-5 py-2.5 text-sm font-medium text-[var(--bg-color)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            View Work History <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <a 
            href="/resume.pdf" 
            className="inline-flex items-center rounded-md border border-white/10 bg-white/5 dark:bg-white/5 dark:text-white light:bg-black/5 light:text-black light:border-black/10 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-white/10"
          >
            Download Resume
          </a>
          <Link 
            to="/contact" 
            className="inline-flex items-center rounded-md px-5 py-2.5 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
          >
            Contact
          </Link>
        </div>
      </section>

      {/* Proof Grid */}
      <section className="mb-24 grid gap-6 sm:grid-cols-3">
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

      {/* Timeline Preview */}
      <section>
        <div className="glass-card p-8 sm:p-12">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-bold text-[var(--text-primary)]">Work History</h2>
              <p className="mt-2 max-w-xl text-[var(--text-secondary)]">
                A timeline of my professional journey, including key roles, achievements, and impact at high-growth companies.
              </p>
            </div>
            <Link 
              to="/work" 
              className="group inline-flex items-center rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-6 py-3 text-sm font-medium text-[var(--text-primary)] transition-all hover:bg-[var(--glass-bg-hover)] hover:px-8"
            >
              View Full Timeline <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
