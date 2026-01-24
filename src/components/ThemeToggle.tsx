import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/lib/theme"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { theme } = useTheme()

  return (
    <div className="flex items-center gap-2">
      <Sun className={cn("h-4 w-4 transition-all", theme === "light" ? "text-[#ff4d00]" : "text-[var(--text-muted)]")} />
      <div className="h-4 w-[1px] bg-[var(--border-color)] rotate-12" />
      <Moon className={cn("h-4 w-4 transition-all", theme === "dark" ? "text-[#ff4d00]" : "text-[var(--text-muted)]")} />
    </div>
  )
}
