import {
  BriefcaseBusiness,
  ClipboardCheck,
  Search,
  TrendingUp,
  Users,
} from "lucide-react";

export const servicePages = [
  {
    slug: "executive-search",
    title: "Executive Search",
    eyebrow: "Leadership Hiring",
    navLabel: "Executive Search",
    heroImage: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1800&q=80",
    icon: Search,
    summary:
      "Find senior leaders and specialist decision-makers who can guide teams, improve performance, and support long-term business growth.",
    intro:
      "Primeaxis runs focused leadership search mandates for roles where discretion, role clarity, and cultural fit matter. We understand the business requirement first, map the market, approach suitable profiles, and present a carefully screened shortlist.",
    highlights: ["C-suite and senior management hiring", "Confidential candidate outreach", "Leadership fit and role alignment", "Offer and onboarding coordination"],
    sections: [
      {
        title: "Focused leadership mapping",
        body: "We identify the right talent pool by industry, function, location, experience depth, compensation range, and leadership expectations.",
      },
      {
        title: "Shortlists with context",
        body: "Every recommended profile is shared with practical notes on role fit, availability, motivation, and interview readiness.",
      },
      {
        title: "Smooth transition support",
        body: "We stay involved through interview planning, offer discussion, joining coordination, and early post-placement follow-up.",
      },
    ],
  },
  {
    slug: "permanent-staffing",
    title: "Permanent Staffing",
    eyebrow: "Full-Time Hiring",
    navLabel: "Permanent Staffing",
    heroImage: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1800&q=80",
    icon: Users,
    summary:
      "Build dependable full-time teams with structured sourcing, screening, coordination, and onboarding support.",
    intro:
      "Our permanent staffing service helps employers reduce hiring delays and improve candidate quality across technical, operational, sales, support, and corporate functions. We manage the search rhythm from requirement intake to joining.",
    highlights: ["Role requirement discovery", "Candidate sourcing and screening", "Interview scheduling support", "Joining and replacement coordination"],
    sections: [
      {
        title: "Better hiring intake",
        body: "We clarify must-have skills, experience bands, salary fit, location constraints, and reporting expectations before sourcing starts.",
      },
      {
        title: "Pre-screened candidates",
        body: "Candidates are filtered for role match, communication, availability, salary expectations, and interest level before they reach your team.",
      },
      {
        title: "Reliable follow-through",
        body: "We support interview feedback loops, documentation, offer coordination, and joining confirmation so momentum does not drop.",
      },
    ],
  },
  {
    slug: "rpo",
    title: "Recruitment Process Outsourcing",
    eyebrow: "RPO Support",
    navLabel: "RPO",
    heroImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1800&q=80",
    icon: ClipboardCheck,
    summary:
      "Extend your hiring team with dedicated recruitment support for high-volume, recurring, or multi-role hiring needs.",
    intro:
      "Primeaxis RPO support gives companies a practical recruiting engine without building everything internally. We can support sourcing, screening, trackers, interview coordination, reporting, and hiring operations as an extension of your HR team.",
    highlights: ["Dedicated recruiter support", "Hiring pipeline tracking", "Volume hiring coordination", "Weekly hiring reports"],
    sections: [
      {
        title: "Scalable recruitment desk",
        body: "We align recruiters and workflows to your open roles, hiring targets, urgency, and internal approval process.",
      },
      {
        title: "Clear pipeline visibility",
        body: "Hiring progress is tracked through shortlists, interviews, offers, joining dates, drop risks, and closure status.",
      },
      {
        title: "Process without noise",
        body: "We handle repeated coordination work while your internal stakeholders stay focused on final interviews and decisions.",
      },
    ],
  },
  {
    slug: "hr-consulting",
    title: "HR Consulting",
    eyebrow: "People Operations",
    navLabel: "HR Consulting",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=80",
    icon: TrendingUp,
    summary:
      "Strengthen HR systems, policies, onboarding, workforce planning, and people processes for growing teams.",
    intro:
      "Our HR consulting work is practical and implementation-minded. We help businesses improve employee lifecycle processes, clarify policies, plan workforce needs, and bring more structure to people operations.",
    highlights: ["HR policy and process support", "Onboarding framework design", "Workforce planning inputs", "Performance and retention guidance"],
    sections: [
      {
        title: "Cleaner HR foundations",
        body: "We support documentation, employee lifecycle workflows, onboarding steps, and practical internal HR operating routines.",
      },
      {
        title: "Workforce planning support",
        body: "We help teams think through hiring demand, replacement risks, role structure, and people priorities for upcoming growth.",
      },
      {
        title: "People process improvement",
        body: "We identify friction in hiring, onboarding, communication, and retention, then recommend simple improvements your team can actually use.",
      },
    ],
  },
  {
    slug: "contract-staffing",
    title: "Contract Staffing",
    eyebrow: "Flexible Workforce",
    navLabel: "Contract Staffing",
    heroImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1800&q=80",
    icon: BriefcaseBusiness,
    summary:
      "Add skilled professionals for project, seasonal, replacement, or short-term workforce needs.",
    intro:
      "Contract staffing helps businesses move quickly when workload changes. Primeaxis supports candidate sourcing, contract coordination, timesheet routines, and workforce continuity for project-based roles.",
    highlights: ["Project-based hiring", "Short-term workforce support", "Contractor coordination", "Contract-to-hire options"],
    sections: [
      {
        title: "Fast deployment support",
        body: "We focus on candidates who can match the role quickly, understand the assignment, and join within practical timelines.",
      },
      {
        title: "Operational coordination",
        body: "We help with contract basics, attendance inputs, timesheet follow-up, and communication between client and contractor.",
      },
      {
        title: "Workforce flexibility",
        body: "Use contract staffing for urgent work, leave cover, project ramps, trial periods, or specialized temporary assignments.",
      },
    ],
  },
];

export const getServicePage = (slug?: string) => servicePages.find((service) => service.slug === slug);
