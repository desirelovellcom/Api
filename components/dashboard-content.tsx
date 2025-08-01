import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Activity, AlertTriangle, Users, CheckCircle } from "lucide-react"
import { MetricsCards } from "@/components/metrics-cards"
import { ExchangeRatesTable } from "@/components/exchange-rates-table"
import { RecentTransactions } from "@/components/recent-transactions"
import { ApiKeysSection } from "@/components/api-keys-section"
import { PaymentFlowSection } from "@/components/payment-flow-section"
import { WalletManagement } from "@/components/wallet-management"
import { DeveloperConsole } from "@/components/developer-console"
import { RiskManagement } from "@/components/risk-management"
import { SettlementReporting } from "@/components/settlement-reporting"

export function DashboardContent() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="p-3 sm:p-4 md:p-6 space-y-6 md:space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2 min-w-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent leading-tight">
              API Dashboard
            </h1>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg">
              Monitor your global currency exchange and payment operations
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Badge className="bg-gradient-to-r from-green-400 to-emerald-400 text-black border-0 px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm">
              <CheckCircle className="h-3 w-3 mr-1" />
              <span className="hidden sm:inline">All Systems Operational</span>
              <span className="sm:hidden">Online</span>
            </Badge>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 sm:grid-cols-8 bg-gray-900/50 border border-gray-800 backdrop-blur-sm gap-1 p-1">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500/20 data-[state=active]:to-pink-500/20 data-[state=active]:text-white text-xs sm:text-sm px-2 py-1.5"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="api-keys"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500/20 data-[state=active]:to-pink-500/20 data-[state=active]:text-white text-xs sm:text-sm px-2 py-1.5"
            >
              <span className="hidden sm:inline">API Keys</span>
              <span className="sm:hidden">Keys</span>
            </TabsTrigger>
            <TabsTrigger
              value="payments"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500/20 data-[state=active]:to-pink-500/20 data-[state=active]:text-white text-xs sm:text-sm px-2 py-1.5"
            >
              Payments
            </TabsTrigger>
            <TabsTrigger
              value="wallets"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500/20 data-[state=active]:to-pink-500/20 data-[state=active]:text-white text-xs sm:text-sm px-2 py-1.5"
            >
              Wallets
            </TabsTrigger>
            <TabsTrigger
              value="developer"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500/20 data-[state=active]:to-pink-500/20 data-[state=active]:text-white text-xs sm:text-sm px-2 py-1.5 col-span-4 sm:col-span-1"
            >
              <span className="hidden sm:inline">Developer</span>
              <span className="sm:hidden">Dev</span>
            </TabsTrigger>
            <TabsTrigger
              value="risk"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500/20 data-[state=active]:to-pink-500/20 data-[state=active]:text-white text-xs sm:text-sm px-2 py-1.5"
            >
              Risk
            </TabsTrigger>
            <TabsTrigger
              value="settlement"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500/20 data-[state=active]:to-pink-500/20 data-[state=active]:text-white text-xs sm:text-sm px-2 py-1.5"
            >
              <span className="hidden sm:inline">Settlement</span>
              <span className="sm:hidden">Settle</span>
            </TabsTrigger>
            <TabsTrigger
              value="compliance"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500/20 data-[state=active]:to-pink-500/20 data-[state=active]:text-white text-xs sm:text-sm px-2 py-1.5"
            >
              <span className="hidden sm:inline">Compliance</span>
              <span className="sm:hidden">Comply</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <MetricsCards />

            <div className="grid gap-6 md:grid-cols-2">
              <ExchangeRatesTable />
              <RecentTransactions />
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-300">API Health</CardTitle>
                  <Activity className="h-4 w-4 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    99.9%
                  </div>
                  <p className="text-xs text-gray-400">Uptime (30 days)</p>
                  <Progress value={99.9} className="mt-2 bg-gray-800" />
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-300">Active Users</CardTitle>
                  <Users className="h-4 w-4 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">12,847</div>
                  <p className="text-xs text-gray-400">
                    <span className="text-green-400">+12%</span> from last month
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-300">Risk Alerts</CardTitle>
                  <AlertTriangle className="h-4 w-4 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    3
                  </div>
                  <p className="text-xs text-gray-400">Pending review</p>
                </CardContent>
              </Card>
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

          <TabsContent value="compliance">
            <div className="space-y-6">
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">KYC Compliance Status</CardTitle>
                  <CardDescription className="text-gray-400">User verification and compliance overview</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                        8,432
                      </div>
                      <p className="text-sm text-gray-400">Verified Users</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                        1,247
                      </div>
                      <p className="text-sm text-gray-400">Pending Review</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                        89
                      </div>
                      <p className="text-sm text-gray-400">Rejected</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">2,079</div>
                      <p className="text-sm text-gray-400">Not Started</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
