export function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] py-12 bg-[var(--panel-bg)] transition-colors duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 px-8">
        <span className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)]">
          © {new Date().getFullYear()} akhil prasenan / technical record.
        </span>
        <span className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)]">
          built with precision / react + vite + tailwind
        </span>
      </div>
    </footer>
  )
}
