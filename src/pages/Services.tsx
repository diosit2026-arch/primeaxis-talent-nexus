import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Users,
  TrendingUp,
  Shield,
  Briefcase,
  Search,
  BarChart3,
  ClipboardCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import IndustryShowcase from "@/components/IndustryShowcase";

const services = [
  {
    icon: Search,
    title: "Executive Search",
    slug: "executive-search",
    desc: "We find C-suite and senior leadership talent who can strengthen teams, improve decision-making, and drive business transformation.",
    features: ["C-suite and VP-level recruitment", "Leadership assessment and fit analysis", "Confidential search mandates", "Strategic succession support"],
  },
  {
    icon: Users,
    title: "Permanent Staffing",
    slug: "permanent-staffing",
    desc: "Scale your workforce quickly with qualified professionals for both long-term business roles and short-term project requirements.",
    features: ["Permanent, contract, and project-based hiring", "Pre-vetted and interview-ready candidates", "Rapid deployment within 2 weeks", "Seamless team integration support"],
  },
  {
    icon: ClipboardCheck,
    title: "RPO",
    slug: "rpo",
    desc: "Extend your hiring team with dedicated recruitment support for high-volume, recurring, or multi-role hiring needs.",
    features: ["Dedicated recruiter support", "Hiring pipeline tracking", "Volume hiring coordination", "Weekly hiring reports"],
  },
  {
    icon: TrendingUp,
    title: "HR Consulting",
    slug: "hr-consulting",
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
    slug: "contract-staffing",
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
                Primeaxis HR Solutions Private Limited supports employers with permanent recruitment, contract staffing, domestic hiring campaigns, overseas hiring support, HR consulting, payroll processing, compliance advisory, and workforce planning for fast-growing teams.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Reveal key={i} delay={i * 0.1} direction="up">
                <Link
                  to={service.slug ? `/services/${service.slug}` : "/services"}
                  className="card-3d block bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 h-full group"
                >
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
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-all group-hover:gap-3">
                    View Details <ArrowRight size={16} />
                  </span>
                </Link>
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

      <IndustryShowcase
        title="Sector Support With Real Hiring Detail"
        description="See the industries we support and the kind of workforce needs we handle, presented as service areas rather than employer logos or company-name lists."
      />

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
