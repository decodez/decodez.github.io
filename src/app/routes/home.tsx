import { Link } from "react-router-dom"
import { ArrowRight, Layers, LineChart, Code2 } from "lucide-react"
import { getAllCaseStudies } from "@/lib/content"
import { CaseStudyCard } from "@/components/CaseStudyCard"

export default function Home() {
  const caseStudies = getAllCaseStudies().slice(0, 3)

  return (
    <div className="container mx-auto px-4 py-16 sm:px-8 relative z-10">
      {/* Hero */}
      <section className="mb-24 flex max-w-3xl flex-col gap-6">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
          Akhil Prasenan
        </h1>
        <h2 className="text-2xl font-medium text-zinc-400 sm:text-3xl">
          Lead / Principal-track Full Stack Engineer
        </h2>
        <p className="max-w-xl text-lg text-zinc-500">
          Specializing in scalable architecture, developer experience, and product-led engineering. 
          I build systems that grow with the business.
        </p>
        
        <div className="flex flex-wrap gap-4 mt-4">
          <Link 
            to="/case-studies" 
            className="inline-flex items-center rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            View Case Studies <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <a 
            href="/resume.pdf" 
            className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Download Resume
          </a>
          <Link 
            to="/contact" 
            className="inline-flex items-center rounded-md px-5 py-2.5 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
          >
            Contact
          </Link>
        </div>
      </section>

      {/* Proof Grid */}
      <section className="mb-24 grid gap-6 sm:grid-cols-3">
        <div className="group glass-card p-6">
          <Layers className="mb-4 h-8 w-8 text-[#4facfe]" />
          <h3 className="mb-2 text-lg font-bold text-white">Architecture</h3>
          <p className="text-sm text-zinc-400">Designing fault-tolerant distributed systems and scalable data models.</p>
        </div>
        <div className="group glass-card p-6">
          <Code2 className="mb-4 h-8 w-8 text-[#00f2fe]" />
          <h3 className="mb-2 text-lg font-bold text-white">DX & CI/CD</h3>
          <p className="text-sm text-zinc-400">Optimizing build pipelines and creating tooling that developers love.</p>
        </div>
        <div className="group glass-card p-6">
          <LineChart className="mb-4 h-8 w-8 text-[#4facfe]" />
          <h3 className="mb-2 text-lg font-bold text-white">Data-Heavy Apps</h3>
          <p className="text-sm text-zinc-400">Handling high throughput and visualizing complex datasets seamlessly.</p>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="mb-24">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white">Featured Work</h2>
            <p className="mt-2 text-zinc-400">Deep dives into complex technical challenges.</p>
          </div>
          <Link to="/case-studies" className="hidden text-sm font-medium text-[#4facfe] hover:underline sm:block">
            View all case studies
          </Link>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map(study => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
        
        <div className="mt-8 text-center sm:hidden">
           <Link to="/case-studies" className="text-sm font-medium text-[#4facfe]">
            View all case studies →
          </Link>
        </div>
      </section>

      {/* Timeline Preview */}
      <section>
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 sm:p-12">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-bold text-white">Work History</h2>
              <p className="mt-2 max-w-xl text-zinc-400">
                A timeline of my professional journey, including key roles, achievements, and impact at high-growth companies.
              </p>
            </div>
            <Link 
              to="/work" 
              className="group inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 hover:px-8"
            >
              View Full Timeline <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
