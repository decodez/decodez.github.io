export interface CaseStudy {
  slug: string;
  title: string;
  date: string;
  role: string;
  company: string;
  tags: string[];
  impactLine: string;
  problem: string;
  constraints: string[];
  decisions: { title: string; why: string }[];
  architecture: { overview: string; bullets: string[] };
  implementationNotes: string[];
  results: string[];
  tradeoffs: string[];
  nextImprovements: string[];
  links: { label: string; url: string }[];
}

// Load all case studies at build time
const caseStudyModules = import.meta.glob('/src/content/case-studies/*.json', { eager: true });

export function getAllCaseStudies(): CaseStudy[] {
  return Object.values(caseStudyModules).map((mod: any) => {
    // Ensure the shape matches, or handle defaults
    return mod as CaseStudy;
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  const studies = getAllCaseStudies();
  return studies.find(s => s.slug === slug);
}
