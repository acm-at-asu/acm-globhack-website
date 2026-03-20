import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { 
  Brain, 
  Heart, 
  Palette, 
  Lightbulb, 
  GraduationCap,
  Lock,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Tracks | Globehacks 2026",
  description: "Explore the competition tracks at Globehacks 2026.",
}

const tracks = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    icon: Brain,
    color: "cyan",
    prize: "$500",
    description: "Build intelligent solutions powered by artificial intelligence and machine learning. Create apps that learn, predict, and automate using cutting-edge AI technologies.",
    examples: [
      "Natural language processing tools",
      "Computer vision applications",
      "Predictive analytics dashboards",
      "AI-powered automation",
    ],
    revealed: true,
  },
  {
    id: "social-impact",
    title: "Social Impact",
    icon: Heart,
    color: "magenta",
    prize: "$500",
    description: "Create technology that makes a positive difference in communities and addresses real-world social challenges. Focus on accessibility, sustainability, or community building.",
    examples: [
      "Accessibility tools",
      "Environmental sustainability apps",
      "Community connection platforms",
      "Health and wellness solutions",
    ],
    revealed: true,
  },
  {
    id: "ui-ux",
    title: "Best UI/UX Design",
    icon: Palette,
    color: "gold",
    prize: "$500",
    description: "Showcase exceptional user interface design and user experience. Demonstrate mastery of design principles, accessibility, and creating delightful user interactions.",
    examples: [
      "Beautifully crafted interfaces",
      "Intuitive user flows",
      "Accessible design patterns",
      "Micro-interactions and animations",
    ],
    revealed: true,
  },
  {
    id: "innovation",
    title: "Most Innovative",
    icon: Lightbulb,
    color: "blue",
    prize: "$500",
    description: "Think outside the box and build something truly unique. This track rewards creative problem-solving and novel approaches to challenges.",
    examples: [
      "Unique technology combinations",
      "Novel problem-solving approaches",
      "Unconventional use cases",
      "Creative technical implementations",
    ],
    revealed: true,
  },
  {
    id: "first-time",
    title: "Best First-Time Hackers",
    icon: GraduationCap,
    color: "cyan",
    prize: "$500",
    description: "New to hackathons? This track celebrates teams where all members are participating in their first hackathon. Show us what fresh perspectives can achieve!",
    examples: [
      "Any project from first-time teams",
      "Learning and growth emphasized",
      "Mentorship encouraged",
      "All skill levels welcome",
    ],
    revealed: true,
  },
  {
    id: "secret",
    title: "Secret Track",
    icon: Lock,
    color: "muted-foreground",
    prize: "???",
    description: "A mystery track that will be revealed during the opening ceremony. Stay tuned for an exciting surprise challenge!",
    examples: ["???", "???", "???", "???"],
    revealed: false,
  },
]

export default function TracksPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 immersive-bg">
          <div className="absolute inset-0 noise-overlay" />
          <div className="orb orb-blue w-[400px] h-[400px] top-20 -left-20" />
          <div className="orb orb-cyan w-[300px] h-[300px] top-40 -right-20" />
          <div className="grid-overlay" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-[var(--blue)] uppercase tracking-widest mb-4">
            Choose Your Challenge
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-foreground">Competition </span>
            <span className="text-gradient">Tracks</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Choose a track that matches your interests and skills. Each track has its own 
            $500 prize, and you can compete in multiple tracks with a single project!
          </p>
        </div>
      </section>

      {/* Tracks grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks.map((track) => (
              <div 
                key={track.id}
                className={`group relative glass-card rounded-2xl p-8 transition-all duration-500 ${
                  track.revealed 
                    ? "glass-card-hover" 
                    : "border-dashed opacity-70"
                }`}
              >
                {/* Prize badge */}
                <div 
                  className="absolute top-6 right-6 px-4 py-1.5 rounded-full text-xs font-bold"
                  style={{ 
                    background: track.revealed 
                      ? `linear-gradient(135deg, color-mix(in srgb, var(--${track.color}) 20%, transparent), transparent)`
                      : "var(--secondary)",
                    color: track.revealed ? `var(--${track.color})` : "var(--muted-foreground)",
                    border: track.revealed ? `1px solid color-mix(in srgb, var(--${track.color}) 30%, transparent)` : "1px solid var(--border)",
                  }}
                >
                  {track.prize}
                </div>

                {/* Icon */}
                <div 
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
                    !track.revealed && "animate-pulse"
                  }`}
                  style={{ 
                    background: `linear-gradient(135deg, color-mix(in srgb, var(--${track.color}) 20%, transparent), transparent)`,
                    border: `1px solid color-mix(in srgb, var(--${track.color}) 30%, transparent)`,
                  }}
                >
                  <track.icon 
                    className="h-8 w-8" 
                    style={{ color: `var(--${track.color})` }}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {track.title}
                </h3>

                {/* Description */}
                <p className={`text-sm leading-relaxed mb-6 ${
                  track.revealed ? "text-muted-foreground" : "text-muted-foreground/50 italic"
                }`}>
                  {track.description}
                </p>

                {/* Examples */}
                {track.revealed && (
                  <div className="space-y-3">
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wider">
                      Example Projects:
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      {track.examples.map((example, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span 
                            className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ backgroundColor: `var(--${track.color})` }}
                          />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Unrevealed overlay */}
                {!track.revealed && (
                  <div className="absolute inset-0 bg-background/60 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-4">
                        <Lock className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <p className="text-sm text-muted-foreground font-medium">
                        Revealed at Opening Ceremony
                      </p>
                    </div>
                  </div>
                )}

                {/* Corner accent on hover */}
                {track.revealed && (
                  <div 
                    className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at top right, color-mix(in srgb, var(--${track.color}) 15%, transparent), transparent 70%)`,
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0a0a12] to-background" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              How Track Judging Works
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                step: "1",
                title: "Build Your Project",
                description: "Create your project during the hackathon. One project can qualify for multiple tracks.",
                color: "cyan",
              },
              {
                step: "2",
                title: "Submit & Tag",
                description: "When submitting on Devpost, select all tracks your project applies to.",
                color: "blue",
              },
              {
                step: "3",
                title: "Get Judged",
                description: "Judges evaluate your project for each track separately based on track-specific criteria.",
                color: "gold",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  style={{ 
                    background: `linear-gradient(135deg, color-mix(in srgb, var(--${item.color}) 20%, transparent), transparent)`,
                    border: `1px solid color-mix(in srgb, var(--${item.color}) 30%, transparent)`,
                  }}
                >
                  <span 
                    className="text-2xl font-bold"
                    style={{ color: `var(--${item.color})` }}
                  >
                    {item.step}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/sign-up">
              <Button 
                size="lg" 
                className="bg-[var(--blue)] hover:bg-[var(--blue)]/90 text-white px-10 py-7 rounded-xl shadow-[0_0_30px_rgba(2,125,194,0.4)] hover:shadow-[0_0_50px_rgba(2,125,194,0.6)] transition-all duration-300 group"
              >
                Register to Compete
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
