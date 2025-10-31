import React from "react";

const BACKGROUND_IMAGE_URL = "/cerberus-bg.jpeg";
const LOGO_URL = "/cerberus-logo.jpeg";

export default function CerberusLabSite() {
  const artists = [
    {
      name: "Nova Music",
      role: "Producer / Co-Founder",
      socials: {
        ig: "https://www.instagram.com/nova_music99/",
        sp: "https://open.spotify.com/artist/6Nz2YWftv7wWAsXeh6kiJw?si=Vo4jRKauREGszDJZkzMtDQ&nd=1&dlsi=844f7379322c4c93",
        am: "https://music.apple.com/us/artist/nova-music/1611593016",
        yt: "https://www.youtube.com/channel/UCHBrkm3tBt6StD0YV--zbLg",
        sc: "https://soundcloud.com/user-439471882?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <img
        src={BACKGROUND_IMAGE_URL}
        alt="Cerberus Lab Background"
        className="pointer-events-none absolute inset-0 m-auto h-[80vh] w-auto opacity-5 blur-sm object-contain select-none"
      />
      <div className="min-h-screen">
        <Hero />
        <SocialBar socials={artists[0].socials} />
        <NewReleases />
        <ArtistSpotlight artists={artists} />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 md:grid-cols-2 md:py-28">
        <div>
          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Cerberus <span className="text-red-400">Lab</span>
          </h1>
          <p className="mt-5 max-w-xl text-white/70">
            The official home of Nova Music and Cerberus artists. Follow and stay tuned for upcoming releases.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-2xl border border-white/20 px-5 py-2 text-sm font-medium hover:border-white/40"
            >
              Contact / Booking
            </a>
            <a
              href="#releases"
              className="rounded-2xl bg-red-600 px-5 py-2 text-sm font-medium hover:bg-red-700"
            >
              Latest Releases
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-black/40 flex items-center justify-center shadow-2xl">
          <img 
            src="/cerberus-lab.jpeg" 
            alt="Cerberus Lab Logo"
            className="h-full w-full object-contain p-8 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}

function SocialBar({ socials }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
        <a href={socials?.ig} className="rounded-xl border border-white/20 px-4 py-2 hover:border-white/40">
          Instagram
        </a>
        <a href={socials?.sp} className="rounded-xl border border-white/20 px-4 py-2 hover:border-white/40">
          Spotify
        </a>
        <a href={socials?.am} className="rounded-xl border border-white/20 px-4 py-2 hover:border-white/40">
          Apple Music
        </a>
        <a href={socials?.yt} className="rounded-xl border border-white/20 px-4 py-2 hover:border-white/40">
          YouTube
        </a>
        <a href={socials?.sc} className="rounded-xl border border-white/20 px-4 py-2 hover:border-white/40">
          SoundCloud
        </a>
      </div>
    </section>
  );
}

function NewReleases() {
  const releases = [
    {
      title: "Sword",
      artist: "Nova Music",
      releaseDate: "October 31, 2025",
      cover: "/sword.png",
      links: {
        spotify: "https://open.spotify.com/album/32c5hAhTeOPhmpbskpG4Cm?si=nKbjGyDyTSaUqyGAzVmRlw",
        appleMusic: "https://music.apple.com/ca/album/sword/1843830645",
        youtube: "https://youtube.com/playlist?list=OLAK5uy_mVdw8LRJVy3hIzZ6cGUKoxCQEQUlYNt0s&si=SbHEj3P66dYK91Rb"
      }
    },
    {
      title: "NYC (Music Video)",
      artist: "Nova Music feat. Eddie Kaine",
      releaseDate: "Coming Soon",
      cover: null,
    },
  ];

  return (
    <section id="releases" data-testid="new-releases" className="mx-auto max-w-7xl px-4 py-10">
      <h2 className="mb-6 text-2xl font-semibold tracking-wide md:text-3xl">New Releases</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {releases.map((r) => (
          <article key={r.title} className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/40 p-4">
            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-black/40 flex items-center justify-center">
              {r.cover ? (
                <>
                  <img 
                    src={r.cover} 
                    alt={`${r.title} Cover`}
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden text-center">
                    <div className="text-6xl mb-2 text-red-400">♪</div>
                    <div className="text-sm text-white/60">Album Cover</div>
                  </div>
                </>
              ) : (
                <div className="text-center">
                  <div className="text-4xl mb-2 text-white/40">📹</div>
                  <div className="text-sm text-white/60 font-medium">Coming Soon</div>
                </div>
              )}
            </div>
            <div className="mt-4">
              <div className="text-lg font-semibold">{r.title}</div>
              <div className="text-sm text-white/60">{r.artist}</div>
              <div className="text-xs text-white/50 mt-1">{r.releaseDate}</div>
              
              {/* Streaming Links */}
              {r.links && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {r.links.spotify && (
                    <a 
                      href={r.links.spotify} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs border border-white/20 text-white/70 hover:border-white/40 hover:text-white px-2 py-1 rounded-full transition-all duration-200"
                    >
                      Spotify
                    </a>
                  )}
                  {r.links.appleMusic && (
                    <a 
                      href={r.links.appleMusic} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs border border-white/20 text-white/70 hover:border-white/40 hover:text-white px-2 py-1 rounded-full transition-all duration-200"
                    >
                      Apple Music
                    </a>
                  )}
                  {r.links.youtube && (
                    <a 
                      href={r.links.youtube} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs border border-white/20 text-white/70 hover:border-white/40 hover:text-white px-2 py-1 rounded-full transition-all duration-200"
                    >
                      YouTube
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ArtistSpotlight({ artists }) {
  return (
    <section data-testid="artist-spotlight" className="mx-auto max-w-7xl px-4 py-10">
      <h2 className="mb-6 text-2xl font-semibold tracking-wide md:text-3xl">Artist Spotlight</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {artists.map((a) => (
          <article key={a.name} className="group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/40 p-4 shadow">
            <a 
              href={a.socials?.ig} 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative aspect-square w-full overflow-hidden rounded-xl block cursor-pointer group"
            >
              <img 
                src="/nova-music-artist.PNG" 
                alt={a.name}
                className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Instagram overlay hint */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium bg-black/60 px-3 py-1 rounded-full">
                  @nova_music99
                </div>
              </div>
              <div className="hidden h-full w-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.3),transparent_60%)]">
                <div className="text-center">
                  <div className="text-4xl mb-2 text-red-400 font-bold">
                    {a.name.charAt(0)}
                  </div>
                  <div className="text-sm text-white/50">{a.name}</div>
                </div>
              </div>
            </a>
            <div className="mt-4">
              <div className="text-lg font-semibold">{a.name}</div>
              <div className="text-sm text-white/60">{a.role}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                <a href={a.socials?.ig} className="text-xs border border-white/20 text-white/70 hover:border-white/40 hover:text-white px-2 py-1 rounded-full transition-all duration-200">Instagram</a>
                <a href={a.socials?.sp} className="text-xs border border-white/20 text-white/70 hover:border-white/40 hover:text-white px-2 py-1 rounded-full transition-all duration-200">Spotify</a>
                <a href={a.socials?.am} className="text-xs border border-white/20 text-white/70 hover:border-white/40 hover:text-white px-2 py-1 rounded-full transition-all duration-200">Apple Music</a>
                <a href={a.socials?.yt} className="text-xs border border-white/20 text-white/70 hover:border-white/40 hover:text-white px-2 py-1 rounded-full transition-all duration-200">YouTube</a>
                <a href={a.socials?.sc} className="text-xs border border-white/20 text-white/70 hover:border-white/40 hover:text-white px-2 py-1 rounded-full transition-all duration-200">SoundCloud</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-20">
      <div className="grid gap-8 rounded-3xl border border-white/10 bg-neutral-900/40 p-8 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-semibold">Bookings & Press</h3>
          <p className="mt-3 max-w-md text-white/70">
            For bookings, demos, and press inquiries, reach out below. Include links and availability; 
            we reply within 48 hours.
          </p>
          <div className="mt-6 space-y-2 text-sm text-white/70">
            <div>
              <span className="text-white">Email:</span> Cerberuslabel@gmail.com
            </div>
            <div>
              <span className="text-white">DMs:</span>{" "}
              <a href="https://www.instagram.com/cerberus_lab/" className="underline hover:text-white">
                @cerberus_lab
              </a>{" "}
              ·{" "}
              <a href="https://www.instagram.com/nova_music99/" className="underline hover:text-white">
                @nova_music99
              </a>
            </div>
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <input
              className="rounded-xl border border-white/10 bg-black/40 p-3 outline-none placeholder:text-white/40"
              placeholder="Name"
            />
            <input
              className="rounded-xl border border-white/10 bg-black/40 p-3 outline-none placeholder:text-white/40"
              placeholder="Email"
            />
          </div>
          <textarea
            className="h-28 w-full rounded-xl border border-white/10 bg-black/40 p-3 outline-none placeholder:text-white/40"
            placeholder="Message"
          />
          <button className="rounded-2xl bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-neutral-200">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-xs text-white/60">
          © {new Date().getFullYear()} Cerberus Lab. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-xs text-white/60">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
