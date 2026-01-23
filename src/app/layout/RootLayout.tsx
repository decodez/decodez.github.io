import { Outlet } from "react-router-dom"
import { NavBar } from "@/components/NavBar"
import { Footer } from "@/components/Footer"
import { CommandPalette } from "@/components/CommandPalette"
import { GradientBackground } from "@/components/GradientBackground"
import { ThemeProvider } from "@/lib/theme"

export function RootLayout() {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col bg-transparent text-[var(--text-primary)] font-sans antialiased selection:bg-blue-500/30 relative isolate transition-colors duration-500">
        <GradientBackground />
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
