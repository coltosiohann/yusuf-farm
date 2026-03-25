import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Globe, Menu, Sprout, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  isRomanianPath,
  mapPathToLocale,
  routeEntries,
} from "../content/routes";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isRomanian = isRomanianPath(location.pathname);
  const navItems = routeEntries.map((route) => ({
    key: route.key,
    path: isRomanian ? route.roPath : route.enPath,
    label: isRomanian ? route.roLabel : route.enLabel,
  }));

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-6">
      <div className="section-shell">
        <div className="surface-card flex items-center justify-between gap-4 px-5 py-4 md:px-6">
          <Link
            to={isRomanian ? "/ro" : "/"}
            className="flex min-w-0 items-center gap-3"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[18px] bg-[var(--olive)] text-[var(--canvas)] shadow-[0_16px_32px_rgba(36,50,38,0.24)]">
              <Sprout className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block text-[0.68rem] font-extrabold uppercase tracking-[0.28em] text-[var(--muted)]">
                Romania
              </span>
              <span className="block truncate text-xl font-semibold text-[var(--ink)]">
                Yusuf Farm
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-[rgba(71,56,42,0.1)] bg-white/55 px-2 py-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="flex items-center gap-1 rounded-full border border-[rgba(71,56,42,0.1)] bg-white/70 p-1 shadow-sm">
              <span className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--muted)]">
                <Globe className="h-4 w-4" />
              </span>
              {(["en", "ro"] as const).map((locale) => {
                const isActive = locale === "ro" ? isRomanian : !isRomanian;
                return (
                  <Link
                    key={locale}
                    to={mapPathToLocale(location.pathname, locale)}
                    className="lang-pill"
                    style={{
                      background: isActive ? "var(--olive)" : "transparent",
                      color: isActive ? "var(--canvas)" : "var(--muted)",
                    }}
                  >
                    {locale.toUpperCase()}
                  </Link>
                );
              })}
            </div>

            <Link
              to={isRomanian ? "/ro/contact" : "/contact"}
              className="brand-button px-5 py-2.5"
            >
              {isRomanian ? "Planifică o vizită" : "Plan a visit"}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(71,56,42,0.1)] bg-white/70 text-[var(--ink)]"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
              className="lg:hidden"
            >
              <div className="surface-card mt-3 p-4">
                <div className="mb-4 flex items-center justify-between rounded-[22px] border border-[rgba(71,56,42,0.1)] bg-white/80 p-2">
                  {(["en", "ro"] as const).map((locale) => {
                    const isActive = locale === "ro" ? isRomanian : !isRomanian;
                    return (
                      <Link
                        key={locale}
                        to={mapPathToLocale(location.pathname, locale)}
                        className="lang-pill flex-1 text-center"
                        style={{
                          background: isActive ? "var(--olive)" : "transparent",
                          color: isActive ? "var(--canvas)" : "var(--muted)",
                        }}
                      >
                        {locale === "en" ? "English" : "Română"}
                      </Link>
                    );
                  })}
                </div>

                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.key}
                      to={item.path}
                      className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <Link
                  to={isRomanian ? "/ro/contact" : "/contact"}
                  className="brand-button mt-5 w-full"
                >
                  {isRomanian ? "Planifică o vizită" : "Plan a visit"}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
