import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { ArrowLeft, CheckCircle2, ChevronRight, Scale, AlertTriangle } from "lucide-react"
import { getCaseStudyBySlug } from "@/lib/content"
import { TagChips } from "@/components/TagChips"
import { cn } from "@/lib/utils"

const SECTIONS = [
  { id: "problem", label: "Problem" },
  { id: "constraints", label: "Constraints" },
  { id: "decisions", label: "Key Decisions" },
  { id: "architecture", label: "Architecture" },
  { id: "implementation", label: "Implementation" },
  { id: "results", label: "Results" },
  { id: "tradeoffs", label: "Tradeoffs" },
]

export default function CaseStudyDetail() {
  const { slug } = useParams()
  const study = getCaseStudyBySlug(slug || '')
  const [activeSection, setActiveSection] = useState("problem")

  // simple scroll spy implementation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, { rootMargin: "-20% 0px -50% 0px" })

    SECTIONS.forEach(s => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [study])

  if (!study) return (
    <div className="flex h-[50vh] flex-col items-center justify-center text-center">
      <h1 className="text-2xl font-bold text-white">Case Study Not Found</h1>
      <Link to="/case-studies" className="mt-4 text-[#4facfe] hover:underline">Return to Index</Link>
    </div>
  )

  return (
    <div className="container mx-auto px-4 py-16 sm:px-8 transition-colors duration-500">
      <Link to="/case-studies" className="group mb-8 inline-flex items-center text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)]">
        <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to Case Studies
      </Link>

      <div className="mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl">{study.title}</h1>
        <p className="mt-6 text-xl font-medium text-[#4facfe] sm:text-2xl">{study.impactLine}</p>
        <div className="mt-6">
          <TagChips tags={study.tags} />
        </div>
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-[var(--text-muted)]">
          <div><span className="font-semibold text-[var(--text-secondary)]">Role:</span> {study.role}</div>
          <div><span className="font-semibold text-[var(--text-secondary)]">Company:</span> {study.company}</div>
          <div><span className="font-semibold text-[var(--text-secondary)]">Date:</span> {study.date}</div>
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-12 lg:gap-12">
        {/* Sidebar Navigation */}
        <div className="hidden lg:col-span-3 lg:block">
          <nav className="sticky top-24 space-y-1 border-l border-[var(--glass-border)] p-4">
            {SECTIONS.map(section => (
              <a 
                key={section.id} 
                href={`#${section.id}`}
                className={cn(
                  "flex items-center text-sm font-medium transition-colors hover:text-[var(--text-primary)]",
                  activeSection === section.id 
                    ? "text-[var(--text-primary)] border-l-2 border-[#4facfe] -ml-[17px] pl-3.5" 
                    : "text-[var(--text-muted)]"
                )}
                onClick={(e) => {
                   e.preventDefault()
                   document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })
                   setActiveSection(section.id)
                }}
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="space-y-20 lg:col-span-9">
          <section id="problem" className="scroll-mt-24">
            <h2 className="mb-6 text-2xl font-bold text-[var(--text-primary)]">The Problem</h2>
            <p className="text-lg leading-relaxed text-[var(--text-secondary)]">{study.problem}</p>
          </section>

          <section id="constraints" className="scroll-mt-24">
            <h2 className="mb-6 text-2xl font-bold text-[var(--text-primary)]">Constraints</h2>
            <ul className="grid gap-4 sm:grid-cols-2">
              {study.constraints.map((constraint, i) => (
                <li key={i} className="flex items-start glass p-4 rounded-lg">
                  <AlertTriangle className="mr-3 h-5 w-5 shrink-0 text-amber-500" />
                  <span className="text-[var(--text-secondary)]">{constraint}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="decisions" className="scroll-mt-24">
            <h2 className="mb-6 text-2xl font-bold text-[var(--text-primary)]">Key Technical Decisions</h2>
            <div className="space-y-6">
              {study.decisions.map((decision, i) => (
                <div key={i} className="glass-card p-6">
                  <h3 className="flex items-center text-lg font-bold text-[var(--text-primary)]">
                    <Scale className="mr-3 h-5 w-5 text-[#4facfe]" />
                    {decision.title}
                  </h3>
                  <div className="mt-4 pl-8">
                    <p className="text-[var(--text-secondary)]"><span className="font-semibold text-[var(--text-primary)]">Values:</span> {decision.why}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="architecture" className="scroll-mt-24">
            <h2 className="mb-6 text-2xl font-bold text-[var(--text-primary)]">Architecture</h2>
            <p className="mb-6 text-lg text-[var(--text-secondary)]">{study.architecture.overview}</p>
            <div className="glass-card p-6 font-mono text-sm text-[var(--text-muted)]">
               <ul className="space-y-2 list-disc list-inside">
                {study.architecture.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
               </ul>
            </div>
          </section>

           <section id="implementation" className="scroll-mt-24">
            <h2 className="mb-6 text-2xl font-bold text-[var(--text-primary)]">Implementation Details</h2>
            <ul className="space-y-4">
              {study.implementationNotes.map((note, i) => (
                <li key={i} className="flex items-start">
                  <ChevronRight className="mr-3 h-5 w-5 shrink-0 text-[var(--text-muted)]" />
                  <span className="text-[var(--text-secondary)]">{note}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="results" className="scroll-mt-24">
            <h2 className="mb-6 text-2xl font-bold text-[var(--text-primary)]">Results & Impact</h2>
            <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-3">
              {study.results.map((result, i) => (
                <div key={i} className="rounded-lg border border-green-500/20 bg-green-500/10 p-6 text-center">
                   <CheckCircle2 className="mx-auto mb-3 h-8 w-8 text-green-500" />
                   <p className="font-medium text-green-700 dark:text-green-100">{result}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="tradeoffs" className="scroll-mt-24 pb-20">
            <h2 className="mb-6 text-2xl font-bold text-[var(--text-primary)]">Trade-offs & Lessons</h2>
            <div className="glass-card p-6">
              <ul className="space-y-4">
                 {study.tradeoffs.map((tradeoff, i) => (
                  <li key={i} className="text-[var(--text-secondary)]">
                    <span className="mr-2 text-[var(--text-muted)]">•</span> {tradeoff}
                  </li>
                ))}
              </ul>
              
              <h3 className="mt-8 mb-4 font-semibold text-[var(--text-primary)]">Future Improvements</h3>
               <ul className="space-y-4">
                 {study.nextImprovements.map((imp, i) => (
                  <li key={i} className="text-[var(--text-secondary)]">
                    <span className="mr-2 text-[var(--text-muted)]">→</span> {imp}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
