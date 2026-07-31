import {
  BarChart3,
  BookOpen,
  CalendarClock,
  CloudSun,
  LayoutDashboard,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export type Project = {
  title: string;
  description: string;
  tech: string[];
  icon: LucideIcon;
  gradient: string;
  iconColor: string;
  demoUrl: string;
  repoUrl: string;
  /** Featured projects also appear in the homepage Projects section. */
  featured: boolean;
};

/* ---------------------------------------------------------------------------
   REPLACE: swap in your real projects.
   - `demoUrl` / `repoUrl`: point at your live demos and GitHub repos.
   - `featured: true` shows the project on the homepage; every project listed
     here appears on the /projects page.
   - Screenshot: each card currently renders a gradient banner with an icon
     (`iconColor` keeps the icon readable on light vs. dark banners).
     To use a real screenshot instead, replace the banner <div> in
     components/ProjectCard.tsx with:
       <Image src="/projects/shelfwise.png" alt="..." width={640} height={360}
              className="h-40 w-full object-cover" />
     (import Image from "next/image" and drop images in /public/projects/)
--------------------------------------------------------------------------- */
export const PROJECTS: Project[] = [
  {
    title: "ShelfWise",
    description:
      "Library management system for a local community center. Handles catalog search, member accounts, lending, and overdue notices with a role-based admin dashboard.",
    tech: ["Java 21", "Spring Boot", "Thymeleaf", "MySQL"],
    icon: BookOpen,
    gradient: "from-violet-600 to-cyan-500",
    iconColor: "text-white/90",
    demoUrl: "#",
    repoUrl: "#",
    featured: true,
  },
  {
    title: "TrackIt",
    description:
      "Personal finance REST API with a vanilla JS front end. JWT authentication, budgets, recurring transactions, and monthly spending reports as downloadable CSVs.",
    tech: ["Spring Boot", "Spring Security", "JWT", "PostgreSQL"],
    icon: Wallet,
    gradient: "from-fuchsia-600 to-pink-500",
    iconColor: "text-white/90",
    demoUrl: "#",
    repoUrl: "#",
    featured: true,
  },
  {
    title: "MediQueue",
    description:
      "Appointment scheduling app for a small clinic. Patients book and reschedule online; staff manage availability through a calendar view with email reminders.",
    tech: ["Spring MVC", "Hibernate", "Bootstrap", "MySQL"],
    icon: CalendarClock,
    gradient: "from-violet-600 via-fuchsia-500 to-amber-400",
    iconColor: "text-white/90",
    demoUrl: "#",
    repoUrl: "#",
    featured: true,
  },
  {
    title: "TaskForge",
    description:
      "Kanban-style project tracker with drag-and-drop boards, team workspaces, and live updates over WebSockets so everyone sees changes as they happen.",
    tech: ["Spring Boot", "WebSockets", "React", "PostgreSQL"],
    icon: LayoutDashboard,
    gradient: "from-cyan-500 to-violet-600",
    iconColor: "text-white/90",
    demoUrl: "#",
    repoUrl: "#",
    featured: false,
  },
  {
    title: "WeatherWise",
    description:
      "Weather dashboard that pulls current conditions and a five-day forecast from the OpenWeather API, with saved locations and hourly trend charts.",
    tech: ["JavaScript", "REST APIs", "Chart.js", "CSS Grid"],
    icon: CloudSun,
    gradient: "from-amber-400 to-fuchsia-500",
    iconColor: "text-white/90",
    demoUrl: "#",
    repoUrl: "#",
    featured: false,
  },
  {
    title: "CommitCanvas",
    description:
      "GitHub activity visualizer that turns a profile's contribution history into shareable charts — language breakdowns, streaks, and repo highlights.",
    tech: ["Java", "GitHub API", "Spring Boot", "SVG"],
    icon: BarChart3,
    gradient: "from-fuchsia-600 to-violet-600",
    iconColor: "text-white/90",
    demoUrl: "#",
    repoUrl: "#",
    featured: false,
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((project) => project.featured);
