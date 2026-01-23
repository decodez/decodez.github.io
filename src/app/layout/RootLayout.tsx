import { Outlet } from "react-router-dom"
import { NavBar } from "@/components/NavBar"
import { Footer } from "@/components/Footer"
import { CommandPalette } from "@/components/CommandPalette"

export function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-transparent text-zinc-100 font-sans antialiased selection:bg-white/20">
      <NavBar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CommandPalette />
    </div>
  )
}
