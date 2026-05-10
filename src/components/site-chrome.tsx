import { Link } from "@tanstack/react-router";
import logo from "@/assets/ff-logo.png";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/instituicao" className="flex items-center gap-3">
          <img src={logo} alt="Fraternitas Fidelis" className="h-8 w-8 opacity-90" />
          <span className="font-serif text-sm tracking-emblem text-foreground/90">
            FRATERNITAS&nbsp;·&nbsp;FIDELIS
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-[11px] tracking-wider2 uppercase text-muted-foreground md:flex">
          <Link to="/instituicao" hash="quem-somos" className="transition hover:text-foreground">Instituição</Link>
          <Link to="/instituicao" hash="principios" className="transition hover:text-foreground">Princípios</Link>
          <Link to="/instituicao" hash="missao" className="transition hover:text-foreground">Missão</Link>
          <Link to="/instituicao" hash="ingresso" className="transition hover:text-foreground">Ingresso</Link>
          <Link to="/contato" className="text-foreground transition hover:text-accent">Contato</Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <img src={logo} alt="" className="h-10 w-10 opacity-70" />
          <div className="font-serif text-xs tracking-emblem text-muted-foreground">
            FRATERNITAS FIDELIS
          </div>
          <div className="divider-line w-24" />
          <p className="max-w-md text-xs text-muted-foreground/70">
            Organização juvenil dedicada à formação de caráter, disciplina e valores.
            Ingresso sujeito à avaliação.
          </p>
          <a href="mailto:fraternitasfidelis@gmail.com" className="mt-2 text-xs tracking-wider2 text-foreground/80 hover:text-accent">
            fraternitasfidelis@gmail.com
          </a>
          <p className="mt-6 text-[10px] tracking-wider2 text-muted-foreground/50">
            © {new Date().getFullYear()} · FIDES · DISCIPLINA · HONOR
          </p>
        </div>
      </div>
    </footer>
  );
}
