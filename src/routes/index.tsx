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
      <div className="pointer-events-none absolute inset-0 vignette" />
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
              <motion.img
                src={logo}
                alt="Fraternitas Fidelis"
                className="h-20 w-20 opacity-95"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 0.95, scale: 1 }}
                transition={{ duration: 1.6, ease: "easeOut" }}
              />
              <div className="mt-10 divider-line w-24" />
              <h1 className="mt-10 font-serif text-4xl leading-tight text-foreground md:text-6xl">
                Você está preparado<br />
                <span className="italic text-foreground/80">para algo maior?</span>
              </h1>
              <p className="mt-6 max-w-md text-sm tracking-wider2 text-muted-foreground uppercase">
                Responda algumas perguntas antes de prosseguir.
              </p>
              <button
                onClick={() => setStage("quiz")}
                className="mt-12 group inline-flex items-center gap-3 border border-foreground/40 px-8 py-3 text-[11px] tracking-emblem text-foreground transition hover:border-foreground hover:bg-foreground hover:text-background"
              >
                INICIAR
                <span className="inline-block transition group-hover:translate-x-1">→</span>
              </button>
              <p className="mt-16 text-[10px] tracking-emblem text-muted-foreground/50">
                FIDES · DISCIPLINA · HONOR
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
              <div className="text-[10px] tracking-emblem text-muted-foreground/70">
                {String(step + 1).padStart(2, "0")} / {String(QUESTIONS.length).padStart(2, "0")}
              </div>
              <div className="mt-4 h-px w-40 bg-border">
                <div
                  className="h-px bg-foreground transition-all duration-700"
                  style={{ width: `${((step) / QUESTIONS.length) * 100}%` }}
                />
              </div>
              <h2 className="mt-12 max-w-xl font-serif text-3xl leading-snug text-foreground md:text-4xl">
                {QUESTIONS[step]}
              </h2>
              <div className="mt-14 flex items-center gap-6">
                <button
                  onClick={() => answer(true)}
                  className="min-w-[140px] border border-foreground/50 px-8 py-3 text-[11px] tracking-emblem text-foreground transition hover:bg-foreground hover:text-background"
                >
                  SIM
                </button>
                <button
                  onClick={() => answer(false)}
                  className="min-w-[140px] border border-border px-8 py-3 text-[11px] tracking-emblem text-muted-foreground transition hover:border-foreground/60 hover:text-foreground"
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
              <img src={logo} alt="" className="h-16 w-16 opacity-90" />
              <div className="mt-8 divider-line w-24" />
              <h2 className="mt-10 max-w-xl font-serif text-3xl leading-snug md:text-4xl">
                Talvez você esteja pronto para conhecer a{" "}
                <span className="italic">Fraternitas Fidelis.</span>
              </h2>
              <button
                onClick={() => navigate({ to: "/instituicao" })}
                className="mt-12 border border-foreground px-10 py-3 text-[11px] tracking-emblem text-foreground transition hover:bg-foreground hover:text-background"
              >
                PROSSEGUIR →
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
              <p className="mt-10 max-w-md font-serif text-2xl italic leading-relaxed text-muted-foreground">
                Nem todo caminho serve para todos.
              </p>
              <button
                onClick={restart}
                className="mt-14 text-[10px] tracking-emblem text-muted-foreground/70 transition hover:text-foreground"
              >
                REINICIAR
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
