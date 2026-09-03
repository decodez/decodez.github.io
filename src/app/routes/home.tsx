import { Link } from "react-router-dom"
import { Briefcase, Layers, Sparkles, Code2, Cloud, Mail, MapPin, FileText } from "lucide-react"
import { CaseStudyCard } from "@/components/CaseStudyCard"
import { getAllCaseStudies } from "@/lib/content"

const WORK_HISTORY = [
  {
    company: "JLL (Client: Google)",
    role: "Lead Software Engineer (P4)",
    dates: "Mar 2025 – Present",
    description: "Own the architecture, CI/CD pipelines, and deployment infrastructure for an enterprise platform used by Google project teams across the US, Europe, and APAC, while leading a distributed team of four engineers.",
    achievements: [
      "Designed the RAG ingestion pipeline that keeps the knowledge base current with zero manual steps: documents dropped into Cloud Storage are automatically embedded and indexed into a Vertex AI vector database via Cloud Functions.",
      "Built the Python backend that grounds Vertex AI on this corpus to answer user questions and draft executive summaries comparing data versions.",
      "Own CI/CD pipelines shipping Docker images to Cloud Run and Cloud Functions, improving release reliability and developer efficiency.",
      "Building an AI-powered comparison tool that explains data changes, projects impact, and flags likely data-entry mistakes before decisions are made on them.",
      "Lead a team of four engineers across Singapore and Poland, owning hiring, onboarding, and mentoring.",
      "Act as primary technical contact and project manager for the account, from planning through delivery."
    ]
  },
  {
    company: "JLL (Client: Google)",
    role: "Lead Software Engineer (P3)",
    dates: "Mar 2022 – Mar 2025",
    description: "Ran day-to-day development and Agile delivery for the platform team, setting the application architecture and DevOps processes still in use today.",
    achievements: [
      "Planned the application architecture and set up the DevOps processes the team still runs on.",
      "Reviewed code across the team and mentored junior engineers, raising the baseline of what shipped.",
      "Managed client communication and stakeholder expectations through several major deliveries."
    ]
  },
  {
    company: "JLL (Client: Google)",
    role: "Senior Frontend Engineer",
    dates: "May 2020 – Mar 2022",
    description: "Built and optimized the frontend for a data-heavy enterprise platform used across large operational datasets.",
    achievements: [
      "Built data visualization dashboards that turned large operational datasets into views stakeholders actually used for decisions.",
      "Optimized frontend performance to handle large datasets without degrading the user experience.",
      "Redesigned user interaction flows, improving usability and product adoption."
    ]
  },
  {
    company: "Ernst & Young",
    role: "Senior UI/UX Developer",
    dates: "May 2018 – Jul 2020",
    description: "Delivered large enterprise and government web platforms with heavy regulatory requirements.",
    achievements: [
      "Wrote automated end-to-end browser tests with Selenium for these platforms.",
      "Designed the frontend architecture and reusable component systems used across projects.",
      "Wrote the shared frontend standards other teams built on."
    ]
  },
  {
    company: "Adelphi Digital",
    role: "UI/UX Developer",
    dates: "May 2017 – May 2018",
    description: "Built responsive production web applications with a focus on performance, accessibility, and cross-browser support.",
    achievements: [
      "Delivered responsive, production-grade web applications across cross-functional client teams."
    ]
  }
]

function handleAnchorClick(e: React.MouseEvent<HTMLAnchorElement>, targetId: string) {
  e.preventDefault()
  const element = document.getElementById(targetId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
    window.history.pushState(null, "", `#/${targetId}`)
  }
}

const SKILLS = [
  {
    category: "Languages & Frameworks",
    icon: Code2,
    items: ["Python", "Go", "TypeScript", "JavaScript", "Node.js", "Angular", "React", "HTML", "CSS/SASS"]
  },
  {
    category: "Platform & Infrastructure",
    icon: Cloud,
    items: ["Google Cloud Platform", "Cloud Run", "Cloud Functions", "Cloud Storage", "Cloud Logging", "Docker", "CI/CD Pipeline Design", "Terraform"]
  },
  {
    category: "AI Platform & Data",
    icon: Sparkles,
    items: ["RAG Pipeline Design", "Vertex AI", "Vector Databases", "Embeddings & Retrieval", "LLM Grounding"]
  },
  {
    category: "Architecture & Leadership",
    icon: Layers,
    items: ["System & Platform Architecture", "Distributed Team Leadership", "Agile Delivery", "Stakeholder Management"]
  }
]

export default function Home() {
  return (
    <div className="te-grid-container transition-colors duration-500 min-h-screen">
      {/* Hero Section */}
      <section className="te-grid-item col-span-full py-32 flex flex-col justify-center">
        <div className="max-w-4xl">
          <h1 className="text-6xl font-black tracking-tighter sm:text-8xl mb-8 leading-[0.85]">
            Akhil Prasenan
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 mb-12">
            <h2 className="text-xl font-bold tracking-tight text-[var(--text-secondary)] border-b-2 border-[var(--text-primary)] inline-block">
              Lead Software Engineer · Platform & AI Infrastructure
            </h2>
          </div>
          <p className="max-w-xl text-lg font-medium tracking-tight text-[var(--text-muted)] mb-12">
            9+ years building and running enterprise platforms on Google Cloud, the last six embedded with Google through JLL. Now focused on RAG pipelines and AI platform infrastructure that ground LLM output for production use.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-l border-[var(--border-color)] max-w-fit">
            <a
              href="#work"
              onClick={(e) => handleAnchorClick(e, "work")}
              className="px-8 py-4 text-xs font-bold border-r border-b border-[var(--border-color)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-color)] transition-all flex items-center justify-center sm:justify-start gap-2"
            >
              [ Experience ] <Briefcase className="h-3 w-3" />
            </a>
            <a 
              href="/resume.pdf" 
              className="px-8 py-4 text-xs font-bold border-r border-b border-[var(--border-color)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-color)] transition-all flex items-center justify-center sm:justify-start gap-2"
            >
              [ Resume ] <FileText className="h-3 w-3" />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleAnchorClick(e, "contact")}
              className="px-8 py-4 text-xs font-bold border-r border-b border-[var(--border-color)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-color)] transition-all flex items-center justify-center sm:justify-start gap-2"
            >
              [ Contact ] <Mail className="h-3 w-3" />
            </a>
          </div>
        </div>
      </section>

      {/* Proof Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 col-span-full te-grid-container">
        <section className="te-grid-item group hover:bg-[#ff4d00]/5 transition-colors">
          <div className="flex items-center gap-2 mb-6 text-[var(--text-muted)]">
            <div className="h-0.5 w-6 bg-[var(--border-color)]" />
            <span className="text-[10px] font-bold tracking-widest uppercase">01 / Architecture</span>
          </div>
          <h3 className="text-2xl font-bold mb-4 tracking-tight">Designing fault-tolerant distributed systems and scalable data models.</h3>
          <Layers className="h-8 w-8 text-[var(--border-color)] opacity-20 group-hover:opacity-100 transition-opacity" />
        </section>
        
        <section className="te-grid-item group hover:bg-[#ff4d00]/5 transition-colors border-l-0 md:border-l">
          <div className="flex items-center gap-2 mb-6 text-[var(--text-muted)]">
            <div className="h-0.5 w-6 bg-[var(--border-color)]" />
            <span className="text-[10px] font-bold tracking-widest uppercase">02 / DX & CI/CD</span>
          </div>
          <h3 className="text-2xl font-bold mb-4 tracking-tight">Optimizing build pipelines and creating tooling that developers love.</h3>
          <Code2 className="h-8 w-8 text-[var(--border-color)] opacity-20 group-hover:opacity-100 transition-opacity" />
        </section>

        <section className="te-grid-item group hover:bg-[#ff4d00]/5 transition-colors border-l-0 md:border-l">
          <div className="flex items-center gap-2 mb-6 text-[var(--text-muted)]">
            <div className="h-0.5 w-6 bg-[var(--border-color)]" />
            <span className="text-[10px] font-bold tracking-widest uppercase">03 / AI Infrastructure</span>
          </div>
          <h3 className="text-2xl font-bold mb-4 tracking-tight">Designing RAG pipelines and grounding LLM output for production AI features.</h3>
          <Sparkles className="h-8 w-8 text-[var(--border-color)] opacity-20 group-hover:opacity-100 transition-opacity" />
        </section>
      </div>

      {/* Toolbox Section */}
      <section id="toolbox" className="te-grid-item col-span-full scroll-mt-14 pt-24 pb-32">
        <div className="mb-16">
          <div className="inline-block border-2 border-[var(--border-color)] px-4 py-1 mb-6 text-[10px] font-black uppercase tracking-widest bg-[var(--text-primary)] text-[var(--bg-color)]">
            Toolbox
          </div>
          <h2 className="text-4xl font-black tracking-tighter mb-4">Technological Stack / Capabilities</h2>
          <p className="text-lg text-[var(--text-muted)] max-w-xl">
            A selection of instruments used for precision software engineering.
          </p>
        </div>

        <div className="grid gap-0 border-t border-l border-[var(--border-color)]">
          {SKILLS.map((group) => (
            <div key={group.category} className="border-r border-b border-[var(--border-color)] p-12 hover:bg-[var(--glass-bg-hover)] transition-colors">
              <div className="mb-8 flex items-center gap-4">
                <div className="p-2 border border-[var(--border-color)]">
                  <group.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold tracking-tight">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                {group.items.map(skill => (
                  <span key={skill} className="text-sm font-bold tracking-tight text-[var(--text-primary)] flex items-center gap-2">
                    <div className="h-1 w-1 bg-[#ff4d00]" /> {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Case Studies Section */}
      <section id="studies" className="te-grid-item col-span-full scroll-mt-14 pt-24 pb-32">
        <div className="mb-16">
          <div className="inline-block border-2 border-[var(--border-color)] px-4 py-1 mb-6 text-[10px] font-black uppercase tracking-widest bg-[var(--text-primary)] text-[var(--bg-color)]">
            Selected Case Studies
          </div>
          <h2 className="text-4xl font-black tracking-tighter mb-4">Technical Records / Deep-Dives</h2>
          <p className="text-lg text-[var(--text-muted)] max-w-xl">
            A curated selection of projects focusing on architectural trade-offs and engineering impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
          {getAllCaseStudies().slice(0, 2).map((study) => (
            <div key={study.slug} className="">
              <CaseStudyCard study={study} />
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            to="/case-studies"
            className="px-8 py-4 text-xs font-bold border border-[var(--border-color)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-color)] transition-all inline-flex items-center gap-2"
          >
            [ View All Technical Records ] <FileText className="h-3 w-3" />
          </Link>
        </div>
      </section>

      {/* Work History Section */}
      <section id="work" className="te-grid-item col-span-full scroll-mt-14 pt-24 pb-32">
        <div className="mb-16">
          <div className="inline-block border-2 border-[var(--border-color)] px-4 py-1 mb-6 text-[10px] font-black uppercase tracking-widest bg-[var(--text-primary)] text-[var(--bg-color)]">
            Work History
          </div>
          <h2 className="text-4xl font-black tracking-tighter mb-4">Professional Record / Timeline</h2>
        </div>

        <div className="space-y-0 border-t border-[var(--border-color)]">
          {WORK_HISTORY.map((job, index) => (
            <div key={index} className="border-b border-[var(--border-color)] last:border-b-0 py-16 group hover:bg-[var(--text-primary)]/5 transition-colors sm:px-0">
              <div className="grid md:grid-cols-12 gap-8 max-w-6xl mx-auto">
                <div className="md:col-span-3">
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#ff4d00] mb-2">{job.dates}</div>
                  <h3 className="text-2xl font-black tracking-tighter">{job.company}</h3>
                </div>
                <div className="md:col-span-9">
                  <div className="text-lg font-bold tracking-tight mb-4">{job.role}</div>
                  <p className="text-md text-[var(--text-muted)] mb-8 leading-relaxed max-w-2xl">{job.description}</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {job.achievements.map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <span className="text-[10px] text-[#ff4d00] font-black mt-1">[{i + 1}]</span>
                        <p className="text-sm text-[var(--text-primary)] font-medium leading-normal">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="te-grid-item col-span-full scroll-mt-14 pt-32 pb-48 border-b border-[var(--border-color)]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block border-2 border-[var(--border-color)] px-4 py-1 mb-12 text-[10px] font-black uppercase tracking-widest">
            Get In Touch
          </div>
          <h2 className="text-6xl sm:text-8xl font-black tracking-tighter mb-12 leading-[0.85]">
            Open for Collaboration.
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-l border-[var(--border-color)] max-w-fit mx-auto">
            <a href="mailto:prasenanakhil@gmail.com" className="px-12 py-8 border-r border-b border-[var(--border-color)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-color)] transition-all font-bold tracking-tight">
              [ Email ]
            </a>
            <a href="https://linkedin.com/in/akhilprasenan" className="px-12 py-8 border-r border-b border-[var(--border-color)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-color)] transition-all font-bold tracking-tight">
              [ LinkedIn ]
            </a>
            <a href="https://github.com/decodez" className="px-12 py-8 border-r border-b border-[var(--border-color)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-color)] transition-all font-bold tracking-tight">
              [ GitHub ]
            </a>
          </div>

          <div className="mt-16 flex items-center justify-center text-[var(--text-muted)] gap-2">
            <MapPin className="h-4 w-4" />
            <span className="text-[10px] font-black uppercase tracking-widest">Singapore / Remote-Available</span>
          </div>
        </div>
      </section>
    </div>
  )
}
