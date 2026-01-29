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
      <section className="te-grid-item col-span-full py-12 md:py-20 flex flex-col justify-center">
        <div className="max-w-4xl ">
          <div className="inline-block border-2 border-[var(--border-color)] px-4 py-1 mb-6 text-[10px] font-black uppercase tracking-widest bg-[var(--text-primary)] text-[var(--bg-color)]">
            Technical Archive
          </div>
          <h1 className="text-5xl font-black tracking-tighter sm:text-7xl mb-6 leading-[0.85]">
            Case Studies
          </h1>
          <p className="max-w-xl text-md font-medium tracking-tight text-[var(--text-muted)]">
            Detailed records of architectural decisions, technical trade-offs, and industrial-scale engineering impact.
          </p>
        </div>
      </section>

      {/* Control Panel Section */}
      <section className="col-span-full border-b border-[var(--border-color)] grid grid-cols-1 lg:grid-cols-12 sticky top-14 z-30 bg-[var(--bg-color)]">
        <div className="lg:col-span-4 px-6 py-4 border-b lg:border-b-0 lg:border-r border-[var(--border-color)] flex items-center gap-4 group">
          <Search className="h-4 w-4 text-[var(--text-muted)] group-focus-within:text-[#ff4d00] transition-colors" />
          <input 
            type="text"
            placeholder="Search catalog..."
            className="w-full bg-transparent text-xs font-bold tracking-tight outline-none placeholder:text-[var(--text-muted)] "
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="lg:col-span-8 px-6 py-3 flex flex-wrap items-center gap-2">
          <div className="flex items-center text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)] mr-2 shrink-0">
            <SlidersHorizontal className="mr-2 h-3.5 w-3.5" /> Filter /
          </div>
          <div className="flex flex-wrap gap-1.5">
            {ALL_TAGS.map(tag => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={cn(
                  "px-2.5 py-1 text-[8px] font-black uppercase tracking-widest border transition-all",
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
                className="px-2.5 py-1 text-[8px] font-black uppercase tracking-widest bg-[#ff4d00]/10 text-[#ff4d00] border border-[#ff4d00]/30 hover:bg-[#ff4d00] hover:text-white transition-all flex items-center gap-2"
                title="Clear filters"
              >
                <X className="h-3 w-3" /> Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-span-full gap-8 overflow-hidden">
        {filteredStudies.length > 0 ? (
          filteredStudies.map(s => (
            <div key={s.slug} className="">
              <CaseStudyCard study={s} />
            </div>
          ))
        ) : (
          <section className="te-grid-item col-span-full py-32 text-center ">
            <div className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)] mb-4">Result / Zero</div>
            <p className="text-xl font-bold tracking-tight mb-8">No technical records match the current parameters.</p>
            <button 
              onClick={() => {setSearchQuery(""); setActiveTags([])}}
              className="px-8 py-4 text-xs font-bold border border-[var(--border-color)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-color)] transition-all"
            >
              [ Reset Instruments ]
            </button>
          </section>
        )}
      </div>

      {/* Footer Industrial Strip */}
      <div className="col-span-full te-grid-item py-1 bg-[var(--text-primary)] flex items-center justify-center">
         <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[var(--bg-color)]">End of Archive / Technical-Standard Specification</span>
      </div>
    </div>
  )
}
