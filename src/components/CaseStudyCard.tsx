import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { TagChips } from "./TagChips"
import { CaseStudy } from "@/lib/content"

interface CaseStudyCardProps {
  study: CaseStudy
}

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <Link 
      to={`/case-studies/${study.slug}`}
      className="group block overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:border-white/20 hover:bg-white/[0.07]"
    >
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-[#4facfe] transition-colors">
            {study.title}
          </h3>
          <p className="mt-2 text-sm text-zinc-400 line-clamp-2">
            {study.impactLine}
          </p>
        </div>
        
        <TagChips tags={study.tags.slice(0, 3)} size="sm" />
        
        <div className="mt-2 flex items-center text-sm font-medium text-[#4facfe] opacity-0 transition-all -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
          Read case study <ArrowRight className="ml-1 h-4 w-4" />
        </div>
      </div>
    </Link>
  )
}
