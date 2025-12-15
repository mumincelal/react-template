import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <header className="flex h-16 items-center gap-6 border-b bg-background px-6">
        Header
      </header>
      <main className="flex-1 overflow-y-auto bg-muted/10 p-6">
        <Outlet />
      </main>
    </div>
  );
}
