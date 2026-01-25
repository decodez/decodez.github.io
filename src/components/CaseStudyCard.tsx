import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { CaseStudy } from "@/lib/content"

interface CaseStudyCardProps {
  study: CaseStudy
}

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <Link 
      to={`/case-studies/${study.slug}`}
      className="group block te-border bg-[var(--bg-color)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-color)] transition-all p-10 flex flex-col justify-between h-full"
    >
      <div>
        <div className="flex items-center gap-2 mb-8 text-[var(--text-muted)] group-hover:text-[var(--bg-color)] transition-colors">
          <div className="h-[1px] w-6 bg-current" />
          <span className="text-[10px] font-black uppercase tracking-widest">study / {study.company}</span>
        </div>
        
        <h3 className="text-3xl font-black tracking-tighter mb-4 leading-tight ">
          {study.title}
        </h3>
        
        <p className="text-md font-medium tracking-tight opacity-70 mb-8 line-clamp-3 ">
          {study.impactLine}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {study.tags.slice(0, 3).map(tag => (
          <span key={tag} className="text-[8px] font-black uppercase tracking-widest px-2 py-1 border border-current opacity-40 group-hover:opacity-100 transition-opacity">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest mt-auto">
        <span>[ read technical record ]</span>
        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  )
}
