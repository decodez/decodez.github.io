import { Code2, Layers, Cloud } from "lucide-react"

const SKILLS = [
  {
    category: "Languages & Frameworks",
    icon: Code2,
    items: ["JavaScript", "TypeScript", "Python", "Angular", "React", "HTML", "CSS", "SASS"]
  },
  {
    category: "Platform & Tooling",
    icon: Cloud,
    items: ["CI/CD pipelines", "DevOps workflows", "Monitoring", "Production Support"]
  },
  {
    category: "Systems & Architecture",
    icon: Layers,
    items: ["Frontend Systems", "API Integrations", "Data Visualisation", "Enterprise CMS"]
  }
]

export default function Toolbox() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-8">
      <div className="mb-16 max-w-2xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white">Toolbox</h1>
        <p className="text-lg text-zinc-400">
          The technologies and tools I rely on to build scalable, production-ready software.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        {SKILLS.map((group) => (
          <div key={group.category} className="glass-card p-8">
            <div className="mb-6 flex items-center gap-3">
              <group.icon className="h-6 w-6 text-[#4facfe]" />
              <h2 className="text-xl font-bold text-white">{group.category}</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map(skill => (
                <span key={skill} className="rounded-md border border-white/5 bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
