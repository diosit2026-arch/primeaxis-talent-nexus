import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Building2, TrendingUp, Shield, Briefcase, Search, HeadphonesIcon, BarChart3, ArrowRight, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";

const services = [
  {
    icon: Search,
    title: "Executive Search",
    desc: "We find C-suite and senior leadership talent who transform organizations. Our headhunting methodology combines deep industry knowledge with proprietary assessment tools.",
    features: ["C-suite & VP-level recruitment", "Board advisory placements", "Leadership assessment", "Confidential search mandates"],
  },
  {
    icon: Users,
    title: "Staff Augmentation",
    desc: "Scale your teams rapidly with pre-vetted professionals. From software engineers to marketing specialists, we deliver top talent on demand.",
    features: ["Rapid deployment within 2 weeks", "Pre-vetted & interview-ready", "Flexible contract durations", "Seamless team integration support"],
  },
  {
    icon: TrendingUp,
    title: "HR Consulting",
    desc: "Strategic advisory services that align your people operations with business goals. We help you build high-performance cultures.",
    features: ["Organizational design", "Compensation & benefits strategy", "Performance management systems", "Employee engagement programs"],
  },
  {
    icon: Shield,
    title: "Compliance & Payroll",
    desc: "Navigate complex labor regulations with confidence. Our compliance experts manage payroll, taxes, and regulatory requirements across jurisdictions.",
    features: ["Multi-country payroll processing", "Tax & regulatory compliance", "Employee benefits administration", "Labor law advisory"],
  },
  {
    icon: Briefcase,
    title: "Contract Staffing",
    desc: "Access skilled professionals for project-based needs. We handle contracts, payments, and compliance so you focus on deliverables.",
    features: ["Project-based hiring", "Contractor management", "Timesheet & invoicing", "Contract-to-permanent options"],
  },
  {
    icon: BarChart3,
    title: "Workforce Analytics",
    desc: "Data-driven insights to optimize your hiring strategy. Understand market trends, salary benchmarks, and talent availability in real-time.",
    features: ["Market salary benchmarking", "Talent pipeline analytics", "Hiring funnel optimization", "Diversity & inclusion metrics"],
  },
];

const process = [
  { step: "01", title: "Discovery", desc: "We deeply understand your organization, culture, and exact hiring requirements." },
  { step: "02", title: "Source & Screen", desc: "Our recruiters tap into a 100K+ candidate database and industry networks." },
  { step: "03", title: "Present & Interview", desc: "You receive a curated shortlist of top candidates with detailed profiles." },
  { step: "04", title: "Place & Support", desc: "We manage offers, onboarding, and provide 12-month post-placement support." },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
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
              From executive search to workforce analytics, we offer a full spectrum of HR services designed to give you a competitive edge.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
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

      {/* Process */}
      <section className="section-padding bg-gradient-navy text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-gold font-semibold text-sm tracking-widest uppercase">Our Process</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">How We Deliver Results</h2>
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

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal direction="scale">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Let's Solve Your Hiring Challenges
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Tell us about your requirements and we'll craft a customized solution that delivers results.
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
