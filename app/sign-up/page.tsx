'use client'

import { SignUp } from '@clerk/nextjs'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowLeft, Zap, Users, Globe, Trophy } from 'lucide-react'

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-32 pb-20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 immersive-bg">
          <div className="absolute inset-0 noise-overlay" />
          <div className="orb orb-blue w-[500px] h-[500px] -top-20 -left-40" />
          <div className="orb orb-magenta w-[400px] h-[400px] bottom-20 -right-32" />
          <div className="orb orb-cyan w-[300px] h-[300px] top-1/2 left-1/2" />
          <div className="grid-overlay" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Back Link */}
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-[var(--cyan)] transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Info */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                    Join <span className="text-[var(--gold)] text-glow-gold">Globehacks</span> 2026
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Register now to be part of Arizona&apos;s first go-to-market hackathon. 
                    24 hours of innovation, collaboration, and building the future.
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">What you&apos;ll get:</h2>
                  <div className="grid gap-4">
                    {[
                      {
                        icon: Zap,
                        title: "Hands-on Experience",
                        description: "Build real products with cutting-edge technologies",
                        color: "cyan",
                      },
                      {
                        icon: Users,
                        title: "Network & Connect",
                        description: "Meet mentors, sponsors, and fellow hackers",
                        color: "blue",
                      },
                      {
                        icon: Globe,
                        title: "Global Impact",
                        description: "Create solutions for real-world challenges",
                        color: "magenta",
                      },
                      {
                        icon: Trophy,
                        title: "Win Prizes",
                        description: "Compete for $10,000+ in prizes and awards",
                        color: "gold",
                      },
                    ].map((item, index) => (
                      <div 
                        key={index} 
                        className="glass-card glass-card-hover flex items-start gap-4 p-5 rounded-xl transition-all duration-300"
                      >
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{
                            background: `linear-gradient(135deg, color-mix(in srgb, var(--${item.color}) 20%, transparent), transparent)`,
                            border: `1px solid color-mix(in srgb, var(--${item.color}) 30%, transparent)`,
                          }}
                        >
                          <item.icon className="w-6 h-6" style={{ color: `var(--${item.color})` }} />
                        </div>
                        <div>
                          <h3 className="font-medium text-foreground">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Event Info */}
                <div className="glass-card rounded-2xl p-6">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    {[
                      { value: "April 18-19", label: "2026", color: "cyan" },
                      { value: "24 Hours", label: "of Hacking", color: "blue" },
                      { value: "150+", label: "Participants", color: "gold" },
                      { value: "$10K+", label: "in Prizes", color: "magenta" },
                    ].map((stat, index) => (
                      <div key={index}>
                        <p 
                          className="text-2xl font-bold"
                          style={{ color: `var(--${stat.color})` }}
                        >
                          {stat.value}
                        </p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Clerk Sign Up */}
              <div className="lg:sticky lg:top-32">
                <div className="animated-border rounded-2xl">
                  <div className="glass-card rounded-2xl p-8">
                    <SignUp 
                      appearance={{
                        elements: {
                          rootBox: "w-full",
                          card: "bg-transparent shadow-none p-0",
                          headerTitle: "text-foreground text-2xl font-bold",
                          headerSubtitle: "text-muted-foreground",
                          socialButtonsBlockButton: "bg-secondary border-border hover:bg-secondary/80 text-foreground",
                          socialButtonsBlockButtonText: "text-foreground font-medium",
                          dividerLine: "bg-border",
                          dividerText: "text-muted-foreground",
                          formFieldLabel: "text-foreground font-medium",
                          formFieldInput: "bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-[var(--cyan)] focus:ring-[var(--cyan)]",
                          formButtonPrimary: "bg-[var(--blue)] hover:bg-[var(--blue)]/90 text-white font-semibold shadow-[0_0_20px_rgba(2,125,194,0.3)]",
                          footerActionLink: "text-[var(--cyan)] hover:text-[var(--cyan)]/80",
                          identityPreviewText: "text-foreground",
                          identityPreviewEditButton: "text-[var(--cyan)] hover:text-[var(--cyan)]/80",
                          formFieldInputShowPasswordButton: "text-muted-foreground hover:text-foreground",
                          alertText: "text-foreground",
                          formFieldSuccessText: "text-green-500",
                          formFieldErrorText: "text-red-500",
                        },
                        variables: {
                          colorPrimary: "#027DC2",
                          colorText: "#ffffff",
                          colorTextSecondary: "#a1a1aa",
                          colorBackground: "#0c0c10",
                          colorInputBackground: "#12121a",
                          colorInputText: "#ffffff",
                          borderRadius: "0.75rem",
                        }
                      }}
                      signInUrl="/sign-in"
                      fallbackRedirectUrl="/"
                    />
                  </div>
                </div>
                <p className="text-center text-sm text-muted-foreground mt-6">
                  Already registered?{' '}
                  <Link href="/sign-in" className="text-[var(--cyan)] hover:underline">
                    Sign in here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
