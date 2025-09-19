// components/sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Logo,
  MaterialsIconActive,
  MaterialsIconInactive,
  ProductsIconActive,
  ProductsIconInactive,
  FulfillmentIconActive,
  FulfillmentIconInactive,
  IntegrationsIconActive,
  IntegrationsIconInactive,
} from "../icons/Icons";

const nav = [
  {
    href: "/materials",
    label: "Materials",
    inactive_icon: <MaterialsIconInactive />,
    active_icon: <MaterialsIconActive />,
  },
  {
    href: "/products",
    label: "Products",
    inactive_icon: <ProductsIconInactive />,
    active_icon: <ProductsIconActive />,
  },
  {
    href: "/fulfillment",
    label: "Fulfillment",
    inactive_icon: <FulfillmentIconInactive />,
    active_icon: <FulfillmentIconActive />,
  },
  {
    href: "/integrations",
    label: "Integrations",
    inactive_icon: <IntegrationsIconInactive />,
    active_icon: <IntegrationsIconActive />,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const expand = useState(false);

  return (
    <nav className="space-y-1">
      {nav.map((item) => {
        const active = pathname === item.href;
        return (
          <div className="flex flex-row items-center gap-3" key={item.href}>
            {active ? item.active_icon : item.inactive_icon}
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={[
                "block rounded px-3 py-2 transition",
                active
                  ? "bg-foreground/10 font-medium"
                  : "hover:bg-foreground/5",
              ].join(" ")}
            >
              {item.label}
            </Link>
          </div>
        );
      })}
    </nav>
  );
}
