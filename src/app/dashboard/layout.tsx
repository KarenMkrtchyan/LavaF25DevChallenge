import Sidebar from "@/components/sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid md:grid-cols-[240px_1fr]">
      <Sidebar />

      <main className="p-4">{children}</main>
    </div>
  );
}
