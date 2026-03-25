import { ExternalLink, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { isRomanianPath, routeEntries } from "../content/routes";

const Footer = () => {
  const { pathname } = useLocation();
  const isRomanian = isRomanianPath(pathname);
  const navItems = routeEntries.map((route) => ({
    key: route.key,
    path: isRomanian ? route.roPath : route.enPath,
    label: isRomanian ? route.roLabel : route.enLabel,
  }));

  return (
    <footer className="section-shell pb-6 pt-10 md:pb-8">
      <div className="surface-card overflow-hidden px-6 py-10 md:px-10 md:py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <span className="eyebrow">
              {isRomanian ? "Ferma, comerț, ospitalitate" : "Farm, trade, hospitality"}
            </span>
            <h2 className="mt-5 text-3xl text-[var(--ink)] md:text-4xl">
              {isRomanian
                ? "Animale premium, valori halal și ospitalitate de fermă."
                : "Premium livestock, halal values, and farm hospitality."}
            </h2>
            <p className="mt-4 max-w-xl text-[var(--muted)]">
              {isRomanian
                ? "Yusuf Farm aduce împreună tauri, oi, mese bune și vizite la fermă sub aceeași tradiție de grijă, încredere și continuitate."
                : "Yusuf Farm brings together bulls, sheep, meals, and farm visits under the same tradition of care, trust, and continuity."}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.facebook.com/people/Yusuf-Farm/100090386741176/"
                target="_blank"
                rel="noopener noreferrer"
                className="ghost-button px-4 py-2.5"
              >
                <Facebook className="h-4 w-4" />
                Facebook
              </a>
              <a
                href="https://www.instagram.com/yusuffarmromania/"
                target="_blank"
                rel="noopener noreferrer"
                className="ghost-button px-4 py-2.5"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[var(--muted)]">
              {isRomanian ? "Navigare" : "Navigate"}
            </p>
            <div className="mt-5 grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  className="flex items-center justify-between rounded-[18px] border border-[rgba(71,56,42,0.1)] bg-white/60 px-4 py-3 text-sm font-semibold text-[var(--ink)] transition duration-300 hover:-translate-y-0.5"
                >
                  {item.label}
                  <ExternalLink className="h-4 w-4 text-[var(--muted)]" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[var(--muted)]">
              {isRomanian ? "Contact" : "Contact"}
            </p>
            <div className="mt-5 space-y-4">
              <a
                href="mailto:yowsef@yusuf-farm.ro"
                className="soft-card flex items-start gap-4 p-5"
              >
                <Mail className="mt-1 h-5 w-5 text-[var(--clay)]" />
                <span>
                  <span className="block text-sm font-semibold text-[var(--muted)]">
                    Email
                  </span>
                  <span className="block text-[var(--ink)]">yowsef@yusuf-farm.ro</span>
                </span>
              </a>
              <a href="tel:+40799619999" className="soft-card flex items-start gap-4 p-5">
                <Phone className="mt-1 h-5 w-5 text-[var(--clay)]" />
                <span>
                  <span className="block text-sm font-semibold text-[var(--muted)]">
                    {isRomanian ? "Telefon" : "Phone"}
                  </span>
                  <span className="block text-[var(--ink)]">+40 799 619 999</span>
                </span>
              </a>
              <a
                href="https://maps.google.com/?q=J8FV%2BP54%2C%20Romania%20117036"
                target="_blank"
                rel="noopener noreferrer"
                className="soft-card flex items-start gap-4 p-5"
              >
                <MapPin className="mt-1 h-5 w-5 text-[var(--clay)]" />
                <span>
                  <span className="block text-sm font-semibold text-[var(--muted)]">
                    {isRomanian ? "Adresă" : "Address"}
                  </span>
                  <span className="block text-[var(--ink)]">J8FV+P54, Romania 117036</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[rgba(71,56,42,0.1)] pt-6 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Yusuf Farm.</p>
          <p>
            {isRomanian
              ? "Creștere responsabilă, standarde halal, dining și vizite la fermă."
              : "Responsible raising, halal standards, dining, and farm visits."}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
