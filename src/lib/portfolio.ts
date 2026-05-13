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
  cv: "/Andreas-Natanael-Irawan-CV.pdf",
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
  "Fullstack Developer",
  "Mobile Developer",
  "Information Systems Graduate",
  "Available for Work",
];

export const heroSignals = [
  { label: "Role fit", value: "Fullstack / Mobile / Software" },
  { label: "Systems focus", value: "ERP, POS, RBAC, workflow" },
  { label: "Recruiter scan", value: "GPA 3.86 + hands-on builds" },
];

export const workflowSteps = ["Discover", "Design", "Build", "Automate", "Deploy"];

export const dashboardHighlights = [
  { label: "ERP System", value: "Multi-tenant", icon: Layers3 },
  { label: "Realtime POS", value: "KDS + reporting", icon: MonitorCog },
  { label: "Mobile Dashboard", value: "Role-based ops", icon: Smartphone },
  { label: "RBAC & Workflow Automation", value: "Secure process flow", icon: Workflow },
];

export const stats = [
  { value: "3.86", label: "GPA" },
  { value: "6+", label: "Core projects" },
  { value: "2021", label: "Production experience since" },
  { value: "Full-stack", label: "Web, mobile, systems" },
];

export const projects = [
  {
    title: "Solvix ERP",
    subtitle: "Multi-Tenant ERP System",
    description:
      "A modular ERP platform for finance, procurement, inventory, HR, and project operations with tenant-scoped access control.",
    problem:
      "Growing operations need shared business data without exposing one tenant's records to another or slowing approvals across departments.",
    solution:
      "Designed a tenant-aware data model, role-based permissions, workflow automation, and audit logging for accountable operational flow.",
    impact: "Improves process visibility, reduces manual handoffs, and prepares core business modules for scalable internal adoption.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    features: ["Multi-tenant modules", "RBAC security", "Workflow automation", "Audit logging"],
    links: [
      { label: "Case Study", href: "#contact", icon: ExternalLink },
      { label: "GitHub", href: profile.github, icon: Github },
    ],
  },
  {
    title: "Solvix Moka POS",
    subtitle: "Realtime Coffee Shop POS",
    description:
      "A realtime POS and kitchen workflow system for coffee shop operations, built around speed, clarity, and reliable reporting.",
    problem:
      "Cashier, kitchen, and manager workflows often drift apart when orders, payments, and reporting are handled in separate tools.",
    solution:
      "Built a POS flow with Server-Sent Events for Kitchen Display updates, split payments, receipt generation, offline auto-sync, and sales exports.",
    impact: "Creates a faster counter-to-kitchen loop and gives managers sales visibility through analytics and CSV reporting.",
    tech: ["Next.js", "PostgreSQL", "SSE"],
    features: ["Realtime KDS", "Split payments", "Receipt generation", "Offline auto-sync", "Sales CSV export"],
    links: [
      { label: "Live Demo", href: "#contact", icon: ExternalLink },
      { label: "GitHub", href: profile.github, icon: Github },
    ],
  },
  {
    title: "CashFlow",
    subtitle: "Android Finance Application",
    description:
      "A personal finance Android app for tracking income, expenses, debt, and financial signals with cloud-backed data sync.",
    problem:
      "Personal finance tracking becomes inconsistent when data entry, debt notes, and insight generation live in different places.",
    solution:
      "Created a mobile-first tracking experience with Jetpack Compose, Supabase sync, structured debt records, and AI-based financial insights.",
    impact: "Helps users understand spending patterns, debt position, and financial decisions from a single mobile dashboard.",
    tech: ["Kotlin", "Jetpack Compose", "Supabase"],
    features: ["Income tracking", "Expense tracking", "AI insights", "Debt tracking", "Cloud sync"],
    links: [
      { label: "Case Study", href: "#contact", icon: ExternalLink },
      { label: "GitHub", href: profile.github, icon: Github },
    ],
  },
  {
    title: "AS Nusa Trans Mobile",
    subtitle: "Logistics Operations Dashboard",
    description:
      "A mobile dashboard for logistics operations covering fleet, order, and finance monitoring with role-based access.",
    problem:
      "Logistics teams need a centralized operational view without giving every role the same level of access or control.",
    solution:
      "Built structured dashboards and workflow controls in Flutter with Supabase-backed data to separate fleet, orders, and finance views.",
    impact: "Supports faster operational monitoring and clearer accountability across logistics roles.",
    tech: ["Flutter", "Supabase"],
    features: ["Role-based dashboard", "Fleet monitoring", "Order workflow", "Finance overview"],
    links: [
      { label: "Case Study", href: "#contact", icon: ExternalLink },
      { label: "GitHub", href: profile.github, icon: Github },
    ],
  },
  {
    title: "Solvix Studio",
    subtitle: "SaaS Agency Platform",
    description:
      "A SaaS-style agency platform combining public marketing pages with an authenticated client dashboard and order lifecycle flow.",
    problem:
      "Service businesses need a clean conversion path while keeping project requests, client access, and lifecycle status organized.",
    solution:
      "Implemented a marketing website, authenticated dashboard, multi-step order wizard, lifecycle tracking, and RBAC-driven client views.",
    impact: "Turns service inquiries into trackable project workflows and makes client communication more structured.",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    features: ["Client dashboard", "Order wizard", "Lifecycle tracking", "RBAC"],
    links: [
      { label: "Live Demo", href: "#contact", icon: ExternalLink },
      { label: "GitHub", href: profile.github, icon: Github },
    ],
  },
];

export const experiences = [
  {
    company: "Hospitality & Entertainment Venue",
    role: "Fullstack Website Developer, Custom POS Laravel",
    period: "Feb 2026",
    description:
      "Developed web and POS workflows for hospitality operations with focus on ordering, administration, and operational reliability.",
  },
  {
    company: "CV AS Nusa Trans",
    role: "Fullstack Website Developer",
    period: "Sep 2025 - Jan 2026",
    description:
      "Worked with Next.js, Laravel, and Docker to support logistics-facing web systems and operational dashboards.",
  },
  {
    company: "PT Avatara Generasi Istimewa",
    role: "Content Creator, Live Streamer TikTok, Website Administrator",
    period: "Nov 2024 - Sep 2025",
    description:
      "Managed content, livestream execution, and website administration while supporting digital presence and audience operations.",
  },
  {
    company: "PUSIM Unmer",
    role: "Cyber Security / Penetration Testing",
    period: "Sep 2024 - Feb 2025",
    description:
      "Supported penetration testing and security-oriented analysis across campus technology environments.",
  },
  {
    company: "Faculty of Information Technology",
    role: "Website Manager",
    period: "Oct 2023 - Mar 2024",
    description:
      "Managed faculty website content, updates, and administration for academic communication needs.",
  },
  {
    company: "Yosgawan Studios",
    role: "Streaming Operator, Frontend Developer, LED, Video Director",
    period: "Jan 2021 - Present",
    description:
      "Operates multimedia and live production workflows while contributing frontend development support for digital projects.",
  },
];

export const skills = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["Next.js", "React", "TailwindCSS", "Flutter", "HTML", "CSS", "JavaScript", "Bootstrap"],
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
    items: ["Kotlin Android", "Flutter"],
  },
  {
    title: "DevOps & Tools",
    icon: BriefcaseBusiness,
    items: ["Docker", "Git", "Supabase"],
  },
  {
    title: "Additional",
    icon: ShieldCheck,
    items: ["RBAC", "Authentication", "Workflow Automation", "Audit Logging", "Dashboard Development", "POS System", "ERP System"],
  },
];

export const certifications = [
  {
    issuer: "NVIDIA",
    items: ["Building Transformer Based Natural Language Processing Applications", "Fundamentals of Deep Learning"],
  },
  {
    issuer: "Cyber Academy",
    items: ["Classical Cryptography for Beginner Course", "Introduction to Information Security"],
  },
  {
    issuer: "Dicoding",
    items: [
      "Learning Basic Git with Github",
      "Basic Programming to Become a Software Developer",
      "Programming Logic 101",
      "Data 101",
      "Career as Software Developer",
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
  { label: "Focus", value: "Web, mobile, ERP, POS, workflows", icon: BadgeCheck },
];
