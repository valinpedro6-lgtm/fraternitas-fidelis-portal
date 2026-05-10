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

function InstitutionPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="pointer-events-none absolute inset-0 vignette" />
        <div className="relative mx-auto flex min-h-[80vh] max-w-5xl flex-col items-center justify-center px-6 py-24 text-center">
          <Reveal>
            <img src={logoFull} alt="Fraternitas Fidelis" className="mx-auto h-56 w-auto opacity-95 md:h-72" />
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-2xl font-serif text-2xl italic leading-relaxed text-foreground/80 md:text-3xl">
              "Não somos para todos. Somos para os que decidem ser mais."
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-12 flex items-center gap-3 text-[10px] tracking-emblem text-muted-foreground/70">
              <span className="h-px w-12 bg-border" />
              EST · MMXXV
              <span className="h-px w-12 bg-border" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section id="quem-somos" className="relative border-b border-border/60 py-32">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <div className="text-[10px] tracking-emblem text-muted-foreground">— I —</div>
            <h2 className="mt-6 font-serif text-4xl text-foreground md:text-5xl">Quem somos</h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 space-y-6 font-serif text-xl leading-relaxed text-foreground/85 md:text-2xl">
              <p>
                A <span className="italic">Fraternitas Fidelis</span> é uma organização juvenil
                voltada à formação de caráter, disciplina e valores.
              </p>
              <p className="text-muted-foreground">Não é um grupo comum.</p>
              <p className="text-muted-foreground">Não é entretenimento.</p>
              <p className="text-foreground">
                É compromisso, responsabilidade e evolução.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRINCÍPIOS */}
      <section id="principios" className="relative border-b border-border/60 py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="flex items-baseline justify-between">
              <div>
                <div className="text-[10px] tracking-emblem text-muted-foreground">— II —</div>
                <h2 className="mt-6 font-serif text-4xl text-foreground md:text-5xl">Princípios</h2>
              </div>
              <div className="hidden font-serif text-sm italic text-muted-foreground md:block">
                Fundamentos imutáveis.
              </div>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.05}>
                <div className="group relative h-full bg-background p-10 transition hover:bg-card">
                  <div className="text-[10px] tracking-emblem text-muted-foreground/60">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-4 font-serif text-3xl text-foreground">{p.name}</h3>
                  <div className="mt-4 h-px w-10 bg-foreground/40 transition-all duration-500 group-hover:w-20" />
                  <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MISSÃO */}
      <section id="missao" className="relative overflow-hidden border-b border-border/60 py-32">
        <img
          src={sword}
          alt=""
          aria-hidden
          className="pointer-events-none absolute right-0 top-1/2 h-[120%] -translate-y-1/2 opacity-[0.06]"
        />
        <div className="relative mx-auto max-w-4xl px-6">
          <Reveal>
            <div className="text-[10px] tracking-emblem text-muted-foreground">— III —</div>
            <h2 className="mt-6 font-serif text-4xl text-foreground md:text-5xl">Missão</h2>
          </Reveal>
          <ul className="mt-14 space-y-6">
            {MISSION.map((m, i) => (
              <Reveal key={m} delay={i * 0.08}>
                <li className="flex items-baseline gap-6 border-b border-border/50 pb-6">
                  <span className="font-serif text-sm text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-2xl text-foreground md:text-3xl">{m}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* INGRESSO */}
      <section id="ingresso" className="relative border-b border-border/60 py-32">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="text-[10px] tracking-emblem text-muted-foreground">— IV —</div>
            <h2 className="mt-6 font-serif text-4xl text-foreground md:text-5xl">Processo de ingresso</h2>
          </Reveal>

          <div className="mt-16 grid gap-px bg-border md:grid-cols-5">
            {STEPS.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.06}>
                <div className="h-full bg-background p-8">
                  <div className="font-serif text-3xl text-accent">{s.n}</div>
                  <div className="mt-4 text-[11px] tracking-emblem text-foreground">{s.t.toUpperCase()}</div>
                  <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-14 flex flex-col items-start gap-6 border-l border-accent/60 pl-8 md:flex-row md:items-center md:justify-between">
              <p className="font-serif text-xl italic text-foreground/90">
                Ingresso sujeito à avaliação. Nem toda solicitação é aceita.
              </p>
              <Link
                to="/contato"
                className="shrink-0 border border-foreground/60 px-8 py-3 text-[11px] tracking-emblem text-foreground transition hover:bg-foreground hover:text-background"
              >
                SOLICITAR CONTATO →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
