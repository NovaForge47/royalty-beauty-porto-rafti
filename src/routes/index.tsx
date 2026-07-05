import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import logoAsset from "@/assets/logo.png.asset.json";
import { BookingForm } from "@/components/BookingForm";

const INSTAGRAM_URL = "https://www.instagram.com/royaltybeautyandmore/";
const FACEBOOK_URL = "https://www.facebook.com/Royaltybeautyandmore.gr";
const ADDRESS = "37ο χλμ Λ. Μαρκοπούλου, Πόρτο Ράφτη";
const MAPS_QUERY = encodeURIComponent("37ο χλμ Λεωφ. Μαρκοπούλου, Πόρτο Ράφτη");

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Royalty Beauty by Ikonomaki — Luxury Hair Salon Πόρτο Ράφτη" },
      {
        name: "description",
        content:
          "Royalty Beauty by Ikonomaki — boutique κομμωτήριο πολυτελείας στο Πόρτο Ράφτη. Κουρέματα, hair makeover, extensions, makeup & eyelashes. Κλείστε online ραντεβού.",
      },
      { property: "og:title", content: "Royalty Beauty by Ikonomaki" },
      {
        property: "og:description",
        content: "Boutique κομμωτήριο πολυτελείας στο Πόρτο Ράφτη. Η πολυτέλεια που σου αξίζει.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const NAV = [
  { href: "#services", label: "Υπηρεσίες" },
  { href: "#about", label: "Σχετικά" },
  { href: "#booking", label: "Ραντεβού" },
  { href: "#reviews", label: "Κριτικές" },
  { href: "#contact", label: "Επικοινωνία" },
];

const SERVICES = [
  {
    n: "01",
    title: "Κούρεμα",
    desc: "Σχεδιάζουμε τη γραμμή σου με χειρουργική ακρίβεια — κάθε κούρεμα είναι μια ιδιωτική συνεδρία αισθητικής, προσαρμοσμένη στα χαρακτηριστικά και τον χαρακτήρα σου.",
  },
  {
    n: "02",
    title: "Hair Makeover",
    desc: "Μια ολοκληρωμένη μεταμόρφωση — χρώμα, υφή και τεχνική σε απόλυτη αρμονία. Για όταν επιλέγεις να ξαναγραφτείς από την αρχή, με αψεγάδιαστη φινέτσα.",
  },
  {
    n: "03",
    title: "Hair Extensions",
    desc: "Premium φυσικές τρίχες υψηλής ποιότητας, τοποθετημένες αόρατα. Όγκος, μήκος και λάμψη που μοιάζουν φυσικά δικά σου — γιατί απλώς είναι.",
  },
  {
    n: "04",
    title: "Makeup",
    desc: "Editorial αισθητική με δερματική υφή. Κάθε look σχεδιάζεται για τη στιγμή σου — γάμος, εκδήλωση ή μια βραδιά που αξίζει να θυμάσαι.",
  },
  {
    n: "05",
    title: "Eyelashes",
    desc: "Βλεφαρίδες με αρχιτεκτονική προσοχή — από φυσική επιμήκυνση έως volume drama. Άνεση, διάρκεια και η πιο εκλεπτυσμένη γραμμή του βλέμματος.",
  },
];

const HOURS = [
  { d: "Δευτέρα", h: "Κλειστά", closed: true },
  { d: "Τρίτη", h: "11:00 — 19:00" },
  { d: "Τετάρτη", h: "11:00 — 19:00" },
  { d: "Πέμπτη", h: "11:00 — 19:00" },
  { d: "Παρασκευή", h: "11:00 — 19:00" },
  { d: "Σάββατο", h: "11:00 — 18:00" },
  { d: "Κυριακή", h: "Κλειστά", closed: true },
];

const REVIEWS = [
  {
    name: "Μαρία Κ.",
    text: "Απίστευτη εμπειρία από την πρώτη στιγμή. Η Ικονομάκη κατάλαβε ακριβώς τι ήθελα και το αποτέλεσμα ξεπέρασε κάθε προσδοκία. Πραγματικά boutique αισθητική.",
  },
  {
    name: "Ελένη Π.",
    text: "Το πιο εκλεπτυσμένο κομμωτήριο στο Πόρτο Ράφτη. Λεπτομέρεια, πολυτέλεια, επαγγελματισμός — όλα σε άψογη ισορροπία. Δεν πηγαίνω πουθενά αλλού.",
  },
  {
    name: "Σοφία Δ.",
    text: "Έκανα ολικό makeover για τον γάμο μου. Νιώθω ότι μου χάρισαν μια καινούργια εκδοχή του εαυτού μου. Ευχαριστώ από καρδιάς.",
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
              by Ikonomaki
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
          Κλείσε Ραντεβού
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
              Κλείσε Ραντεβού
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
            <span className="gold-rule" /> Boutique Hair Salon · Πόρτο Ράφτη
          </p>
          <h1 className="font-display text-[2.75rem] sm:text-6xl lg:text-8xl leading-[0.95] text-ivory font-light">
            Η Πολυτέλεια
            <br />
            <span className="italic text-gold">που Σου Αξίζει</span>
          </h1>
          <p className="mt-10 text-base lg:text-lg text-ivory/70 max-w-xl leading-relaxed font-light">
            Ένα ιδιωτικό καταφύγιο ομορφιάς, όπου κάθε λεπτομέρεια έχει σχεδιαστεί για να σε
            αναδείξει. Καλώς ήρθες στο Royalty Beauty by Ikonomaki.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a href="#booking" className="btn-gold">
              Online Booking
            </a>
            <a href="#services" className="btn-outline-gold">
              Οι Υπηρεσίες μας
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
  const items = ["Κούρεμα", "Hair Makeover", "Extensions", "Makeup", "Eyelashes", "Bridal"];
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
            <p className="eyebrow mb-6">— Υπηρεσίες</p>
            <h2 className="font-display text-5xl lg:text-7xl leading-[1] font-light">
              Τέχνη στα <span className="italic text-gold">μαλλιά</span> & την ομορφιά
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Πέντε εξειδικευμένες υπηρεσίες, σχεδιασμένες με τη φιλοσοφία ενός boutique atelier.
              Κάθε επίσκεψη είναι μια προσωπική εμπειρία ευεξίας και αισθητικής υπεροχής.
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
          <p className="eyebrow mb-6">— Σχετικά με εμάς</p>
          <h2 className="font-display text-5xl lg:text-6xl leading-[1.05] font-light">
            Ένα boutique καταφύγιο <span className="italic text-gold">πολυτέλειας</span>.
          </h2>
          <div className="mt-10 space-y-6 text-ivory/75 leading-relaxed text-[1.05rem]">
            <p>
              Το Royalty Beauty by Ikonomaki γεννήθηκε από την πεποίθηση ότι η ομορφιά είναι τέχνη
              — και κάθε γυναίκα αξίζει να βιώσει την δική της προσωπική στιγμή πολυτέλειας, μακριά
              από τη βιασύνη της καθημερινότητας.
            </p>
            <p>
              Στον φιλόξενο, low-lit χώρο μας στο Πόρτο Ράφτη, συνδυάζουμε τεχνική κατάρτιση σε
              διεθνές επίπεδο με προϊόντα premium οίκων, για ένα αποτέλεσμα που σε ακολουθεί πολύ
              μετά το πέρας της συνεδρίας.
            </p>
            <p>
              Λίγες θέσεις. Πολύς χρόνος ανά πελάτισσα. Ολοκληρωτική προσοχή στη λεπτομέρεια.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-gold/30 pt-10">
            {[
              ["10+", "Χρόνια εμπειρίας"],
              ["4.6★", "Google Reviews"],
              ["100%", "Premium προϊόντα"],
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
            Κλείσε το <span className="italic text-gold">ραντεβού</span> σου
          </h2>
          <p className="mt-8 text-muted-foreground max-w-xl mx-auto">
            Επίλεξε ημέρα και ώρα που σε εξυπηρετεί — η κράτησή σου επιβεβαιώνεται αυτόματα.
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
          <p className="eyebrow mb-6">— Κριτικές</p>
          <h2 className="font-display text-5xl lg:text-7xl font-light leading-[1]">
            Η εμπειρία <span className="italic text-gold">τους</span>
          </h2>
          <div className="mt-10 inline-flex flex-col items-center gap-3">
            <div className="flex items-center gap-4">
              <span className="font-display text-5xl text-foreground">4.6</span>
              <div className="flex flex-col items-start">
                <Stars rating={4.6} />
                <span className="text-[0.7rem] tracking-[0.25em] uppercase text-muted-foreground mt-1">
                  Από 83 Google Reviews
                </span>
              </div>
            </div>
          </div>
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
        <p className="eyebrow mb-6">— Ωράριο Λειτουργίας</p>
        <h2 className="font-display text-5xl lg:text-6xl font-light leading-[1]">
          Σε <span className="italic text-gold">περιμένουμε</span>
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
          <p className="eyebrow mb-6">— Επικοινωνία</p>
          <h2 className="font-display text-5xl lg:text-7xl font-light leading-[1]">
            Έλα να <span className="italic text-gold">γνωριστούμε</span>.
          </h2>
          <p className="mt-8 text-ivory/70 max-w-md leading-relaxed">
            Για ραντεβού, ερωτήσεις ή ιδιωτικές συνεδρίες — είμαστε στη διάθεσή σου.
          </p>

          <div className="mt-12 space-y-8">
            <div>
              <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-2">
                Τηλέφωνο
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
                Διεύθυνση
              </div>
              <a
                href={`https://www.google.com/maps?q=${MAPS_QUERY}`}
                className="font-display text-2xl leading-snug hover:text-gold transition-colors"
              >
                {ADDRESS}
                <br />
                Αθήνα, Ελλάδα
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
            title="Royalty Beauty & More — Πόρτο Ράφτη"
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
                by Ikonomaki
              </div>
            </div>
          </div>
          <p className="mt-6 text-ivory/60 text-sm leading-relaxed max-w-xs">
            Boutique κομμωτήριο πολυτελείας στο Πόρτο Ράφτη.
          </p>
        </div>
        <div>
          <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-4">Επικοινωνία</div>
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
          <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-4">Ακολούθησέ μας</div>
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
          <span>© {new Date().getFullYear()} Royalty Beauty by Ikonomaki</span>
          <span>Designed by Nexus Media</span>
        </div>
      </div>
    </footer>
  );
}
