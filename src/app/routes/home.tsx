import { Briefcase, Layers, LineChart, Code2, Cloud, Mail, MapPin, FileText } from "lucide-react"
import { CaseStudyCard } from "@/components/CaseStudyCard"
import { getAllCaseStudies } from "@/lib/content"

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

export default function Home() {
  return (
    <div className="te-grid-container transition-colors duration-500 min-h-screen">
      {/* Hero Section */}
      <section className="te-grid-item col-span-full py-32 flex flex-col justify-center">
        <div className="max-w-4xl">
          <h1 className="text-6xl font-black tracking-tighter sm:text-8xl mb-8 leading-[0.85]">
            akhil prasenan
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 mb-12">
            <h2 className="text-xl font-bold tracking-tight text-[var(--text-secondary)] border-b-2 border-[var(--text-primary)] inline-block">
              lead / principal-track full stack engineer
            </h2>
          </div>
          <p className="max-w-xl text-lg font-medium tracking-tight text-[var(--text-muted)] mb-12">
            specializing in scalable architecture, developer experience, and product-led engineering. 
            i build systems that grow with the business.
          </p>
          
          <div className="flex flex-wrap gap-0 border-t border-l border-[var(--border-color)] max-w-fit">
            <a
              href="#work" 
              className="px-8 py-4 text-xs font-bold border-r border-b border-[var(--border-color)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-color)] transition-all flex items-center gap-2"
            >
              [ experience ] <Briefcase className="h-3 w-3" />
            </a>
            <a 
              href="/resume.pdf" 
              className="px-8 py-4 text-xs font-bold border-r border-b border-[var(--border-color)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-color)] transition-all flex items-center gap-2"
            >
              [ resume ] <FileText className="h-3 w-3" />
            </a>
            <a
              href="#contact" 
              className="px-8 py-4 text-xs font-bold border-r border-b border-[var(--border-color)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-color)] transition-all flex items-center gap-2"
            >
              [ contact ] <Mail className="h-3 w-3" />
            </a>
          </div>
        </div>
      </section>

      {/* Proof Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 col-span-full te-grid-container">
        <section className="te-grid-item group hover:bg-[#ff4d00]/5 transition-colors">
          <div className="flex items-center gap-2 mb-6 text-[var(--text-muted)]">
            <div className="h-0.5 w-6 bg-[var(--border-color)]" />
            <span className="text-[10px] font-bold tracking-widest uppercase">01 / architecture</span>
          </div>
          <h3 className="text-2xl font-bold mb-4 tracking-tight">designing fault-tolerant distributed systems and scalable data models.</h3>
          <Layers className="h-8 w-8 text-[var(--border-color)] opacity-20 group-hover:opacity-100 transition-opacity" />
        </section>
        
        <section className="te-grid-item group hover:bg-[#ff4d00]/5 transition-colors border-l-0 md:border-l">
          <div className="flex items-center gap-2 mb-6 text-[var(--text-muted)]">
            <div className="h-0.5 w-6 bg-[var(--border-color)]" />
            <span className="text-[10px] font-bold tracking-widest uppercase">02 / dx & ci/cd</span>
          </div>
          <h3 className="text-2xl font-bold mb-4 tracking-tight">optimizing build pipelines and creating tooling that developers love.</h3>
          <Code2 className="h-8 w-8 text-[var(--border-color)] opacity-20 group-hover:opacity-100 transition-opacity" />
        </section>

        <section className="te-grid-item group hover:bg-[#ff4d00]/5 transition-colors border-l-0 md:border-l">
          <div className="flex items-center gap-2 mb-6 text-[var(--text-muted)]">
            <div className="h-0.5 w-6 bg-[var(--border-color)]" />
            <span className="text-[10px] font-bold tracking-widest uppercase">03 / data engineering</span>
          </div>
          <h3 className="text-2xl font-bold mb-4 tracking-tight">handling high throughput and visualizing complex datasets seamlessly.</h3>
          <LineChart className="h-8 w-8 text-[var(--border-color)] opacity-20 group-hover:opacity-100 transition-opacity" />
        </section>
      </div>

      {/* Toolbox Section */}
      <section id="toolbox" className="te-grid-item col-span-full scroll-mt-14 pt-24 pb-32">
        <div className="mb-16">
          <div className="inline-block border-2 border-[var(--border-color)] px-4 py-1 mb-6 text-[10px] font-black uppercase tracking-widest bg-[var(--text-primary)] text-[var(--bg-color)]">
            toolbox
          </div>
          <h2 className="text-4xl font-black tracking-tighter mb-4">technological stack / capabilities</h2>
          <p className="text-lg text-[var(--text-muted)] max-w-xl">
            a selection of instruments used for precision software engineering.
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
            selected case studies
          </div>
          <h2 className="text-4xl font-black tracking-tighter mb-4">technical records / deep-dives</h2>
          <p className="text-lg text-[var(--text-muted)] max-w-xl">
            a curated selection of projects focusing on architectural trade-offs and engineering impact.
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
          <a
            href="/case-studies"
            className="px-8 py-4 text-xs font-bold border border-[var(--border-color)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-color)] transition-all inline-flex items-center gap-2"
          >
            [ view all technical records ] <FileText className="h-3 w-3" />
          </a>
        </div>
      </section>

      {/* Work History Section */}
      <section id="work" className="te-grid-item col-span-full scroll-mt-14 pt-24 pb-32">
        <div className="mb-16">
          <div className="inline-block border-2 border-[var(--border-color)] px-4 py-1 mb-6 text-[10px] font-black uppercase tracking-widest bg-[var(--text-primary)] text-[var(--bg-color)]">
            work history
          </div>
          <h2 className="text-4xl font-black tracking-tighter mb-4">professional record / timeline</h2>
        </div>

        <div className="space-y-0 border-t border-[var(--border-color)]">
          {WORK_HISTORY.map((job, index) => (
            <div key={index} className="border-b border-[var(--border-color)] last:border-b-0 py-16 group hover:bg-[var(--text-primary)]/5 transition-colors px-4 sm:px-0">
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
            get in touch
          </div>
          <h2 className="text-6xl sm:text-8xl font-black tracking-tighter mb-12 leading-[0.85]">
            open for / collaboration.
          </h2>
          
          <div className="flex flex-wrap justify-center gap-0 border-t border-l border-[var(--border-color)] max-w-fit mx-auto">
            <a href="mailto:akhil_prasenan@outlook.com" className="px-12 py-8 border-r border-b border-[var(--border-color)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-color)] transition-all font-bold tracking-tight">
              [ email ]
            </a>
            <a href="https://linkedin.com/in/akhilprasenan" className="px-12 py-8 border-r border-b border-[var(--border-color)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-color)] transition-all font-bold tracking-tight">
              [ linkedin ]
            </a>
            <a href="https://github.com/decodez" className="px-12 py-8 border-r border-b border-[var(--border-color)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-color)] transition-all font-bold tracking-tight">
              [ github ]
            </a>
          </div>

          <div className="mt-16 flex items-center justify-center text-[var(--text-muted)] gap-2">
            <MapPin className="h-4 w-4" />
            <span className="text-[10px] font-black uppercase tracking-widest">singapore / remote-available</span>
          </div>
        </div>
      </section>
    </div>
  )
}
