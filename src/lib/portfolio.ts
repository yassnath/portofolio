import {
  BadgeCheck,
  BriefcaseBusiness,
  Code2,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  MonitorCog,
  Phone,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Workflow,
} from "lucide-react";

export const profile = {
  name: "Andreas Natanael Irawan",
  shortName: "Andreas Nath",
  role: "Fullstack Developer / Mobile Developer / Software Developer",
  location: "Malang, Indonesia",
  email: "andreasnath04@gmail.com",
  phone: "+6285771753354",
  whatsapp: "https://wa.me/6285771753354",
  linkedin: "https://www.linkedin.com/in/andreasnatanaelirawan",
  github: "https://github.com/yassnath",
  gpa: "3.86",
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const heroBadges = [
  "Fullstack Engineering",
  "Mobile Apps",
  "Operational Systems",
  "Open for Work",
];

export const heroSignals = [
  { label: "Role fit", value: "Fullstack, mobile, and software delivery" },
  { label: "Builder focus", value: "ERP, POS, dashboards, workflow systems" },
  { label: "Recruiter scan", value: "GPA 3.86 with practical project ownership" },
];

export const workflowSteps = ["Discover", "Design", "Build", "Automate", "Deploy"];

export const dashboardHighlights = [
  { label: "ERP Architecture", value: "Multi-tenant business modules", icon: Layers3 },
  { label: "Realtime POS Flow", value: "Kitchen display + reporting", icon: MonitorCog },
  { label: "Mobile Ops Dashboard", value: "Role-based field visibility", icon: Smartphone },
  { label: "RBAC Automation", value: "Secure workflow governance", icon: Workflow },
];

export const stats = [
  { value: "3.86", label: "GPA" },
  { value: "5", label: "Case-study projects" },
  { value: "2021", label: "Digital production since" },
  { value: "Ops", label: "Business workflow focus" },
];

export const projects = [
  {
    title: "Solvix ERP",
    subtitle: "Multi-Tenant ERP System",
    description:
      "A business operating system concept for finance, procurement, inventory, HR, and projects with tenant-scoped access control.",
    problem:
      "Growing teams need shared business data, but each tenant and department must stay protected, auditable, and easy to manage.",
    solution:
      "Designed tenant-scoped data access, RBAC, workflow automation, and audit logging so business processes can move without losing control.",
    impact: "Gives operators clearer governance, safer access boundaries, and better visibility across core ERP modules.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    features: ["Finance module", "Procurement flow", "Inventory tracking", "HR and projects", "RBAC security", "Audit logging"],
    links: [
      { label: "Case Study", href: "#contact", icon: ExternalLink },
      { label: "GitHub", href: profile.github, icon: Github },
    ],
  },
  {
    title: "Solvix Moka POS",
    subtitle: "Realtime Coffee Shop POS",
    description:
      "A realtime point-of-sale workflow for coffee shop operations, connecting cashier, kitchen, payment, receipt, and reporting flows.",
    problem:
      "Cashier, kitchen, and manager workflows can drift apart when order status, payments, and reports are handled in disconnected tools.",
    solution:
      "Built Server-Sent Events for kitchen display updates, split payments, receipt generation, offline auto-sync, analytics, and CSV exports.",
    impact: "Creates a tighter counter-to-kitchen loop and gives managers faster sales visibility from a single operational dashboard.",
    tech: ["Next.js", "PostgreSQL", "SSE"],
    features: ["Realtime KDS", "New / In Progress / Ready states", "Split payments", "Receipt generation", "Offline auto-sync", "Sales CSV export"],
    links: [
      { label: "Live Demo", href: "#contact", icon: ExternalLink },
      { label: "GitHub", href: profile.github, icon: Github },
    ],
  },
  {
    title: "CashFlow",
    subtitle: "Android Finance Application",
    description:
      "A mobile finance companion for income, expense, debt, and insight workflows with cloud-backed synchronization.",
    problem:
      "Personal finance tracking becomes inconsistent when transactions, debt notes, and financial insights live in different places.",
    solution:
      "Created a mobile-first tracking experience with Jetpack Compose, Supabase sync, secure authentication, debt records, and AI-based insights.",
    impact: "Helps users read spending patterns, debt position, and financial decisions from one focused mobile dashboard.",
    tech: ["Kotlin", "Jetpack Compose", "Supabase"],
    features: ["Income tracking", "Expense tracking", "Analytics", "AI insights", "Debt tracking", "Secure auth", "Cloud sync"],
    links: [
      { label: "Case Study", href: "#contact", icon: ExternalLink },
      { label: "GitHub", href: profile.github, icon: Github },
    ],
  },
  {
    title: "AS Nusa Trans Mobile",
    subtitle: "Logistics Operations Dashboard",
    description:
      "A mobile operations dashboard concept for logistics teams managing fleet visibility, orders, finance, and role-based controls.",
    problem:
      "Logistics teams need a centralized operational view without giving every role the same access, action rights, or financial visibility.",
    solution:
      "Structured Flutter and Supabase dashboards around role-specific views for fleet, order workflow, finance, and operational monitoring.",
    impact: "Improves accountability by making each role see the right information at the right point in the workflow.",
    tech: ["Flutter", "Supabase"],
    features: ["Role-based dashboard", "Fleet monitoring", "Order workflow", "Financial tracking", "Structured workflow controls"],
    links: [
      { label: "Case Study", href: "#contact", icon: ExternalLink },
      { label: "GitHub", href: profile.github, icon: Github },
    ],
  },
  {
    title: "Solvix Studio",
    subtitle: "SaaS Agency Platform",
    description:
      "A SaaS-style agency platform combining a conversion-focused website, authenticated dashboard, order wizard, and lifecycle tracking.",
    problem:
      "Service businesses need a clean inquiry path while keeping client access, project requests, and lifecycle status organized.",
    solution:
      "Implemented marketing pages, authenticated dashboard areas, a multi-step order wizard, lifecycle tracking, route protection, and RBAC.",
    impact: "Turns service inquiries into trackable project workflows and makes client communication easier to manage.",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    features: ["Marketing website", "Client dashboard", "Order wizard", "Lifecycle tracking", "Route protection", "RBAC"],
    links: [
      { label: "Live Demo", href: "#contact", icon: ExternalLink },
      { label: "GitHub", href: profile.github, icon: Github },
    ],
  },
];

export const experiences = [
  {
    company: "Hospitality & Entertainment Venue - Jakarta, Indonesia",
    role: "Fullstack Website Developer",
    period: "Remote Freelance | Feb 8, 2026 - Feb 27, 2026",
    description:
      "Built a custom POS using Laravel for hospitality operations with focus on ordering, administration, and operational reliability.",
  },
  {
    company: "CV AS Nusa Trans - Sidoarjo, Indonesia",
    role: "Fullstack Website Developer / Mobile Application Developer",
    period: "Contract | Sep 2025 - Jan 2026",
    description:
      "Worked with Next.js, Laravel, Docker, Flutter, and Supabase to support logistics-facing web systems, mobile applications, and operational dashboards.",
  },
  {
    company: "PT Avatara Generasi Istimewa - Jakarta, Indonesia",
    role: "Content Creator, Live Streamer Tiktok, Website Administrator",
    period: "Remote Apprenticeship | Nov 2024 - Sep 2025",
    description:
      "Managed content, Tiktok livestream execution, and WordPress website administration while supporting digital presence and audience operations.",
  },
  {
    company: "PUSIM Unmer (Pusat Sistem Informasi Multimedia) - Malang, Indonesia",
    role: "Cyber Security",
    period: "Internal Apprenticeship | Sep 2024 - Feb 2025",
    description:
      "Supported penetration testing and security-oriented analysis across campus technology environments.",
  },
  {
    company: "Pixelcraft Studios - Batu, Indonesia",
    role: "Helper Videography",
    period: "Freelance | May 9, 2024",
    description:
      "Assisted videography production workflows for a freelance multimedia project.",
  },
  {
    company: "Faculty of Information Technology Workshop - Malang, Indonesia",
    role: "Teaching Assistant",
    period: "Teaching Assistant | Mar 7, 2024 - Mar 9, 2024",
    description:
      "Supported a frontend website development workshop covering MySQL and PHP fundamentals.",
  },
  {
    company: "Faculty of Information Technology - Malang, Indonesia",
    role: "Website Manager",
    period: "Internal Apprenticeship | Oct 2023 - Mar 2024",
    description:
      "Managed the Faculty of Information Technology website, S1 System Information Program Study website, and supported video profile production.",
  },
  {
    company: "Yosgawan Studios - Malang, Indonesia",
    role: "Streaming Operator, Frontend Developer, LED, Video Director",
    period: "Freelance | Jan 2021 - Present",
    description:
      "Operates OBS, Pro Presenter, Resolume Arena, LED workflows, and video direction while contributing frontend website development with Next.js.",
  },
];

export const skills = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["Next.js (App Router)", "React", "TailwindCSS", "Flutter", "HTML", "CSS", "Javascript", "Bootstrap"],
  },
  {
    title: "Backend",
    icon: ServerCog,
    items: ["Laravel", "Next.js Route Handlers", "Prisma ORM", "REST API"],
  },
  {
    title: "Database",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "SQLite", "SQL Server"],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    items: ["Kotlin (Android)", "Flutter"],
  },
  {
    title: "DevOps & Tools",
    icon: BriefcaseBusiness,
    items: ["Docker", "Git"],
  },
  {
    title: "Additional",
    icon: ShieldCheck,
    items: ["Authentication Systems (RBAC)", "Structured Workflow Implementation", "Audit Logging", "Dashboard Development", "POS System", "ERP System"],
  },
];

export const certifications = [
  {
    issuer: "NVIDIA (2025)",
    items: ["Building Transformer Based Natural Language Processing Applications", "Fundamentals of Deep Learning"],
  },
  {
    issuer: "Cyber Academy (2024)",
    items: ["Classical Cryptography for Beginner Course", "Introduction to Information Security"],
  },
  {
    issuer: "Dicoding (2023)",
    items: [
      "Learning Basic Git with Github",
      "Started a Basic Programming to Become a Software Developer",
      "Researching Careers as Software Developer",
      "Data Recognition in Programming (Data 101)",
      "Introduction to Programming Logic (Programming Logic 101)",
    ],
  },
];

export const education = {
  institution: "University of Merdeka Malang",
  degree: "Bachelor of Information System",
  period: "2022 - 2026",
  gpa: profile.gpa,
};

export const contactLinks = [
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "WhatsApp", href: profile.whatsapp, icon: MessageCircle },
];

export const quickFacts = [
  { label: "Location", value: profile.location, icon: MapPin },
  { label: "Email", value: profile.email, icon: Mail },
  { label: "Phone", value: profile.phone, icon: Phone },
  { label: "Education", value: "Information Systems, GPA 3.86", icon: GraduationCap },
  { label: "Focus", value: "Full-stack, mobile, digital operations, and workflow systems", icon: BadgeCheck },
];
