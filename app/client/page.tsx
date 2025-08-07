"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Brain, BookOpen, TrendingUp, Sparkles, Calendar, Heart, Smile, Frown, Meh } from "lucide-react"
import Link from "next/link"

const aiInsights = [
  {
    type: "emotion",
    title: "Emotional Pattern Detected",
    content:
      "You've mentioned feeling anxious about work 3 times this week. Consider discussing stress management techniques in your next session.",
    sentiment: "concern",
  },
  {
    type: "progress",
    title: "Positive Trend",
    content: "Your self-reflection entries show increased emotional awareness compared to last month. Great progress!",
    sentiment: "positive",
  },
  {
    type: "suggestion",
    title: "Journaling Prompt",
    content: "Try writing about a moment today when you felt genuinely happy. What contributed to that feeling?",
    sentiment: "neutral",
  },
]

const moodOptions = [
  { icon: Smile, label: "Great", color: "text-green-600" },
  { icon: Meh, label: "Okay", color: "text-yellow-600" },
  { icon: Frown, label: "Difficult", color: "text-red-600" },
]

export default function ClientDashboard() {
  const [journalEntry, setJournalEntry] = useState("")
  const [selectedMood, setSelectedMood] = useState<string | null>(null)

  const handleSaveEntry = () => {
    // In a real app, this would save to a database
    console.log("Saving entry:", { journalEntry, mood: selectedMood })
    setJournalEntry("")
    setSelectedMood(null)
  }

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
            <span className="text-[#8B5A3C]">Welcome back, Sarah</span>
            <Button variant="ghost" className="text-[#8B5A3C]">
              Settings
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Journaling Area */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-[#D4B896]">
              <CardHeader>
                <CardTitle className="flex items-center text-[#684427]">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Today's Journal Entry
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-[#684427] mb-2 block">How are you feeling today?</label>
                  <div className="flex space-x-4">
                    {moodOptions.map((mood) => (
                      <Button
                        key={mood.label}
                        variant={selectedMood === mood.label ? "default" : "outline"}
                        className={`flex items-center space-x-2 ${
                          selectedMood === mood.label
                            ? "bg-[#684427] text-white"
                            : "border-[#D4B896] text-[#8B5A3C] hover:bg-[#F5F0E8]"
                        }`}
                        onClick={() => setSelectedMood(mood.label)}
                      >
                        <mood.icon className={`h-4 w-4 ${mood.color}`} />
                        <span>{mood.label}</span>
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-[#684427] mb-2 block">What's on your mind?</label>
                  <Textarea
                    placeholder="Share your thoughts, feelings, or experiences from today. The AI will help provide insights and suggestions..."
                    value={journalEntry}
                    onChange={(e) => setJournalEntry(e.target.value)}
                    className="min-h-[200px] border-[#D4B896] focus:border-[#8B5A3C]"
                  />
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-sm text-[#8B5A3C]">{journalEntry.length} characters</div>
                  <Button
                    onClick={handleSaveEntry}
                    className="bg-[#684427] hover:bg-[#684427] text-white"
                    disabled={!journalEntry.trim() || !selectedMood}
                  >
                    Save Entry
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Entries */}
            <Card className="border-[#D4B896]">
              <CardHeader>
                <CardTitle className="flex items-center text-[#684427]">
                  <Calendar className="mr-2 h-5 w-5" />
                  Recent Entries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-[#8B5A3C] pl-4 py-2">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-[#684427]">Yesterday</span>
                      <Badge variant="outline" className="border-green-300 text-green-700">
                        Great
                      </Badge>
                    </div>
                    <p className="text-[#8B5A3C] text-sm">
                      Had a really productive therapy session today. We talked about my anxiety triggers and I feel like
                      I have some concrete strategies to try...
                    </p>
                  </div>

                  <div className="border-l-4 border-[#8B5A3C] pl-4 py-2">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-[#684427]">2 days ago</span>
                      <Badge variant="outline" className="border-yellow-300 text-yellow-700">
                        Okay
                      </Badge>
                    </div>
                    <p className="text-[#8B5A3C] text-sm">
                      Work was stressful again. I noticed I was holding tension in my shoulders. Tried the breathing
                      exercise Dr. Smith taught me...
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AI Insights Sidebar */}
          <div className="space-y-6">
            <Card className="border-[#D4B896]">
              <CardHeader>
                <CardTitle className="flex items-center text-[#684427]">
                  <Sparkles className="mr-2 h-5 w-5" />
                  AI Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {aiInsights.map((insight, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg bg-gradient-to-r from-[#F5F0E8] to-[#EDE4D3] border border-[#D4B896]"
                  >
                    <h4 className="font-medium text-[#684427] mb-2">{insight.title}</h4>
                    <p className="text-sm text-[#8B5A3C]">{insight.content}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-[#D4B896]">
              <CardHeader>
                <CardTitle className="flex items-center text-[#684427]">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Progress Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[#8B5A3C]">Journal Streak</span>
                      <span className="text-[#684427] font-medium">7 days</span>
                    </div>
                    <div className="w-full bg-[#D4B896] rounded-full h-2">
                      <div className="bg-[#684427] h-2 rounded-full" style={{ width: "70%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[#8B5A3C]">Emotional Awareness</span>
                      <span className="text-[#684427] font-medium">85%</span>
                    </div>
                    <div className="w-full bg-[#D4B896] rounded-full h-2">
                      <div className="bg-[#684427] h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[#8B5A3C]">Coping Strategies</span>
                      <span className="text-[#684427] font-medium">92%</span>
                    </div>
                    <div className="w-full bg-[#D4B896] rounded-full h-2">
                      <div className="bg-[#684427] h-2 rounded-full" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#D4B896]">
              <CardHeader>
                <CardTitle className="flex items-center text-[#684427]">
                  <Heart className="mr-2 h-5 w-5" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start border-[#D4B896] text-[#8B5A3C] hover:bg-[#F5F0E8] bg-transparent"
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  Get Writing Prompt
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-[#D4B896] text-[#8B5A3C] hover:bg-[#F5F0E8] bg-transparent"
                >
                  <TrendingUp className="mr-2 h-4 w-4" />
                  View Mood Trends
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-[#D4B896] text-[#8B5A3C] hover:bg-[#F5F0E8] bg-transparent"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Session
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
