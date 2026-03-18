import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Mail, label: "Email Us", value: "info@primeaxishr.com", sub: "We reply within 24 hours" },
  { icon: Phone, label: "Call Us", value: "+1 (555) 123-4567", sub: "Mon-Fri 9AM-6PM EST" },
  { icon: MapPin, label: "Visit Us", value: "350 Fifth Avenue, New York", sub: "NY 10118, USA" },
  { icon: Clock, label: "Working Hours", value: "Mon - Fri: 9AM - 6PM", sub: "Weekend by appointment" },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", company: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setFormData({ name: "", email: "", company: "", phone: "", service: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-gold font-semibold text-sm tracking-widest uppercase">Contact Us</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mt-4 leading-[1.1]">
              Let's Start a
              <span className="text-gradient-gold block mt-2">Conversation</span>
            </h1>
            <p className="text-lg text-primary-foreground/70 mt-6 max-w-xl leading-relaxed">
              Whether you're hiring or exploring career opportunities, our team is here to help you succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-card py-12 shadow-card relative -mt-2">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="flex items-start gap-4 p-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <info.icon className="text-gold" size={22} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{info.label}</p>
                  <p className="font-semibold text-foreground">{info.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{info.sub}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Send Us a Message</h2>
              <div className="gold-line w-16 mx-auto mt-4" />
            </div>
          </Reveal>

          <Reveal direction="scale">
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 md:p-12 shadow-card">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                  <input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                  <input
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <input
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-foreground mb-2">Service Interested In</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select a service</option>
                  <option>Executive Search</option>
                  <option>Staff Augmentation</option>
                  <option>HR Consulting</option>
                  <option>Compliance & Payroll</option>
                  <option>Contract Staffing</option>
                  <option>Workforce Analytics</option>
                </select>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your hiring needs..."
                />
              </div>

              <button
                type="submit"
                className="mt-8 w-full md:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-lg bg-accent text-accent-foreground font-semibold text-lg hover:brightness-110 transition-all duration-300 shadow-gold"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
