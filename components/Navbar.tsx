"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";

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
      className="group flex shrink-0 items-center gap-2.5 font-mono text-sm font-semibold"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-bg">
        <Terminal size={14} />
      </span>
      <span className="flex items-baseline">
        <span className="text-text">diego</span>
        <span className="text-accent2">/</span>
        <span className="text-muted transition-colors group-hover:text-text">
          dev
        </span>
      </span>
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
      className={`relative rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors xl:px-4 xl:text-xs ${
        active ? "text-text" : "text-muted hover:text-text"
      }`}
    >
      {active ? (
        <motion.span
          layoutId="nav-active"
          className="absolute inset-0 -z-10 rounded-full border border-[var(--border)] bg-bg3"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      ) : null}
      {label}
    </a>
  );
}

function MobileNavLink({ label, href, active, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`flex items-center justify-between rounded-lg px-3 py-3 font-mono text-sm uppercase tracking-[0.2em] transition-colors ${
        active ? "bg-bg3 text-text" : "text-muted hover:bg-bg3 hover:text-text"
      }`}
    >
      <span>{label}</span>
      {active ? <span className="h-1.5 w-1.5 rounded-full bg-accent2" /> : null}
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<string>("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
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
          ? "border-b border-[var(--border)] bg-bg/85 backdrop-blur-xl"
          : "bg-bg/30 backdrop-blur-sm"
      }`}
    >
      <nav
        className="container-px mx-auto flex max-w-6xl items-center justify-between"
        style={{ height: "var(--nav-height)" }}
      >
        <Logo />

        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <DesktopNavLink
                label={link.label}
                href={link.href}
                active={active === link.id}
              />
            </li>
          ))}
          <li className="ml-2">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-accent transition-all hover:bg-accent hover:text-bg hover:shadow-[0_0_20px_rgba(123,97,255,0.35)] xl:text-xs"
            >
              CV
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="rounded-md border border-[var(--border)] bg-bg2 p-2 text-text transition-colors hover:border-accent/40 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-[var(--border)] lg:hidden"
          >
            <ul className="container-px flex flex-col gap-1 py-4">
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
              <li className="mt-2">
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg border border-accent/40 bg-accent/10 px-4 py-3 text-center font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent"
                >
                  Descargar CV
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
