import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, DollarSign, TrendingUp, Globe, Activity } from "lucide-react"

export function MetricsCards() {
  return (
    <div className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-2 lg:grid-cols-4">
      <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 px-3 sm:px-6 pt-3 sm:pt-6">
          <CardTitle className="text-xs sm:text-sm font-medium text-gray-300">Total Volume (24h)</CardTitle>
          <DollarSign className="h-3 w-3 sm:h-4 sm:w-4 text-purple-400" />
        </CardHeader>
        <CardContent className="px-3 sm:px-6 pb-3 sm:pb-6">
          <div className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            $2.8M
          </div>
          <p className="text-xs text-gray-400">
            <span className="text-green-400 flex items-center">
              <ArrowUpRight className="h-2 w-2 sm:h-3 sm:w-3 mr-1" />
              +18.2%
            </span>
            <span className="hidden sm:inline">from yesterday</span>
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 px-3 sm:px-6 pt-3 sm:pt-6">
          <CardTitle className="text-xs sm:text-sm font-medium text-gray-300">Transactions</CardTitle>
          <Activity className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />
        </CardHeader>
        <CardContent className="px-3 sm:px-6 pb-3 sm:pb-6">
          <div className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            14,729
          </div>
          <p className="text-xs text-gray-400">
            <span className="text-green-400 flex items-center">
              <ArrowUpRight className="h-2 w-2 sm:h-3 sm:w-3 mr-1" />
              +7.4%
            </span>
            <span className="hidden sm:inline">from yesterday</span>
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 px-3 sm:px-6 pt-3 sm:pt-6">
          <CardTitle className="text-xs sm:text-sm font-medium text-gray-300">Success Rate</CardTitle>
          <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-green-400" />
        </CardHeader>
        <CardContent className="px-3 sm:px-6 pb-3 sm:pb-6">
          <div className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            98.7%
          </div>
          <p className="text-xs text-gray-400">
            <span className="text-green-400">+0.3%</span>
            <span className="hidden sm:inline"> from last week</span>
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border-orange-500/20 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 px-3 sm:px-6 pt-3 sm:pt-6">
          <CardTitle className="text-xs sm:text-sm font-medium text-gray-300">Countries</CardTitle>
          <Globe className="h-3 w-3 sm:h-4 sm:w-4 text-orange-400" />
        </CardHeader>
        <CardContent className="px-3 sm:px-6 pb-3 sm:pb-6">
          <div className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
            47
          </div>
          <p className="text-xs text-gray-400">Active markets</p>
        </CardContent>
      </Card>
    </div>
  )
}
