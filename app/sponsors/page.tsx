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
          <div className="orb orb-blue w-[250px] h-[250px] bottom-10 left-1/2" />
          <div className="grid-overlay" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-amber-400 uppercase tracking-widest mb-4">
            Our Partners
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-foreground">Our </span>
            <span className="text-amber-400 text-glow-gold">Sponsors</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            <span className="font-zen-dots text-cyan-400">Globehacks</span> 2026 is made possible by the generous support of our sponsors.
            These industry leaders share our vision of empowering the next generation of innovators.
          </p>
        </div>
      </section>

      <SponsorsGrid />

      {/* Become a sponsor */}
      <section className="py-20 relative">
        <div className="orb orb-red w-[300px] h-[300px] top-1/2 -right-32 opacity-20" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animated-border rounded-3xl">
            <div className="glass-panel rounded-3xl p-10 md:p-14">
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
                  { icon: Users, title: "150+", subtitle: "Talented Hackers", gradient: "from-cyan-500 to-teal-500", glowColor: "rgba(34, 211, 238, 0.3)" },
                  { icon: Clock, title: "24hrs", subtitle: "Of Innovation", gradient: "from-blue-500 to-indigo-500", glowColor: "rgba(59, 130, 246, 0.3)" },
                  { icon: Share2, title: "1000+", subtitle: "Social Reach", gradient: "from-amber-500 to-yellow-500", glowColor: "rgba(250, 204, 21, 0.3)" },
                ].map((stat, index) => (
                  <div 
                    key={index} 
                    className="glass-card glass-card-hover p-6 rounded-2xl text-center group"
                  >
                    <div 
                      className={`w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center bg-gradient-to-br ${stat.gradient} group-hover:scale-110 transition-transform duration-300`}
                      style={{ boxShadow: `0 8px 24px ${stat.glowColor}` }}
                    >
                      <stat.icon className="h-7 w-7 text-white" />
                    </div>
                    <div 
                      className={`text-3xl font-bold mb-1 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
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
                    className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-semibold px-10 py-7 rounded-2xl shadow-[0_8px_32px_rgba(250,204,21,0.4)] hover:shadow-[0_12px_48px_rgba(250,204,21,0.5)] transition-all duration-300 hover:-translate-y-1"
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
