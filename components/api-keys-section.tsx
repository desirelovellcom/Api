"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Copy, Eye, EyeOff, Plus, Trash2 } from "lucide-react"
import { useState } from "react"

const apiKeys = [
  {
    id: "pk_live_1234567890abcdef",
    name: "Production API Key",
    environment: "live",
    created: "2024-01-15",
    lastUsed: "2 hours ago",
    permissions: ["read", "write"],
    active: true,
  },
  {
    id: "pk_test_abcdef1234567890",
    name: "Test API Key",
    environment: "test",
    created: "2024-01-10",
    lastUsed: "1 day ago",
    permissions: ["read"],
    active: true,
  },
  {
    id: "pk_live_fedcba0987654321",
    name: "Legacy Key",
    environment: "live",
    created: "2023-12-01",
    lastUsed: "30 days ago",
    permissions: ["read", "write"],
    active: false,
  },
]

export function ApiKeysSection() {
  const [showKeys, setShowKeys] = useState<Record<string, boolean>>({})

  const toggleKeyVisibility = (keyId: string) => {
    setShowKeys((prev) => ({ ...prev, [keyId]: !prev[keyId] }))
  }

  const maskKey = (key: string) => {
    return key.slice(0, 12) + "..." + key.slice(-4)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">API Keys</h2>
          <p className="text-muted-foreground">Manage your API keys and access permissions</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create New Key
        </Button>
      </div>

      <div className="grid gap-6">
        {apiKeys.map((key) => (
          <Card key={key.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">{key.name}</CardTitle>
                  <CardDescription>
                    Created on {key.created} • Last used {key.lastUsed}
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={key.environment === "live" ? "default" : "secondary"}>{key.environment}</Badge>
                  <Switch checked={key.active} />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Input value={showKeys[key.id] ? key.id : maskKey(key.id)} readOnly className="font-mono text-sm" />
                <Button variant="outline" size="icon" onClick={() => toggleKeyVisibility(key.id)}>
                  {showKeys[key.id] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
                <Button variant="outline" size="icon">
                  <Copy className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex gap-2">
                {key.permissions.map((permission) => (
                  <Badge key={permission} variant="outline">
                    {permission}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Rate Limits</CardTitle>
          <CardDescription>Current API usage and limits</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <Label>Requests per minute</Label>
              <div className="text-2xl font-bold">847 / 1000</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: "84.7%" }}></div>
              </div>
            </div>
            <div>
              <Label>Daily volume</Label>
              <div className="text-2xl font-bold">$2.8M / $5M</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: "56%" }}></div>
              </div>
            </div>
            <div>
              <Label>Monthly transactions</Label>
              <div className="text-2xl font-bold">124K / 200K</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                <div className="bg-orange-600 h-2 rounded-full" style={{ width: "62%" }}></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
