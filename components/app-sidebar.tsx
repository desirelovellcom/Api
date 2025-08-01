import {
  Activity,
  AlertTriangle,
  BarChart3,
  Code,
  CreditCard,
  DollarSign,
  FileText,
  Home,
  Key,
  Settings,
  Shield,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

const navigationItems = [
  {
    title: "Overview",
    icon: Home,
    items: [
      { title: "Dashboard", icon: BarChart3 },
      { title: "API Health", icon: Activity },
    ],
  },
  {
    title: "API Management",
    icon: Key,
    items: [
      { title: "API Keys", icon: Key },
      { title: "Rate Limits", icon: TrendingUp },
      { title: "Usage Analytics", icon: BarChart3 },
    ],
  },
  {
    title: "Payments",
    icon: CreditCard,
    items: [
      { title: "Payment Intents", icon: CreditCard },
      { title: "Exchange Rates", icon: DollarSign },
      { title: "Transaction History", icon: FileText },
    ],
  },
  {
    title: "Wallets",
    icon: Wallet,
    items: [
      { title: "User Wallets", icon: Wallet },
      { title: "Balances", icon: DollarSign },
      { title: "Conversion History", icon: TrendingUp },
    ],
  },
  {
    title: "Developer Tools",
    icon: Code,
    items: [
      { title: "API Console", icon: Code },
      { title: "Webhooks", icon: Settings },
      { title: "SDK & Docs", icon: FileText },
    ],
  },
  {
    title: "Risk & Compliance",
    icon: Shield,
    items: [
      { title: "Fraud Detection", icon: AlertTriangle },
      { title: "KYC Status", icon: Users },
      { title: "Compliance Reports", icon: FileText },
    ],
  },
  {
    title: "Settlement",
    icon: TrendingUp,
    items: [
      { title: "Payout Schedules", icon: TrendingUp },
      { title: "FX Reports", icon: BarChart3 },
      { title: "Regulatory Exports", icon: FileText },
    ],
  },
]

export function AppSidebar() {
  return (
    <Sidebar variant="inset" className="border-r border-gray-800 bg-gray-900/50 backdrop-blur-sm">
      <SidebarHeader className="border-b border-gray-800">
        <div className="flex items-center gap-2 px-2 py-3 md:py-4">
          <div className="h-6 w-6 md:h-8 md:w-8 rounded bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 flex-shrink-0" />
          <div className="min-w-0">
            <p className="text-sm font-medium text-white truncate">GlobalPay API</p>
            <p className="text-xs text-gray-400 truncate">Production Environment</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-transparent">
        {navigationItems.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel className="text-gray-300 font-medium">{section.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton className="text-gray-300 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 hover:text-white transition-all duration-200">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter className="border-t border-gray-800">
        <div className="p-2">
          <Button
            variant="outline"
            size="sm"
            className="w-full bg-transparent border-gray-700 text-gray-300 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 hover:text-white hover:border-purple-400"
          >
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
