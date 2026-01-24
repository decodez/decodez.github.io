import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { ArrowLeft, CheckCircle2, Scale, AlertTriangle, Calendar } from "lucide-react"
import { getCaseStudyBySlug } from "@/lib/content"
import { cn } from "@/lib/utils"

const SECTIONS = [
  { id: "problem", label: "01 / problem-scope" },
  { id: "constraints", label: "02 / technical-limits" },
  { id: "decisions", label: "03 / architecture-log" },
  { id: "implementation", label: "04 / deployment-specs" },
  { id: "results", label: "05 / impact-metrics" },
  { id: "tradeoffs", label: "06 / analysis-lessons" },
]

export default function CaseStudyDetail() {
  const { slug } = useParams()
  const study = getCaseStudyBySlug(slug || '')
  const [activeSection, setActiveSection] = useState("problem")

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
    <div className="te-grid-container min-h-screen">
      <div className="te-grid-item col-span-full flex flex-col items-center justify-center py-64">
        <h1 className="text-4xl font-black lowercase mb-8 tracking-tighter">record / not-found</h1>
        <Link to="/case-studies" className="px-8 py-4 text-xs font-bold border border-[var(--border-color)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-color)] transition-all">
          [ return to archive ]
        </Link>
      </div>
    </div>
  )

  return (
    <div className="te-grid-container transition-colors duration-500 min-h-screen">
      {/* Detail Header */}
      <section className="te-grid-item col-span-full pt-16 pb-32 lowercase">
        <Link to="/case-studies" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors mb-16 group">
          <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" /> [ back to index ]
        </Link>
        
        <div className="max-w-5xl">
          <div className="inline-block border-2 border-[var(--border-color)] px-4 py-1 mb-8 text-[10px] font-black uppercase tracking-widest bg-[var(--text-primary)] text-[var(--bg-color)]">
            technical report / {study.company}
          </div>
          <h1 className="text-5xl font-black tracking-tighter sm:text-7xl mb-8 leading-[0.85] max-w-4xl">
            {study.title}
          </h1>
          <p className="text-2xl font-bold tracking-tight text-[#ff4d00] mb-12 max-w-2xl">
            {study.impactLine}
          </p>

          <div className="flex flex-wrap gap-x-12 gap-y-6 border-t border-[var(--border-color)] pt-8">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)]">role / responsibility</span>
              <span className="text-sm font-bold tracking-tight">{study.role}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)]">date / timestamp</span>
              <div className="flex items-center gap-2 text-sm font-bold tracking-tight">
                <Calendar className="h-3.5 w-3.5" /> {study.date}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)]">stack / instruments</span>
              <div className="flex flex-wrap gap-2 pt-1">
                {study.tags.map(tag => (
                   <span key={tag} className="text-[8px] font-black uppercase tracking-widest px-2 py-0.5 border border-[var(--border-color)]">
                    {tag}
                   </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 col-span-full te-grid-container border-t-0 font-sans">
        {/* Technical Navigation / Sidebar */}
        <aside className="lg:col-span-3 border-r border-[var(--border-color)] relative">
          <div className="sticky top-24 p-8 flex flex-col gap-2 lowercase">
            <div className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)] mb-4 border-b border-[var(--border-color)] pb-4">
              report / sections
            </div>
            {SECTIONS.map(section => (
              <a 
                key={section.id} 
                href={`#${section.id}`}
                className={cn(
                  "flex items-center gap-3 py-2 text-xs font-bold tracking-tight transition-all group",
                  activeSection === section.id 
                    ? "text-[#ff4d00]" 
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:translate-x-1"
                )}
                onClick={(e) => {
                   e.preventDefault()
                   document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <div className={cn("h-[1px] w-4 bg-current transition-all", activeSection === section.id ? "w-8" : "w-4")} />
                {section.label}
              </a>
            ))}
          </div>
        </aside>

        {/* Technical Data / Content */}
        <div className="lg:col-span-9 p-8 sm:p-16 space-y-32 lowercase">
          <section id="problem" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-0.5 w-12 bg-[#ff4d00]" />
              <h2 className="text-3xl font-black tracking-tighter">01 / the problem scope</h2>
            </div>
            <p className="text-xl font-medium tracking-tight leading-relaxed text-[var(--text-primary)] max-w-3xl border-l-[4px] border-[var(--border-color)] pl-8 py-2">
              {study.problem}
            </p>
          </section>

          <section id="constraints" className="scroll-mt-32">
             <div className="flex items-center gap-4 mb-8">
              <div className="h-0.5 w-12 bg-[#ff4d00]" />
              <h2 className="text-3xl font-black tracking-tighter">02 / technical limits</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-0 border-t border-l border-[var(--border-color)]">
              {study.constraints.map((constraint, i) => (
                <div key={i} className="flex items-start gap-4 p-8 border-r border-b border-[var(--border-color)] hover:bg-[var(--glass-bg-hover)] transition-colors">
                  <AlertTriangle className="h-4 w-4 shrink-0 text-[#ff4d00] mt-1" />
                  <span className="text-sm font-bold tracking-tight leading-normal">{constraint}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="decisions" className="scroll-mt-32">
             <div className="flex items-center gap-4 mb-8">
              <div className="h-0.5 w-12 bg-[#ff4d00]" />
              <h2 className="text-3xl font-black tracking-tighter">03 / architecture log</h2>
            </div>
            <div className="space-y-0 border-t border-[var(--border-color)]">
              {study.decisions.map((decision, i) => (
                <div key={i} className="py-12 border-b border-[var(--border-color)] group hover:bg-[var(--glass-bg-hover)] transition-colors px-4">
                  <div className="grid md:grid-cols-12 gap-8 max-w-5xl mx-auto">
                    <div className="md:col-span-4">
                       <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#ff4d00] mb-4">
                        <Scale className="h-3.5 w-3.5" /> decision / track-{i+1}
                      </div>
                      <h3 className="text-2xl font-black tracking-tighter leading-tight">{decision.title}</h3>
                    </div>
                    <div className="md:col-span-8 flex items-center">
                      <p className="text-lg font-medium tracking-tight text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">
                        {decision.why}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="implementation" className="scroll-mt-32">
             <div className="flex items-center gap-4 mb-8">
              <div className="h-0.5 w-12 bg-[#ff4d00]" />
              <h2 className="text-3xl font-black tracking-tighter">04 / deployment specs</h2>
            </div>
            <div className="grid gap-4">
              {study.implementationNotes.map((note, i) => (
                <div key={i} className="flex items-center gap-6 p-6 border border-[var(--border-color)] hover:border-[#ff4d00] transition-colors group">
                  <div className="text-[10px] font-black text-[#ff4d00] opacity-50 group-hover:opacity-100">[{i + 1}]</div>
                  <span className="text-md font-bold tracking-tight">{note}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="results" className="scroll-mt-32">
             <div className="flex items-center gap-4 mb-8">
              <div className="h-0.5 w-12 bg-[#ff4d00]" />
              <h2 className="text-3xl font-black tracking-tighter">05 / impact metrics</h2>
            </div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-0 border-t border-l border-[var(--border-color)]">
              {study.results.map((result, i) => (
                <div key={i} className="p-10 border-r border-b border-[var(--border-color)] text-center hover:bg-[#ff4d00]/5 transition-colors">
                   <div className="text-[8px] font-black uppercase tracking-widest text-[var(--text-muted)] mb-6">metric / 0{i+1}</div>
                   <CheckCircle2 className="mx-auto mb-6 h-10 w-10 text-[#ff4d00]" />
                   <p className="text-xl font-black tracking-tighter leading-tight">{result}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="tradeoffs" className="scroll-mt-32 pb-32">
             <div className="flex items-center gap-4 mb-8">
              <div className="h-0.5 w-12 bg-[#ff4d00]" />
              <h2 className="text-3xl font-black tracking-tighter">06 / analysis & lessons</h2>
            </div>
            <div className="te-border p-12 bg-[var(--text-primary)] text-[var(--bg-color)]">
              <div className="grid md:grid-cols-2 gap-16">
                 <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-[#ff4d00] mb-8">log / tradeoffs</div>
                    <ul className="space-y-6">
                      {study.tradeoffs.map((tradeoff, i) => (
                        <li key={i} className="text-sm font-bold tracking-tight leading-relaxed flex gap-4">
                          <div className="h-1.5 w-1.5 shrink-0 bg-[#ff4d00] mt-1.5" /> {tradeoff}
                        </li>
                      ))}
                    </ul>
                 </div>
                 <div className="border-t md:border-t-0 md:border-l border-[#ffffff]/10 pt-16 md:pt-0 md:pl-16">
                    <div className="text-[10px] font-black uppercase tracking-widest text-[#ff4d00] mb-8">log / future-iterations</div>
                    <ul className="space-y-6">
                      {study.nextImprovements.map((imp, i) => (
                        <li key={i} className="text-sm font-bold tracking-tight leading-relaxed flex gap-4">
                          <div className="h-1.5 w-1.5 shrink-0 bg-[#ffffff]/30 mt-1.5" /> {imp}
                        </li>
                      ))}
                    </ul>
                 </div>
              </div>
            </div>
          </section>
        </div>
      </div>

       <div className="col-span-full te-grid-item py-1 bg-[var(--text-primary)] flex items-center justify-center">
         <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[var(--bg-color)]">end of report / technical archival storage unit</span>
      </div>
    </div>
  )
}
