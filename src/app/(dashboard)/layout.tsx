import type React from "react"
import { DashboardNav } from "@/components/dashboard-nav"
import { Header } from "@/components/header"
import { Separator } from "@/components/ui/separator"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container px-4 py-6 mx-auto space-y-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground py-2">Overview of your patient cases and fracture healing statistics.</p>


          {/* <h1 className="text-3xl font-bold tracking-tight">Patients</h1>
        <p className="text-muted-foreground">Manage and view all patient records.</p> */}

          {/* <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
        <p className="text-muted-foreground">Generate and view analytical reports on fracture healing data.</p> */}


          <Separator />
        </div>
        <div className="flex flex-col md:flex-row md:space-x-6">
          {/* Sidebar */}
          <div className="w-full md:w-[250px]">
            <DashboardNav />
          </div>
          {/* Main Content */}
          <div className="w-full">{children}</div>
        </div>
      </div>
    </div>
  )
}

