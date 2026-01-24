import { Outlet } from "react-router-dom"
import { NavBar } from "@/components/NavBar"
import { Footer } from "@/components/Footer"
import { CommandPalette } from "@/components/CommandPalette"
import { ThemeProvider } from "@/lib/theme"

export function RootLayout() {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col bg-[var(--bg-color)] text-[var(--text-primary)] font-sans antialiased selection:bg-[#ff4d00]/30 relative transition-colors duration-500">
        <NavBar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <CommandPalette />
      </div>
    </ThemeProvider>
  )
}
