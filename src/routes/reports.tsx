import { createFileRoute } from "@tanstack/react-router";
import { AppHeader } from "@/components/AppHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/reports")({
  head: () => ({
    meta: [
      { title: "Relatórios — Business Hub" },
      { name: "description", content: "Relatórios e indicadores do negócio." },
    ],
  }),
  component: Reports,
});

function Reports() {
  return (
    <div className="min-h-screen bg-background">
      <AppHeader />
      <main className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="mb-6 text-3xl font-bold tracking-tight">Relatórios</h1>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader><CardTitle>Receita mensal</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Conecte seus dados para visualizar gráficos de receita.
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Conversão</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Funil de conversão e taxa por etapa.
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
