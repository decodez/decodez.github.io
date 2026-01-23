import { Mail, Github, Linkedin, MapPin, FileText } from "lucide-react"

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="mb-6 text-4xl font-bold text-white">Get in Touch</h1>
        <p className="mb-12 text-lg text-zinc-400">
          I'm currently looking for new opportunities as a Staff or Principal Engineer. 
          If you have an interesting problem to solve, I'd love to hear about it.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <a 
            href="mailto:hello@akhil.dev" 
            className="group flex flex-col items-center justify-center glass-card p-8 hover:border-[#4facfe]/50 hover:bg-[#4facfe]/5"
          >
            <Mail className="mb-4 h-8 w-8 text-zinc-400 transition-colors group-hover:text-[#4facfe]" />
            <h3 className="mb-1 font-bold text-white">Email</h3>
            <p className="text-sm text-zinc-400">hello@akhil.dev</p>
          </a>
          
          <a 
            href="https://linkedin.com/in/akhilprasenan" 
            target="_blank" 
            rel="noreferrer"
            className="group flex flex-col items-center justify-center glass-card p-8 hover:border-[#0077b5]/50 hover:bg-[#0077b5]/5"
          >
            <Linkedin className="mb-4 h-8 w-8 text-zinc-400 transition-colors group-hover:text-[#0077b5]" />
            <h3 className="mb-1 font-bold text-white">LinkedIn</h3>
            <p className="text-sm text-zinc-400">Connect with me</p>
          </a>

          <a 
            href="https://github.com/akhilprasenan" 
            target="_blank" 
            rel="noreferrer"
            className="group flex flex-col items-center justify-center glass-card p-8 hover:border-[#e6edf3]/50 hover:bg-[#e6edf3]/5"
          >
            <Github className="mb-4 h-8 w-8 text-zinc-400 transition-colors group-hover:text-white" />
            <h3 className="mb-1 font-bold text-white">GitHub</h3>
            <p className="text-sm text-zinc-400">Check out my code</p>
          </a>

          <a 
            href="/resume.pdf"
            className="group flex flex-col items-center justify-center glass-card p-8 hover:border-green-500/50 hover:bg-green-500/5"
          >
            <FileText className="mb-4 h-8 w-8 text-zinc-400 transition-colors group-hover:text-green-500" />
            <h3 className="mb-1 font-bold text-white">Resume</h3>
            <p className="text-sm text-zinc-400">Download PDF</p>
          </a>
        </div>

        <div className="mt-12 flex items-center justify-center text-zinc-500">
          <MapPin className="mr-2 h-4 w-4" />
          <span>Singapore (Open to Remote)</span>
        </div>
      </div>
    </div>
  )
}
