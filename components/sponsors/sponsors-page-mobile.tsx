import Link from "next/link"
import Image from "next/image"
import { ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const sponsors = {
  gold: [
    {
      name: "Lofty",
      logo: "M",
      logoPath: "/images/lofty-logo.png",
      description: "Lofty provides an AI-powered platform that helps real estate professionals to increase their productivity and accelerate business growth.",
      website: "https://lofty.com",
    },
    {
      name: "Trucker Path",
      logo: "M",
      logoPath: "/images/Trucker-Path-logo.png",
      description: "Phoenix-based Trucker Path is the provider of a wide range of truck driver-centric mobility products. Its Trucker Path app is currently in use by nearly 1 million professional truck drivers.",
      website: "https://truckerpath.com",
    },
    {
      name: "Vector",
      logo: "",
      logoPath: "/images/go-vector-ai.jpeg",
      description: "Turn ideas into production apps that earn income. Vector is an AI-powered app builder for early founders, who might not come with technical backgrounds.",
      website: "https://govector.ai",
    },
  ],
  silver: [
    {
      name: "Hydrawav3",
      logo: "H",
      logoPath: "/images/hydrawav3_logo.jpeg",
      description: "Hydrawav3 is revolutionizing wellness with next-generation pain management technology that works in harmony with the body’s natural intelligence.",
      website: "https://www.hydrawav3.com",
    },
  ],
  bronze: [
    {
      name: "ISSC Future Self",
      logo: "IF",
      logoPath: "/images/issc-logo.jpeg",
      description: "FutureSelf is your personal and professional growth framework, helping build confidence, leadership skills, and real-world experience so you can thrive in a fast-changing global world.",
      website: "https://issc.asu.edu/f-1j-1-students/programs/futureself",
    },
  ],
  community: [
    {
      name: "ElevenLabs",
      logo: "EL",
      logoPath: "/images/eleven-labs-logo.webp",
      description: "ElevenLabs is transforming how we interact with technology through AI research and products.",
      website: "https://elevenlabs.io",
    },
    {
      name: "InsForge",
      logo: "IN",
      logoPath: "/images/insforge-logo.jpeg",
      description: "InsForge is building the first backend platform made for AI agents.Their platform gives agents everything they need to go from prompt to production.",
      website: "https://insforge.dev",
    },
    {
      name: "Tamagrow",
      logo: "T",
      logoPath: "/images/tamagrow-logo.png",
      description: "Tamagrow is a leading provider of innovative solutions for the modern workforce. Tamagrow monitors your GitHub commits and RSS feeds, then drafts posts for social media.",
      website: "https://tamagrow.app",
    },
  ],
}

const partners = [
  { 
    name: "ACM at ASU", 
    logo: "/images/acm-asu-logo.png", 
    description: "ACM student chapter at Arizona State University.", 
    website: "https://asu.acm.org" 
  },
  { 
    name: "Global Career Network", 
    logo: "/images/gcn-logo.png", 
    description: "Connecting students with global career opportunities.", 
    website: "https://gcn-asu.com/" 
  },
]

const tierColors: Record<string, string> = {
  gold: "#FFDD44",
  silver: "#E0E0E0",
  bronze: "#FC9F52",
  community: "#6BB2FF",
  partners: "#6BB2FF",
}

const tierGlows: Record<string, string> = {
  gold: "rgba(255,221,68,0.15)",
  silver: "rgba(224,224,224,0.15)",
  bronze: "rgba(252,159,82,0.15)",
  community: "rgba(107,178,255,0.15)",
  partners: "rgba(107,178,255,0.15)",
}

function SponsorCardMobile({ sponsor, tier }: { sponsor: any; tier: string }) {
  const color = tierColors[tier]
  const glow = tierGlows[tier]

  return (
    <Link href={sponsor.website} target="_blank" rel="noopener noreferrer">
      <div 
        className="glass-card rounded-xl p-4 text-center mb-4"
        style={{ boxShadow: `0 0 16px ${glow}` }}
      >
        {sponsor.logoPath ? (
          <div className="w-14 h-14 mx-auto mb-2 flex items-center justify-center rounded-xl overflow-hidden">
            <Image
              src={sponsor.logoPath}
              alt={sponsor.name}
              width={56}
              height={56}
              className="object-contain w-full h-full"
            />
          </div>
        ) : (
          <div 
            className="w-14 h-14 mx-auto mb-2 flex items-center justify-center rounded-xl font-bold text-xl"
            style={{ background: `${color}20`, border: `1px solid ${color}40` }}
          >
            {sponsor.logo}
          </div>
        )}
        <p className="text-sm font-semibold text-foreground flex items-center justify-center gap-1">
          {sponsor.name} <ExternalLink className="h-3 w-3 opacity-60" />
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          {sponsor.description}
        </p>
      </div>
    </Link>
  )
}

function PartnerCardMobile({ partner }: { partner: any }) {
  return (
    <Link href={partner.website} target="_blank" rel="noopener noreferrer">
      <div className="glass-card rounded-xl p-3.5 flex items-center gap-3 mb-2">
        <Image 
          src={partner.logo} 
          alt={partner.name} 
          width={40} 
          height={40} 
          className="object-contain shrink-0" 
        />
        <div>
          <p className="text-sm font-semibold text-foreground flex items-center gap-1">
            {partner.name} <ExternalLink className="h-3 w-3 opacity-60" />
          </p>
          <p className="text-xs text-muted-foreground">
            {partner.description}
          </p>
        </div>
      </div>
    </Link>
  )
}

export function SponsorsPageMobile() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">

      {/* Hero */}
      <section className="pt-24 pb-8 px-4 relative overflow-hidden">
        <div className="relative z-10 text-center">
          <p className="text-xs font-medium text-amber-400 uppercase tracking-widest mb-2">
            Our Partners
          </p>
          <h1 className="text-2xl font-bold mb-3">
            <span className="text-foreground">Our </span>
            <span className="text-amber-400">Sponsors</span>
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Made possible by the generous support of our sponsors and organizing partners.
          </p>
        </div>
      </section>

      {/* Organizing Partners */}
      <section className="px-4 pb-6">
        <p 
          className={`text-xs font-bold uppercase tracking-wider mb-3`}
          style={{ color: tierColors.partners }}
        >
          Organizing Partners
        </p>
        {partners.map((p, i) => (
          <PartnerCardMobile key={i} partner={p} />
        ))}
      </section>

      {/* Gold */}
      <section className="px-4 pb-6">
        <p 
          className={`text-xs font-bold uppercase tracking-wider mb-3`}
          style={{ color: tierColors.gold }}
        >
          Gold Sponsors
        </p>
        {sponsors.gold.map((s, i) => (
          <SponsorCardMobile key={i} sponsor={s} tier="gold" />
        ))}
      </section>

      {/* Silver */}
      <section className="px-4 pb-6">
        <p 
          className={`text-xs font-bold uppercase tracking-wider mb-3`}
          style={{ color: tierColors.silver }}
        >
          Silver Sponsors
        </p>
        {sponsors.silver.map((s, i) => (
          <SponsorCardMobile key={i} sponsor={s} tier="silver" />
        ))}
      </section>

      {/* Bronze */}
      <section className="px-4 pb-6">
        <p 
          className={`text-xs font-bold uppercase tracking-wider mb-3`}
          style={{ color: tierColors.bronze }}
        >
          Bronze Sponsors
        </p>
        {sponsors.bronze.map((s, i) => (
          <SponsorCardMobile key={i} sponsor={s} tier="bronze" />
        ))}
      </section>

      {/* Community */}
      <section className="px-4 pb-6">
        <p 
          className={`text-xs font-bold uppercase tracking-wider mb-3`}
          style={{ color: tierColors.community }}
        >
          Community Partners
        </p>
        {sponsors.community.map((s, i) => (
          <SponsorCardMobile key={i} sponsor={s} tier="community" />
        ))}
      </section>

      {/* Become a sponsor CTA */}{/*
      <section className="px-4 pb-12">
        <div className="mt-6 glass-panel rounded-2xl p-5 text-center border border-white/5">
          <h2 className="text-base font-bold text-foreground mb-2">Become a Sponsor</h2>
          <p className="text-xs text-muted-foreground mb-4">
            Support Arizona&apos;s first go-to-market hackathon and connect with top tech talent.
          </p>
          <Link href="mailto:globehack@asu.edu">
            <Button 
              size="sm" 
              className="glass-button text-white rounded-xl w-full py-5 group"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>*/}

    </main>
  )
}