import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import logoFull from "@/assets/ff-logo-full.png";
import sword from "@/assets/ff-sword.png";

export const Route = createFileRoute("/instituicao")({
  head: () => ({
    meta: [
      { title: "A Instituição — Fraternitas Fidelis" },
      { name: "description", content: "Fraternitas Fidelis — organização juvenil dedicada à formação de caráter, disciplina, honra e responsabilidade." },
      { property: "og:title", content: "A Instituição — Fraternitas Fidelis" },
      { property: "og:description", content: "Compromisso. Responsabilidade. Evolução." },
    ],
  }),
  component: InstitutionPage,
});

const PRINCIPLES = [
  { name: "Disciplina", desc: "O domínio sobre si mesmo antes de qualquer comando externo." },
  { name: "Honra", desc: "A palavra empenhada vale mais que qualquer contrato." },
  { name: "Lealdade", desc: "Fidelidade ao irmão, ao princípio e à instituição." },
  { name: "Respeito", desc: "Reverência pela hierarquia, pela tradição e pelo próximo." },
  { name: "Coragem", desc: "Agir com firmeza diante do que é difícil e necessário." },
  { name: "Responsabilidade", desc: "Assumir o peso das próprias escolhas, sem evasivas." },
];

const MISSION = [
  "Construir jovens mais fortes.",
  "Fortalecer caráter.",
  "Criar responsabilidade.",
  "Desenvolver liderança.",
  "Preparar para a vida adulta.",
];

const STEPS = [
  { n: "I", t: "Solicitação", d: "Manifestação formal de interesse." },
  { n: "II", t: "Avaliação", d: "Análise de perfil, intenção e maturidade." },
  { n: "III", t: "Conversa inicial", d: "Encontro reservado com membros responsáveis." },
  { n: "IV", t: "Observação", d: "Período de convivência e julgamento mútuo." },
  { n: "V", t: "Possível admissão", d: "Decisão final, sujeita à avaliação institucional." },
];

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ roman, title }: { roman: string; title: string }) {
  return (
    <div>
      <div className="flex items-center gap-3 text-[10px] tracking-emblem text-accent/80">
        <span>—</span>
        <span>{roman}</span>
        <span>—</span>
      </div>
      <h2 className="mt-6 font-serif text-4xl text-foreground md:text-6xl">
        {title}
      </h2>
    </div>
  );
}

function InstitutionPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="pointer-events-none absolute inset-0 vignette" />
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 50% 35%, oklch(0.78 0.09 78 / 0.08), transparent 70%)",
          }}
        />
        <div className="grain pointer-events-none absolute inset-0" />

        <div className="relative mx-auto flex min-h-[88vh] max-w-5xl flex-col items-center justify-center px-6 py-28 text-center">
          <Reveal>
            <img
              src={logoFull}
              alt="Fraternitas Fidelis"
              className="mx-auto h-60 w-auto animate-emblem opacity-95 md:h-80"
            />
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-12 max-w-2xl font-serif text-2xl italic leading-relaxed text-foreground/85 md:text-4xl">
              "Não somos para todos.<br />
              <span className="text-gold">Somos para os que decidem ser mais.</span>"
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-14 ornament">EST · MMXXV</div>
          </Reveal>

          {/* indicador scroll */}
          <Reveal delay={0.7}>
            <a
              href="#quem-somos"
              className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-emblem text-muted-foreground/60 transition hover:text-foreground"
            >
              <span className="block animate-pulse">↓</span>
              <span className="mt-2 block">DESCER</span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section id="quem-somos" className="relative scroll-mt-24 border-b border-border/60 py-32">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <SectionLabel roman="I" title="Quem somos" />
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal delay={0.15}>
              <div className="space-y-6 font-serif text-2xl leading-relaxed text-foreground/85 md:text-3xl">
                <p>
                  A <span className="italic text-gold">Fraternitas Fidelis</span> é uma organização juvenil
                  voltada à formação de caráter, disciplina e valores.
                </p>
                <p className="text-muted-foreground">Não é um grupo comum.</p>
                <p className="text-muted-foreground">Não é entretenimento.</p>
                <p className="text-foreground">
                  É <span className="italic">compromisso</span>, <span className="italic">responsabilidade</span> e <span className="italic">evolução</span>.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PRINCÍPIOS */}
      <section id="principios" className="relative scroll-mt-24 border-b border-border/60 py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="flex items-end justify-between gap-8">
              <SectionLabel roman="II" title="Princípios" />
              <div className="hidden font-serif text-base italic text-muted-foreground md:block">
                Fundamentos imutáveis.
              </div>
            </div>
          </Reveal>

          <div className="mt-20 grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.05}>
                <div className="group relative h-full bg-background p-10 transition-all duration-500 hover:bg-card">
                  <div className="flex items-center justify-between">
                    <div className="text-[10px] tracking-emblem text-muted-foreground/60">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="font-serif text-xs italic text-accent/0 transition group-hover:text-accent/70">
                      ◇
                    </div>
                  </div>
                  <h3 className="mt-6 font-serif text-4xl text-foreground transition group-hover:text-gold">
                    {p.name}
                  </h3>
                  <div className="mt-5 h-px w-10 bg-foreground/40 transition-all duration-700 group-hover:w-24 group-hover:bg-accent" />
                  <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MISSÃO */}
      <section id="missao" className="relative scroll-mt-24 overflow-hidden border-b border-border/60 py-32">
        <img
          src={sword}
          alt=""
          aria-hidden
          className="pointer-events-none absolute right-[-5%] top-1/2 h-[130%] -translate-y-1/2 opacity-[0.05]"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 30% 50% at 80% 50%, oklch(0.78 0.09 78 / 0.05), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-6">
          <Reveal>
            <SectionLabel roman="III" title="Missão" />
          </Reveal>
          <ul className="mt-16 space-y-2">
            {MISSION.map((m, i) => (
              <Reveal key={m} delay={i * 0.08}>
                <li className="group flex items-baseline gap-8 border-b border-border/50 py-7 transition hover:border-accent/40">
                  <span className="font-serif text-sm tracking-wider2 text-accent/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-3xl text-foreground transition group-hover:translate-x-2 group-hover:text-gold md:text-4xl">
                    {m}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* INGRESSO */}
      <section id="ingresso" className="relative scroll-mt-24 border-b border-border/60 py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionLabel roman="IV" title="Processo de ingresso" />
          </Reveal>

          <div className="mt-20 grid gap-px bg-border md:grid-cols-5">
            {STEPS.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.06}>
                <div className="group relative h-full bg-background p-8 transition hover:bg-card">
                  <div className="font-serif text-4xl text-gold transition group-hover:scale-110">
                    {s.n}
                  </div>
                  <div className="mt-6 text-[11px] tracking-emblem text-foreground">
                    {s.t.toUpperCase()}
                  </div>
                  <div className="mt-3 h-px w-6 bg-accent/40 transition-all duration-500 group-hover:w-16" />
                  <p className="mt-5 text-xs leading-relaxed text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-16 flex flex-col items-start gap-6 border-l-2 border-accent/60 bg-card/30 p-10 md:flex-row md:items-center md:justify-between">
              <p className="font-serif text-2xl italic text-foreground/90 md:text-3xl">
                Ingresso sujeito à avaliação.<br />
                <span className="text-muted-foreground">Nem toda solicitação é aceita.</span>
              </p>
              <Link
                to="/contato"
                className="group relative shrink-0 overflow-hidden border border-foreground/60 px-10 py-3.5 text-[11px] tracking-emblem text-foreground transition hover:border-accent"
              >
                <span className="absolute inset-0 -z-10 translate-y-full bg-foreground transition-transform duration-500 group-hover:translate-y-0" />
                <span className="transition group-hover:text-background">SOLICITAR CONTATO →</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
