import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import logoAsset from "@/assets/logo.png.asset.json";
import { BookingForm } from "@/components/BookingForm";

const INSTAGRAM_URL = "https://www.instagram.com/royaltybeautyandmore/";
const FACEBOOK_URL = "https://www.facebook.com/Royaltybeautyandmore.gr";
const ADDRESS = "37th km Markopoulou Ave., Porto Rafti";
const MAPS_QUERY = encodeURIComponent("37ο χλμ Λεωφ. Μαρκοπούλου, Πόρτο Ράφτη");

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Royalty Beauty by Voula Ikonomaki — Luxury Hair Salon Porto Rafti" },
      {
        name: "description",
        content:
          "Royalty Beauty by Voula Ikonomaki — luxury boutique hair salon in Porto Rafti. Haircuts, hair makeover, extensions, makeup & eyelashes. Book online.",
      },
      { property: "og:title", content: "Royalty Beauty by Voula Ikonomaki" },
      {
        property: "og:description",
        content: "Luxury hair salon boutique in Porto Rafti. The luxury you deserve.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const NAV = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#booking", label: "Booking" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

const SERVICES = [
  {
    n: "01",
    title: "Haircut",
    desc: "We shape your silhouette with surgical precision — every cut is a private aesthetic session, tailored to your features and personality.",
  },
  {
    n: "02",
    title: "Hair Makeover",
    desc: "A complete transformation — colour, texture and technique in perfect harmony. For when you choose to be rewritten from scratch, with flawless finesse.",
  },
  {
    n: "03",
    title: "Hair Extensions",
    desc: "Premium natural hair of the highest quality, invisibly applied. Volume, length and shine that feel naturally your own — because they simply are.",
  },
  {
    n: "04",
    title: "Makeup",
    desc: "Editorial aesthetic with skin-first texture. Every look is designed for your moment — weddings, events, or an evening worth remembering.",
  },
  {
    n: "05",
    title: "Eyelashes",
    desc: "Lashes with architectural attention — from natural extension to volume drama. Comfort, longevity and the most refined line of the eye.",
  },
];

const HOURS = [
  { d: "Monday", h: "Closed", closed: true },
  { d: "Tuesday", h: "11:00 — 19:00" },
  { d: "Wednesday", h: "11:00 — 19:00" },
  { d: "Thursday", h: "11:00 — 19:00" },
  { d: "Friday", h: "11:00 — 19:00" },
  { d: "Saturday", h: "11:00 — 18:00" },
  { d: "Sunday", h: "Closed", closed: true },
];

const REVIEWS = [
  {
    name: "Cristina Gonzales",
    text: "I highly recommend Royalty Beauty! From the moment I walked in, I was greeted warmly by Voula. She is not only incredibly professional but also has a fantastic eye for design. Instead of just giving me a cut, Voula designed a new hairstyle that is both younger and more stylish—I am genuinely thrilled with the results. Thank you, Voula, for making me feel great!",
  },
  {
    name: "Eila Nadem",
    text: "She is very friendly and her job it's very professional, I really like it, and I recommend you to go to her place and enjoy her service.",
  },
  {
    name: "Client Review",
    text: "Voula is really good in giving you a perfect haircut according to your face cut. I like her work.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <About />
      <Booking />
      <Reviews />
      <Hours />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 leading-none">
          <img src={logoAsset.url} alt="Royalty Beauty & More" className="h-16 w-16 md:h-20 md:w-20 rounded-full object-cover border border-gold/40" />
          <span className="flex flex-col">
            <span className="font-display text-xl tracking-wide">Royalty Beauty</span>
            <span className="text-[0.6rem] tracking-[0.3em] uppercase text-gold mt-1">
              by Voula Ikonomaki
            </span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[0.7rem] tracking-[0.25em] uppercase text-foreground/70 hover:text-gold transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#booking" className="hidden md:inline-flex btn-gold !py-3 !px-6 !text-[0.65rem]">
          Book Now
        </a>
        <button
          aria-label="Menu"
          className="md:hidden w-10 h-10 flex items-center justify-center"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-6 h-px bg-foreground relative before:content-[''] before:absolute before:w-6 before:h-px before:bg-foreground before:-top-2 after:content-[''] after:absolute after:w-6 after:h-px after:bg-foreground after:top-2" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-6 flex flex-col gap-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-[0.2em] uppercase py-2"
              >
                {n.label}
              </a>
            ))}
            <a href="#booking" onClick={() => setOpen(false)} className="btn-gold mt-2">
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen bg-onyx text-ivory overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt=""
          width={1080}
          height={1920}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-onyx via-onyx/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 min-h-[calc(100vh-5rem)] flex flex-col justify-center py-20">
        <div className="max-w-3xl">
          <p className="flex items-center gap-4 text-gold text-[0.7rem] tracking-[0.35em] uppercase mb-8">
            <span className="gold-rule" /> Hair Salon Boutique · Porto Rafti
          </p>
          <h1 className="font-display text-[2.75rem] sm:text-6xl lg:text-8xl leading-[0.95] text-ivory font-light">
            The Luxury
            <br />
            <span className="italic text-gold">You Deserve</span>
          </h1>
          <p className="mt-10 text-base lg:text-lg text-ivory/70 max-w-xl leading-relaxed font-light">
            A private sanctuary of beauty, where every detail has been designed to bring out the
            best in you. Welcome to Royalty Beauty by Voula Ikonomaki.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a href="#booking" className="btn-gold">
              Online Booking
            </a>
            <a href="#services" className="btn-outline-gold">
              Our Services
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 text-ivory/60">
        <span className="text-[0.6rem] tracking-[0.4em] uppercase">Scroll</span>
        <span className="w-px h-12 bg-gold/60" />
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Haircut", "Hair Makeover", "Extensions", "Makeup", "Eyelashes", "Bridal"];
  return (
    <div className="bg-onyx text-ivory border-y border-gold/30 py-6 overflow-hidden">
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-3 px-6 text-[0.7rem] tracking-[0.4em] uppercase text-ivory/70">
        {items.map((i, idx) => (
          <span key={i} className="flex items-center gap-12">
            {i}
            {idx < items.length - 1 && <span className="text-gold">✦</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="py-28 lg:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-6">— Services</p>
            <h2 className="font-display text-5xl lg:text-7xl leading-[1] font-light">
              The art of <span className="italic text-gold">hair</span> & beauty
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Five specialised services, designed with the philosophy of a boutique atelier.
              Every visit is a personal experience of wellbeing and aesthetic excellence.
            </p>
          </div>
        </div>

        <div className="border-t border-border">
          {SERVICES.map((s) => (
            <article
              key={s.n}
              className="group grid lg:grid-cols-12 gap-6 lg:gap-12 py-12 border-b border-border hover:bg-secondary/40 transition-colors px-2"
            >
              <div className="lg:col-span-1 text-gold font-display text-2xl">{s.n}</div>
              <h3 className="lg:col-span-3 font-display text-3xl lg:text-4xl font-light">
                {s.title}
              </h3>
              <p className="lg:col-span-7 text-muted-foreground leading-relaxed text-[1.05rem]">
                {s.desc}
              </p>
              <div className="lg:col-span-1 flex lg:justify-end items-start text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-2xl">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-28 lg:py-40 bg-onyx text-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={aboutImg}
            alt="Royalty Beauty atelier"
            loading="lazy"
            width={1400}
            height={1600}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-4 border border-gold/40 pointer-events-none" />
        </div>
        <div>
          <p className="eyebrow mb-6">— About us</p>
          <h2 className="font-display text-5xl lg:text-6xl leading-[1.05] font-light">
            A boutique sanctuary of <span className="italic text-gold">luxury</span>.
          </h2>
          <div className="mt-10 space-y-6 text-ivory/75 leading-relaxed text-[1.05rem]">
            <p>
              Royalty Beauty by Voula Ikonomaki was born from the belief that beauty is an art —
              and every woman deserves to experience her own personal moment of luxury, away from
              the rush of everyday life.
            </p>
            <p>
              With 37 years of experience, our welcoming, low-lit space in Porto Rafti combines
              internationally-trained technique with premium products, for a result that stays
              with you long after your session ends.
            </p>
            <p>
              A few seats. Plenty of time per client. Complete attention to detail.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-gold/30 pt-10">
            {[
              ["37", "Years of experience"],
              ["4.6★", "Google Reviews"],
              ["100%", "Premium products"],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="font-display text-4xl text-gold">{k}</div>
                <div className="text-[0.7rem] tracking-[0.25em] uppercase text-ivory/60 mt-2">
                  {v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Booking() {
  return (
    <section id="booking" className="py-28 lg:py-40 bg-background">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="eyebrow mb-6">— Online Booking</p>
          <h2 className="font-display text-5xl lg:text-7xl font-light leading-[1]">
            Book your <span className="italic text-gold">appointment</span>
          </h2>
          <p className="mt-8 text-muted-foreground max-w-xl mx-auto">
            Pick a day and time that works for you — your booking is confirmed instantly.
          </p>
        </div>

        <BookingForm />
      </div>
    </section>
  );
}

function Stars({ rating = 4.6 }: { rating?: number }) {
  return (
    <div className="inline-flex items-center gap-1 text-gold text-lg">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i}>{i <= Math.round(rating) ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="py-28 lg:py-40 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="eyebrow mb-6">— Reviews</p>
          <h2 className="font-display text-5xl lg:text-7xl font-light leading-[1]">
            Their <span className="italic text-gold">experience</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="bg-card border border-border p-8 lg:p-10 flex flex-col gap-6"
            >
              <Stars rating={5} />
              <blockquote className="text-foreground/85 leading-relaxed italic font-display text-xl">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-auto pt-6 border-t border-border text-[0.7rem] tracking-[0.3em] uppercase text-muted-foreground">
                — {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Hours() {
  return (
    <section className="py-28 lg:py-40 bg-background">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <p className="eyebrow mb-6">— Opening Hours</p>
        <h2 className="font-display text-5xl lg:text-6xl font-light leading-[1]">
          We're <span className="italic text-gold">waiting</span> for you
        </h2>
        <div className="mt-16 max-w-2xl mx-auto divide-y divide-border border-y border-border">
          {HOURS.map((h) => (
            <div
              key={h.d}
              className="flex justify-between items-center py-5 text-[0.95rem]"
            >
              <span className="tracking-wider uppercase text-[0.75rem] text-muted-foreground">
                {h.d}
              </span>
              <span
                className={
                  h.closed
                    ? "font-display text-xl italic text-muted-foreground/70"
                    : "font-display text-xl text-foreground"
                }
              >
                {h.h}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-onyx text-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28 lg:py-40 grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="eyebrow mb-6">— Contact</p>
          <h2 className="font-display text-5xl lg:text-7xl font-light leading-[1]">
            Come and <span className="italic text-gold">meet us</span>.
          </h2>
          <p className="mt-8 text-ivory/70 max-w-md leading-relaxed">
            For appointments, questions or private sessions — we're here for you.
          </p>

          <div className="mt-12 space-y-8">
            <div>
              <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-2">
                Phone
              </div>
              <a
                href="tel:+302299074486"
                className="font-display text-3xl hover:text-gold transition-colors"
              >
                22990 74486
              </a>
            </div>
            <div>
              <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-2">
                Address
              </div>
              <a
                href={`https://www.google.com/maps?q=${MAPS_QUERY}`}
                className="font-display text-2xl leading-snug hover:text-gold transition-colors"
              >
                {ADDRESS}
                <br />
                Athens, Greece
              </a>
            </div>
            <div>
              <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-2">
                Social
              </div>
              <div className="flex gap-6 mt-2">
                <a
                  href={INSTAGRAM_URL}
                  className="text-ivory hover:text-gold transition-colors text-sm tracking-[0.2em] uppercase border-b border-gold/40 pb-1"
                >
                  Instagram
                </a>
                <a
                  href={FACEBOOK_URL}
                  className="text-ivory hover:text-gold transition-colors text-sm tracking-[0.2em] uppercase border-b border-gold/40 pb-1"
                >
                  Facebook
                </a>

              </div>
            </div>
          </div>
        </div>

        <div className="relative aspect-square w-full border border-gold/40 overflow-hidden">
          <iframe
            title="Royalty Beauty & More — Porto Rafti"
            src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`}
            className="w-full h-full grayscale contrast-125"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-onyx text-ivory border-t border-gold/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Royalty Beauty & More" className="h-12 w-12 rounded-full object-cover border border-gold/40" />
            <div>
              <div className="font-display text-2xl">Royalty Beauty</div>
              <div className="text-[0.6rem] tracking-[0.3em] uppercase text-gold mt-1">
                by Voula Ikonomaki
              </div>
            </div>
          </div>
          <p className="mt-6 text-ivory/60 text-sm leading-relaxed max-w-xs">
            Luxury hair salon boutique in Porto Rafti.
          </p>
        </div>
        <div>
          <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-4">Contact</div>
          <a
            href="tel:+302299074486"
            className="block text-ivory/80 hover:text-gold transition-colors"
          >
            22990 74486
          </a>
          <a
            href={`https://www.google.com/maps?q=${MAPS_QUERY}`}
            className="block text-ivory/60 mt-2 text-sm hover:text-gold transition-colors"
          >
            {ADDRESS}
          </a>
        </div>
        <div>
          <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-4">Follow us</div>
          <div className="flex flex-col gap-2">
            <a
              href={INSTAGRAM_URL}
              className="text-ivory/80 hover:text-gold transition-colors text-sm"
            >
              Instagram →
            </a>
            <a
              href={FACEBOOK_URL}
              className="text-ivory/80 hover:text-gold transition-colors text-sm"
            >
              Facebook →
            </a>

          </div>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between gap-3 text-[0.7rem] tracking-[0.25em] uppercase text-ivory/50">
          <span>© {new Date().getFullYear()} Royalty Beauty by Voula Ikonomaki</span>
          <span>Designed by Nexus Media</span>
        </div>
      </div>
    </footer>
  );
}
