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
import "./sidebar.css";

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
    <nav>
      <div className="flex flex-col gap-4[px]">
        <div className="icon_div">
          <Logo />
          <h1 className="icon_text">Tally</h1>
        </div>
        <div className="flex flex-col gap-[8px] pt-[8px] pb-[8px]">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <div
                className={`nav_item last:mt-4 last:pt-4
          last:border-t last:border-neutral-200 ${
            active ? "nav_item_active" : ""
          }`}
                key={item.href}
              >
                {active ? item.active_icon : item.inactive_icon}
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <button className="sidebar_button">Logout</button>
      </div>
    </nav>
  );
}
