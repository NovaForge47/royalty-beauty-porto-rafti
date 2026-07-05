import { useState } from "react";
import { toast } from "sonner";

const SERVICES = [
  "Κούρεμα",
  "Hair Makeover",
  "Hair Extensions",
  "Makeup",
  "Eyelashes",
  "Bridal",
];

export function BookingForm() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const email = String(data.get("email") || "");
    const service = String(data.get("service") || "");
    const date = String(data.get("date") || "");
    const time = String(data.get("time") || "");
    const notes = String(data.get("notes") || "");

    const body = encodeURIComponent(
      `Όνομα: ${name}\nΤηλέφωνο: ${phone}\nEmail: ${email}\nΥπηρεσία: ${service}\nΗμερομηνία: ${date}\nΏρα: ${time}\nΣημειώσεις: ${notes}`,
    );
    const subject = encodeURIComponent(`Νέο ραντεβού — ${name}`);
    window.location.href = `mailto:hello@royaltybeauty.gr?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSubmitting(false);
      toast.success("Το αίτημά σου ετοιμάστηκε — στείλε το email για επιβεβαίωση.");
    }, 400);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="bg-card border border-border p-8 lg:p-12 grid gap-6 md:grid-cols-2"
    >
      <Field label="Ονοματεπώνυμο" name="name" required />
      <Field label="Τηλέφωνο" name="phone" type="tel" required />
      <Field label="Email" name="email" type="email" required className="md:col-span-2" />

      <div className="flex flex-col gap-2">
        <label className="text-[0.65rem] tracking-[0.3em] uppercase text-muted-foreground">
          Υπηρεσία
        </label>
        <select
          name="service"
          required
          className="bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gold"
        >
          <option value="">Επίλεξε υπηρεσία…</option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <Field label="Ημερομηνία" name="date" type="date" required />
      <Field label="Ώρα" name="time" type="time" required />

      <div className="flex flex-col gap-2 md:col-span-2">
        <label className="text-[0.65rem] tracking-[0.3em] uppercase text-muted-foreground">
          Σημειώσεις (προαιρετικό)
        </label>
        <textarea
          name="notes"
          rows={4}
          className="bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gold resize-none"
        />
      </div>

      <div className="md:col-span-2 flex justify-center pt-4">
        <button type="submit" disabled={submitting} className="btn-gold disabled:opacity-60">
          {submitting ? "Αποστολή…" : "Κλείσε Ραντεβού"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="text-[0.65rem] tracking-[0.3em] uppercase text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gold"
      />
    </div>
  );
}
