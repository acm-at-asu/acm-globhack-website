import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SponsorsGrid } from "@/components/sponsors/sponsors-grid"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mail, Users, Clock, Share2 } from "lucide-react"

export const metadata = {
  title: "Sponsors | Globehacks 2026",
  description: "Meet the amazing companies supporting Globehacks 2026.",
}

export default function SponsorsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 immersive-bg">
          <div className="absolute inset-0 noise-overlay" />
          <div className="orb orb-gold w-[400px] h-[400px] top-20 -left-20" />
          <div className="orb orb-magenta w-[300px] h-[300px] top-40 -right-20" />
          <div className="grid-overlay" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-[var(--gold)] uppercase tracking-widest mb-4">
            Our Partners
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-foreground">Our </span>
            <span className="text-[var(--gold)] text-glow-gold">Sponsors</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Globehacks 2026 is made possible by the generous support of our sponsors.
            These industry leaders share our vision of empowering the next generation of innovators.
          </p>
        </div>
      </section>

      <SponsorsGrid />

      {/* Become a sponsor */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animated-border rounded-2xl">
            <div className="glass-card rounded-2xl p-10 md:p-14">
              <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Become a Sponsor
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Join us in empowering the next generation of tech innovators. Sponsoring Globehacks 2026 
                  gives you direct access to talented developers, designers, and entrepreneurs.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {[
                  { icon: Users, title: "150+", subtitle: "Talented Hackers", color: "cyan" },
                  { icon: Clock, title: "24hrs", subtitle: "Of Innovation", color: "blue" },
                  { icon: Share2, title: "1000+", subtitle: "Social Reach", color: "gold" },
                ].map((stat, index) => (
                  <div 
                    key={index} 
                    className="p-6 rounded-xl text-center"
                    style={{
                      background: `linear-gradient(135deg, color-mix(in srgb, var(--${stat.color}) 10%, transparent), transparent)`,
                      border: `1px solid color-mix(in srgb, var(--${stat.color}) 20%, transparent)`,
                    }}
                  >
                    <stat.icon 
                      className="h-8 w-8 mx-auto mb-3"
                      style={{ color: `var(--${stat.color})` }}
                    />
                    <div 
                      className="text-3xl font-bold mb-1"
                      style={{ color: `var(--${stat.color})` }}
                    >
                      {stat.title}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.subtitle}</div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link href="mailto:sponsors@globehacks.com">
                  <Button 
                    size="lg" 
                    className="bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-black font-semibold px-10 py-7 rounded-xl shadow-[0_0_30px_rgba(254,196,37,0.4)] hover:shadow-[0_0_50px_rgba(254,196,37,0.6)] transition-all duration-300"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Contact Us About Sponsorship
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
