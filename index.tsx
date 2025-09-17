import React from "react";
import { motion } from "framer-motion";
import { Music4, Play, ArrowRight, Instagram, Twitter, Mail, Globe, CalendarDays, Skull } from "lucide-react";

function NoiseBG() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(1200px_500px_at_50%_-10%,rgba(244,63,94,.10),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(900px_300px_at_90%_10%,rgba(239,68,68,.12),transparent_60%)]" />
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%27120%27 height=%27120%27 viewBox=%270 0 120 120%27><filter id=%27n%27 x=%270%27 y=%270%27><feTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%272%27 stitchTiles=%27stitch%27/></filter><rect width=%27120%27 height=%27120%27 filter=%27url(%23n)%27/></svg>')",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px)",
          backgroundSize: "100% 3px",
        }}
      />
    </div>
  );
}

// Replace this with your real logo file path
import cerberusLogo from "./cerberus-logo.png";

function LogoMark({ className = "w-8 h-8" }) {
  return <img src={cerberusLogo} alt="Cerberus Labs Logo" className={className} />;
}

const navLinks = [
  { label: "Drops", href: "#releases" },
  { label: "Shows", href: "#tour" },
  { label: "Manifesto", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const releases = [
  { title: "Cerberus Vol. 1", artist: "Various", type: "Compilation", date: "2025-08-09" },
  { title: "NOX — CHIMERA", artist: "NOX", type: "EP", date: "2025-06-21" },
  { title: "Sable R. — SERAPH", artist: "Sable R.", type: "Single", date: "2025-04-12" },
  { title: "Vanta — NIGHT RUN", artist: "Vanta", type: "Mixtape", date: "2025-02-28" },
];

const tour = [
  { date: "2025-10-19", city: "Toronto", venue: "The Axis", note: "label night" },
  { date: "2025-11-08", city: "NYC", venue: "Kingsland", note: "showcase" },
  { date: "2025-12-05", city: "Montreal", venue: "SAT", note: "pop‑up" },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com/", Icon: Instagram },
  { label: "Twitter", href: "https://x.com/", Icon: Twitter },
  { label: "Site", href: "https://", Icon: Globe },
  { label: "Email", href: "mailto:hello@cerberuslabs.io", Icon: Mail },
];

export default function CerberusLabsPage() {
  return (
    <main className="min-h-screen text-zinc-100 bg-black selection:bg-red-500/40 selection:text-white">
      <NoiseBG />

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="flex items-center gap-3 font-semibold">
              <LogoMark className="w-8 h-8" />
              <span className="text-sm sm:text-base uppercase tracking-[0.2em]">CERBERUS LABS</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-[0.2em]">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="text-zinc-300 hover:text-white transition">
                  {l.label}
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.2em] hover:bg-white/10"
            >
              <Music4 className="w-4 h-4" />
              Demos
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-16 sm:py-24 lg:py-28 grid lg:grid-cols-12 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="mb-4 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-zinc-400">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-500" />
                Independent • Music Label • Studio
              </div>
              <h1
                className="glitch text-4xl sm:text-6xl lg:text-7xl font-black leading-[0.95]"
                data-text="BORN IN THE UNDERGROUND  BUILT FOR CHAOS"
              >
                BORN IN THE UNDERGROUND
                <br className="hidden sm:block" /> BUILT FOR CHAOS
              </h1>
              <p className="mt-5 max-w-2xl text-zinc-300 text-base sm:text-lg">
                Minimal lines. Heavy low‑end. Blood‑red accents. Visual energy inspired by Carti & Ken Carson — no suits, just signal.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#releases"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white text-black px-5 py-3 text-sm font-semibold hover:opacity-90"
                >
                  <Play className="w-4 h-4" /> Play Latest Drop
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm hover:bg-white/10"
                >
                  Manifesto <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="relative -rotate-1 rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 shadow-2xl">
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-tr from-red-600/30 via-white/0 to-red-700/30 blur-2xl -z-10" />
                <div className="aspect-[4/5] w-full rounded-2xl bg-gradient-to-b from-zinc-900 to-black grid place-items-center">
                  <Skull className="w-20 h-20 opacity-80" />
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-400">Featured Drop</div>
                    <div className="font-semibold">Cerberus Vol. 1</div>
                  </div>
                  <a href="#releases" className="inline-flex items-center gap-2 text-sm text-zinc-200 hover:text-white">
                    Stream <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rest of the site remains the same */}
      {/* ... */}

      <footer className="border-t border-white/5 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
          <p>© {new Date().getFullYear()} Cerberus Labs.</p>
          <p>Toronto • NYC • Windsor</p>
        </div>
      </footer>

      <style>{`
        @keyframes scroll { to { transform: translateX(-50%); } }
        .glitch { position: relative; text-transform: uppercase; letter-spacing: .03em; }
        .glitch::before, .glitch::after { content: attr(data-text); position: absolute; left: 0; top: 0; width: 100%; }
        .glitch::before { transform: translate(2px, -1px); color: rgba(239,68,68,.8); mix-blend-mode: screen; }
        .glitch::after { transform: translate(-2px, 1px); color: rgba(250,250,250,.6); mix-blend-mode: screen; }
      `}</style>
    </main>
  );
}
