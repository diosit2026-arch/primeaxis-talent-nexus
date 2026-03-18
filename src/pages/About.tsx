import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Award, Globe, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";

const values = [
  { icon: Target, title: "Precision", desc: "Every candidate is meticulously vetted to ensure the perfect cultural and technical fit." },
  { icon: Eye, title: "Transparency", desc: "Clear communication and honest feedback throughout the entire recruitment journey." },
  { icon: Heart, title: "Integrity", desc: "We build long-term relationships based on trust, respect, and ethical practices." },
  { icon: Globe, title: "Global Reach", desc: "Access to a worldwide network of professionals across industries and geographies." },
];

const timeline = [
  { year: "2009", title: "Founded", desc: "Primeaxis HR Solutions was born with a mission to revolutionize recruitment." },
  { year: "2013", title: "500+ Placements", desc: "Reached our first major milestone serving clients across 5 industries." },
  { year: "2017", title: "International Expansion", desc: "Opened offices in London, Dubai, and Singapore to serve global clients." },
  { year: "2021", title: "AI-Powered Matching", desc: "Launched proprietary technology to enhance candidate-company matching." },
  { year: "2024", title: "5000+ Placements", desc: "Celebrated placing over 5000 professionals with a 98% satisfaction rate." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
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
              Since 2009, Primeaxis has been the bridge between world-class talent and organizations that dare to lead.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="bg-card py-12 shadow-card relative -mt-2">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { end: 5000, suffix: "+", label: "Professionals Placed" },
            { end: 200, suffix: "+", label: "Client Companies" },
            { end: 20, suffix: "+", label: "Industries Served" },
            { end: 4, label: "Global Offices" },
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

      {/* Mission */}
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
                We believe that the right people in the right roles can transform entire organizations. Our mission is to make that connection — swiftly, accurately, and with unwavering commitment to excellence.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every candidate we present has been personally assessed by our industry experts. We don't rely on keyword matching — we understand the nuances of your culture, your challenges, and your aspirations.
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

      {/* Timeline */}
      <section className="section-padding bg-gradient-navy text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-gold font-semibold text-sm tracking-widest uppercase">Our Journey</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">15+ Years of Excellence</h2>
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

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal direction="scale">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Want to Partner With Us?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Whether you're looking to hire or looking for your next career move, we'd love to hear from you.
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
