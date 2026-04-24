import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import primeaxisLogo from "../assets/Primeaxislogo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={primeaxisLogo}
                alt="Primeaxis logo"
                className="h-24 md:h-28 w-auto object-contain"
              />
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Primeaxis HR Solutions helps businesses hire faster, build stronger teams, and streamline people operations with recruitment, staffing, payroll, and HR consulting support.
            </p>
          </div>

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

          <div>
            <h4 className="font-display font-semibold mb-4 text-gold">Services</h4>
            <div className="flex flex-col gap-3">
              {["Executive Search", "Permanent Staffing", "Payroll Management", "HR Consulting", "Contract Staffing"].map((s) => (
                <span key={s} className="text-primary-foreground/60 text-sm">{s}</span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-gold">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/60">
              <div className="flex items-center gap-2"><Mail size={16} className="text-gold" /> info@primeaxishr.com</div>
              <div className="flex items-center gap-2"><Phone size={16} className="text-gold" /> +91 9047770900</div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span>60, 2nd Main Rd, Phase-2, Thirumalai Nagar Annexe, Perungudi, Chennai, Tamil Nadu 600096</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-primary-foreground/40 text-sm">
          Copyright {new Date().getFullYear()} Primeaxis HR Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
