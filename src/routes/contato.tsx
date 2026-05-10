import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { motion } from "framer-motion";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Fraternitas Fidelis" },
      { name: "description", content: "Solicite contato com a Fraternitas Fidelis. Toda solicitação passa por avaliação." },
      { property: "og:title", content: "Contato — Fraternitas Fidelis" },
      { property: "og:description", content: "Solicite contato. Sujeito à avaliação." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  idade: z.coerce.number().int().min(10, "Idade inválida").max(99, "Idade inválida"),
  cidade: z.string().trim().min(2, "Informe a cidade").max(80),
  motivo: z.string().trim().min(10, "Descreva brevemente").max(500),
  mensagem: z.string().trim().max(1000).optional().or(z.literal("")),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        errs[String(issue.path[0])] = issue.message;
      }
      setErrors(errs);
      toast.error("Verifique os campos do formulário.");
      return;
    }
    setErrors({});
    setSent(true);
    toast.success("Solicitação registrada. Aguarde retorno.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Toaster />
      <SiteHeader />

      <section className="relative py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-[10px] tracking-emblem text-muted-foreground">— CONTATO —</div>
            <h1 className="mt-6 font-serif text-5xl text-foreground md:text-6xl">
              Solicitar <span className="italic">contato</span>
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
              O preenchimento deste formulário não garante admissão. Toda solicitação
              é submetida à avaliação interna. Responda com sinceridade.
            </p>
          </motion.div>

          {sent ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mt-16 border border-border bg-card p-12 text-center"
            >
              <div className="font-serif text-3xl italic text-foreground">
                Sua solicitação foi recebida.
              </div>
              <div className="mt-4 divider-line mx-auto w-24" />
              <p className="mt-6 text-sm text-muted-foreground">
                Caso seu perfil corresponda, entraremos em contato.
              </p>
              <p className="mt-2 text-xs tracking-wider2 text-muted-foreground/70">
                Discrição é parte do processo.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={onSubmit} className="mt-14 space-y-8" noValidate>
              <Field label="Nome completo" name="nome" error={errors.nome} />
              <div className="grid gap-8 md:grid-cols-2">
                <Field label="Idade" name="idade" type="number" error={errors.idade} />
                <Field label="Cidade" name="cidade" error={errors.cidade} />
              </div>
              <Field label="Motivo do interesse" name="motivo" textarea rows={3} error={errors.motivo} />
              <Field label="Mensagem (opcional)" name="mensagem" textarea rows={4} error={errors.mensagem} />

              <div className="flex flex-col items-start justify-between gap-6 pt-4 md:flex-row md:items-center">
                <p className="text-[11px] tracking-wider2 text-muted-foreground/70">
                  Ao enviar, você aceita ser avaliado de forma reservada.
                </p>
                <button
                  type="submit"
                  className="border border-foreground px-10 py-3 text-[11px] tracking-emblem text-foreground transition hover:bg-foreground hover:text-background"
                >
                  SOLICITAR CONTATO →
                </button>
              </div>
            </form>
          )}

          <div className="mt-20 border-t border-border/60 pt-10 text-center">
            <div className="text-[10px] tracking-emblem text-muted-foreground/70">CORRESPONDÊNCIA DIRETA</div>
            <a
              href="mailto:fraternitasfidelis@gmail.com"
              className="mt-3 inline-block font-serif text-xl italic text-foreground transition hover:text-accent"
            >
              fraternitasfidelis@gmail.com
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({
  label, name, type = "text", textarea = false, rows = 3, error,
}: {
  label: string; name: string; type?: string; textarea?: boolean; rows?: number; error?: string;
}) {
  const base =
    "w-full border-0 border-b border-border bg-transparent px-0 py-3 font-serif text-lg text-foreground placeholder:text-muted-foreground/40 focus:border-foreground focus:outline-none focus:ring-0 transition-colors";
  return (
    <label className="block">
      <span className="text-[10px] tracking-emblem text-muted-foreground">{label.toUpperCase()}</span>
      {textarea ? (
        <textarea name={name} rows={rows} className={base + " resize-none"} />
      ) : (
        <input name={name} type={type} className={base} />
      )}
      {error && <span className="mt-2 block text-[11px] text-destructive">{error}</span>}
    </label>
  );
}
