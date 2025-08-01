import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"

const exchangeRates = [
  { pair: "USD/EUR", rate: "0.8547", change: "+0.12%", trend: "up" },
  { pair: "USD/GBP", rate: "0.7832", change: "-0.08%", trend: "down" },
  { pair: "USD/JPY", rate: "149.23", change: "+0.34%", trend: "up" },
  { pair: "USD/CAD", rate: "1.3456", change: "+0.05%", trend: "up" },
  { pair: "USD/AUD", rate: "1.5234", change: "-0.21%", trend: "down" },
]

export function ExchangeRatesTable() {
  return (
    <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white">Real-time Exchange Rates</CardTitle>
        <CardDescription className="text-gray-400">Live currency conversion rates with spreads</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {exchangeRates.map((rate) => (
            <div
              key={rate.pair}
              className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50 border border-gray-700"
            >
              <div className="flex items-center gap-3">
                <div className="font-medium text-white">{rate.pair}</div>
                <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30">
                  {rate.rate}
                </Badge>
              </div>
              <div
                className={`flex items-center gap-1 text-sm ${rate.trend === "up" ? "text-green-400" : "text-red-400"}`}
              >
                {rate.trend === "up" ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                {rate.change}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
