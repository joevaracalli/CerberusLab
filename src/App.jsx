import React, { useEffect, useRef, useState } from "react";

const BACKGROUND_IMAGE_URL = "/cerberus-bg.jpeg";
const LOGO_URL = "/cerberus-logo.jpeg";

// Scanlines Component
function Scanlines() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 scanlines-overlay" />
  );
}

// Audio Control Button
function AudioControl() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    // Initialize audio object
    const audioObj = new Audio('/doberman-bark.mp3');
    audioObj.volume = 0.5;
    audioObj.loop = false;
    audioObj.preload = 'auto';
    
    // Mobile-specific audio settings
    audioObj.setAttribute('playsinline', 'true');
    audioObj.setAttribute('webkit-playsinline', 'true');
    
    audioObj.addEventListener('ended', () => {
      setIsPlaying(false);
    });
    
    setAudio(audioObj);
    
    return () => {
      if (audioObj) {
        audioObj.pause();
        audioObj.removeEventListener('ended', () => {});
      }
    };
  }, []);

  const toggleAudio = () => {
    if (!audio) return;

    if (isPlaying) {
      // Stop audio
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
    } else {
      // Play audio for 5 seconds
      audio.currentTime = 0;
      audio.play().then(() => {
        setIsPlaying(true);
        
        // Stop after 5 seconds
        setTimeout(() => {
          audio.pause();
          audio.currentTime = 0;
          setIsPlaying(false);
        }, 5000);
      }).catch((error) => {
        console.log('Audio play failed:', error);
      });
    }
  };

  return (
    <button
      onClick={toggleAudio}
      className="fixed top-6 right-6 z-50 w-12 h-12 bg-black/60 border border-white/20 rounded-full flex items-center justify-center hover:bg-black/80 hover:border-white/40 transition-all duration-300 backdrop-blur-sm tilt-card"
      title={isPlaying ? "Stop Doberman Bark" : "Play Doberman Bark"}
    >
      {isPlaying ? (
        // Stop icon
        <div className="w-4 h-4 bg-red-400 rounded-sm"></div>
      ) : (
        // Play icon (black wolf)
        <div className="text-white text-lg">🐺</div>
      )}
    </button>
  );
}

// Beat Pulse Effect
function BeatPulse() {
  useEffect(() => {
    const interval = setInterval(() => {
      // Add beat pulse class to elements
      document.querySelectorAll('.beat-pulse').forEach(el => {
        el.classList.add('pulse-active');
        setTimeout(() => {
          el.classList.remove('pulse-active');
        }, 200);
      });
    }, 1500); // Beat every 1.5 seconds

    return () => clearInterval(interval);
  }, []);

  return null; // This component just manages the beat timing
}

// Particle Background Component
function ParticleBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white/10 rounded-full animate-float-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        />
      ))}
    </div>
  );
}

// Cursor Trail Component
function CursorTrail() {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newTrail = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      
      setTrails(prev => [...prev.slice(-10), newTrail]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Clean up old trails
    const interval = setInterval(() => {
      setTrails(prev => prev.slice(-5));
    }, 100);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="absolute w-2 h-2 bg-red-400 rounded-full animate-cursor-trail"
          style={{
            left: trail.x - 4,
            top: trail.y - 4,
            opacity: (index + 1) / trails.length * 0.8,
            transform: `scale(${(index + 1) / trails.length})`,
          }}
        />
      ))}
    </div>
  );
}

// Loading Screen Component
function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl font-bold mb-8 glitch-text neon-text-glow font-rajdhani">
          CERBERUS <span className="text-red-400">LAB</span>
        </div>
        <div className="h-1 bg-gray-800 rounded-full mb-4 mx-auto" style={{ width: '100%', maxWidth: '28rem' }}>
          <div 
            className="h-full bg-red-400 rounded-full transition-all duration-300 neon-glow-red"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-red-400 text-sm font-rajdhani">
          LOADING... {Math.round(progress)}%
        </div>
        <div className="mt-4 text-xs text-gray-500">
          Initializing underground frequencies...
        </div>
      </div>
    </div>
  );
}

// Matrix Rain Component
function MatrixRain() {
  const matrixChars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute text-red-400/40 text-xs font-mono animate-matrix-fall"
          style={{
            left: `${i * 5}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${8 + Math.random() * 4}s`
          }}
        >
          {[...Array(20)].map((_, j) => (
            <div key={j} className="block leading-tight">
              {matrixChars[Math.floor(Math.random() * matrixChars.length)]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function CerberusLabSite() {
  const parallaxRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  // Play doberman bark when site loads
  useEffect(() => {
    const playDobermanBark = async () => {
      try {
        console.log('Attempting to play doberman bark...');
        const audio = new Audio('/doberman-bark.mp3');
        audio.volume = 0.5;
        
        // Add event listeners for debugging
        audio.addEventListener('loadstart', () => console.log('Audio loading started'));
        audio.addEventListener('canplay', () => console.log('Audio can play'));
        audio.addEventListener('error', (e) => console.log('Audio error:', e));
        
        // Stop audio after 5 seconds
        setTimeout(() => {
          audio.pause();
          audio.currentTime = 0;
        }, 5000);
        
        await audio.play();
        console.log('Doberman bark played successfully!');
      } catch (error) {
        console.log('Audio play failed:', error);
        console.log('Trying user interaction approach...');
        
        // Add click listener to play audio on first user interaction
        const playOnClick = async () => {
          try {
            const audio = new Audio('/doberman-bark.mp3');
            audio.volume = 0.5;
            
            // Stop audio after 5 seconds
            setTimeout(() => {
              audio.pause();
              audio.currentTime = 0;
            }, 5000);
            
            await audio.play();
            console.log('Doberman bark played after user interaction!');
            document.removeEventListener('click', playOnClick);
          } catch (e) {
            console.log('Still failed after click:', e);
          }
        };
        
        document.addEventListener('click', playOnClick, { once: true });
        console.log('Click anywhere on the page to hear the doberman bark!');
      }
    };

    // Play after a short delay
    const timer = setTimeout(playDobermanBark, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  // Sound effects
  const playSound = (type) => {
    const sounds = {
      click: () => {
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT');
        audio.volume = 0.1;
        audio.play().catch(() => {});
      },
      hover: () => {
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT');
        audio.volume = 0.05;
        audio.play().catch(() => {});
      },
      bark: () => {
        // Create a simple bark-like sound
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.2);
      }
    };
    
    if (sounds[type]) {
      sounds[type]();
    }
  };



  // Add sound effects and tilt effects to elements
  useEffect(() => {
    const addSoundEffects = () => {
      // Add click sounds to buttons and links
      document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('click', () => playSound('click'));
        el.addEventListener('mouseenter', () => playSound('hover'));
      });
    };

    const addTiltEffects = () => {
      document.querySelectorAll('.tilt-card').forEach(card => {
        const handleMouseMove = (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const rotateX = (y - centerY) / centerY * -10;
          const rotateY = (x - centerX) / centerX * 10;
          
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        };
        
        const handleMouseLeave = () => {
          card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        };
        
        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    if (!isLoading) {
      setTimeout(() => {
        addSoundEffects();
        addTiltEffects();
      }, 1000);
    }
  }, [isLoading]);

  useEffect(() => {
    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // Parallax scrolling effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
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
      <AudioControl />
      <Scanlines />
      <BeatPulse />
      <CursorTrail />
      <MatrixRain />
      <ParticleBackground />
      <img
        ref={parallaxRef}
        src={BACKGROUND_IMAGE_URL}
        alt="Cerberus Lab Background"
        className="pointer-events-none absolute inset-0 m-auto h-[80vh] w-auto opacity-5 blur-sm object-contain select-none"
      />
      <div className="min-h-screen">
        <Hero playSound={playSound} />
        <NewReleases />
        <ArtistSpotlight artists={artists} />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}

function Hero({ playSound }) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 md:grid-cols-2 md:py-28">
        <div>
          <h1 className="text-5xl font-bold leading-tight md:text-7xl glitch-text font-rajdhani tracking-wider">
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
        <a 
          href="https://www.instagram.com/cerberus_lab/" 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={() => playSound('bark')}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-black/40 flex items-center justify-center shadow-2xl cursor-pointer group tilt-card beat-pulse"
        >
          <img 
            src="/cerberus-lab.jpeg" 
            alt="Cerberus Lab Logo"
            className="h-full w-full object-contain p-8 hover:scale-105 transition-transform duration-300 animate-float"
          />
          {/* Instagram overlay hint */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium bg-black/60 px-3 py-1 rounded-full">
              @cerberus_lab
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

function SocialBar({ socials }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 fade-in">
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
      releaseDate: "Everywhere Soon",
      cover: "/nyc.png",
      links: {
        appleMusic: "https://music.apple.com/ca/music-video/nyc-feat-eddie-kaine/1846719498"
      }
    },
  ];

  return (
    <section id="releases" data-testid="new-releases" className="mx-auto max-w-7xl px-4 py-10 fade-in">
      <h2 className="mb-6 text-2xl font-semibold tracking-wide md:text-3xl">New Releases</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {releases.map((r) => (
          <article key={r.title} className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/40 p-4 animate-float tilt-card beat-pulse">
            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-black/40 flex items-center justify-center">
              {r.cover ? (
                <>
                  <img 
                    src={r.cover} 
                    alt={`${r.title} Cover`}
                    className="h-full w-full object-cover hover:scale-105 hover:animate-spin-slow transition-transform duration-300"
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
    <section data-testid="artist-spotlight" className="mx-auto max-w-7xl px-4 py-10 fade-in">
      <h2 className="mb-6 text-2xl font-semibold tracking-wide md:text-3xl">Artist Spotlight</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {artists.map((a) => (
          <article key={a.name} className="group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/40 p-4 shadow animate-float tilt-card beat-pulse">
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
    <section id="contact" className="mx-auto max-w-7xl px-4 py-20 fade-in">
      <div className="grid gap-8 rounded-3xl border border-white/10 bg-neutral-900/40 p-8 md:grid-cols-2 animate-float">
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
              id="contact-name"
              name="name"
              type="text"
              className="rounded-xl border border-white/10 bg-black/40 p-3 outline-none placeholder:text-white/40"
              placeholder="Name"
              autoComplete="name"
            />
            <input
              id="contact-email"
              name="email"
              type="email"
              className="rounded-xl border border-white/10 bg-black/40 p-3 outline-none placeholder:text-white/40"
              placeholder="Email"
              autoComplete="email"
            />
          </div>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            className="h-28 w-full rounded-xl border border-white/10 bg-black/40 p-3 outline-none placeholder:text-white/40 resize-none"
            placeholder="Message"
          />
          <button 
            type="submit"
            className="rounded-2xl bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-neutral-200 transition-colors duration-200"
          >
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
