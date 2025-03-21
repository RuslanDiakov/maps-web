import { Header } from "@/components/header"
import type { ReactNode } from "react"

export default function PatientLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>{children}</main>
    </div>
  )
}

