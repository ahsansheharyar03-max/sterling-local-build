import {
  Zap,
  MessageSquare,
  Star,
  Puzzle,
  Wrench,
  Flame,
  Bolt,
  HardHat,
  ShieldCheck,
  Clock,
  Gauge,
  Users,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  outcome: string;
  name: string;
  description: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "workflow-automation",
    icon: Zap,
    outcome: "Eliminate repetitive office work.",
    name: "Workflow Automation",
    description:
      "The manual busywork that eats your office manager's day — data entry, job updates, follow-up reminders — gets handled automatically, in the background, every time.",
    bullets: [
      "Jobs move between stages without anyone touching a spreadsheet",
      "Reminders and internal notifications fire on their own",
      "Your team spends time on customers, not copy-pasting data",
    ],
  },
  {
    slug: "customer-communication",
    icon: MessageSquare,
    outcome: "Never miss a customer message.",
    name: "Customer Communication Automation",
    description:
      "Every lead, text, and email gets a fast, consistent response — even after hours — so no one falls through the cracks while your team is on a job site.",
    bullets: [
      "Instant replies to new leads across text, email, and web forms",
      "Automatic appointment confirmations and reminders",
      "Follow-ups that keep quiet leads from going cold",
    ],
  },
  {
    slug: "review-management",
    icon: Star,
    outcome: "Never miss another customer review.",
    name: "AI Review Management",
    description:
      "Happy customers get asked for a review at exactly the right moment, automatically — building the online reputation that wins the next job before you even bid on it.",
    bullets: [
      "Review requests sent automatically after every completed job",
      "Smart timing and follow-up so more customers actually respond",
      "Simple alerts when a review needs your attention",
    ],
  },
  {
    slug: "crm-integrations",
    icon: Puzzle,
    outcome: "Connect every tool you already use.",
    name: "CRM & Business Integrations",
    description:
      "Your CRM, invoicing, scheduling, and communication tools finally talk to each other — so information entered once shows up everywhere it needs to.",
    bullets: [
      "One system of record instead of five disconnected tools",
      "Automatic updates across your CRM, calendar, and invoicing software",
      "Fewer double-entry mistakes and dropped handoffs",
    ],
  },
];

export type Industry = {
  name: string;
  icon: LucideIcon;
  headline: string;
  description: string;
};

export const industries: Industry[] = [
  {
    name: "Plumbing",
    icon: Wrench,
    headline: "We understand how plumbing businesses work.",
    description:
      "Emergency calls come in at all hours and the first response determines whether you win the job. We automate intake and follow-up so no midnight call goes unanswered.",
  },
  {
    name: "HVAC",
    icon: Flame,
    headline: "We understand HVAC dispatch.",
    description:
      "Seasonal spikes, maintenance contracts, and technician scheduling all compete for your office's attention. We automate the coordination so dispatch stays smooth even during peak season.",
  },
  {
    name: "Electrical",
    icon: Bolt,
    headline: "We understand electrical contracting.",
    description:
      "Quotes, permits, and multi-visit jobs create a paper trail that's easy to lose track of. We keep every job's status and communication organized automatically.",
  },
  {
    name: "Roofing & Contracting",
    icon: HardHat,
    headline: "We understand roofing and contracting businesses.",
    description:
      "Long sales cycles, insurance paperwork, and weather delays make follow-up easy to forget. We keep every lead warm and every customer updated without manual chasing.",
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const process: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn how your business actually runs today — your tools, your bottlenecks, and where your team's time really goes.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We design a custom automation system around your existing workflow, not a generic template you have to adapt to.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We build, test, and launch your automated workflows — connected to the tools you already use.",
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "We monitor performance and keep refining the system as your business grows, so it keeps paying off.",
  },
];

export type Principle = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const principles: Principle[] = [
  {
    icon: ShieldCheck,
    title: "Built around your workflow",
    description:
      "We don't hand you a generic template. Every system is designed around how your business already operates, not the other way around.",
  },
  {
    icon: Clock,
    title: "Measured in time saved",
    description:
      "We define success in hours returned to your team every week — not vanity features. If it doesn't save time, we don't build it.",
  },
  {
    icon: Gauge,
    title: "No lock-in",
    description:
      "Everything we build runs on tools you own and can access directly. You're never dependent on us to keep your business running.",
  },
  {
    icon: Users,
    title: "Transparent from day one",
    description:
      "You'll always know exactly what's automated, how it works, and what it costs. No black boxes, no surprise scope creep.",
  },
];

export type CaseStudy = {
  title: string;
  industry: string;
  before: string;
  automation: string[];
  result: string;
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Invoicing on autopilot",
    industry: "Plumbing company",
    before:
      "An office manager manually creates and sends invoices after every job — roughly 2 hours a day of repetitive data entry.",
    automation: [
      "Invoice generated automatically when a job is marked complete",
      "Invoice emailed to the customer instantly",
      "CRM and accounting software updated in real time",
      "Team notified in Slack once payment is confirmed",
    ],
    result: "Saved an estimated 10 hours a week in office admin time.",
  },
  {
    title: "Reviews that show up automatically",
    industry: "HVAC company",
    before:
      "Technicians finish jobs but reviews rarely get requested — most happy customers are never asked, so growth relies entirely on word of mouth.",
    automation: [
      "Review request texted to the customer the day after job completion",
      "Automatic follow-up if there's no response within 3 days",
      "Negative feedback routed privately to the owner before it becomes a public review",
    ],
    result: "Projected 4-5x increase in monthly review volume.",
  },
  {
    title: "Scheduling without the back-and-forth",
    industry: "Electrical contractor",
    before:
      "New leads are booked by phone tag — calls, voicemails, and texts going back and forth for days before a job is on the calendar.",
    automation: [
      "New lead automatically receives a booking link by text and email",
      "Appointment synced directly to the technician's calendar",
      "Automatic reminder sent 24 hours before the visit",
    ],
    result: "Cut average time-to-booked-appointment from 3 days to under 1 hour.",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "How much does this cost?",
    answer:
      "Every system is scoped to the business, so pricing depends on what you need automated. After a free audit, you'll get a clear, fixed-scope proposal — no open-ended hourly billing.",
  },
  {
    question: "How long does it take to get up and running?",
    answer:
      "Most systems go live within 2-4 weeks of kickoff, depending on scope and how many tools need to be connected.",
  },
  {
    question: "Do I need any technical knowledge to use this?",
    answer:
      "No. We design every system to run in the background using the tools your team already knows. You won't need to write code or manage integrations yourself.",
  },
  {
    question: "Will this replace my office staff?",
    answer:
      "No — it's built to remove the repetitive, low-value parts of their job so they can focus on customers, scheduling judgment calls, and the work that actually needs a person.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We specialize in local service businesses — plumbing, HVAC, electrical, roofing, and similar trades — in the US and Australia. If your business runs on jobs, leads, and repeat customers, we can likely help.",
  },
  {
    question: "What happens after the free audit?",
    answer:
      "You'll get a plain-language breakdown of where automation would save the most time in your business, with no obligation to move forward. If it's a fit, we'll scope a proposal from there.",
  },
];

export const technologies = [
  "Make",
  "Zapier",
  "HubSpot",
  "OpenAI",
  "Twilio",
  "Google Workspace",
];
