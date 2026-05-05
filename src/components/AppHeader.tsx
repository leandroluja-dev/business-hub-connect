import { Link } from "@tanstack/react-router";
import { Briefcase } from "lucide-react";

export function AppHeader() {
  const linkCls = "text-sm text-muted-foreground hover:text-foreground transition-colors";
  const activeCls = "text-foreground font-medium";
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground">
            <Briefcase className="h-4 w-4" />
          </span>
          Business Hub
        </Link>
        <nav className="flex items-center gap-6">
          <Link to="/" className={linkCls} activeProps={{ className: activeCls }} activeOptions={{ exact: true }}>Dashboard</Link>
          <Link to="/customers" className={linkCls} activeProps={{ className: activeCls }}>Customers</Link>
          <Link to="/reports" className={linkCls} activeProps={{ className: activeCls }}>Reports</Link>
        </nav>
      </div>
    </header>
  );
}
