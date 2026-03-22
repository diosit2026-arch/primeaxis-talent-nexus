import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Globe, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";

const values = [
  { icon: Target, title: "Precision", desc: "Every candidate is carefully vetted to ensure the right cultural, functional, and long-term fit." },
  { icon: Eye, title: "Transparency", desc: "Clear communication and honest guidance shape every stage of our recruitment and HR engagement model." },
  { icon: Heart, title: "Integrity", desc: "We build long-term client and candidate relationships through trust, accountability, and ethical hiring practices." },
  { icon: Globe, title: "Industry Reach", desc: "Our network spans IT, non-IT, manufacturing, healthcare, retail, aviation, and other growth-focused sectors." },
];

const timeline = [
  { year: "Nov 24, 2021", title: "Founded", desc: "Primeaxis HR Solutions was established to deliver practical recruitment and HR support for growing businesses." },
  { year: "2022", title: "Growing Client Base", desc: "We built strong employer partnerships and delivered hiring success across multiple industries." },
  { year: "2023", title: "Expanded Service Reach", desc: "Our offerings broadened to include deeper HR consulting, staffing support, and payroll coordination." },
  { year: "2024", title: "Smarter Hiring", desc: "We strengthened our sourcing and matching workflows to improve hiring speed, quality, and fit." },
  { year: "2025", title: "Trusted HR Partner", desc: "Primeaxis continued growing as a dependable recruitment and HR solutions partner for evolving workforce needs." },
];

const About = () => {
  return (
    <Layout>
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-gold font-semibold text-sm tracking-widest uppercase">About Us</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mt-4 leading-[1.1]">
              We Don't Just Fill Positions.
              <span className="text-gradient-gold block mt-2">We Build Futures.</span>
            </h1>
            <p className="text-lg text-primary-foreground/70 mt-6 max-w-xl leading-relaxed">
              Since November 24, 2021, Primeaxis has been helping businesses strengthen domestic hiring, overseas recruitment, payroll, compliance, and workforce planning through dependable HR solutions and recruitment expertise.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-card py-12 shadow-card relative -mt-2">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { end: 2000, suffix: "+", label: "Professionals Placed" },
            { end: 200, suffix: "+", label: "Client Companies" },
            { end: 20, suffix: "+", label: "Industries Served" },
            { end: 4, label: "Service Verticals" },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  <Counter end={s.end} suffix={s.suffix} />
                </div>
                <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <span className="text-gold font-semibold text-sm tracking-widest uppercase">Our Mission</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3 mb-6">
                Empowering Organizations Through
                <span className="text-gradient-gold"> Exceptional Talent</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We believe the right people in the right roles can transform entire organizations. Our mission is to make that connection swiftly, accurately, and with unwavering commitment to excellence.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every candidate we present is assessed by experienced recruiters who understand role complexity, team fit, business context, operational priorities, and regional hiring requirements. We go beyond keyword matching to deliver stronger hiring outcomes for both domestic and overseas mandates.
              </p>
            </Reveal>
            <Reveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                {values.map((v, i) => (
                  <div key={i} className="card-3d bg-card rounded-2xl p-6 shadow-card">
                    <v.icon className="text-gold mb-3" size={28} />
                    <h3 className="font-display font-semibold text-foreground mb-2">{v.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-card/40">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-gold font-semibold text-sm tracking-widest uppercase">What We Support</span>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
                  Practical HR Solutions For
                  <span className="text-gradient-gold block mt-2">Growing Organizations</span>
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Primeaxis partners with employers that need reliable support for permanent staffing, executive search, contract hiring, domestic hiring drives, overseas workforce sourcing, payroll coordination, HR consulting, compliance processes, and employee onboarding.
                </p>
                <p>
                  From Chennai to broader regional and international hiring mandates, we help organizations improve talent acquisition quality, reduce hiring delays, and create people processes that can scale with business growth.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-gradient-navy text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-gold font-semibold text-sm tracking-widest uppercase">Our Journey</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">Building Momentum Since 2021</h2>
              <div className="gold-line w-16 mx-auto mt-4" />
            </div>
          </Reveal>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-primary-foreground/20" />
            {timeline.map((item, i) => (
              <Reveal key={i} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.1}>
                <div className={`relative flex items-start mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} pl-16 md:pl-0`}>
                    <span className="text-gold font-display font-bold text-2xl">{item.year}</span>
                    <h3 className="font-display font-semibold text-xl mt-1">{item.title}</h3>
                    <p className="text-primary-foreground/60 mt-2">{item.desc}</p>
                  </div>
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-navy mt-2" />
                  <div className="hidden md:block flex-1" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal direction="scale">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Want to Partner With Us?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Whether you're looking to hire, improve HR processes, or expand your workforce with confidence, we'd love to hear from you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-lg bg-accent text-accent-foreground font-semibold text-lg hover:brightness-110 transition-all duration-300 shadow-gold"
            >
              Get In Touch <ArrowRight size={20} />
            </Link>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default About;
