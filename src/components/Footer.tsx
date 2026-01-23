export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center text-sm text-zinc-500">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Akhil Prasenan. Built with React, Vite & Tailwind.</p>
      </div>
    </footer>
  )
}
