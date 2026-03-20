'use client'

import { SignIn } from '@clerk/nextjs'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-32 pb-20 flex items-center justify-center relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 immersive-bg">
          <div className="absolute inset-0 noise-overlay" />
          <div className="orb orb-cyan w-[400px] h-[400px] -top-20 -left-32" />
          <div className="orb orb-blue w-[300px] h-[300px] bottom-20 -right-20" />
          <div className="grid-overlay" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-md mx-auto">
            {/* Back Link */}
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-[var(--cyan)] transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Welcome Back to <span className="text-[var(--gold)] text-glow-gold">Globehacks</span>
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                Sign in to access your dashboard and manage your registration
              </p>
            </div>

            {/* Clerk Sign In */}
            <div className="animated-border rounded-2xl">
              <div className="glass-card rounded-2xl p-8">
                <SignIn 
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
                  signUpUrl="/sign-up"
                  fallbackRedirectUrl="/"
                />
              </div>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-6">
              New to Globehacks?{' '}
              <Link href="/sign-up" className="text-[var(--cyan)] hover:underline">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
