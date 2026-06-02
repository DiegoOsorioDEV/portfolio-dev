"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const { profile } = portfolioData;

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Stack", href: "#stack" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Contacto", href: "#contacto" },
];

function Logo() {
  return (
    <a
      href="#inicio"
      aria-label="Ir al inicio"
      className="group flex shrink-0 items-center gap-3"
    >
      <span className="relative h-9 w-9 overflow-hidden rounded-lg border border-border bg-bg3 transition-colors group-hover:border-accent/40">
        <Image
          src={profile.image}
          alt=""
          width={36}
          height={36}
          className="h-full w-full object-cover object-top"
        />
      </span>
      <span className="hidden flex-col leading-none sm:flex">
        <span className="text-sm font-semibold text-text">
          {profile.shortName}
        </span>
        <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          {profile.tagline}
        </span>
      </span>
    </a>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-border bg-bg/90 backdrop-blur-xl"
          : "border-b border-transparent bg-bg/50 backdrop-blur-md"
      }`}
    >
      <div
        className="container-x flex items-center justify-between"
        style={{ height: "var(--nav-height)" }}
      >
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted transition-colors hover:text-text"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <span className="h-5 w-px bg-border" aria-hidden />
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-md border border-border bg-bg2 px-3.5 py-1.5 text-sm font-medium text-text transition-all hover:border-accent/40 hover:bg-bg3"
          >
            CV
            <ArrowUpRight
              size={14}
              className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent2"
            />
          </a>
        </nav>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-bg2 text-text transition-colors hover:border-accent/40 hover:bg-bg3 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {menuOpen ? (
        <nav
          className="border-t border-border lg:hidden"
          aria-label="Menú móvil"
        >
          <ul className="container-x flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm font-medium text-muted transition-colors hover:bg-bg3 hover:text-text"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2 border-t border-border pt-3">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="group flex items-center justify-between rounded-lg border border-border bg-bg2 px-4 py-3 text-sm font-medium text-text"
              >
                Descargar CV
                <ArrowUpRight size={14} className="text-muted group-hover:text-accent2" />
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
