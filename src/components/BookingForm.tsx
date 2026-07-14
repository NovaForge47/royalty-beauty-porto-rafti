const SETMORE_URL = "https://royaltybeautyxdvp.setmore.com";

export function BookingForm() {
  return (
    <div className="bg-card border border-border p-4 lg:p-6">
      <div className="relative w-full overflow-hidden border border-border" style={{ height: "780px" }}>
        <iframe
          title="Book an appointment"
          src={SETMORE_URL}
          className="w-full h-full"
          loading="lazy"
        />
      </div>
      <div className="mt-6 flex justify-center">
        <a
          href={SETMORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold"
        >
          Open Booking in New Tab
        </a>
      </div>
    </div>
  );
}
