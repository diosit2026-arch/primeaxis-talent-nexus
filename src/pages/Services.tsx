import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Users,
  Building2,
  TrendingUp,
  Shield,
  Briefcase,
  Search,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Laptop2,
  Landmark,
  Factory,
  Fuel,
  HeartPulse,
  ShoppingBag,
  Plane,
  Truck,
  GraduationCap,
  Building,
  Globe2,
} from "lucide-react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import partnerCompaniesData from "@/data/partnerCompanies.json";

const LOGO_DEV_PUBLIC_KEY = "pk_SDrkBzplTaOo-uPGsE-FRg";

const services = [
  {
    icon: Search,
    title: "Executive Search",
    desc: "We find C-suite and senior leadership talent who can strengthen teams, improve decision-making, and drive business transformation.",
    features: ["C-suite and VP-level recruitment", "Leadership assessment and fit analysis", "Confidential search mandates", "Strategic succession support"],
  },
  {
    icon: Users,
    title: "Permanent & Contract Staffing",
    desc: "Scale your workforce quickly with qualified professionals for both long-term business roles and short-term project requirements.",
    features: ["Permanent, contract, and project-based hiring", "Pre-vetted and interview-ready candidates", "Rapid deployment within 2 weeks", "Seamless team integration support"],
  },
  {
    icon: TrendingUp,
    title: "HR Consulting",
    desc: "Align people operations with business goals through practical HR frameworks that support performance, retention, and growth.",
    features: ["Organizational design", "Compensation and benefits strategy", "Performance management systems", "Employee engagement and onboarding programs"],
  },
  {
    icon: Shield,
    title: "Compliance & Payroll",
    desc: "Navigate payroll and labor compliance with confidence through accurate process support, documentation, and advisory guidance.",
    features: ["Payroll processing support", "Tax and statutory compliance", "Employee benefits administration", "Labor law advisory"],
  },
  {
    icon: Briefcase,
    title: "Contract Staffing",
    desc: "Access skilled professionals for project-based needs while we handle contracts, payroll coordination, and compliance workflows.",
    features: ["Project-based hiring", "Contractor management", "Timesheet and invoicing support", "Contract-to-permanent options"],
  },
  {
    icon: BarChart3,
    title: "Workforce Analytics",
    desc: "Use market insights and workforce data to optimize hiring plans, salary decisions, and future talent strategies.",
    features: ["Market salary benchmarking", "Talent pipeline analytics", "Hiring funnel optimization", "Diversity and inclusion metrics"],
  },
];

const process = [
  { step: "01", title: "Discovery", desc: "We understand your business, hiring challenges, role expectations, and people priorities in detail." },
  { step: "02", title: "Source & Screen", desc: "Our recruiters tap into active talent pools, referrals, and targeted sourcing channels to build a quality shortlist." },
  { step: "03", title: "Present & Interview", desc: "You receive a curated list of qualified candidates with role-fit insights and interview coordination support." },
  { step: "04", title: "Place & Support", desc: "We support offer management, onboarding alignment, and post-placement follow-through for smoother hiring outcomes." },
];

const sectorIcons = {
  it: Laptop2,
  "non-it": Landmark,
  manufacturing: Factory,
  "oil-gas": Fuel,
  hospitals: HeartPulse,
  retailers: ShoppingBag,
  aviation: Plane,
  logistics: Truck,
  education: GraduationCap,
  "real-estate": Building,
  gulf: Globe2,
};

type PartnerCompany = {
  name: string;
  slug: string;
  domain?: string;
  logo: {
    assetPath: string | null;
    url: string | null;
    alt: string;
  };
};

type PartnerSector = {
  id: keyof typeof sectorIcons;
  title: string;
  companies: PartnerCompany[];
};

const partnerSectors = partnerCompaniesData.sectors as PartnerSector[];

const getCompanyLogoSrc = (company: PartnerCompany) => {
  if (company.logo.url) return company.logo.url;
  if (company.logo.assetPath) return company.logo.assetPath;
  if (company.domain) {
    return `https://img.logo.dev/${company.domain}?token=${LOGO_DEV_PUBLIC_KEY}`;
  }
  return null;
};

const Services = () => {
  return (
    <Layout>
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-gold font-semibold text-sm tracking-widest uppercase">Our Services</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mt-4 leading-[1.1]">
              Comprehensive HR Solutions
              <span className="text-gradient-gold block mt-2">Tailored For You</span>
            </h1>
            <p className="text-lg text-primary-foreground/70 mt-6 max-w-xl leading-relaxed">
              From executive search and domestic staffing to overseas hiring support, payroll management, and compliance support, we offer practical HR services designed to strengthen hiring outcomes and workforce performance.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Primeaxis HR Solutions supports employers with permanent recruitment, contract staffing, domestic hiring campaigns, overseas hiring support, HR consulting, payroll processing, compliance advisory, and workforce planning for fast-growing teams.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Reveal key={i} delay={i * 0.1} direction="up">
                <div className="card-3d bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 h-full group">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="text-gold" size={28} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 size={14} className="text-gold shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-navy text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-gold font-semibold text-sm tracking-widest uppercase">Our Process</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">How We Deliver Results</h2>
              <p className="text-primary-foreground/70 text-lg mt-5 leading-relaxed">
                Every engagement is designed to reduce time-to-hire, improve candidate quality, and create a smoother HR experience for employers and employees alike across domestic and international hiring mandates.
              </p>
              <div className="gold-line w-16 mx-auto mt-4" />
            </div>
          </Reveal>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <Reveal key={i} delay={i * 0.15} direction="up">
                <div className="text-center relative">
                  <span className="text-6xl font-display font-bold text-accent/20">{p.step}</span>
                  <h3 className="font-display font-semibold text-xl -mt-4 mb-3">{p.title}</h3>
                  <p className="text-primary-foreground/60 text-sm leading-relaxed">{p.desc}</p>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-8 -right-4 w-8">
                      <ArrowRight className="text-gold/40" size={24} />
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="w-full px-6 md:px-12 xl:px-16">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-gold font-semibold text-sm tracking-widest uppercase">Partnered With Us</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
                Trusted Across Every Major Industry
              </h2>
              <p className="text-muted-foreground text-lg mt-5 leading-relaxed">
                We support domestic and overseas hiring across IT, non-IT enterprises, manufacturing, oil and gas, hospitals, retail, aviation, logistics, education, real estate, and Gulf-region employers with strong partner relationships.
              </p>
              <div className="gold-line w-16 mx-auto mt-4" />
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {partnerSectors.map((sector, i) => {
              const SectorIcon = sectorIcons[sector.id] ?? Building2;

              return (
                <Reveal key={sector.title} delay={i * 0.08} direction="scale">
                  <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 h-full border border-border/60">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                        <SectorIcon className="text-gold" size={28} />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Industry</p>
                        <h3 className="font-display font-semibold text-foreground text-xl">{sector.title}</h3>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {sector.companies.slice(0, 8).map((company) => {
                        const logoSrc = getCompanyLogoSrc(company);

                        return (
                          <div
                            key={company.slug}
                            className="rounded-2xl border border-border/70 bg-background px-4 py-5 min-h-[92px] flex flex-col justify-center shadow-sm"
                          >
                            {logoSrc ? (
                              <div className="h-10 mb-3 flex items-center">
                                <img
                                  src={logoSrc}
                                  alt={company.logo.alt}
                                  className="max-h-10 w-auto object-contain"
                                  loading="lazy"
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                            ) : (
                              <div className="w-10 h-10 rounded-full bg-primary/5 text-primary font-display font-bold text-sm flex items-center justify-center mb-3">
                                {company.name.slice(0, 2).toUpperCase()}
                              </div>
                            )}
                            <p className="font-semibold text-foreground leading-tight">{company.name}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal direction="scale">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Let's Solve Your Hiring Challenges
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Tell us about your hiring requirements and we will craft a customized domestic recruitment, overseas hiring, staffing, payroll, or HR consulting solution that delivers measurable results.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-lg bg-accent text-accent-foreground font-semibold text-lg hover:brightness-110 transition-all duration-300 shadow-gold"
            >
              Request a Consultation <ArrowRight size={20} />
            </Link>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
