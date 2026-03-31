import {
  Brain,
  Heart,
  Palette,
  Lightbulb,
  GraduationCap,
  Lock,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const tracks = [
  {
    id: "ai-ml",
    title: "Secret Track",
    icon: Lock,
    gradient: "from-cyan-500 to-blue-500",
    glowColor: "rgba(34, 211, 238, 0.3)",
    textColor: "text-cyan-400",
    badge: "TBA",
    description: "--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
    examples: [
      "Natural language processing tools",
      "Computer vision applications",
      "Predictive analytics dashboards",
      "AI-powered automation",
    ],
    revealed: false,
  },
  {
    id: "social-impact",
    title: "Secret Track",
    icon: Lock,
    gradient: "from-pink-500 to-rose-500",
    glowColor: "rgba(236, 72, 153, 0.3)",
    textColor: "text-pink-400",
    badge: "TBA",
    description: "--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
    examples: [
      "Accessibility tools",
      "Environmental sustainability apps",
      "Community connection platforms",
      "Health and wellness solutions",
    ],
    revealed: false,
  },
  {
    id: "ui-ux",
    title: "Secret Track",
    icon: Lock,
    gradient: "from-amber-500 to-yellow-500",
    glowColor: "rgba(250, 204, 21, 0.3)",
    textColor: "text-amber-400",
    badge: "TBA",
    description: "--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
    examples: [
      "Beautifully crafted interfaces",
      "Intuitive user flows",
      "Accessible design patterns",
      "Micro-interactions and animations",
    ],
    revealed: false,
  },
  {
    id: "innovation",
    title: "Secret Track",
    icon: Lock,
    gradient: "from-blue-500 to-indigo-500",
    glowColor: "rgba(59, 130, 246, 0.3)",
    textColor: "text-blue-400",
    badge: "TBA",
    description: "--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
    examples: [
      "Unique technology combinations",
      "Novel problem-solving approaches",
      "Unconventional use cases",
      "Creative technical implementations",
    ],
    revealed: false,
  },
  {
    id: "first-time",
    title: "Secret Track",
    icon: Lock,
    gradient: "from-teal-500 to-cyan-500",
    glowColor: "rgba(20, 184, 166, 0.3)",
    textColor: "text-teal-400",
    badge: "TBA",
    description: "--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
    examples: [
      "Any project from first-time teams",
      "Learning and growth emphasized",
      "Mentorship encouraged",
      "All skill levels welcome",
    ],
    revealed: false,
  },
  {
    id: "secret",
    title: "Secret Track",
    icon: Lock,
    gradient: "from-purple-400 to-purple-900",
    glowColor: "rgba(107, 114, 128, 0.2)",
    textColor: "text-gray-400",
    badge: "TBA",
    description: "--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
    examples: ["???", "???", "???", "???"],
    revealed: false,
  },
  {
    id: "new track",
    title: "Secret Track",
    icon: Lock,
    gradient: "from-gray-400 to-gray-900",
    glowColor: "rgba(107, 114, 128, 0.2)",
    textColor: "text-gray-400",
    badge: "TBA",
    description: "--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
    examples: ["???", "???", "???", "???"],
    revealed: false,
  },
  {
    id: "new track 2",
    title: "Secret Track",
    icon: Lock,
    gradient: "from-teal-400 to-green-700",
    glowColor: "rgba(107, 114, 128, 0.2)",
    textColor: "text-gray-400",
    badge: "TBA",
    description: "--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
    examples: ["???", "???", "???", "???"],
    revealed: false,
  },
]

export function TracksPageMobile() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero */}
      <section className="pt-24 pb-8 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[rgb(8,8,16)]" />
        <div className="absolute top-0 left-0 w-[200px] h-[200px] rounded-full bg-blue-500/5 blur-[70px] pointer-events-none" />
        <div className="absolute top-10 right-0 w-[150px] h-[150px] rounded-full bg-cyan-500/5 blur-[50px] pointer-events-none" />

        <div className="relative z-10 text-center">
          <p className="text-xs font-medium text-blue-400 uppercase tracking-widest mb-2">
            Choose Your Challenge
          </p>
          <h1 className="text-2xl font-bold mb-3">
            <span className="text-foreground">Competition </span>
            <span className="text-gradient">Tracks</span>
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Choose a track that matches your interests. One project can compete in multiple tracks.
          </p>
        </div>
      </section>

      {/* Tracks list */}
      <section className="px-4 pb-8">
        <div className="flex flex-col gap-3">
          {tracks.map((track) => (
            <div
              key={track.id}
              className={`relative glass-card rounded-xl p-4 overflow-hidden ${
                !track.revealed ? "opacity-70" : ""
              }`}
            >
              {/* Badge */}
              <div
                className={`absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${track.textColor}`}
                style={{
                  background: track.revealed
                    ? `linear-gradient(135deg, ${track.glowColor}, transparent)`
                    : undefined,
                }}
              >
                {track.badge}
              </div>

              <div className="flex items-center gap-3 mb-2">
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br ${track.gradient}`}
                  style={{ boxShadow: `0 4px 16px ${track.glowColor}` }}
                >
                  <track.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-base font-semibold text-foreground pr-12">{track.title}</h3>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed">
                {track.revealed ? track.description : "Revealed on April 6th"}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      {/*<section className="px-4 pb-12">
        <div className="glass-panel rounded-2xl p-5 border border-white/5">
          <h2 className="text-base font-bold text-foreground mb-4 text-center">
            How Track Judging Works
          </h2>
          <div className="flex flex-col gap-3">
            {[
              {
                step: "1",
                title: "Build Your Project",
                desc: "One project can qualify for multiple tracks.",
                gradient: "from-cyan-500 to-teal-500",
              },
              {
                step: "2",
                title: "Submit & Tag",
                desc: "Select all applicable tracks on Devpost.",
                gradient: "from-blue-500 to-indigo-500",
              },
              {
                step: "3",
                title: "Get Judged",
                desc: "Judges evaluate per track with separate criteria.",
                gradient: "from-amber-500 to-yellow-500",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br ${item.gradient}`}
                >
                  <span className="text-sm font-bold text-white">{item.step}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/register" className="block mt-5">
            <Button size="sm" className="glass-button text-white rounded-xl w-full py-5 group">
              Register to Compete
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>*/}
    </main>
  )
}
