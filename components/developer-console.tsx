import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Copy, ExternalLink, Play, Settings } from "lucide-react"

const codeSnippets = {
  curl: `curl -X POST https://api.globalpay.com/v1/payment_intents \\
  -H "Authorization: Bearer pk_live_1234567890abcdef" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 1000,
    "currency": "usd",
    "target_currency": "eur",
    "customer": "cust_1234567890"
  }'`,

  python: `import requests

headers = {
    'Authorization': 'Bearer pk_live_1234567890abcdef',
    'Content-Type': 'application/json',
}

data = {
    'amount': 1000,
    'currency': 'usd',
    'target_currency': 'eur',
    'customer': 'cust_1234567890'
}

response = requests.post(
    'https://api.globalpay.com/v1/payment_intents',
    headers=headers,
    json=data
)

print(response.json())`,

  nodejs: `const axios = require('axios');

const response = await axios.post(
  'https://api.globalpay.com/v1/payment_intents',
  {
    amount: 1000,
    currency: 'usd',
    target_currency: 'eur',
    customer: 'cust_1234567890'
  },
  {
    headers: {
      'Authorization': 'Bearer pk_live_1234567890abcdef',
      'Content-Type': 'application/json'
    }
  }
);

console.log(response.data);`,
}

const webhooks = [
  {
    id: "wh_1234567890",
    url: "https://myapp.com/webhooks/globalpay",
    events: ["payment.succeeded", "payment.failed"],
    status: "active",
  },
  { id: "wh_0987654321", url: "https://staging.myapp.com/webhooks", events: ["payment.succeeded"], status: "active" },
  {
    id: "wh_1122334455",
    url: "https://old.myapp.com/webhooks",
    events: ["payment.succeeded", "payment.failed", "payment.processing"],
    status: "inactive",
  },
]

export function DeveloperConsole() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Developer Console</h2>
          <p className="text-muted-foreground">SDK snippets, webhooks, and development tools</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline">Sandbox Mode</Badge>
          <Switch />
          <Badge variant="default">Production Mode</Badge>
        </div>
      </div>

      <Tabs defaultValue="sdk" className="space-y-6">
        <TabsList>
          <TabsTrigger value="sdk">SDK & Code</TabsTrigger>
          <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
          <TabsTrigger value="testing">Testing</TabsTrigger>
        </TabsList>

        <TabsContent value="sdk" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>API Code Snippets</CardTitle>
              <CardDescription>Ready-to-use code examples for payment integration</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="curl" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="curl">cURL</TabsTrigger>
                  <TabsTrigger value="python">Python</TabsTrigger>
                  <TabsTrigger value="nodejs">Node.js</TabsTrigger>
                </TabsList>

                {Object.entries(codeSnippets).map(([lang, code]) => (
                  <TabsContent key={lang} value={lang}>
                    <div className="relative">
                      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                        <code>{code}</code>
                      </pre>
                      <Button size="sm" variant="outline" className="absolute top-2 right-2 bg-transparent">
                        <Copy className="h-3 w-3 mr-1" />
                        Copy
                      </Button>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>SDKs & Libraries</CardTitle>
                <CardDescription>Official SDKs for popular languages</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: "Python SDK", version: "v2.1.0", downloads: "12.5k" },
                  { name: "Node.js SDK", version: "v1.8.2", downloads: "8.2k" },
                  { name: "PHP SDK", version: "v1.5.1", downloads: "5.1k" },
                  { name: "Ruby SDK", version: "v1.3.0", downloads: "2.8k" },
                ].map((sdk) => (
                  <div key={sdk.name} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">{sdk.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {sdk.version} • {sdk.downloads} downloads
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Docs
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>API Explorer</CardTitle>
                <CardDescription>Interactive API testing tool</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Endpoint</Label>
                  <Input value="/v1/payment_intents" readOnly />
                </div>
                <div className="space-y-2">
                  <Label>Method</Label>
                  <Badge variant="default">POST</Badge>
                </div>
                <Button className="w-full">
                  <Play className="h-4 w-4 mr-2" />
                  Try API Call
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="webhooks" className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Webhook Endpoints</h3>
              <p className="text-sm text-muted-foreground">Manage your webhook configurations</p>
            </div>
            <Button>
              <Settings className="h-4 w-4 mr-2" />
              Add Webhook
            </Button>
          </div>

          <div className="space-y-4">
            {webhooks.map((webhook) => (
              <Card key={webhook.id}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="font-medium">{webhook.url}</div>
                      <div className="text-sm text-muted-foreground">{webhook.id}</div>
                    </div>
                    <Badge variant={webhook.status === "active" ? "default" : "secondary"}>{webhook.status}</Badge>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {webhook.events.map((event) => (
                      <Badge key={event} variant="outline" className="text-xs">
                        {event}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="testing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Test Environment</CardTitle>
              <CardDescription>Sandbox testing tools and test data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Test API Key</Label>
                  <Input value="pk_test_abcdef1234567890" readOnly />
                </div>
                <div className="space-y-2">
                  <Label>Webhook Secret</Label>
                  <Input value="whsec_test_1234567890" readOnly />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Test Card Numbers</Label>
                <div className="grid gap-2 text-sm">
                  <div className="flex justify-between p-2 bg-muted rounded">
                    <span>4242424242424242</span>
                    <span className="text-muted-foreground">Visa - Success</span>
                  </div>
                  <div className="flex justify-between p-2 bg-muted rounded">
                    <span>4000000000000002</span>
                    <span className="text-muted-foreground">Visa - Declined</span>
                  </div>
                  <div className="flex justify-between p-2 bg-muted rounded">
                    <span>4000000000009995</span>
                    <span className="text-muted-foreground">Visa - Insufficient Funds</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
