import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, Shield, TrendingDown, TrendingUp, MapPin, Clock } from "lucide-react"

const riskAlerts = [
  {
    id: "alert_001",
    type: "Suspicious Pattern",
    description: "Multiple failed transactions from same IP",
    severity: "high",
    customer: "cust_1234567890",
    time: "5 min ago",
    status: "pending",
  },
  {
    id: "alert_002",
    type: "Velocity Check",
    description: "Transaction volume exceeded daily limit",
    severity: "medium",
    customer: "cust_0987654321",
    time: "15 min ago",
    status: "reviewing",
  },
  {
    id: "alert_003",
    type: "Geo Anomaly",
    description: "Transaction from unusual location",
    severity: "low",
    customer: "cust_1122334455",
    time: "1 hour ago",
    status: "resolved",
  },
]

const fraudMetrics = [
  { label: "Fraud Rate", value: "0.12%", change: "-0.03%", trend: "down" },
  { label: "False Positives", value: "2.1%", change: "+0.1%", trend: "up" },
  { label: "Chargebacks", value: "0.08%", change: "-0.02%", trend: "down" },
  { label: "Disputes", value: "0.15%", change: "0.00%", trend: "neutral" },
]

const geoRestrictions = [
  { country: "United States", status: "allowed", volume: "45%" },
  { country: "European Union", status: "allowed", volume: "32%" },
  { country: "United Kingdom", status: "allowed", volume: "12%" },
  { country: "Canada", status: "allowed", volume: "8%" },
  { country: "High-Risk Countries", status: "blocked", volume: "3%" },
]

export function RiskManagement() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Risk & Fraud Management</h2>
        <p className="text-muted-foreground">Monitor suspicious activities and manage compliance</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {fraudMetrics.map((metric) => (
          <Card key={metric.label}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.label}</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p
                className={`text-xs flex items-center ${
                  metric.trend === "down"
                    ? "text-green-600"
                    : metric.trend === "up"
                      ? "text-red-600"
                      : "text-muted-foreground"
                }`}
              >
                {metric.trend === "down" && <TrendingDown className="h-3 w-3 mr-1" />}
                {metric.trend === "up" && <TrendingUp className="h-3 w-3 mr-1" />}
                {metric.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              Risk Alerts
            </CardTitle>
            <CardDescription>Suspicious patterns and fraud detection alerts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {riskAlerts.map((alert) => (
                <div key={alert.id} className="flex items-start justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge
                        variant={
                          alert.severity === "high"
                            ? "destructive"
                            : alert.severity === "medium"
                              ? "default"
                              : "secondary"
                        }
                      >
                        {alert.severity}
                      </Badge>
                      <span className="font-medium">{alert.type}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{alert.description}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>{alert.customer}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {alert.time}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge variant="outline">{alert.status}</Badge>
                    <Button size="sm" variant="outline">
                      Review
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Geographic Controls
            </CardTitle>
            <CardDescription>Transaction volume by region and restrictions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {geoRestrictions.map((geo) => (
                <div key={geo.country} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-medium">{geo.country}</div>
                      <div className="text-sm text-muted-foreground">{geo.volume} of volume</div>
                    </div>
                  </div>
                  <Badge variant={geo.status === "allowed" ? "default" : "destructive"}>{geo.status}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Chargeback & Dispute Summary</CardTitle>
          <CardDescription>Recent chargebacks and dispute resolution status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Open Disputes</span>
                <span className="text-2xl font-bold text-orange-600">7</span>
              </div>
              <Progress value={35} className="h-2" />
              <p className="text-xs text-muted-foreground">35% of monthly limit</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Won Disputes</span>
                <span className="text-2xl font-bold text-green-600">23</span>
              </div>
              <Progress value={82} className="h-2" />
              <p className="text-xs text-muted-foreground">82% win rate this month</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Recovery Amount</span>
                <span className="text-2xl font-bold">$12,450</span>
              </div>
              <Progress value={67} className="h-2" />
              <p className="text-xs text-muted-foreground">67% of disputed amount</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
