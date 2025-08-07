"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Users, TrendingUp, AlertTriangle, Calendar, FileText, Sparkles } from "lucide-react"
import Link from "next/link"

const clients = [
  {
    id: 1,
    name: "Sarah Johnson",
    lastEntry: "2 hours ago",
    mood: "Great",
    moodColor: "text-green-600",
    riskLevel: "Low",
    riskColor: "bg-green-100 text-green-800",
    journalStreak: 7,
    nextSession: "Tomorrow, 2:00 PM",
  },
  {
    id: 2,
    name: "Michael Chen",
    lastEntry: "1 day ago",
    mood: "Difficult",
    moodColor: "text-red-600",
    riskLevel: "Medium",
    riskColor: "bg-yellow-100 text-yellow-800",
    journalStreak: 3,
    nextSession: "Friday, 10:00 AM",
  },
  {
    id: 3,
    name: "Emma Davis",
    lastEntry: "3 hours ago",
    mood: "Okay",
    moodColor: "text-yellow-600",
    riskLevel: "Low",
    riskColor: "bg-green-100 text-green-800",
    journalStreak: 12,
    nextSession: "Next Monday, 3:00 PM",
  },
]

const insights = [
  {
    client: "Sarah Johnson",
    type: "Positive Trend",
    content:
      "Anxiety levels have decreased by 30% over the past two weeks. Coping strategies are showing effectiveness.",
    priority: "low",
  },
  {
    client: "Michael Chen",
    type: "Alert",
    content: "Mentions of sleep difficulties have increased. Consider addressing sleep hygiene in next session.",
    priority: "high",
  },
  {
    client: "Emma Davis",
    type: "Pattern Recognition",
    content: "Journal entries show consistent emotional regulation improvement on weekends vs weekdays.",
    priority: "medium",
  },
]

export default function TherapistDashboard() {
  const [selectedClient, setSelectedClient] = useState(clients[0])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F0E8] to-[#EDE4D3]">
      {/* Header */}
      <header className="border-b border-[#D4B896] bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-[#684427]" />
            <span className="text-2xl font-bold text-[#684427]">Sonda</span>
          </Link>
          <div className="flex items-center space-x-4">
            <span className="text-[#8B5A3C]">Dr. Smith</span>
            <Button variant="ghost" className="text-[#8B5A3C]">
              Settings
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Client List Sidebar */}
          <div className="lg:col-span-1">
            <Card className="border-[#D4B896]">
              <CardHeader>
                <CardTitle className="flex items-center text-[#684427]">
                  <Users className="mr-2 h-5 w-5" />
                  Active Clients
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {clients.map((client) => (
                  <div
                    key={client.id}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedClient.id === client.id
                        ? "bg-[#F5F0E8] border border-[#D4B896]"
                        : "bg-white border border-[#D4B896] hover:bg-[#F5F0E8]"
                    }`}
                    onClick={() => setSelectedClient(client)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-[#684427]">{client.name}</h4>
                      <Badge className={client.riskColor}>{client.riskLevel}</Badge>
                    </div>
                    <div className="text-sm text-[#8B5A3C] space-y-1">
                      <div>Last entry: {client.lastEntry}</div>
                      <div className="flex items-center">
                        <span>Mood: </span>
                        <span className={`ml-1 ${client.moodColor}`}>{client.mood}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-[#D4B896] mt-6">
              <CardHeader>
                <CardTitle className="flex items-center text-[#684427]">
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  Priority Alerts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {insights
                  .filter((i) => i.priority === "high")
                  .map((insight, index) => (
                    <div key={index} className="p-3 rounded-lg bg-red-50 border border-red-200">
                      <div className="font-medium text-red-900 text-sm mb-1">{insight.client}</div>
                      <div className="text-red-700 text-xs">{insight.content}</div>
                    </div>
                  ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-[#684427] mb-2">Client Overview: {selectedClient.name}</h1>
              <div className="flex items-center space-x-4 text-sm text-[#8B5A3C]">
                <span>Next session: {selectedClient.nextSession}</span>
                <span>•</span>
                <span>Journal streak: {selectedClient.journalStreak} days</span>
              </div>
            </div>

            <Tabs defaultValue="insights" className="space-y-6">
              <TabsList className="bg-[#F5F0E8] border-[#D4B896]">
                <TabsTrigger
                  value="insights"
                  className="data-[state=active]:bg-[#684427] data-[state=active]:text-white"
                >
                  AI Insights
                </TabsTrigger>
                <TabsTrigger
                  value="journal"
                  className="data-[state=active]:bg-[#684427] data-[state=active]:text-white"
                >
                  Journal Entries
                </TabsTrigger>
                <TabsTrigger
                  value="progress"
                  className="data-[state=active]:bg-[#684427] data-[state=active]:text-white"
                >
                  Progress Tracking
                </TabsTrigger>
                <TabsTrigger
                  value="session"
                  className="data-[state=active]:bg-[#684427] data-[state=active]:text-white"
                >
                  Session Prep
                </TabsTrigger>
              </TabsList>

              <TabsContent value="insights" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-[#D4B896]">
                    <CardHeader>
                      <CardTitle className="flex items-center text-[#684427]">
                        <Sparkles className="mr-2 h-5 w-5" />
                        Emotional Patterns
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-3 rounded-lg bg-green-50 border border-green-200">
                          <h4 className="font-medium text-green-900 mb-2">Positive Trend Detected</h4>
                          <p className="text-green-700 text-sm">
                            Anxiety mentions decreased by 40% this week. Client is actively using breathing techniques.
                          </p>
                        </div>
                        <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
                          <h4 className="font-medium text-blue-900 mb-2">Coping Strategy Success</h4>
                          <p className="text-blue-700 text-sm">
                            Mindfulness exercises mentioned positively in 5 out of 7 recent entries.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-[#D4B896]">
                    <CardHeader>
                      <CardTitle className="flex items-center text-[#684427]">
                        <TrendingUp className="mr-2 h-5 w-5" />
                        Behavioral Insights
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-3 rounded-lg bg-[#F5F0E8] border border-[#D4B896]">
                          <h4 className="font-medium text-[#684427] mb-2">Sleep Pattern Correlation</h4>
                          <p className="text-[#8B5A3C] text-sm">
                            Better mood ratings correlate with 7+ hours of sleep mentioned in entries.
                          </p>
                        </div>
                        <div className="p-3 rounded-lg bg-purple-50 border border-purple-200">
                          <h4 className="font-medium text-purple-900 mb-2">Social Interaction Impact</h4>
                          <p className="text-purple-700 text-sm">
                            Mood improves significantly on days with social activities mentioned.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border-[#D4B896]">
                  <CardHeader>
                    <CardTitle className="flex items-center text-[#684427]">
                      <Brain className="mr-2 h-5 w-5" />
                      AI-Generated Session Recommendations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-[#684427] mt-2"></div>
                        <div>
                          <h4 className="font-medium text-[#684427]">Focus on Sleep Hygiene</h4>
                          <p className="text-[#8B5A3C] text-sm">
                            Client mentions sleep difficulties 3x this week. Consider CBT-I techniques.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-[#684427] mt-2"></div>
                        <div>
                          <h4 className="font-medium text-[#684427]">Reinforce Positive Coping</h4>
                          <p className="text-[#8B5A3C] text-sm">
                            Breathing exercises showing great results. Explore additional mindfulness techniques.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-[#684427] mt-2"></div>
                        <div>
                          <h4 className="font-medium text-[#684427]">Address Work Stress</h4>
                          <p className="text-[#8B5A3C] text-sm">
                            Recurring work-related anxiety themes. Consider workplace stress management strategies.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="journal" className="space-y-6">
                <Card className="border-[#D4B896]">
                  <CardHeader>
                    <CardTitle className="flex items-center text-[#684427]">
                      <FileText className="mr-2 h-5 w-5" />
                      Recent Journal Entries
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border-l-4 border-green-400 pl-4 py-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-[#684427]">Today, 3:00 PM</span>
                        <Badge className="bg-green-100 text-green-800">Great</Badge>
                      </div>
                      <p className="text-[#8B5A3C] text-sm mb-2">
                        "Had a really good day today. Used the breathing technique when I felt anxious about the
                        presentation, and it actually worked! I felt more confident and the presentation went well. I'm
                        starting to see that I can manage these situations better than I thought."
                      </p>
                      <div className="text-xs text-[#8B5A3C]">
                        <strong>AI Analysis:</strong> Positive self-efficacy, successful coping strategy implementation
                      </div>
                    </div>

                    <div className="border-l-4 border-yellow-400 pl-4 py-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-[#684427]">Yesterday, 8:30 PM</span>
                        <Badge className="bg-yellow-100 text-yellow-800">Okay</Badge>
                      </div>
                      <p className="text-[#8B5A3C] text-sm mb-2">
                        "Work was stressful again, but I tried to take breaks like we discussed. Still feeling
                        overwhelmed with the project deadline approaching. Didn't sleep well last night - kept thinking
                        about all the things I need to do."
                      </p>
                      <div className="text-xs text-[#8B5A3C]">
                        <strong>AI Analysis:</strong> Work stress, sleep disruption, some positive coping attempts
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="progress" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-[#D4B896]">
                    <CardHeader>
                      <CardTitle className="text-[#684427]">Mood Trends</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-[#8B5A3C]">Overall Mood Score</span>
                            <span className="text-[#684427] font-medium">7.2/10</span>
                          </div>
                          <div className="w-full bg-[#D4B896] rounded-full h-3">
                            <div className="bg-green-500 h-3 rounded-full" style={{ width: "72%" }}></div>
                          </div>
                          <div className="text-xs text-green-600 mt-1">↑ 15% from last month</div>
                        </div>

                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-[#8B5A3C]">Anxiety Levels</span>
                            <span className="text-[#684427] font-medium">3.1/10</span>
                          </div>
                          <div className="w-full bg-[#D4B896] rounded-full h-3">
                            <div className="bg-yellow-500 h-3 rounded-full" style={{ width: "31%" }}></div>
                          </div>
                          <div className="text-xs text-green-600 mt-1">↓ 40% from last month</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-[#D4B896]">
                    <CardHeader>
                      <CardTitle className="text-[#684427]">Engagement Metrics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-[#8B5A3C]">Journal Consistency</span>
                            <span className="text-[#684427] font-medium">85%</span>
                          </div>
                          <div className="w-full bg-[#D4B896] rounded-full h-3">
                            <div className="bg-[#684427] h-3 rounded-full" style={{ width: "85%" }}></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-[#8B5A3C]">Coping Strategy Usage</span>
                            <span className="text-[#684427] font-medium">92%</span>
                          </div>
                          <div className="w-full bg-[#D4B896] rounded-full h-3">
                            <div className="bg-green-600 h-3 rounded-full" style={{ width: "92%" }}></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="session" className="space-y-6">
                <Card className="border-[#D4B896]">
                  <CardHeader>
                    <CardTitle className="flex items-center text-[#684427]">
                      <Calendar className="mr-2 h-5 w-5" />
                      Next Session Preparation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg bg-[#F5F0E8] border border-[#D4B896]">
                        <h4 className="font-medium text-[#684427] mb-3">Suggested Discussion Points</h4>
                        <ul className="space-y-2 text-[#8B5A3C]">
                          <li className="flex items-start">
                            <span className="w-2 h-2 rounded-full bg-[#684427] mt-2 mr-3"></span>
                            Celebrate success with breathing technique during presentation
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 rounded-full bg-[#684427] mt-2 mr-3"></span>
                            Address recurring sleep difficulties and work stress
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 rounded-full bg-[#684427] mt-2 mr-3"></span>
                            Explore additional mindfulness techniques
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 rounded-full bg-[#684427] mt-2 mr-3"></span>
                            Review and adjust current coping strategies
                          </li>
                        </ul>
                      </div>

                      <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                        <h4 className="font-medium text-blue-900 mb-3">Key Insights Summary</h4>
                        <p className="text-blue-700 text-sm">
                          Client shows significant improvement in anxiety management and self-efficacy. Breathing
                          techniques are proving effective. Main areas for continued focus: sleep hygiene and workplace
                          stress management.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
