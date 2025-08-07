"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Users, BookOpen, TrendingUp, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

const facts = [
  "80% of therapy patients forget or skip key details when recalling events between sessions",
  "Over 40% of session time in traditional therapy is spent 'catching up' rather than solving problems",
  "Real-time insights improve treatment outcomes significantly for 65% of therapists",
]

const TypingEffect = () => {
  const [currentFactIndex, setCurrentFactIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const currentFact = facts[currentFactIndex]
    let currentIndex = 0

    if (isTyping) {
      const typingInterval = setInterval(() => {
        if (currentIndex <= currentFact.length) {
          setDisplayedText(currentFact.slice(0, currentIndex))
          currentIndex++
        } else {
          setIsTyping(false)
          setTimeout(() => {
            setIsTyping(true)
            setCurrentFactIndex((prev) => (prev + 1) % facts.length)
          }, 3000) // Wait 3 seconds before starting next fact
          clearInterval(typingInterval)
        }
      }, 50) // Typing speed

      return () => clearInterval(typingInterval)
    }
  }, [currentFactIndex, isTyping])

  return (
    <div className="min-h-[300px] flex items-center justify-center">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-light text-[#684427] mb-8 tracking-wide">
          The Challenge in Traditional Therapy
        </h2>
        <div className="relative">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#684427]/10 shadow-lg min-h-[200px] flex items-center justify-center p-8 md:p-12">
            <div className="relative">
              <p className="text-xl md:text-2xl font-light text-[#684427] leading-relaxed max-w-4xl">
                {displayedText}
                <span className="animate-pulse text-[#684427]">|</span>
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-8 space-x-3">
            {facts.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  index === currentFactIndex ? "bg-[#684427] w-8" : "bg-[#684427]/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FEFCF8] via-[#F8F4EE] to-[#F0E8D8]">
      {/* Header */}
      <header className="border-b border-[#684427]/10 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#684427] to-[#8B5A3C] rounded-xl flex items-center justify-center">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-light text-[#684427] tracking-wide">Sonda</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-[#684427]/80 hover:text-[#684427] font-light transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-[#684427]/80 hover:text-[#684427] font-light transition-colors">
              How It Works
            </Link>
            <Link href="#pricing" className="text-[#684427]/80 hover:text-[#684427] font-light transition-colors">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-[#684427] hover:bg-[#684427]/5 font-light">
              Sign In
            </Button>
            <Button className="bg-[#684427] hover:bg-[#8B5A3C] text-white font-light px-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-[#684427] mb-8 tracking-tight leading-tight">
              AI-Powered Journaling for
              <br />
              <span className="bg-gradient-to-r from-[#684427] to-[#8B5A3C] bg-clip-text text-transparent">
                Better Therapy
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#684427]/80 mb-12 leading-relaxed font-light max-w-3xl mx-auto">
              Bridge the gap between therapy sessions with intelligent journaling that helps clients reflect and
              provides therapists with actionable insights for more effective treatment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/client">
                <Button
                  size="lg"
                  className="bg-[#684427] hover:bg-[#8B5A3C] text-white px-8 py-4 rounded-xl font-light text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <Users className="mr-3 h-5 w-5" />
                  For Clients
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/therapist">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#684427]/30 text-[#684427] hover:bg-[#684427]/5 px-8 py-4 rounded-xl font-light text-lg bg-white/60 backdrop-blur-sm"
                >
                  <Brain className="mr-3 h-5 w-5" />
                  For Therapists
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Typing Facts Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <TypingEffect />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center text-[#684427] mb-20 tracking-wide">
            How Sonda Transforms Therapy
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Client Features */}
            <div className="space-y-12">
              <h3 className="text-2xl font-light text-[#684427] mb-8 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-[#684427] to-[#8B5A3C] rounded-lg flex items-center justify-center mr-4">
                  <Users className="h-4 w-4 text-white" />
                </div>
                For Clients
              </h3>

              <Card className="border-[#684427]/10 bg-white/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all rounded-2xl">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#684427] to-[#8B5A3C] rounded-xl flex items-center justify-center flex-shrink-0">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-light text-[#684427] mb-3">AI-Guided Journaling</h4>
                      <p className="text-[#684427]/70 font-light leading-relaxed">
                        Intelligent prompts help you reflect on emotions, experiences, and personal challenges between
                        therapy sessions with personalized guidance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#684427]/10 bg-white/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all rounded-2xl">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#684427] to-[#8B5A3C] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-light text-[#684427] mb-3">Emotion Analysis</h4>
                      <p className="text-[#684427]/70 font-light leading-relaxed">
                        Advanced sentiment analysis provides insights into your emotional patterns and helps track your
                        mental well-being over time.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#684427]/10 bg-white/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all rounded-2xl">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#684427] to-[#8B5A3C] rounded-xl flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-light text-[#684427] mb-3">Progress Tracking</h4>
                      <p className="text-[#684427]/70 font-light leading-relaxed">
                        Visualize your emotional journey and celebrate milestones in your therapeutic progress with
                        detailed analytics.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Therapist Features */}
            <div className="space-y-12">
              <h3 className="text-2xl font-light text-[#684427] mb-8 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-[#684427] to-[#8B5A3C] rounded-lg flex items-center justify-center mr-4">
                  <Brain className="h-4 w-4 text-white" />
                </div>
                For Therapists
              </h3>

              <Card className="border-[#684427]/10 bg-white/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all rounded-2xl">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#684427] to-[#8B5A3C] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-light text-[#684427] mb-3">Patient Insights</h4>
                      <p className="text-[#684427]/70 font-light leading-relaxed">
                        Access comprehensive analysis of client journal entries, emotional trends, and behavioral
                        patterns to inform your treatment approach.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#684427]/10 bg-white/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all rounded-2xl">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#684427] to-[#8B5A3C] rounded-xl flex items-center justify-center flex-shrink-0">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-light text-[#684427] mb-3">Session Summaries</h4>
                      <p className="text-[#684427]/70 font-light leading-relaxed">
                        AI-generated summaries of client progress between sessions help you focus on problem-solving
                        rather than catching up.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#684427]/10 bg-white/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all rounded-2xl">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#684427] to-[#8B5A3C] rounded-xl flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-light text-[#684427] mb-3">Treatment Optimization</h4>
                      <p className="text-[#684427]/70 font-light leading-relaxed">
                        Data-driven insights help you adjust treatment plans and identify the most effective therapeutic
                        interventions for each client.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-32 px-6 bg-gradient-to-br from-white/40 to-[#F8F4EE]/60">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-light text-[#684427] mb-4 tracking-wide">Pricing</h2>
            <p className="text-lg text-[#684427]/70 font-light">Exclusive Offer for Early Clinicians</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Free Tier */}
            <Card className="border-[#684427]/10 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all rounded-2xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-light text-[#684427] mb-3">Free</h3>
                  <p className="text-[#684427]/70 font-light">$0 (14-day trial)</p>
                </div>
                <ul className="space-y-4 text-sm text-[#684427]/80 font-light">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#684427] mt-2 mr-3 flex-shrink-0"></div>
                    14-day free trial with full access
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#684427] mt-2 mr-3 flex-shrink-0"></div>
                    Basic AI session summaries (limited)
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#684427] mt-2 mr-3 flex-shrink-0"></div>
                    Basic progress tracking
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#684427] mt-2 mr-3 flex-shrink-0"></div>
                    Email support only
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#684427] mt-2 mr-3 flex-shrink-0"></div>
                    Perfect for solo practitioners
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Professional Tier */}
            <Card className="border-[#684427] bg-gradient-to-br from-[#684427] to-[#8B5A3C] shadow-xl hover:shadow-2xl transition-all rounded-2xl relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-xs text-white font-light">Popular</span>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-light text-white mb-3">Professional</h3>
                  <p className="text-white/90 font-light">
                    $299/mo <span className="line-through text-white/60">$399/mo</span>
                  </p>
                </div>
                <ul className="space-y-4 text-sm text-white/90 font-light">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 mr-3 flex-shrink-0"></div>
                    Full AI-powered session summaries
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 mr-3 flex-shrink-0"></div>
                    AI pattern detection & alerts
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 mr-3 flex-shrink-0"></div>
                    Real-time graphs and metrics
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 mr-3 flex-shrink-0"></div>
                    Up to 3 psychologists, unlimited clients
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 mr-3 flex-shrink-0"></div>
                    24/7 support for assistance
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Clinic Tier */}
            <Card className="border-[#684427]/10 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all rounded-2xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-light text-[#684427] mb-3">Clinic</h3>
                  <p className="text-[#684427]/70 font-light">
                    $999/mo <span className="line-through text-[#684427]/50">$1299/mo</span>
                  </p>
                </div>
                <ul className="space-y-4 text-sm text-[#684427]/80 font-light">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#684427] mt-2 mr-3 flex-shrink-0"></div>
                    Advanced AI alerts and detection
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#684427] mt-2 mr-3 flex-shrink-0"></div>
                    Real-time, team-wide metrics
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#684427] mt-2 mr-3 flex-shrink-0"></div>
                    Customizable progress reports
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#684427] mt-2 mr-3 flex-shrink-0"></div>
                    Up to 10 psychologists, unlimited clients
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#684427] mt-2 mr-3 flex-shrink-0"></div>
                    Priority support for faster help
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Enterprise Tier */}
            <Card className="border-[#684427]/10 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all rounded-2xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-light text-[#684427] mb-3">Enterprise</h3>
                  <p className="text-[#684427]/70 font-light">Custom Pricing</p>
                </div>
                <ul className="space-y-4 text-sm text-[#684427]/80 font-light">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#684427] mt-2 mr-3 flex-shrink-0"></div>
                    Custom AI session summaries
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#684427] mt-2 mr-3 flex-shrink-0"></div>
                    Enterprise-wide pattern detection
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#684427] mt-2 mr-3 flex-shrink-0"></div>
                    Comprehensive progress reports
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#684427] mt-2 mr-3 flex-shrink-0"></div>
                    Unlimited psychologists & clients
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#684427] mt-2 mr-3 flex-shrink-0"></div>
                    Dedicated success manager
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-6 bg-gradient-to-br from-[#684427] to-[#8B5A3C]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-8 tracking-wide">
            Ready to Transform Your Therapy Experience?
          </h2>
          <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Join thousands of clients and therapists who are already experiencing more effective and connected
            therapeutic relationships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/client">
              <Button
                size="lg"
                className="bg-white text-[#684427] hover:bg-white/90 px-8 py-4 rounded-xl font-light text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Start Journaling Today
              </Button>
            </Link>
            <Link href="/therapist">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-light text-lg bg-transparent backdrop-blur-sm"
              >
                Learn More for Therapists
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#684427] text-white/90 py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-light">Sonda</span>
              </div>
              <p className="text-white/70 font-light leading-relaxed">
                AI-powered journaling for better therapy outcomes.
              </p>
            </div>
            <div>
              <h4 className="font-light mb-6 text-white">Product</h4>
              <ul className="space-y-3 text-white/70 font-light">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-light mb-6 text-white">Support</h4>
              <ul className="space-y-3 text-white/70 font-light">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-light mb-6 text-white">Company</h4>
              <ul className="space-y-3 text-white/70 font-light">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60 font-light">
            <p>&copy; 2024 Sonda. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
