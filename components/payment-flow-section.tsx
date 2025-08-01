import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Clock, DollarSign, Shield } from "lucide-react"

export function PaymentFlowSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Payment Flow</h2>
        <p className="text-muted-foreground">Create and manage payment intents with real-time quotes</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Create Payment Intent</CardTitle>
            <CardDescription>Set up a new multi-currency payment</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="from-currency">From Currency</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">USD - US Dollar</SelectItem>
                    <SelectItem value="eur">EUR - Euro</SelectItem>
                    <SelectItem value="gbp">GBP - British Pound</SelectItem>
                    <SelectItem value="jpy">JPY - Japanese Yen</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="to-currency">To Currency</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="eur">EUR - Euro</SelectItem>
                    <SelectItem value="gbp">GBP - British Pound</SelectItem>
                    <SelectItem value="jpy">JPY - Japanese Yen</SelectItem>
                    <SelectItem value="cad">CAD - Canadian Dollar</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <Input id="amount" placeholder="0.00" type="number" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="customer-id">Customer ID</Label>
              <Input id="customer-id" placeholder="cust_1234567890" />
            </div>

            <Button className="w-full">
              <DollarSign className="h-4 w-4 mr-2" />
              Get Real-time Quote
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Live Quote</CardTitle>
            <CardDescription>Real-time exchange rate and fees</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">$1,000.00</div>
                <div className="text-sm text-muted-foreground">USD</div>
              </div>
              <ArrowRight className="h-6 w-6 text-muted-foreground" />
              <div className="text-center">
                <div className="text-2xl font-bold">€854.70</div>
                <div className="text-sm text-muted-foreground">EUR</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Exchange Rate</span>
                <span className="text-sm font-medium">1 USD = 0.8547 EUR</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Processing Fee</span>
                <span className="text-sm font-medium">$2.50</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">FX Spread</span>
                <span className="text-sm font-medium">0.25%</span>
              </div>
              <Separator />
              <div className="flex justify-between font-medium">
                <span>Total Cost</span>
                <span>$1,002.50</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              Quote expires in 4:32
            </div>

            <Button className="w-full" variant="default">
              <Shield className="h-4 w-4 mr-2" />
              Execute Payment
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Payment Intents</CardTitle>
          <CardDescription>Track your payment execution history</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { id: "pi_1234567890", amount: "$1,250.00", pair: "USD → EUR", status: "succeeded", time: "2 min ago" },
              { id: "pi_0987654321", amount: "$850.50", pair: "GBP → USD", status: "processing", time: "5 min ago" },
              { id: "pi_1122334455", amount: "$2,100.75", pair: "USD → JPY", status: "succeeded", time: "8 min ago" },
              { id: "pi_5544332211", amount: "$450.25", pair: "CAD → USD", status: "failed", time: "12 min ago" },
            ].map((intent) => (
              <div key={intent.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <div className="font-medium">{intent.id}</div>
                  <div className="text-sm text-muted-foreground">
                    {intent.amount} • {intent.pair}
                  </div>
                </div>
                <div className="text-right">
                  <Badge
                    variant={
                      intent.status === "succeeded"
                        ? "default"
                        : intent.status === "processing"
                          ? "secondary"
                          : "destructive"
                    }
                  >
                    {intent.status}
                  </Badge>
                  <div className="text-xs text-muted-foreground mt-1">{intent.time}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
