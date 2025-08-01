"use client"

import { useState } from "react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MetricsCards } from "./metrics-cards"
import { ExchangeRatesTable } from "./exchange-rates-table"
import { RecentTransactions } from "./recent-transactions"
import { ApiKeysSection } from "./api-keys-section"
import { PaymentFlowSection } from "./payment-flow-section"
import { WalletManagement } from "./wallet-management"
import { DeveloperConsole } from "./developer-console"
import { RiskManagement } from "./risk-management"
import { SettlementReporting } from "./settlement-reporting"

export function DashboardContent() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Header */}
      <header className="sticky top-0 z-50 flex h-14 md:h-16 items-center gap-2 border-b border-gray-800/50 bg-black/80 backdrop-blur-md px-4 md:px-6">
        <SidebarTrigger className="text-white hover:bg-gray-800/50 h-8 w-8 md:h-10 md:w-10" />
        <Separator orientation="vertical" className="h-4 bg-gray-700" />
        <div className="flex-1 min-w-0">
          <h1 className="text-lg md:text-xl font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent truncate">
            Global Currency Exchange API
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 md:grid-cols-8 bg-gray-900/50 border border-gray-800/50 mb-6">
            <TabsTrigger
              value="overview"
              className="text-xs md:text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500/20 data-[state=active]:to-pink-500/20 data-[state=active]:text-white text-gray-400"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="api-keys"
              className="text-xs md:text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500/20 data-[state=active]:to-cyan-500/20 data-[state=active]:text-white text-gray-400"
            >
              <span className="hidden md:inline">API Keys</span>
              <span className="md:hidden">Keys</span>
            </TabsTrigger>
            <TabsTrigger
              value="payments"
              className="text-xs md:text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500/20 data-[state=active]:to-emerald-500/20 data-[state=active]:text-white text-gray-400"
            >
              Payments
            </TabsTrigger>
            <TabsTrigger
              value="wallets"
              className="text-xs md:text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500/20 data-[state=active]:to-red-500/20 data-[state=active]:text-white text-gray-400"
            >
              Wallets
            </TabsTrigger>
            <TabsTrigger
              value="developer"
              className="text-xs md:text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500/20 data-[state=active]:to-purple-500/20 data-[state=active]:text-white text-gray-400"
            >
              <span className="hidden md:inline">Developer</span>
              <span className="md:hidden">Dev</span>
            </TabsTrigger>
            <TabsTrigger
              value="risk"
              className="text-xs md:text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500/20 data-[state=active]:to-pink-500/20 data-[state=active]:text-white text-gray-400"
            >
              Risk
            </TabsTrigger>
            <TabsTrigger
              value="settlement"
              className="text-xs md:text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-500/20 data-[state=active]:to-blue-500/20 data-[state=active]:text-white text-gray-400"
            >
              <span className="hidden md:inline">Settlement</span>
              <span className="md:hidden">Reports</span>
            </TabsTrigger>
            <TabsTrigger
              value="compliance"
              className="text-xs md:text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500/20 data-[state=active]:to-orange-500/20 data-[state=active]:text-white text-gray-400"
            >
              <span className="hidden md:inline">Compliance</span>
              <span className="md:hidden">KYC</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <MetricsCards />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ExchangeRatesTable />
              <RecentTransactions />
            </div>
          </TabsContent>

          <TabsContent value="api-keys">
            <ApiKeysSection />
          </TabsContent>

          <TabsContent value="payments">
            <PaymentFlowSection />
          </TabsContent>

          <TabsContent value="wallets">
            <WalletManagement />
          </TabsContent>

          <TabsContent value="developer">
            <DeveloperConsole />
          </TabsContent>

          <TabsContent value="risk">
            <RiskManagement />
          </TabsContent>

          <TabsContent value="settlement">
            <SettlementReporting />
          </TabsContent>

          <TabsContent value="compliance" className="space-y-6">
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-lg p-6">
              <h2 className="text-xl font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-4">
                Compliance & KYC Management
              </h2>
              <p className="text-gray-300 mb-4">Manage compliance requirements and KYC verification processes.</p>
              <div className="text-gray-400">Compliance dashboard coming soon...</div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
