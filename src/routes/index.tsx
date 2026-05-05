import { createFileRoute } from "@tanstack/react-router";
import { AppHeader } from "@/components/AppHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, DollarSign, Users, ShoppingCart, Activity } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard — Business Hub" },
      { name: "description", content: "Visão geral de receita, clientes e pedidos do seu negócio." },
    ],
  }),
  component: Dashboard,
});

const stats = [
  { label: "Receita", value: "R$ 45.231", delta: "+20.1%", icon: DollarSign },
  { label: "Clientes", value: "2.350", delta: "+15.3%", icon: Users },
  { label: "Pedidos", value: "1.247", delta: "+8.7%", icon: ShoppingCart },
  { label: "Atividade", value: "573", delta: "+5.2%", icon: Activity },
];

const recent = [
  { name: "Olivia Martin", email: "olivia@email.com", amount: "+R$ 1.999,00" },
  { name: "Jackson Lee", email: "jackson@email.com", amount: "+R$ 39,00" },
  { name: "Isabella Nguyen", email: "isabella@email.com", amount: "+R$ 299,00" },
  { name: "William Kim", email: "will@email.com", amount: "+R$ 99,00" },
  { name: "Sofia Davis", email: "sofia@email.com", amount: "+R$ 39,00" },
];

function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <AppHeader />
      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Visão geral do seu negócio.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <Card key={s.label}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{s.label}</CardTitle>
                <s.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{s.value}</div>
                <p className="flex items-center gap-1 text-xs text-muted-foreground">
                  <ArrowUpRight className="h-3 w-3 text-emerald-500" />
                  {s.delta} vs mês passado
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Vendas recentes</CardTitle>
          </CardHeader>
          <CardContent className="divide-y">
            {recent.map((r) => (
              <div key={r.email} className="flex items-center justify-between py-3">
                <div>
                  <p className="text-sm font-medium">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.email}</p>
                </div>
                <div className="text-sm font-medium">{r.amount}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
