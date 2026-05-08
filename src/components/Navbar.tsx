import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { servicePages } from "@/data/servicePages";
import primeaxisLogo from "../assets/Primeaxislogo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

const axisColor = "#009fa3";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isServicesActive = location.pathname.startsWith("/services");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-card py-1.5" : "border-b border-border/60 bg-background/90 py-2 backdrop-blur-sm"
      }`}
    >
      <div className="w-full max-w-none px-5 md:px-12 xl:px-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src={primeaxisLogo}
            alt="Primeaxis logo"
            className="h-10 md:h-14 xl:h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => {
            const isActive = link.path === "/services" ? isServicesActive : location.pathname === link.path;
            const linkClasses = `relative font-medium text-sm transition-colors duration-300 ${
              scrolled
                ? isActive
                  ? "text-[#009fa3]"
                  : "text-foreground hover:text-[#009fa3]"
                : isActive
                ? "text-[#009fa3]"
                : "text-foreground hover:text-[#009fa3]"
            }`;

            if (link.path === "/services") {
              return (
                <div key={link.path} className="group relative py-3">
                  <Link to={link.path} className={`${linkClasses} inline-flex items-center gap-1`}>
                    {link.label}
                    <ChevronDown size={15} className="transition-transform group-hover:rotate-180" />
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                        style={{ backgroundColor: axisColor }}
                      />
                    )}
                  </Link>
                  <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 translate-y-2 rounded-xl border border-border/70 bg-card p-3 opacity-0 shadow-card transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <Link
                      to="/services"
                      className="mb-2 block rounded-lg px-4 py-3 text-sm font-semibold text-foreground hover:bg-[#009fa3]/10 hover:text-[#009fa3]"
                    >
                      All Services
                    </Link>
                    {servicePages.slice(0, 4).map((service) => (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        className="block rounded-lg px-4 py-3 text-sm font-semibold text-foreground hover:bg-[#009fa3]/10 hover:text-[#009fa3]"
                      >
                        {service.navLabel}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link key={link.path} to={link.path} className={linkClasses}>
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                    style={{ backgroundColor: axisColor }}
                  />
                )}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="ml-2 px-4 py-1.5 rounded-lg bg-[#009fa3] text-white font-semibold text-sm transition-all duration-300 shadow-[0_4px_26px_-6px_rgba(0,159,163,0.45)] hover:bg-[#00888c]"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden flex h-10 w-10 items-center justify-center rounded-lg border transition-colors ${
            scrolled
              ? "border-border bg-background text-foreground"
              : "border-border bg-background text-foreground"
          }`}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass overflow-hidden"
          >
            <nav className="flex flex-col gap-2 p-6">
              {navLinks.map((link) => (
                <div key={link.path}>
                  <Link
                    to={link.path}
                    className={`block py-3 px-4 rounded-lg font-medium transition-colors ${
                      (link.path === "/services" ? isServicesActive : location.pathname === link.path)
                        ? "bg-[#009fa3] text-white"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.path === "/services" && (
                    <div className="mt-2 space-y-1 pl-4">
                      {servicePages.slice(0, 4).map((service) => (
                        <Link
                          key={service.slug}
                          to={`/services/${service.slug}`}
                          className="block rounded-lg px-4 py-2 text-sm font-semibold text-muted-foreground hover:bg-[#009fa3]/10 hover:text-[#009fa3]"
                        >
                          {service.navLabel}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
