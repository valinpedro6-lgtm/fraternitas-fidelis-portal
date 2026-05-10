import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/ff-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fraternitas Fidelis" },
      { name: "description", content: "Você está preparado para algo maior? Uma organização juvenil dedicada à disciplina, honra e formação de caráter." },
      { property: "og:title", content: "Fraternitas Fidelis" },
      { property: "og:description", content: "Você está preparado para algo maior?" },
    ],
  }),
  component: QuizGate,
});

const QUESTIONS = [
  "Você busca disciplina na sua vida?",
  "Você valoriza honra e lealdade?",
  "Está disposto a evoluir pessoalmente?",
  "Busca fazer parte de algo maior que si mesmo?",
  "Está disposto a assumir compromisso real?",
];

type Stage = "intro" | "quiz" | "approved" | "denied";

function QuizGate() {
  const navigate = useNavigate();
  const [stage, setStage] = useState<Stage>("intro");
  const [step, setStep] = useState(0);
  const [yes, setYes] = useState(0);

  const answer = (v: boolean) => {
    const nextYes = yes + (v ? 1 : 0);
    const nextStep = step + 1;
    if (nextStep >= QUESTIONS.length) {
      setYes(nextYes);
      setStage(nextYes >= 3 ? "approved" : "denied");
    } else {
      setYes(nextYes);
      setStep(nextStep);
    }
  };

  const restart = () => {
    setStep(0); setYes(0); setStage("intro");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* fundo refinado */}
      <div className="pointer-events-none absolute inset-0 vignette" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 30%, oklch(0.78 0.09 78 / 0.07), transparent 70%)",
        }}
      />
      <div className="grain pointer-events-none absolute inset-0" />

      <div className="relative mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 py-20 text-center">
        <AnimatePresence mode="wait">
          {stage === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <div className="relative">
                <div
                  className="absolute inset-0 -z-10 blur-3xl"
                  style={{
                    background:
                      "radial-gradient(circle, oklch(0.78 0.09 78 / 0.18), transparent 70%)",
                  }}
                />
                <img
                  src={logo}
                  alt="Fraternitas Fidelis"
                  className="h-24 w-24 animate-emblem opacity-95"
                />
              </div>

              <div className="mt-10 ornament">FRATERNITAS · FIDELIS</div>

              <h1 className="mt-10 font-serif text-5xl leading-[1.05] text-foreground md:text-7xl">
                Você está preparado<br />
                <span className="italic text-shimmer">para algo maior?</span>
              </h1>

              <p className="mt-8 max-w-md text-[11px] tracking-emblem text-muted-foreground">
                RESPONDA · ANTES · DE · PROSSEGUIR
              </p>

              <button
                onClick={() => setStage("quiz")}
                className="group relative mt-12 inline-flex items-center gap-3 overflow-hidden border border-foreground/40 px-10 py-3.5 text-[11px] tracking-emblem text-foreground transition hover:border-accent"
              >
                <span className="absolute inset-0 -z-10 translate-y-full bg-foreground transition-transform duration-500 ease-out group-hover:translate-y-0" />
                <span className="transition group-hover:text-background">INICIAR</span>
                <span className="inline-block transition group-hover:translate-x-1 group-hover:text-background">→</span>
              </button>

              <p className="mt-20 text-[10px] tracking-emblem text-muted-foreground/40">
                EST · MMXXV
              </p>
            </motion.div>
          )}

          {stage === "quiz" && (
            <motion.div
              key={`q-${step}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.5 }}
              className="flex w-full flex-col items-center"
            >
              <div className="text-[10px] tracking-emblem text-accent/80">
                {String(step + 1).padStart(2, "0")} <span className="text-muted-foreground/50">/ {String(QUESTIONS.length).padStart(2, "0")}</span>
              </div>
              <div className="mt-5 h-px w-56 overflow-hidden bg-border">
                <motion.div
                  className="h-px bg-gold"
                  initial={{ width: 0 }}
                  animate={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
              </div>
              <h2 className="mt-14 max-w-2xl font-serif text-3xl leading-snug text-foreground md:text-5xl">
                {QUESTIONS[step]}
              </h2>
              <div className="mt-16 flex items-center gap-5">
                <button
                  onClick={() => answer(true)}
                  className="group relative min-w-[160px] overflow-hidden border border-foreground/60 px-8 py-3.5 text-[11px] tracking-emblem text-foreground transition hover:border-accent"
                >
                  <span className="absolute inset-0 -z-10 translate-y-full bg-foreground transition-transform duration-500 group-hover:translate-y-0" />
                  <span className="transition group-hover:text-background">SIM</span>
                </button>
                <button
                  onClick={() => answer(false)}
                  className="min-w-[160px] border border-border px-8 py-3.5 text-[11px] tracking-emblem text-muted-foreground transition hover:border-foreground/60 hover:text-foreground"
                >
                  NÃO
                </button>
              </div>
            </motion.div>
          )}

          {stage === "approved" && (
            <motion.div
              key="ok"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="flex flex-col items-center"
            >
              <img src={logo} alt="" className="h-20 w-20 animate-emblem opacity-95" />
              <div className="mt-8 ornament">ACESSO · CONCEDIDO</div>
              <h2 className="mt-10 max-w-2xl font-serif text-3xl leading-snug md:text-5xl">
                Talvez você esteja pronto<br />
                para conhecer a{" "}
                <span className="italic text-gold">Fraternitas Fidelis.</span>
              </h2>
              <button
                onClick={() => navigate({ to: "/instituicao" })}
                className="group relative mt-14 overflow-hidden border border-foreground px-12 py-3.5 text-[11px] tracking-emblem text-foreground transition hover:border-accent"
              >
                <span className="absolute inset-0 -z-10 translate-y-full bg-foreground transition-transform duration-500 group-hover:translate-y-0" />
                <span className="transition group-hover:text-background">PROSSEGUIR →</span>
              </button>
            </motion.div>
          )}

          {stage === "denied" && (
            <motion.div
              key="no"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4 }}
              className="flex flex-col items-center"
            >
              <div className="divider-line w-16" />
              <p className="mt-12 max-w-md font-serif text-3xl italic leading-relaxed text-muted-foreground">
                Nem todo caminho<br />serve para todos.
              </p>
              <button
                onClick={restart}
                className="mt-14 text-[10px] tracking-emblem text-muted-foreground/70 transition hover:text-foreground"
              >
                ← REINICIAR
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
