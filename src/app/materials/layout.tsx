// app/(dashboard)/layout.tsx
import Sidebar from "@/components/sidebar/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid md:grid-cols-[240px_1fr]">
      {/* sidebar (sticky on desktop, collapsible on mobile) */}
      <aside className="border-r bg-background text-foreground p-4 md:sticky md:top-0 md:h-screen">
        <Sidebar />
      </aside>

      {/* main content */}
      <main className="p-4">{children}</main>
    </div>
  );
}
