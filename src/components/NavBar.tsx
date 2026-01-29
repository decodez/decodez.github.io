import { Link, useLocation } from "react-router-dom"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./ThemeToggle"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/#toolbox", label: "Toolbox" },
  { href: "/#work", label: "Work" },
  { href: "/#contact", label: "Contact" },
]

export function NavBar() {
  const location = useLocation()

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-[var(--border-color)] bg-[var(--panel-bg)] transition-colors duration-500 left-0 right-0">
      <div className="flex h-14 items-center justify-between pl-4 md:pl-8 pr-0">
        <Link to="/" className="text-xl font-bold tracking-tighter text-[var(--text-primary)] shrink-0">
          Akhil.
        </Link>
        <div className="flex h-full items-center">
          <div className="hidden h-full items-center md:flex">
            {navItems.map((item) => {
              const isActive = location.pathname === "/" && location.hash === (item.href.includes("#") ? item.href.slice(1) : "")
              
              const className = cn(
                "flex h-full items-center px-4 text-xs font-bold tracking-tight transition-colors border-l border-[var(--border-color)] last:border-r",
                isActive || (location.pathname === item.href) ? "bg-[var(--text-primary)] text-[var(--bg-color)]" : "text-[var(--text-primary)] hover:bg-[var(--glass-bg-hover)]"
              )

              if (item.href.startsWith("/#")) {
                return (
                  <a key={item.href} href={item.href} className={className}>
                    {item.label}
                  </a>
                )
              }

              return (
                <Link key={item.href} to={item.href} className={className}>
                  {item.label}
                </Link>
              )
            })}
          </div>
          
          <div className="flex items-center border-l border-[var(--border-color)] h-full">
            <button 
              className="px-4 md:px-6 border-r border-[var(--border-color)] h-full flex items-center transition-colors hover:bg-[var(--glass-bg-hover)]"
              onClick={() => document.dispatchEvent(new CustomEvent('toggle-theme'))}
              aria-label="Toggle Theme"
            >
              <ThemeToggle />
            </button>
            <button 
              className="flex h-full items-center gap-2 px-6 text-[10px] font-bold tracking-tight text-[var(--text-primary)] transition-colors hover:bg-[var(--glass-bg-hover)]"
              onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
            >
              <Search className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Search [Cmd+K]</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
