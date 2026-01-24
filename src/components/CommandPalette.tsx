import { useEffect, useState } from "react"
import { Command } from "cmdk"
import { Briefcase, Code, Home, Mail, Search } from "lucide-react"

export function CommandPalette() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = (href: string) => {
    setOpen(false)
    window.location.href = href
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] bg-black/20 backdrop-blur-[2px] transition-all" onClick={() => setOpen(false)}>
      <div 
        className="w-full max-w-2xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-color)] shadow-xl animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <Command loop className="w-full">
          <div className="flex items-center border-b border-[var(--border-color)] px-4 bg-[var(--bg-color)]">
            <Search className="mr-3 h-4 w-4 shrink-0 text-[var(--text-muted)]" />
            <Command.Input 
              placeholder="search sections..." 
              className="flex h-14 w-full bg-transparent py-3 text-xs font-bold tracking-tight outline-none placeholder:text-[var(--text-muted)] selection:bg-[#ff4d00]/30 lowercase"
              autoFocus
            />
          </div>
          <Command.List className="max-h-[60vh] overflow-y-auto p-0 lowercase">
            <Command.Empty className="py-12 text-center text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)]">
              no results found.
            </Command.Empty>
            
            <Command.Group heading="navigation" className="px-4 py-3 text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)] border-b border-[var(--border-color)] last:border-0">
              <Command.Item onSelect={() => runCommand("/")} className="relative flex cursor-pointer select-none items-center px-4 py-3 text-sm font-bold tracking-tight outline-none aria-selected:bg-[var(--text-primary)] aria-selected:text-[var(--bg-color)] transition-colors border-b border-[var(--border-color)] last:border-0">
                <Home className="mr-3 h-4 w-4" />
                <span>home / root</span>
              </Command.Item>
              <Command.Item onSelect={() => runCommand("/#toolbox")} className="relative flex cursor-pointer select-none items-center px-4 py-3 text-sm font-bold tracking-tight outline-none aria-selected:bg-[var(--text-primary)] aria-selected:text-[var(--bg-color)] transition-colors border-b border-[var(--border-color)] last:border-0">
                <Code className="mr-3 h-4 w-4" />
                <span>toolbox / tech-stack</span>
              </Command.Item>
              <Command.Item onSelect={() => runCommand("/#work")} className="relative flex cursor-pointer select-none items-center px-4 py-3 text-sm font-bold tracking-tight outline-none aria-selected:bg-[var(--text-primary)] aria-selected:text-[var(--bg-color)] transition-colors border-b border-[var(--border-color)] last:border-0">
                <Briefcase className="mr-3 h-4 w-4" />
                <span>work / experience-record</span>
              </Command.Item>
               <Command.Item onSelect={() => runCommand("/#contact")} className="relative flex cursor-pointer select-none items-center px-4 py-3 text-sm font-bold tracking-tight outline-none aria-selected:bg-[var(--text-primary)] aria-selected:text-[var(--bg-color)] transition-colors border-b border-[var(--border-color)] last:border-0">
                <Mail className="mr-3 h-4 w-4" />
                <span>contact / direct-outreach</span>
              </Command.Item>
            </Command.Group>

            <div className="te-grid-item py-1 bg-[var(--text-primary)] flex items-center justify-center">
               <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[var(--bg-color)]">system / industrial-search</span>
            </div>
          </Command.List>
        </Command>
      </div>
    </div>
  )
}
