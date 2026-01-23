import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./ThemeToggle"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/toolbox", label: "Toolbox" },
  { href: "/contact", label: "Contact" },
]

export function NavBar() {
  const location = useLocation()

  return (
    <nav className="sticky top-0 z-40 w-full glass-panel transition-colors duration-500">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        <Link to="/" className="text-lg font-bold tracking-tight text-[var(--text-primary)]">
          Akhil.
        </Link>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex md:gap-6">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href || (item.href !== '/' && location.pathname.startsWith(item.href))
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-[var(--text-primary)]",
                    isActive ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
          
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button 
              className="hidden items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2 py-1.5 text-xs text-[var(--text-secondary)] transition-colors hover:bg-white/10 hover:text-[var(--text-primary)] dark:hover:bg-white/10 light:border-black/10 light:bg-black/5 light:hover:bg-black/10 md:flex"
              onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
            >
              <span>Search</span>
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-white/10 bg-white/5 px-1.5 font-mono text-[10px] font-medium text-[var(--text-muted)] opacity-100">
                <span className="text-xs">⌘</span>K
              </kbd>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
