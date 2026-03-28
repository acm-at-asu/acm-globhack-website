"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, Users, Bell, Hash } from "lucide-react"

export function DiscordSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Liquid glass background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-[rgb(12,12,24)]" />
      
      {/* Floating orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#5865F2]/15 blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[100px]" />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full bg-pink-500/10 blur-[80px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animated-border rounded-3xl">
          <div className="glass-panel rounded-3xl p-10 md:p-16 text-center">
            {/* Discord icon with liquid glass effect */}
            <div className="relative w-24 h-24 mx-auto mb-8">
              <div className="absolute inset-0 rounded-3xl bg-[#5865F2]/30 blur-xl animate-pulse" />
              <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-[#5865F2] to-[#7289DA] flex items-center justify-center shadow-[0_8px_32px_rgba(88,101,242,0.4)]">
                <svg className="h-12 w-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                </svg>
              </div>
            </div>

            {/* Content */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Join Our Community
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Connect with fellow hackers, find teammates, get help from mentors, and stay updated 
              on all things Globehacks. Our Discord is the central hub for the hackathon community.
            </p>

            {/* Features with liquid glass cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { icon: Users, label: "Find Teams", gradient: "from-[#5865F2] to-[#7289DA]", glow: "rgba(88, 101, 242, 0.3)" },
                { icon: MessageCircle, label: "Get Support", gradient: "from-cyan-500 to-teal-500", glow: "rgba(34, 211, 238, 0.3)" },
                { icon: Bell, label: "Live Updates", gradient: "from-amber-500 to-yellow-500", glow: "rgba(250, 204, 21, 0.3)" },
                { icon: Hash, label: "Tech Channels", gradient: "from-pink-500 to-rose-500", glow: "rgba(236, 72, 153, 0.3)" },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="glass-card glass-card-hover rounded-2xl p-5 flex flex-col items-center gap-3 transition-all duration-300 group"
                >
                  <div 
                    className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${item.gradient} transition-transform duration-300 group-hover:scale-110`}
                    style={{ boxShadow: `0 8px 24px ${item.glow}` }}
                  >
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">{item.label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link 
              href="https://discord.gg/PA3XaxjxVH" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#5865F2] to-[#7289DA] hover:from-[#4752C4] hover:to-[#5865F2] text-white text-lg px-10 py-7 rounded-2xl shadow-[0_8px_32px_rgba(88,101,242,0.4)] hover:shadow-[0_12px_48px_rgba(88,101,242,0.5)] transition-all duration-300 hover:-translate-y-1"
              >
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                </svg>
                Join Discord Server
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
