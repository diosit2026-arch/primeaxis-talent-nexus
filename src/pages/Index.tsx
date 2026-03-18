import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Users, Building2, TrendingUp, Award, CheckCircle2, Star, Briefcase, Target, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: 5000, suffix: "+", label: "Candidates Placed" },
  { value: 200, suffix: "+", label: "Partner Companies" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 15, suffix: "+", label: "Years Experience" },
];

const services = [
  { icon: Users, title: "Executive Search", desc: "We identify and recruit top-tier leadership talent that drives organizational transformation." },
  { icon: Building2, title: "Staff Augmentation", desc: "Scale your workforce with pre-vetted professionals ready to contribute from day one." },
  { icon: TrendingUp, title: "HR Consulting", desc: "Strategic HR advisory services that align your people strategy with business objectives." },
  { icon: Shield, title: "Compliance & Payroll", desc: "End-to-end payroll management and regulatory compliance across jurisdictions." },
];

const whyUs = [
  "Industry-leading 98% placement success rate",
  "Proprietary AI-powered candidate matching",
  "Dedicated account managers for every client",
  "Transparent pricing with no hidden fees",
  "Pan-industry expertise across 20+ sectors",
  "Post-placement support for 12 months",
];

const testimonials = [
  { name: "Sarah Mitchell", role: "VP of HR, TechVista Inc.", quote: "Primeaxis transformed our hiring process. They delivered 3 senior engineers within 2 weeks — all exceptional.", stars: 5 },
  { name: "James Rodriguez", role: "CEO, NexGen Solutions", quote: "The quality of candidates and speed of delivery is unmatched. Primeaxis is now our exclusive recruitment partner.", stars: 5 },
  { name: "Anita Sharma", role: "Director, GlobalEdge Corp.", quote: "Their understanding of our culture fit requirements sets them apart. Every placement has been a perfect match.", stars: 5 },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Professional team" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-8">
              <Award size={16} className="text-gold" />
              <span className="text-gold text-sm font-medium">#1 Rated HR Solutions Partner</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-[1.1] mb-6">
              Building Teams That
              <span className="block text-gradient-gold mt-2">Shape The Future</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-xl mb-10 leading-relaxed">
              We connect exceptional talent with industry-leading organizations. Your next great hire is one conversation away.
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

          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
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

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-gold font-semibold text-sm tracking-widest uppercase">What We Do</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
                End-to-End HR Solutions
              </h2>
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

      {/* Why Choose Us */}
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
                With over 15 years of experience, we've perfected the art of matching exceptional talent with the right opportunities. Our process is transparent, efficient, and results-driven.
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

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-gold font-semibold text-sm tracking-widest uppercase">Testimonials</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
                What Our Clients Say
              </h2>
              <div className="gold-line w-16 mx-auto mt-4" />
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.15} direction="scale">
                <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} size={18} className="fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic flex-1">"{t.quote}"</p>
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="font-display font-semibold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
                  Let's discuss your hiring needs. Our experts are ready to deliver exceptional talent within weeks.
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
