import { Calendar } from "lucide-react"

const WORK_HISTORY = [
  {
    company: "TechStream Inc.",
    role: "Principal Engineer",
    dates: "2023 - Present",
    description: "Leading the core platform team of 12 engineers. Responsible for global streaming infrastructure.",
    achievements: [
      "Architected and led the migration from monolothic ingest to a Rust-based microservices mesh, handling 1M+ active connections.",
      "Reduced infrastructure costs by 40% ($1.2M annually) via spot instance orchestration and optimizing Kafka retention policies.",
      "Established the internal RFC process, improving design review verification time by 50%."
    ]
  },
  {
    company: "DataFlow Systems",
    role: "Senior Software Engineer",
    dates: "2020 - 2023",
    description: "Core contributor to the high-volume transaction processing engine.",
    achievements: [
      "Redesigned the settlement ledger using an immutable append-only log pattern, eliminating reconciliation errors.",
      "Mentored 3 junior engineers to promotion; introduced comprehensive integration testing culture.",
      "Optimized React dashboard rendering performance, reducing TTI from 2.5s to 0.8s for power users."
    ]
  },
  {
    company: "StartUp Node",
    role: "Full Stack Engineer",
    dates: "2018 - 2020",
    description: "Early employee #5. Built the MVP and scaled to series B.",
    achievements: [
      "Built the entire frontend stack from scratch using React/Redux and migrated it to Next.js.",
      "Implemented necessary security features (2FA, RBAC) to close enterprise deals."
    ]
  }
]

export default function Work() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-16 sm:px-8">
      <h1 className="mb-16 text-4xl font-bold tracking-tight text-white">Work History</h1>
      
      <div className="relative border-l border-white/10 pl-8 ml-4 space-y-16">
        {WORK_HISTORY.map((job, index) => (
          <div key={index} className="relative">
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] top-0 flex h-5 w-5 items-center justify-center rounded-full bg-[#242424] ring-1 ring-white/20">
              <div className="h-2 w-2 rounded-full bg-[#4facfe]" />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
              <h2 className="text-xl font-bold text-white">{job.company}</h2>
              <div className="mt-1 flex items-center text-sm font-medium text-zinc-500 sm:mt-0">
                <Calendar className="mr-1.5 h-3.5 w-3.5" />
                {job.dates}
              </div>
            </div>
            
            <div className="mt-2 text-lg font-medium text-[#4facfe]">{job.role}</div>
            <p className="mt-4 text-zinc-400">{job.description}</p>
            
            <ul className="mt-6 space-y-3">
              {job.achievements.map((item, i) => (
                <li key={i} className="flex items-start text-sm text-zinc-300">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/20" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
