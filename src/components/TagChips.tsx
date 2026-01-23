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
            "rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-3 py-1 text-[var(--text-secondary)] transition-colors hover:border-[var(--glass-border-hover)] hover:text-[var(--text-primary)]",
            size === 'sm' ? "text-xs" : "text-sm"
          )}
        >
          {tag}
        </span>
      ))}
    </div>
  )
}
