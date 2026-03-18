import { Link } from "react-router-dom";
import { Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="font-display font-bold text-accent-foreground text-lg">P</span>
              </div>
              <span className="font-display font-bold text-xl">
                Prime<span className="text-gold">axis</span>
              </span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Connecting exceptional talent with forward-thinking organizations worldwide.
            </p>
            <div className="flex gap-3 mt-6">
              {[Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-gold">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {["Home", "About", "Services", "Contact"].map((label) => (
                <Link key={label} to={`/${label === "Home" ? "" : label.toLowerCase()}`} className="text-primary-foreground/60 hover:text-gold transition-colors text-sm">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-gold">Services</h4>
            <div className="flex flex-col gap-3">
              {["Executive Search", "Staff Augmentation", "HR Consulting", "Payroll Management"].map((s) => (
                <span key={s} className="text-primary-foreground/60 text-sm">{s}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-gold">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/60">
              <div className="flex items-center gap-2"><Mail size={16} className="text-gold" /> info@primeaxishr.com</div>
              <div className="flex items-center gap-2"><Phone size={16} className="text-gold" /> +1 (555) 123-4567</div>
              <div className="flex items-center gap-2"><MapPin size={16} className="text-gold" /> New York, USA</div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-primary-foreground/40 text-sm">
          © {new Date().getFullYear()} Primeaxis HR Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
