import { cn } from "@/lib/utils"

interface TagChipsProps {
  tags: string[]
  className?: string
  size?: 'sm' | 'md'
}

export function TagChips({ tags, className, size = 'md' }: TagChipsProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {tags.map((tag) => (
        <span
          key={tag}
          className={cn(
            "rounded-full border border-white/10 bg-white/5 px-3 py-1 text-zinc-400 transition-colors hover:border-white/20 hover:text-zinc-200",
            size === 'sm' ? "text-xs" : "text-sm"
          )}
        >
          {tag}
        </span>
      ))}
    </div>
  )
}
