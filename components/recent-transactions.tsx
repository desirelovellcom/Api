import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, XCircle } from "lucide-react"

const transactions = [
  {
    id: "tx_1234567890",
    amount: "$1,250.00",
    from: "USD",
    to: "EUR",
    status: "completed",
    time: "2 min ago",
  },
  {
    id: "tx_0987654321",
    amount: "$850.50",
    from: "GBP",
    to: "USD",
    status: "processing",
    time: "5 min ago",
  },
  {
    id: "tx_1122334455",
    amount: "$2,100.75",
    from: "USD",
    to: "JPY",
    status: "completed",
    time: "8 min ago",
  },
  {
    id: "tx_5544332211",
    amount: "$450.25",
    from: "CAD",
    to: "USD",
    status: "failed",
    time: "12 min ago",
  },
]

const statusConfig = {
  completed: { icon: CheckCircle, color: "text-green-400" },
  processing: { icon: Clock, color: "text-orange-400" },
  failed: { icon: XCircle, color: "text-red-400" },
}

export function RecentTransactions() {
  return (
    <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white">Recent Transactions</CardTitle>
        <CardDescription className="text-gray-400">Latest payment and conversion activity</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((tx) => {
            const StatusIcon = statusConfig[tx.status as keyof typeof statusConfig].icon
            const statusColor = statusConfig[tx.status as keyof typeof statusConfig].color

            return (
              <div
                key={tx.id}
                className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50 border border-gray-700"
              >
                <div className="flex items-center gap-3">
                  <StatusIcon className={`h-4 w-4 ${statusColor}`} />
                  <div>
                    <div className="font-medium text-white">{tx.amount}</div>
                    <div className="text-sm text-gray-400">
                      {tx.from} → {tx.to}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge
                    className={
                      tx.status === "completed"
                        ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border-green-500/30"
                        : tx.status === "processing"
                          ? "bg-gradient-to-r from-orange-500/20 to-yellow-500/20 text-orange-300 border-orange-500/30"
                          : "bg-gradient-to-r from-red-500/20 to-pink-500/20 text-red-300 border-red-500/30"
                    }
                  >
                    {tx.status}
                  </Badge>
                  <div className="text-xs text-gray-400 mt-1">{tx.time}</div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
