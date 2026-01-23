import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"

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
    <nav className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#242424]/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        <Link to="/" className="text-lg font-bold tracking-tight text-white">
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
                    "text-sm font-medium transition-colors hover:text-white",
                    isActive ? "text-white" : "text-zinc-400"
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
          <button 
            className="hidden items-center gap-2 rounded-md bg-white/5 px-2 py-1.5 text-xs text-zinc-400 hover:bg-white/10 hover:text-white md:flex"
            onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
          >
            <span>Search</span>
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-white/10 bg-white/5 px-1.5 font-mono text-[10px] font-medium text-zinc-400 opacity-100">
              <span className="text-xs">⌘</span>K
            </kbd>
          </button>
        </div>
      </div>
    </nav>
  )
}
