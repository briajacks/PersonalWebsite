import {
  Boxes,
  Braces,
  Cloud,
  Code2,
  Coffee,
  Container,
  Database,
  FileCode2,
  FlaskConical,
  GitBranch,
  Globe,
  GraduationCap,
  Layers,
  Leaf,
  Network,
  Palette,
  Router,
  Server,
  ShieldCheck,
  Terminal,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  icon: LucideIcon;
  gradient: string;
  iconColor: string;
  credlyUrl: string;
  /** Featured certifications also appear in the homepage Skills section. */
  featured: boolean;
};

/** Professional certificates are shown only on the /certifications page. */
export type ProfessionalCertificate = {
  name: string;
  issuer: string;
  year: string;
  icon: LucideIcon;
  /** Link to the certificate (e.g. Coursera/Credly verification page). */
  url: string;
};

export type SkillGroup = {
  title: string;
  /** Featured groups also appear in the homepage Skills section. */
  featured: boolean;
  skills: {
    name: string;
    icon: LucideIcon;
    chip: string;
    iconColor: string;
  }[];
};

/* ---------------------------------------------------------------------------
   REPLACE: update certifications and skills to match your real credentials.
   - `featured: true` shows the entry on the homepage; everything listed here
     appears on the /certifications page.
   - Badge gradients and chip fills mix the site accents (violet, fuchsia,
     amber, cyan); `iconColor` keeps icons readable on light vs. dark fills.
   - `credlyUrl` is a dummy link — swap in each badge's real Credly URL.
--------------------------------------------------------------------------- */
export const CERTIFICATIONS: Certification[] = [
  {
    name: "CompTIA A+",
    issuer: "CompTIA",
    year: "2026",
    icon: ShieldCheck,
    gradient: "from-violet-500 to-fuchsia-500",
    iconColor: "text-white",
    credlyUrl: "https://www.credly.com/badges/00000000-0000-0000-0000-000000000003",
    featured: true,
  },
  {
    name: "CCNA",
    issuer: "Cisco",
    year: "2026",
    icon: Network,
    gradient: "from-violet-500 to-fuchsia-500",
    iconColor: "text-white",
    credlyUrl: "https://www.credly.com/badges/00000000-0000-0000-0000-000000000002",
    featured: true,
  },
  {
    name: "AWS Certified Developer Associate",
    issuer: "AWS",
    year: "2024",
    icon: Cloud,
    gradient: "from-violet-500 to-fuchsia-500",
    iconColor: "text-white",
    credlyUrl: "https://www.credly.com/badges/00000000-0000-0000-0000-000000000003",
    featured: true,
  },
  {
    name: "Java SE 21 Developer ",
    issuer: "Oracle",
    year: "2024",
    icon: Code2,
    gradient: "from-violet-500 to-fuchsia-500",
    iconColor: "text-white",
    credlyUrl: "https://www.credly.com/badges/00000000-0000-0000-0000-000000000004",
    featured: true,
  },
  {
    name: "CompTIA Network+",
    issuer: "CompTIA",
    year: "2025",
    icon: Router,
    gradient: "from-violet-500 to-fuchsia-500",
    iconColor: "text-white",
    credlyUrl: "https://www.credly.com/badges/00000000-0000-0000-0000-000000000005",
    featured: false,
  },
  {
    name: "Oracle Database SQL Certified Associate",
    issuer: "Oracle",
    year: "2025",
    icon: Database,
    gradient: "from-violet-500 to-fuchsia-500",
    iconColor: "text-white",
    credlyUrl: "https://www.credly.com/badges/00000000-0000-0000-0000-000000000006",
    featured: false,
  },
];

/* REPLACE: your real course/program certificates — `url` should point at each
   certificate's verification page (Coursera, Credly, etc.). */
export const PROFESSIONAL_CERTIFICATES: ProfessionalCertificate[] = [
  {
    name: "Google IT Support Professional Certificate",
    issuer: "Google · Coursera",
    year: "2023",
    icon: GraduationCap,
    url: "https://coursera.org/verify/professional-cert/XXXXXXXXXXXX",
  },
  {
    name: "Meta Back-End Developer Professional Certificate",
    issuer: "Meta · Coursera",
    year: "2024",
    icon: Server,
    url: "https://coursera.org/verify/professional-cert/XXXXXXXXXXXX",
  },
  {
    name: "Java Programming and Software Engineering Fundamentals",
    issuer: "Duke University · Coursera",
    year: "2023",
    icon: Coffee,
    url: "https://coursera.org/verify/specialization/XXXXXXXXXXXX",
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Languages & Core",
    featured: true,
    skills: [
      { name: "Java", icon: Coffee, chip: "bg-amber-400/90", iconColor: "text-violet-950" },
      { name: "JavaScript", icon: Braces, chip: "bg-cyan-400/90", iconColor: "text-violet-950" },
      { name: "HTML & CSS", icon: Palette, chip: "bg-fuchsia-500/90", iconColor: "text-white" },
      { name: "SQL", icon: Database, chip: "bg-violet-600", iconColor: "text-amber-300" },
    ],
  },
  {
    title: "Frameworks & Tools",
    featured: true,
    skills: [
      { name: "Spring Boot", icon: Leaf, chip: "bg-cyan-400/90", iconColor: "text-violet-950" },
      { name: "REST APIs", icon: Server, chip: "bg-amber-400/90", iconColor: "text-violet-950" },
      { name: "JUnit & Testing", icon: FlaskConical, chip: "bg-violet-600", iconColor: "text-amber-300" },
      { name: "Maven", icon: Boxes, chip: "bg-fuchsia-500/90", iconColor: "text-white" },
    ],
  },
  {
    title: "Platform & Workflow",
    featured: true,
    skills: [
      { name: "Git & GitHub", icon: GitBranch, chip: "bg-fuchsia-500/90", iconColor: "text-white" },
      { name: "Linux & CLI", icon: Terminal, chip: "bg-violet-600", iconColor: "text-amber-300" },
      { name: "Networking", icon: Globe, chip: "bg-cyan-400/90", iconColor: "text-violet-950" },
      { name: "Amazon Web Services", icon: Cloud, chip: "bg-amber-400/90", iconColor: "text-violet-950" },
    ],
  },
  {
    title: "Currently Exploring",
    featured: false,
    skills: [
      { name: "TypeScript", icon: FileCode2, chip: "bg-cyan-400/90", iconColor: "text-violet-950" },
      { name: "Docker", icon: Container, chip: "bg-violet-600", iconColor: "text-amber-300" },
      { name: "Next.js", icon: Layers, chip: "bg-fuchsia-500/90", iconColor: "text-white" },
      { name: "CI/CD Pipelines", icon: Workflow, chip: "bg-amber-400/90", iconColor: "text-violet-950" },
    ],
  },
];

export const FEATURED_CERTIFICATIONS = CERTIFICATIONS.filter(
  (cert) => cert.featured,
);
export const FEATURED_SKILL_GROUPS = SKILL_GROUPS.filter(
  (group) => group.featured,
);
