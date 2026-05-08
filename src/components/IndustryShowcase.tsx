import {
  BriefcaseBusiness,
  Building2,
  CircleDollarSign,
  Cpu,
  GraduationCap,
  HeartPulse,
  RadioTower,
  ShoppingBag,
  Truck,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const industries = [
  {
    title: "Technology & ITES",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    icon: Cpu,
    focus: ["Software Development", "IT Support", "ITES/BPO"],
    detail: "Our priority sector covers software, testing, cloud, support, implementation, customer operations, data processing, and IT-enabled service teams.",
  },
  {
    title: "Healthcare & Pharmaceuticals",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80",
    icon: HeartPulse,
    focus: ["Pharmaceuticals", "Services", "Medical Devices"],
    detail: "We support clinical, non-clinical, lab, pharmacy, patient care, administration, and sales hiring needs.",
  },
  {
    title: "Logistics & Supply Chain",
    image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=900&q=80",
    icon: Truck,
    focus: ["Warehousing", "Transportation"],
    detail: "We help teams scale across dispatch, warehouse operations, last-mile delivery, documentation, and fleet support.",
  },
  {
    title: "BFSI Sector",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    icon: CircleDollarSign,
    focus: ["Banking", "Finance", "Insurance"],
    detail: "We support hiring for branch operations, finance, sales, risk, compliance, collections, and customer service.",
  },
  {
    title: "Education & Training",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80",
    icon: GraduationCap,
    focus: ["Education", "Training", "EdTech"],
    detail: "We source faculty, counsellors, admissions teams, trainers, content roles, and education operations staff.",
  },
  {
    title: "Retail Businesses",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
    icon: ShoppingBag,
    focus: ["E-Commerce", "Brick & Mortar", "Lifestyle"],
    detail: "We manage hiring for store teams, merchandising, billing, warehouse support, sales, and customer experience.",
  },
  {
    title: "Infrastructure Sector",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
    icon: Building2,
    focus: ["Construction", "Real Estate", "Transportation"],
    detail: "We support project, site, facility, sales, CRM, administration, and skilled workforce recruitment.",
  },
  {
    title: "Telecommunication Services",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=900&q=80",
    icon: RadioTower,
    focus: ["Network Providers", "Telecom Services", "Field Support"],
    detail: "We hire for field service, network support, customer operations, installation, and back-office coordination.",
  },
  {
    title: "Professional Services",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
    icon: BriefcaseBusiness,
    focus: ["Legal Services", "Consulting"],
    detail: "We find business support, consulting, compliance, legal coordination, and administrative professionals.",
  },
];

type IndustryShowcaseProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

const IndustryShowcase = ({
  eyebrow = "Industries We Serve",
  title = "What We Do Across Key Sectors",
  description = "We support hiring, staffing, payroll coordination, compliance assistance, and onboarding across practical business sectors without turning the page into a company-logo directory.",
}: IndustryShowcaseProps) => {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="max-w-3xl mb-12">
            <span className="text-gold font-semibold text-sm tracking-widest uppercase">{eyebrow}</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">{title}</h2>
            <p className="text-muted-foreground text-lg mt-5 leading-relaxed">{description}</p>
            <div className="gold-line w-16 mt-5" />
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const isFeature = index === 0 || index === 1 || index === 2;

            return (
              <Reveal key={industry.title} delay={(index % 6) * 0.05} direction="up">
                <article
                  className={`group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover sm:min-h-[500px] ${
                    isFeature ? "xl:row-span-1" : ""
                  }`}
                >
                  <div className="relative h-40 shrink-0 overflow-hidden bg-navy sm:h-44">
                    <img
                      src={industry.image}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/45 to-transparent" />
                  </div>
                  <div className="relative flex flex-1 flex-col px-6 pb-6 pt-8">
                    <div className="absolute -top-7 right-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-gold ring-4 ring-card">
                    <Icon size={24} />
                    </div>
                    <h3 className="max-w-[16rem] text-2xl font-display font-bold uppercase leading-tight text-foreground">
                      {industry.title}
                    </h3>
                    <p className="mt-4 text-sm font-medium leading-relaxed text-muted-foreground">{industry.detail}</p>
                    <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-auto sm:pt-6">
                      {industry.focus.map((item) => (
                        <span
                          key={item}
                          className="flex min-h-10 min-w-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 px-3 py-2 text-center text-xs font-bold leading-tight text-foreground"
                        >
                          + {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustryShowcase;
