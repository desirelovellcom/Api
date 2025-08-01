import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, DollarSign, Users, Activity, Globe } from "lucide-react"

export function MetricsCards() {
  const metrics = [
    {
      title: "Total Volume",
      value: "$2.8M",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Active Users",
      value: "1,234",
      change: "+8.2%",
      trend: "up",
      icon: Users,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Transactions",
      value: "5,678",
      change: "-2.1%",
      trend: "down",
      icon: Activity,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Countries",
      value: "45",
      change: "+3",
      trend: "up",
      icon: Globe,
      gradient: "from-orange-500 to-red-500",
    },
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon
        return (
          <Card
            key={index}
            className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 hover:border-gray-700/50 transition-colors"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 p-3 md:p-6">
              <CardTitle className="text-xs md:text-sm font-medium text-gray-300 truncate">{metric.title}</CardTitle>
              <Icon className={`h-3 w-3 md:h-4 md:w-4 bg-gradient-to-r ${metric.gradient} rounded p-0.5 text-white`} />
            </CardHeader>
            <CardContent className="p-3 md:p-6 pt-0">
              <div className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2">{metric.value}</div>
              <div className="flex items-center space-x-1 md:space-x-2">
                {metric.trend === "up" ? (
                  <TrendingUp className="h-3 w-3 md:h-4 md:w-4 text-green-400" />
                ) : (
                  <TrendingDown className="h-3 w-3 md:h-4 md:w-4 text-red-400" />
                )}
                <Badge
                  variant="secondary"
                  className={`text-xs ${
                    metric.trend === "up"
                      ? "bg-green-500/20 text-green-400 border-green-500/30"
                      : "bg-red-500/20 text-red-400 border-red-500/30"
                  }`}
                >
                  {metric.change}
                </Badge>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
