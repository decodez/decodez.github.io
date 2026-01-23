import { Calendar } from "lucide-react"

const WORK_HISTORY = [
  {
    company: "JLL (Client: Google)",
    role: "Lead Software Engineer (Platform-Focused)",
    dates: "2020 – Present",
    description: "Technical owner for frontend and system architecture of a complex enterprise web application supporting Google projects.",
    achievements: [
      "Drive architectural decisions balancing performance, complexity, and evolving business requirements.",
      "Own CI/CD pipelines and DevOps workflows, improving deployment reliability and developer efficiency.",
      "Lead continuous system improvement through refactoring and optimization rather than just feature delivery.",
      "Mentor engineers providing architectural guidance and design reviews."
    ]
  },
  {
    company: "EY Digital",
    role: "Senior UI / UX Developer",
    dates: "2018 – 2020",
    description: "Delivered large-scale enterprise and government web platforms with complex regulatory requirements.",
    achievements: [
      "Designed scalable frontend architectures and reusable component systems.",
      "Collaborated with backend and product teams to ensure maintainability and performance.",
      "Contributed to shared frontend standards and documentation across projects."
    ]
  },
  {
    company: "Adelphi Digital",
    role: "UI / UX Developer",
    dates: "2017 – 2018",
    description: "Built responsive, production-grade web applications for enterprise clients.",
    achievements: [
      "Ensured performance optimisation, accessibility, and cross-browser compatibility.",
      "Delivered enterprise digital solutions within cross-functional teams."
    ]
  },
  {
    company: "Freelance",
    role: "Software Engineer (Full Stack / Systems)",
    dates: "2014 – Present",
    description: "Delivering end-to-end software solutions, owning system design and deployment.",
    achievements: [
      "Built full-stack systems using MERN stack, Electron desktop applications, and custom dashboards.",
      "Designed backend APIs, authentication flows, data models, and frontend systems."
    ]
  }
]

export default function Work() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-16 sm:px-8 transition-colors duration-500">
      <h1 className="mb-16 text-4xl font-bold tracking-tight text-[var(--text-primary)]">Work History</h1>
      
      <div className="relative border-l border-[var(--glass-border)] pl-8 ml-4 space-y-16">
        {WORK_HISTORY.map((job, index) => (
          <div key={index} className="relative">
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] top-0 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--bg-color)] backdrop-blur-sm ring-1 ring-[var(--glass-border)] transition-colors duration-500">
              <div className="h-2 w-2 rounded-full bg-[#4facfe]" />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
              <h2 className="text-xl font-bold text-[var(--text-primary)]">{job.company}</h2>
              <div className="mt-1 flex items-center text-sm font-medium text-[var(--text-muted)] sm:mt-0">
                <Calendar className="mr-1.5 h-3.5 w-3.5" />
                {job.dates}
              </div>
            </div>
            
            <div className="mt-2 text-lg font-medium text-[#4facfe]">{job.role}</div>
            <p className="mt-4 text-[var(--text-secondary)]">{job.description}</p>
            
            <ul className="mt-6 space-y-3">
              {job.achievements.map((item, i) => (
                <li key={i} className="flex items-start text-sm text-[var(--text-secondary)]">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--text-muted)] opacity-50" />
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
