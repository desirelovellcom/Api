"use client"

import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardContent } from "@/components/dashboard-content"

export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar />
          <main className="flex-1">
            <DashboardContent />
          </main>
        </div>
      </SidebarProvider>
    </div>
  )
}
