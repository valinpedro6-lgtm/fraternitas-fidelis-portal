import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/ff-logo.png";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "sticky top-0 z-40 transition-all duration-500 " +
        (scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-xl py-3"
          : "border-b border-transparent bg-background/40 backdrop-blur-md py-5")
      }
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <Link to="/instituicao" className="group flex items-center gap-3">
          <img
            src={logo}
            alt="Fraternitas Fidelis"
            className={
              "transition-all duration-500 " +
              (scrolled ? "h-7 w-7 opacity-95" : "h-9 w-9 opacity-95")
            }
          />
          <div className="flex flex-col leading-none">
            <span className="font-serif text-[13px] tracking-emblem text-foreground/90">
              FRATERNITAS&nbsp;·&nbsp;FIDELIS
            </span>
            <span className="mt-1 hidden text-[8px] tracking-emblem text-accent/70 sm:block">
              FIDES · DISCIPLINA · HONOR
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-[11px] tracking-wider2 uppercase text-muted-foreground md:flex">
          <Link to="/instituicao" hash="quem-somos" className="relative transition hover:text-foreground after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full">Instituição</Link>
          <Link to="/instituicao" hash="principios" className="relative transition hover:text-foreground after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full">Princípios</Link>
          <Link to="/instituicao" hash="missao" className="relative transition hover:text-foreground after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full">Missão</Link>
          <Link to="/instituicao" hash="ingresso" className="relative transition hover:text-foreground after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full">Ingresso</Link>
          <Link
            to="/contato"
            className="border border-foreground/30 px-4 py-2 text-foreground transition hover:border-accent hover:text-accent"
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative mt-32 overflow-hidden border-t border-border/60">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3 md:items-start">
          <div className="flex flex-col gap-3 md:col-span-1">
            <img src={logo} alt="" className="h-10 w-10 opacity-80" />
            <div className="font-serif text-sm tracking-emblem text-foreground/90">
              FRATERNITAS · FIDELIS
            </div>
            <p className="max-w-xs text-xs leading-relaxed text-muted-foreground/80">
              Organização juvenil dedicada à formação de caráter, disciplina e valores.
              Ingresso sujeito à avaliação.
            </p>
          </div>

          <div className="md:col-span-1">
            <div className="text-[10px] tracking-emblem text-muted-foreground/60">NAVEGAÇÃO</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/instituicao" className="transition hover:text-foreground">A Instituição</Link></li>
              <li><Link to="/instituicao" hash="principios" className="transition hover:text-foreground">Princípios</Link></li>
              <li><Link to="/instituicao" hash="ingresso" className="transition hover:text-foreground">Ingresso</Link></li>
              <li><Link to="/contato" className="transition hover:text-foreground">Contato</Link></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <div className="text-[10px] tracking-emblem text-muted-foreground/60">CORRESPONDÊNCIA</div>
            <a
              href="mailto:fraternitasfidelis@gmail.com"
              className="mt-4 inline-block font-serif text-lg italic text-foreground transition hover:text-accent"
            >
              fraternitasfidelis@gmail.com
            </a>
            <p className="mt-3 text-[11px] tracking-wider2 text-muted-foreground/60">
              Toda mensagem é avaliada com discrição.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-3">
          <div className="divider-gold w-40" />
          <p className="text-[10px] tracking-emblem text-muted-foreground/50">
            © {new Date().getFullYear()} · FIDES · DISCIPLINA · HONOR
          </p>
        </div>
      </div>
    </footer>
  );
}
