import { contact, nav } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-onyx border-t border-ivory-dim/10">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          <div>
            <span className="font-display text-3xl text-ivory tracking-[0.06em]">
              AEL
            </span>
            <span className="ml-2 text-[10px] uppercase tracking-[0.4em] text-gold-bright/90">
              Chauffeurs
            </span>
            <p className="mt-4 max-w-xs text-sm text-ivory-dim/70 font-light leading-relaxed">
              Luxury travel experiences in executive vehicles throughout
              the UK, including airport transfers and private tours.
            </p>
          </div>

          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold">
              Navigate
            </span>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-ivory-dim/75 hover:text-gold-bright transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold">
              Contact
            </span>
            <ul className="mt-4 space-y-2.5 text-sm text-ivory-dim/75 font-light">
              <li>
                <a href={contact.phoneHref} className="hover:text-gold-bright transition-colors">
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-gold-bright transition-colors">
                  {contact.email}
                </a>
              </li>
              <li>
                {contact.addressLines[0]} {contact.addressLines[1]}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ivory-dim/10 pt-8 text-xs text-ivory-dim/50 sm:flex-row">
          <span>&copy; {new Date().getFullYear()} AEL Chauffeurs. All rights reserved.</span>
          <span className="tracking-[0.2em] uppercase">Est. Excellence In Every Mile</span>
        </div>
      </div>
    </footer>
  );
}
