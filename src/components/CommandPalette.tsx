import { useEffect, useState } from "react"
import { Command } from "cmdk"
import { useNavigate } from "react-router-dom"
import { Briefcase, Code, FileText, Home, Mail, PenTool, Search } from "lucide-react"
import { getAllCaseStudies } from "@/lib/content"

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const caseStudies = getAllCaseStudies()

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

  const runCommand = (fn: () => void) => {
    setOpen(false)
    fn()
  }

  // Simple overlay styles instead of Radix Dialog to save installing another dep, 
  // though Radix is better for a11y. I will implement a focus trap simple version or use cmdk's Command.Dialog.
  // cmdk's Command.Dialog is sufficient.

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] bg-black/50 backdrop-blur-sm transition-all" onClick={() => setOpen(false)}>
      <div 
        className="w-full max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-[#1e1e1e] shadow-2xl animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <Command loop className="w-full">
          <div className="flex items-center border-b border-white/10 px-4">
            <Search className="mr-2 h-5 w-5 shrink-0 opacity-50" />
            <Command.Input 
              placeholder="Search pages or case studies..." 
              className="flex h-12 w-full bg-transparent py-3 text-sm outline-none placeholder:text-zinc-500"
              autoFocus
            />
          </div>
          <Command.List className="max-h-[60vh] overflow-y-auto p-2">
            <Command.Empty className="py-6 text-center text-sm text-zinc-500">No results found.</Command.Empty>
            
            <Command.Group heading="Pages" className="px-2 py-1.5 text-xs font-medium text-zinc-500">
              <Command.Item onSelect={() => runCommand(() => navigate("/"))} className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-white/10 aria-selected:text-white">
                <Home className="mr-2 h-4 w-4" />
                <span>Home</span>
              </Command.Item>
              <Command.Item onSelect={() => runCommand(() => navigate("/work"))} className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-white/10 aria-selected:text-white">
                <Briefcase className="mr-2 h-4 w-4" />
                <span>Work</span>
              </Command.Item>
              <Command.Item onSelect={() => runCommand(() => navigate("/case-studies"))} className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-white/10 aria-selected:text-white">
                <FileText className="mr-2 h-4 w-4" />
                <span>Case Studies</span>
              </Command.Item>
              <Command.Item onSelect={() => runCommand(() => navigate("/toolbox"))} className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-white/10 aria-selected:text-white">
                <Code className="mr-2 h-4 w-4" />
                <span>Toolbox</span>
              </Command.Item>
               <Command.Item onSelect={() => runCommand(() => navigate("/contact"))} className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-white/10 aria-selected:text-white">
                <Mail className="mr-2 h-4 w-4" />
                <span>Contact</span>
              </Command.Item>
            </Command.Group>
            
            <Command.Separator className="my-1 h-px bg-white/10" />

            <Command.Group heading="Case Studies" className="px-2 py-1.5 text-xs font-medium text-zinc-500">
              {caseStudies.map((study) => (
                <Command.Item 
                  key={study.slug} 
                  onSelect={() => runCommand(() => navigate(`/case-studies/${study.slug}`))}
                  className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-white/10 aria-selected:text-white"
                >
                  <PenTool className="mr-2 h-4 w-4" />
                  <span>{study.title}</span>
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  )
}
