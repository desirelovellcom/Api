import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { DashboardContent } from "@/components/dashboard-content"

export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      <SidebarProvider defaultOpen={true}>
        <AppSidebar />
        <SidebarInset>
          <header className="sticky top-0 z-50 flex h-14 md:h-16 shrink-0 items-center gap-2 border-b border-gray-800 bg-black/80 backdrop-blur-sm px-3 md:px-4">
            <SidebarTrigger className="-ml-1 text-white hover:bg-gray-800 h-8 w-8 md:h-10 md:w-10" />
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <div className="h-5 w-5 md:h-6 md:w-6 rounded bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 flex-shrink-0" />
              <h1 className="text-sm md:text-lg font-semibold text-white truncate">GlobalPay API</h1>
            </div>
          </header>
          <main className="flex-1 overflow-auto bg-black">
            <DashboardContent />
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
