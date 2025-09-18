// components/sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/settings", label: "Settings" },
  { href: "/analytics", label: "Analytics" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const expand = useState(false);

  return (
    <nav className="space-y-1">
      {nav.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={[
              "block rounded px-3 py-2 transition",
              active
                ? "bg-foreground/10 font-medium"
                : "hover:bg-foreground/5"
            ].join(" ")}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
