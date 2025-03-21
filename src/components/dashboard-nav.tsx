"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function DashboardNav() {
  const pathname = usePathname()

  const routes = [
    {
      href: "/dashboard",
      label: "Dashboard",
    },
    {
      href: "/patients",
      label: "Patients",
    },
    {
      href: "/reports",
      label: "Reports",
    },
    {
      href: "/settings",
      label: "Settings",
    },
  ]

  return (
    <nav className="flex flex-col space-y-1">
      {routes.map((route) => {
        const isActive = pathname === route.href

        return (
          <Link
            key={route.href}
            href={route.href}
            className={`py-2 text-sm font-light ${
              isActive ? "px-3 bg-primary font-medium text-white" : "text-muted-foreground hover:bg-muted hover:px-3"
            }`}
          >
            {route.label}
          </Link>
        )
      })}
    </nav>
  )
}

