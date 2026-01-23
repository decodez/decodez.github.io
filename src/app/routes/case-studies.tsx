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
    <div className="container mx-auto px-4 py-16 sm:px-8">
      <div className="mb-12 max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-white mb-4">Case Studies</h1>
        <p className="text-lg text-zinc-400">
          A collection of challenging problems I've solved, focusing on architectural decisions, trade-offs, and measurable impact.
        </p>
      </div>

      {/* Controls */}
      <div className="sticky top-16 z-30 mb-12 -mx-4 glass-panel px-4 py-4 sm:mx-0 sm:rounded-xl sm:border sm:px-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
            <input 
              type="text"
              placeholder="Search by title, impact, or company..."
              className="h-10 w-full rounded-md border border-white/10 bg-black/20 pl-10 pr-4 text-sm text-white placeholder:text-zinc-500 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center text-sm font-medium text-zinc-400 lg:mr-2">
              <SlidersHorizontal className="mr-2 h-4 w-4" /> Filter:
            </div>
            {ALL_TAGS.map(tag => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={cn(
                  "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
                  activeTags.includes(tag)
                    ? "border-[#4facfe] bg-[#4facfe]/10 text-[#4facfe]"
                    : "border-white/10 bg-white/5 text-zinc-400 hover:border-white/20 hover:text-zinc-200"
                )}
              >
                {tag}
              </button>
            ))}
            {activeTags.length > 0 && (
              <button 
                onClick={() => setActiveTags([])}
                className="ml-2 rounded-full p-1 text-zinc-500 hover:bg-white/10 hover:text-white"
                title="Clear filters"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredStudies.length > 0 ? (
          filteredStudies.map(s => <CaseStudyCard key={s.slug} study={s} />)
        ) : (
          <div className="col-span-full py-20 text-center">
            <p className="text-zinc-500">No case studies match your criteria.</p>
            <button 
              onClick={() => {setSearchQuery(""); setActiveTags([])}}
              className="mt-4 text-sm text-[#4facfe] hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
