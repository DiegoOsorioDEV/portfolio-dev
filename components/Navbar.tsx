"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio", id: "inicio" },
  { label: "Stack", href: "#stack", id: "stack" },
  { label: "Proyectos", href: "#proyectos", id: "proyectos" },
  { label: "Experiencia", href: "#experiencia", id: "experiencia" },
  { label: "Contacto", href: "#contacto", id: "contacto" },
];

function Logo() {
  return (
    <a
      href="#inicio"
      aria-label="Inicio · Diego Osorio"
      className="group flex shrink-0 items-center gap-3"
    >
      <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-[var(--border)] bg-gradient-to-br from-bg2 to-bg3 transition-all group-hover:border-accent/40">
        <span
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%)",
          }}
          aria-hidden
        />
        <span className="relative font-mono text-[11px] font-bold tracking-[0.1em] text-text transition-colors group-hover:text-bg">
          DO
        </span>
      </span>
      <div className="hidden flex-col leading-none sm:flex">
        <span className="text-sm font-semibold text-text">Diego Osorio</span>
        <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          Software · DevOps
        </span>
      </div>
    </a>
  );
}

interface NavLinkProps {
  label: string;
  href: string;
  active: boolean;
  onClick?: () => void;
}

function DesktopNavLink({ label, href, active }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`relative inline-flex items-center py-1 text-sm font-medium transition-colors duration-200 ${
        active ? "text-text" : "text-muted hover:text-text"
      }`}
    >
      {label}
      {active ? (
        <motion.span
          layoutId="nav-active"
          className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-accent to-accent2"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      ) : null}
    </a>
  );
}

function MobileNavLink({ label, href, active, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`flex items-center justify-between rounded-lg px-3 py-3.5 text-sm font-medium transition-colors ${
        active
          ? "bg-bg3 text-text"
          : "text-muted hover:bg-bg3 hover:text-text"
      }`}
    >
      <span>{label}</span>
      {active ? (
        <span className="h-[2px] w-6 rounded-full bg-gradient-to-r from-accent to-accent2" />
      ) : null}
    </a>
  );
}

function CTAButton() {
  return (
    <a
      href="/cv.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1.5 rounded-md border border-[var(--border)] bg-bg2 px-3.5 py-1.5 text-sm font-medium text-text transition-all hover:border-accent/40 hover:bg-bg3"
    >
      CV
      <ArrowUpRight
        size={14}
        className="text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent2"
      />
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<string>("inicio");

  const { scrollYProgress } = useScroll();
  const progressX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "border-b border-[var(--border)] bg-bg/90 backdrop-blur-xl"
          : "border-b border-transparent bg-bg/40 backdrop-blur-md"
      }`}
    >
      <nav
        className="container-x flex items-center justify-between"
        style={{ height: "var(--nav-height)" }}
      >
        <Logo />

        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-7 xl:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <DesktopNavLink
                  label={link.label}
                  href={link.href}
                  active={active === link.id}
                />
              </li>
            ))}
          </ul>
          <span className="h-5 w-px bg-[var(--border)]" aria-hidden />
          <CTAButton />
        </div>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-bg2 text-text transition-all hover:border-accent/40 hover:bg-bg3 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </nav>

      {/* Scroll progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px origin-left bg-gradient-to-r from-accent to-accent2"
        style={{ scaleX: progressX }}
      />

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-[var(--border)] lg:hidden"
          >
            <ul className="container-x flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <MobileNavLink
                    label={link.label}
                    href={link.href}
                    active={active === link.id}
                    onClick={() => setMobileOpen(false)}
                  />
                </li>
              ))}
              <li className="mt-3 border-t border-[var(--border)] pt-3">
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="group flex items-center justify-between rounded-lg border border-[var(--border)] bg-bg2 px-4 py-3.5 text-sm font-medium text-text transition-all hover:border-accent/40 hover:bg-bg3"
                >
                  <span>Descargar CV</span>
                  <ArrowUpRight
                    size={14}
                    className="text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent2"
                  />
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
