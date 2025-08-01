import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, ArrowDownLeft, Plus, Minus } from "lucide-react"

const wallets = [
  { currency: "USD", balance: "12,847.50", change: "+2.3%", trend: "up" },
  { currency: "EUR", balance: "8,432.10", change: "+1.8%", trend: "up" },
  { currency: "GBP", balance: "5,234.75", change: "-0.5%", trend: "down" },
  { currency: "JPY", balance: "1,234,567", change: "+3.2%", trend: "up" },
  { currency: "CAD", balance: "6,789.25", change: "+0.9%", trend: "up" },
]

const recentConversions = [
  { from: "USD", to: "EUR", amount: "1,000.00", converted: "854.70", rate: "0.8547", time: "2 hours ago" },
  { from: "GBP", to: "USD", amount: "500.00", converted: "638.50", rate: "1.2770", time: "4 hours ago" },
  { from: "USD", to: "JPY", amount: "2,000.00", converted: "298,460", rate: "149.23", time: "6 hours ago" },
]

export function WalletManagement() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Wallet Management</h2>
        <p className="text-muted-foreground">Manage user currency wallets and conversion history</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {wallets.map((wallet) => (
          <Card key={wallet.currency}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{wallet.currency} Wallet</CardTitle>
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                {wallet.currency.slice(0, 1)}
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{wallet.balance}</div>
              <p className={`text-xs flex items-center ${wallet.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                {wallet.trend === "up" ? (
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                ) : (
                  <ArrowDownLeft className="h-3 w-3 mr-1" />
                )}
                {wallet.change} from last month
              </p>
              <div className="flex gap-2 mt-4">
                <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                  <Plus className="h-3 w-3 mr-1" />
                  Add
                </Button>
                <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                  <Minus className="h-3 w-3 mr-1" />
                  Withdraw
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Conversions</CardTitle>
            <CardDescription>Latest currency conversion activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentConversions.map((conversion, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{conversion.from}</Badge>
                      <ArrowUpRight className="h-3 w-3" />
                      <Badge variant="outline">{conversion.to}</Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">
                      {conversion.amount} → {conversion.converted}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Rate: {conversion.rate} • {conversion.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>On/Off-Ramp Options</CardTitle>
            <CardDescription>Available funding and withdrawal methods</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded bg-blue-100 flex items-center justify-center">🏦</div>
                  <div>
                    <div className="font-medium">Bank Transfer</div>
                    <div className="text-sm text-muted-foreground">ACH, Wire, SEPA</div>
                  </div>
                </div>
                <Badge variant="default">Active</Badge>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded bg-orange-100 flex items-center justify-center">₿</div>
                  <div>
                    <div className="font-medium">Crypto Rails</div>
                    <div className="text-sm text-muted-foreground">BTC, ETH, USDC</div>
                  </div>
                </div>
                <Badge variant="default">Active</Badge>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded bg-green-100 flex items-center justify-center">🤝</div>
                  <div>
                    <div className="font-medium">Partner Networks</div>
                    <div className="text-sm text-muted-foreground">Wise, Remitly, WorldRemit</div>
                  </div>
                </div>
                <Badge variant="secondary">Coming Soon</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
