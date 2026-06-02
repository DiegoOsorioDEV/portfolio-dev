import { portfolioData } from "@/data/portfolio";

const { profile } = portfolioData;

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Stack", href: "#stack" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-bg">
      <div className="container-x py-8 sm:py-10">
        <nav aria-label="Pie de página">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:gap-x-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-text"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="mt-6 text-center font-mono text-xs text-muted">
          © {year}{" "}
          <span className="text-text">{profile.shortName}</span>
          <span className="mx-2 text-border">·</span>
          Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}
