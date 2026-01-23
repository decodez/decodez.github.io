export function Footer() {
  return (
    <footer className="border-t border-[var(--glass-border)] py-8 text-center text-sm text-[var(--text-muted)] transition-colors duration-500">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Akhil Prasenan. Built with React, Vite & Tailwind.</p>
      </div>
    </footer>
  )
}
