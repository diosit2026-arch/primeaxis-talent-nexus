import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  Building2,
  TrendingUp,
  Award,
  CheckCircle2,
  Shield,
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
import Counter from "@/components/Counter";
import heroBg from "@/assets/hero-bg.jpg";
import partnerCompaniesData from "@/data/partnerCompanies.json";

const LOGO_DEV_PUBLIC_KEY = "pk_SDrkBzplTaOo-uPGsE-FRg";

const stats = [
  { value: 2000, suffix: "+", label: "Candidates Placed" },
  { value: 200, suffix: "+", label: "Partner Companies" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 5, suffix: "+", label: "Years Experience" },
];

const services = [
  { icon: Users, title: "Executive Search", desc: "We identify senior leaders and specialized professionals who strengthen business performance and long-term growth." },
  { icon: Building2, title: "Permanent & Contract Staffing", desc: "Scale quickly with pre-screened candidates for full-time, project-based, and contract hiring needs." },
  { icon: TrendingUp, title: "HR Consulting", desc: "Build stronger people strategies with support for policy design, onboarding, performance management, and workforce planning." },
  { icon: Shield, title: "Payroll & Compliance", desc: "Simplify payroll processing, statutory compliance, documentation, and employee lifecycle administration." },
];

const whyUs = [
  "Industry-leading 98% placement success rate",
  "Strong sourcing network across multiple business sectors",
  "Dedicated account managers for every client",
  "Transparent pricing with no hidden fees",
  "Pan-industry expertise across 20+ sectors",
  "Post-placement support for 12 months",
];

const seoHighlights = [
  "Recruitment and staffing solutions for IT and non-IT businesses",
  "Payroll management and HR compliance support for growing teams",
  "Executive search and leadership hiring for critical roles",
  "Customized HR consulting for onboarding, retention, workforce planning, and international hiring support",
];

const audienceContent = [
  {
    title: "For Employers",
    points: [
      "Find qualified candidates faster for leadership, technical, operational, and support roles.",
      "Reduce hiring delays with structured screening, shortlisting, interview coordination, and onboarding support.",
      "Strengthen workforce planning with domestic staffing, overseas recruitment support, payroll, compliance, and HR advisory services in one place.",
    ],
  },
  {
    title: "For Candidates",
    points: [
      "Get access to career opportunities with trusted employers across multiple industries.",
      "Receive guidance on suitable roles, domestic job openings, overseas opportunities, and interview readiness.",
      "Work with a recruitment partner that values long-term fit, growth potential, professional success, and international mobility.",
    ],
  },
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

const Index = () => {
  return (
    <Layout>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Professional team" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 xl:px-16 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-6xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-8">
              <Award size={16} className="text-gold" />
              <span className="text-gold text-sm font-medium">#1 Rated HR Solutions Partner</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-[1.1] mb-6">
              Building Teams That
              <span className="block text-gradient-gold mt-2">Shape The Future</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-3xl mb-10 leading-relaxed">
              Primeaxis HR Solutions delivers domestic hiring, overseas recruitment support, staffing, payroll, and HR consulting services that help businesses in Chennai, across India, and in global markets hire exceptional talent with speed and confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent text-accent-foreground font-semibold hover:brightness-110 transition-all duration-300 shadow-gold"
              >
                Find Top Talent <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-primary-foreground/20 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-all duration-300"
              >
                Our Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 w-full"
          >
            {stats.map((stat, i) => (
              <div key={i} className="glass rounded-xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-primary">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-gold font-semibold text-sm tracking-widest uppercase">What We Do</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
                End-to-End HR Solutions
              </h2>
              <p className="text-muted-foreground text-lg mt-5 leading-relaxed">
                From domestic talent acquisition and executive search to overseas hiring support, payroll administration, and HR advisory, we provide practical workforce solutions tailored to each stage of business growth.
              </p>
              <div className="gold-line w-16 mx-auto mt-4" />
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <Reveal key={i} delay={i * 0.1} direction="up">
                <div className="card-3d bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 h-full group">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="text-gold" size={28} />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card/40">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-gold font-semibold text-sm tracking-widest uppercase">HR Expertise</span>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
                  HR Services That Support
                  <span className="text-gradient-gold block mt-2">Sustainable Growth</span>
                </h2>
                <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
                  Businesses rely on Primeaxis for fast domestic hiring, better candidate quality, smoother onboarding, dependable compliance support, and cross-border recruitment coordination. Our team works closely with employers to reduce hiring delays, improve retention, and build efficient people operations.
                </p>
              </div>
              <div className="space-y-4">
                {seoHighlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-2xl bg-background p-5 shadow-card border border-border/60">
                    <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={20} />
                    <p className="text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-gold font-semibold text-sm tracking-widest uppercase">Who We Support</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
                Valuable For Clients
                <span className="text-gradient-gold block mt-2">And Candidates</span>
              </h2>
              <p className="text-muted-foreground text-lg mt-5 leading-relaxed">
                Primeaxis creates value on both sides of the hiring journey by helping employers build reliable teams through domestic and overseas recruitment, and by helping candidates connect with meaningful local and international career opportunities.
              </p>
              <div className="gold-line w-16 mx-auto mt-4" />
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-8">
            {audienceContent.map((section, i) => (
              <Reveal key={section.title} delay={i * 0.1} direction="up">
                <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-card h-full">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-6">{section.title}</h3>
                  <div className="space-y-4">
                    {section.points.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={20} />
                        <p className="text-muted-foreground leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-navy text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <span className="text-gold font-semibold text-sm tracking-widest uppercase">Why Primeaxis</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-8">
                Your Trusted
                <span className="text-gradient-gold block">Recruitment Partner</span>
              </h2>
              <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
                With 5+ years of experience, we support employers with executive hiring, permanent staffing, domestic recruitment campaigns, overseas workforce sourcing, payroll coordination, and HR process improvement. Our process is transparent, efficient, and built around measurable hiring outcomes.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-3 transition-all duration-300"
              >
                Learn More About Us <ArrowRight size={18} />
              </Link>
            </Reveal>

            <Reveal direction="right">
              <div className="space-y-4">
                {whyUs.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10"
                  >
                    <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={20} />
                    <span className="text-primary-foreground/80">{item}</span>
                  </motion.div>
                ))}
              </div>
            </Reveal>
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
                We support domestic and overseas hiring across IT, non-IT enterprises, manufacturing, oil and gas, hospitals, retail, aviation, and other international sectors with strong partner relationships.
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

      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <Reveal direction="scale">
            <div className="bg-gradient-navy rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-2xl" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
                  Ready to Build Your
                  <span className="text-gradient-gold block mt-2">Dream Team?</span>
                </h2>
                <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-8">
                  Let's discuss your hiring goals, role requirements, and workforce challenges. Our HR specialists are ready to deliver domestic and overseas recruitment solutions that move your business forward.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-10 py-4 rounded-lg bg-accent text-accent-foreground font-semibold text-lg hover:brightness-110 transition-all duration-300 shadow-gold"
                >
                  Start Hiring Now <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
