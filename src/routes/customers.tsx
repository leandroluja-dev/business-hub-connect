import { createFileRoute } from "@tanstack/react-router";
import { AppHeader } from "@/components/AppHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/customers")({
  head: () => ({
    meta: [
      { title: "Clientes — Business Hub" },
      { name: "description", content: "Lista de clientes do seu negócio." },
    ],
  }),
  component: Customers,
});

const customers = [
  { name: "Acme Inc.", email: "contact@acme.com", status: "Ativo", value: "R$ 12.500" },
  { name: "Globex", email: "hello@globex.com", status: "Ativo", value: "R$ 8.200" },
  { name: "Initech", email: "ops@initech.com", status: "Inativo", value: "R$ 3.100" },
  { name: "Umbrella", email: "info@umbrella.com", status: "Ativo", value: "R$ 21.400" },
];

function Customers() {
  return (
    <div className="min-h-screen bg-background">
      <AppHeader />
      <main className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="mb-6 text-3xl font-bold tracking-tight">Clientes</h1>
        <Card>
          <CardHeader>
            <CardTitle>Todos os clientes</CardTitle>
          </CardHeader>
          <CardContent className="divide-y">
            {customers.map((c) => (
              <div key={c.email} className="flex items-center justify-between py-3">
                <div>
                  <p className="text-sm font-medium">{c.name}</p>
                  <p className="text-xs text-muted-foreground">{c.email}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={c.status === "Ativo" ? "default" : "secondary"}>{c.status}</Badge>
                  <span className="text-sm font-medium">{c.value}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
