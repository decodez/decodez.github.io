export function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] py-12 bg-[var(--panel-bg)] transition-colors duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 px-4 md:px-8">
        <span className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)]">
          © {new Date().getFullYear()} Akhil Prasenan / Technical Record.
        </span>
        <span className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)]">
          Built with precision / React + Vite + Tailwind
        </span>
      </div>
    </footer>
  )
}
