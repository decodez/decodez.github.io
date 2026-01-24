import { useState, useMemo } from "react"
import { Search, SlidersHorizontal, X } from "lucide-react"
import { getAllCaseStudies } from "@/lib/content"
import { CaseStudyCard } from "@/components/CaseStudyCard"
import { cn } from "@/lib/utils"

const ALL_TAGS = ["Architecture", "Performance", "DX / CI-CD", "Data Visualization", "Reliability", "Frontend", "Backend", "Data Engineering"]

export default function CaseStudies() {
  const allStudies = getAllCaseStudies()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTags, setActiveTags] = useState<string[]>([])

  const filteredStudies = useMemo(() => {
    return allStudies.filter(study => {
      const matchesSearch = 
        study.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        study.impactLine.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.company.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesTags = activeTags.length === 0 || activeTags.some(tag => study.tags.includes(tag))
      
      return matchesSearch && matchesTags
    })
  }, [allStudies, searchQuery, activeTags])

  const toggleTag = (tag: string) => {
    setActiveTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    )
  }

  return (
    <div className="te-grid-container transition-colors duration-500 min-h-screen">
      {/* Header Section */}
      <section className="te-grid-item col-span-full py-24 flex flex-col justify-center">
        <div className="max-w-4xl lowercase">
          <div className="inline-block border-2 border-[var(--border-color)] px-4 py-1 mb-8 text-[10px] font-black uppercase tracking-widest bg-[var(--text-primary)] text-[var(--bg-color)]">
            technical archive
          </div>
          <h1 className="text-6xl font-black tracking-tighter sm:text-8xl mb-8 leading-[0.85]">
            case studies
          </h1>
          <p className="max-w-xl text-lg font-medium tracking-tight text-[var(--text-muted)]">
            detailed records of architectural decisions, technical trade-offs, and industrial-scale engineering impact.
          </p>
        </div>
      </section>

      {/* Control Panel Section */}
      <section className="te-grid-item col-span-full py-0 te-grid-container grid grid-cols-1 lg:grid-cols-12 sticky top-14 z-30 bg-[var(--bg-color)]">
        <div className="lg:col-span-4 p-8 border-b lg:border-b-0 lg:border-r border-[var(--border-color)] flex items-center gap-4 group">
          <Search className="h-4 w-4 text-[var(--text-muted)] group-focus-within:text-[#ff4d00] transition-colors" />
          <input 
            type="text"
            placeholder="search catalog..."
            className="w-full bg-transparent text-xs font-bold tracking-tight outline-none placeholder:text-[var(--text-muted)] lowercase"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="lg:col-span-8 p-8 flex flex-wrap items-center gap-2">
          <div className="flex items-center text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)] mr-4">
            <SlidersHorizontal className="mr-2 h-3.5 w-3.5" /> filter /
          </div>
          <div className="flex flex-wrap gap-2">
            {ALL_TAGS.map(tag => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={cn(
                  "px-3 py-1 text-[8px] font-black uppercase tracking-widest border transition-all",
                  activeTags.includes(tag)
                    ? "bg-[var(--text-primary)] text-[var(--bg-color)] border-[var(--text-primary)]"
                    : "border-[var(--border-color)] text-[var(--text-muted)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)]"
                )}
              >
                {tag}
              </button>
            ))}
            {activeTags.length > 0 && (
              <button 
                onClick={() => setActiveTags([])}
                className="px-3 py-1 text-[8px] font-black uppercase tracking-widest bg-[#ff4d00]/10 text-[#ff4d00] border border-[#ff4d00]/30 hover:bg-[#ff4d00] hover:text-white transition-all flex items-center gap-2"
                title="Clear filters"
              >
                <X className="h-3 w-3" /> clear all
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-span-full te-grid-container overflow-hidden">
        {filteredStudies.length > 0 ? (
          filteredStudies.map(s => (
            <div key={s.slug} className="te-grid-item p-0 border-r border-b border-[var(--border-color)]">
              <CaseStudyCard study={s} />
            </div>
          ))
        ) : (
          <section className="te-grid-item col-span-full py-32 text-center lowercase">
            <div className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)] mb-4">result / zero</div>
            <p className="text-xl font-bold tracking-tight mb-8">no technical records match the current parameters.</p>
            <button 
              onClick={() => {setSearchQuery(""); setActiveTags([])}}
              className="px-8 py-4 text-xs font-bold border border-[var(--border-color)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-color)] transition-all"
            >
              [ reset instruments ]
            </button>
          </section>
        )}
      </div>

      {/* Footer Industrial Strip */}
      <div className="col-span-full te-grid-item py-1 bg-[var(--text-primary)] flex items-center justify-center">
         <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[var(--bg-color)]">end of archive / technical-standard specification</span>
      </div>
    </div>
  )
}
