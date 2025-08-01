"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Download, TrendingUp, DollarSign, FileText, Clock } from "lucide-react"
import { format } from "date-fns"
import { useState } from "react"

const payoutSchedules = [
  {
    id: "payout_001",
    amount: "$45,230.50",
    currency: "USD",
    status: "pending",
    date: "2024-01-20",
    method: "Bank Transfer",
  },
  { id: "payout_002", amount: "€32,150.75", currency: "EUR", status: "completed", date: "2024-01-19", method: "SEPA" },
  {
    id: "payout_003",
    amount: "£18,940.25",
    currency: "GBP",
    status: "completed",
    date: "2024-01-18",
    method: "Faster Payments",
  },
  {
    id: "payout_004",
    amount: "$67,890.00",
    currency: "USD",
    status: "processing",
    date: "2024-01-17",
    method: "Wire Transfer",
  },
]

const fxReports = [
  { pair: "USD/EUR", volume: "$1,234,567", profit: "$2,345", margin: "0.19%" },
  { pair: "USD/GBP", volume: "$987,654", profit: "$1,876", margin: "0.19%" },
  { pair: "USD/JPY", volume: "$654,321", profit: "$1,234", margin: "0.19%" },
  { pair: "EUR/GBP", volume: "$432,109", profit: "$821", margin: "0.19%" },
]

export function SettlementReporting() {
  const [date, setDate] = useState<Date>()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Settlement & Reporting</h2>
          <p className="text-muted-foreground">Manage payouts and generate financial reports</p>
        </div>
        <div className="flex items-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Payouts</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$127,450</div>
            <p className="text-xs text-muted-foreground">Across 12 transactions</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">FX Profit (MTD)</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">$8,276</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Settlement Volume</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$4.2M</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reports Generated</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47</div>
            <p className="text-xs text-muted-foreground">This quarter</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Payout Schedules</CardTitle>
            <CardDescription>Upcoming and recent settlement payouts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {payoutSchedules.map((payout) => (
                <div key={payout.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <div className="font-medium">{payout.amount}</div>
                    <div className="text-sm text-muted-foreground">
                      {payout.method} • {payout.date}
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge
                      variant={
                        payout.status === "completed"
                          ? "default"
                          : payout.status === "processing"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {payout.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>FX Profit/Loss Reports</CardTitle>
            <CardDescription>Foreign exchange trading performance by currency pair</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {fxReports.map((report) => (
                <div key={report.pair} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <div className="font-medium">{report.pair}</div>
                    <div className="text-sm text-muted-foreground">Volume: {report.volume}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-green-600">{report.profit}</div>
                    <div className="text-sm text-muted-foreground">{report.margin} margin</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Regulatory Reporting</CardTitle>
          <CardDescription>Compliance reports and regulatory export tools</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-3">
              <h4 className="font-medium">Transaction Reports</h4>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <FileText className="h-4 w-4 mr-2" />
                  Daily Transaction Log
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <FileText className="h-4 w-4 mr-2" />
                  Monthly Summary
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <FileText className="h-4 w-4 mr-2" />
                  Quarterly Report
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">Compliance Exports</h4>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Download className="h-4 w-4 mr-2" />
                  AML Transaction Data
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Download className="h-4 w-4 mr-2" />
                  KYC Customer Data
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Download className="h-4 w-4 mr-2" />
                  Suspicious Activity
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">Financial Reports</h4>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  P&L Statement
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Revenue Report
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <FileText className="h-4 w-4 mr-2" />
                  Tax Documentation
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
