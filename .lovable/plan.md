Το Calendly δεν δέχεται κρατήσεις μέσω API από εξωτερικές φόρμες. Η μόνη σωστή λύση είναι να αντικαταστήσουμε την υπάρχουσα φόρμα με ένα embedded Calendly widget, ώστε ο πελάτης να κλείνει ραντεβού απευθείας μέσα από το site — και να εμφανίζεται αυτόματα στο Calendly σου.

### Τι θα γίνει

1. **Δημιουργία `CalendlyEmbed` component** (`src/components/CalendlyEmbed.tsx`)  
   React-safe inline embed που φορτώνει το Calendly script δυναμικά μέσα σε `useEffect`. Θα χρησιμοποιεί το event link σου: `https://calendly.com/alextheupscale/new-meeting`

2. **Αντικατάσταση φόρμας στο `src/routes/index.tsx`**  
   - Αφαιρείται η τοπική φόρμα (`name`, `service`, `date`, `time`, `phone`) και το `useState` της.  
   - Αφαιρείται το `sonner` toast logic.  
   - Στη θέση της φόρμας μπαίνει το `<CalendlyEmbed />`.  
   - Διατηρείται το section styling (heading, gold accents, layout grid).

3. **Ενημέρωση κειμένου section**  
   Το subtitle αλλάζει από "Συμπλήρωσε τη φόρμα και η ομάδα μας θα επικοινωνήσει..." σε κάτι που ενημερώνει τον πελάτη ότι κλείνει απευθείας ραντεβού online.

### Τι δεν αλλάζει

- Τα navigation links (`#booking`), τα CTA buttons σε Hero/Services, και το mobile menu παραμένουν ως έχουν — απλώς οδηγούν στην ίδια section με το Calendly widget.
- Το design system (χρώματα, typography, spacing) παραμένει αναλλοίωτο.

### Τεχνικές λεπτομέρειες

- Δεν χρειάζεται επιπλέον npm package. Χρησιμοποιείται vanilla Calendly embed script (`https://assets.calendly.com/assets/external/widget.js`) φορτωμένο δυναμικά μέσα στο component.
- Το iframe height ορίζεται σε `~700px` για άνετο scrolling στο widget.
- Το widget φορτώνεται με `async` script injection και καθαρίζεται στο unmount (αφαιρείται το script tag και το `.calendly-inline-widget` div για αποφυγή duplicates).