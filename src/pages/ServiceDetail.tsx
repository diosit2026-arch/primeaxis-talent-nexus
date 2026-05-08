import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Home } from "lucide-react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { getServicePage, servicePages } from "@/data/servicePages";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = getServicePage(slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;
  const relatedServices = servicePages.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <Layout>
      <section className="relative overflow-hidden bg-navy-dark pt-24 text-primary-foreground md:min-h-[78vh] md:pt-32">
        <img
          src={service.heroImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-navy-dark/50 md:bg-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/88 via-navy-dark/78 to-navy-dark/96 md:bg-gradient-to-r md:from-navy-dark md:via-navy-dark/86 md:to-navy-dark/35" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent md:h-32" />

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-end px-6 pb-14 pt-8 md:min-h-[62vh] md:justify-center md:px-12 md:pb-20 md:pt-12">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="max-w-5xl"
          >
            <div className="mb-6 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-primary-foreground/20 bg-navy-dark/55 px-3 py-2 text-xs font-semibold backdrop-blur-sm md:mb-8 md:px-4 md:text-sm">
              <Home size={15} />
              <Link to="/" className="text-primary-foreground/75 hover:text-gold">Home</Link>
              <span className="text-primary-foreground/40">/</span>
              <Link to="/services" className="text-primary-foreground/75 hover:text-gold">Services</Link>
              <span className="text-primary-foreground/40">/</span>
              <span className="text-gold">{service.title}</span>
            </div>
            <div className="rounded-2xl border border-primary-foreground/12 bg-navy-dark/58 p-5 shadow-2xl backdrop-blur-[2px] md:border-0 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-0">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-accent-foreground shadow-gold md:mb-6 md:h-16 md:w-16">
                <Icon size={28} className="md:hidden" />
                <Icon size={32} className="hidden md:block" />
              </div>
              <span className="text-gold font-semibold text-xs tracking-widest uppercase md:text-sm">{service.eyebrow}</span>
              <h1 className="mt-3 max-w-5xl text-4xl font-display font-bold uppercase leading-[1.02] text-primary-foreground drop-shadow md:mt-4 md:text-7xl md:leading-[0.95] lg:text-8xl">
                {service.title}
              </h1>
              <p className="mt-5 max-w-3xl text-base font-semibold leading-relaxed text-primary-foreground/95 md:mt-8 md:text-xl md:font-normal md:text-primary-foreground/78">
                {service.summary}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal direction="left">
            <div className="sticky top-28 rounded-2xl border border-border/70 bg-card p-7 shadow-card">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">Service Scope</p>
              <h2 className="mt-3 text-3xl font-display font-bold text-foreground">What Primeaxis Handles</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">{service.intro}</p>
              <div className="mt-7 space-y-3">
                {service.highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl bg-background p-4">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-gold" />
                    <span className="font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="space-y-8">
            {service.sections.map((section, index) => (
              <Reveal key={section.title} delay={index * 0.08} direction="up">
                <article className="rounded-2xl border border-border/70 bg-card p-7 shadow-card">
                  <span className="text-5xl font-display font-bold text-accent/18">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="-mt-3 text-2xl font-display font-bold uppercase leading-tight text-foreground md:text-3xl">
                    {section.title}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{section.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card/40">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-10 max-w-3xl">
              <span className="text-gold font-semibold text-sm tracking-widest uppercase">Explore More</span>
              <h2 className="mt-3 text-3xl font-display font-bold text-foreground md:text-5xl">Related Service Areas</h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {relatedServices.map((item, index) => {
              const RelatedIcon = item.icon;

              return (
                <Reveal key={item.slug} delay={index * 0.08} direction="up">
                  <Link
                    to={`/services/${item.slug}`}
                    className="group block h-full rounded-2xl border border-border/70 bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-gold">
                      <RelatedIcon size={24} />
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground">{item.title}</h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
                    <span className="mt-5 inline-flex items-center gap-2 font-semibold text-gold transition-all group-hover:gap-3">
                      View Service <ArrowRight size={17} />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
