import Link from 'next/link'
import { ArrowLeft, ShieldCheck } from 'lucide-react'
import { signOut, withAuth } from '@workos-inc/authkit-nextjs'

import { Footer } from '@/components/footer'
import { Navigation } from '@/components/navigation'
import { WorkOSEntryCard } from '@/components/registration/workos-entry-card'
import { Button } from '@/components/ui/button'
import { isWorkOSConfigured } from '@/lib/workos'

export default async function SignInPage() {
  const auth = isWorkOSConfigured ? await withAuth() : null
  const user = auth?.user ?? null

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 immersive-bg">
          <div className="absolute inset-0 noise-overlay" />
          <div className="orb orb-cyan w-[420px] h-[420px] -top-16 -left-28" />
          <div className="orb orb-blue w-[320px] h-[320px] bottom-12 -right-24" />
          <div className="orb orb-red w-[280px] h-[280px] top-1/2 left-1/3" />
          <div className="grid-overlay" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-cyan-400"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>

            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.36em] text-cyan-400">
                Secure Access
              </p>
              <h1 className="mt-4 text-4xl font-bold text-white md:text-6xl">
                Sign in to your <span className="text-amber-400">Globehacks</span> profile
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Use WorkOS AuthKit to continue with email, Google, or GitHub and return to
                your registration flow.
              </p>
            </div>

            {user ? (
              <div className="mx-auto max-w-3xl animated-border rounded-3xl">
                <div className="glass-panel rounded-3xl p-8 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-[0_8px_32px_rgba(34,211,238,0.3)]">
                    <ShieldCheck className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="mt-5 text-3xl font-bold text-white">You&apos;re already signed in</h2>
                  <p className="mt-3 text-lg text-muted-foreground">
                    Logged in as <span className="text-white">{user.email}</span>
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <Button asChild className="h-12 rounded-2xl glass-button px-6 text-white">
                      <Link href="/sign-up">Go to Registration</Link>
                    </Button>
                    <form
                      action={async () => {
                        'use server'
                        await signOut({ returnTo: '/sign-in' })
                      }}
                    >
                      <Button className="h-12 rounded-2xl glass-card border-white/10 px-6 text-foreground hover:bg-white/5" type="submit" variant="outline">
                        Sign Out
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            ) : (
              <WorkOSEntryCard
                actionPath="/login"
                disabled={!isWorkOSConfigured}
                footerHref="/sign-up"
                footerLinkLabel="Sign up"
                footerText="Don't have an account?"
                mode="sign-in"
                subtitle="Your email is passed to WorkOS as a login hint, and social sign-in continues through your configured AuthKit providers."
                title="Sign in"
              />
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
