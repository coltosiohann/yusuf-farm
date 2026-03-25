import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, ShieldCheck, Wheat } from "lucide-react";
import { Link } from "react-router-dom";
import bull from "../../images/bull.jpg";
import halal from "../../images/halal.jpg";
import sheep from "../../images/sheep.jpg";

const animals = [
  {
    title: "Comerț cu tauri",
    description:
      "Tauri premium selectați pentru rezultate genetice mai bune, calitate superioară a efectivului și mai multă încredere pentru cumpărător.",
    image: bull,
  },
  {
    title: "Comerț cu oi",
    description:
      "Oi alese pentru bunăstare, calitate de rasă și consecvența așteptată de la un partener serios de comerț.",
    image: sheep,
  },
  {
    title: "Standarde halal",
    description:
      "Principiile halal întăresc ideea de curățenie, tratament etic și încredere în jurul întregii oferte.",
    image: halal,
  },
];

const standards = [
  {
    icon: BadgeCheck,
    title: "Verificări de sănătate și calitate",
    description:
      "Fiecare animal este evaluat cu grijă înainte ca orice discuție comercială să meargă mai departe.",
  },
  {
    icon: ShieldCheck,
    title: "Manipulare etică",
    description:
      "Bunăstarea, mișcarea calmă și rutina responsabilă a fermei rămân esențiale în activitate.",
  },
  {
    icon: Wheat,
    title: "Creștere echilibrată",
    description:
      "Pășunea bună, hrănirea consecventă și managementul răbdător susțin rezultatul final.",
  },
];

const AnimalTradingRo = () => {
  return (
    <div className="pb-12 pt-6 md:pt-10">
      <section className="page-hero">
        <div className="page-hero-grid">
          <motion.div
            className="page-hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <span className="eyebrow">Animale premium</span>
            <h1 className="section-title text-[var(--ink)] md:text-[clamp(3rem,6vw,5.2rem)]">
              Comerț cu animale bazat pe sănătate, grijă și încredere.
            </h1>
            <p className="max-w-xl text-lg text-[var(--muted)] md:text-xl">
              Yusuf Farm lucrează cu cumpărători care caută animale bune de reproducție,
              rutină constantă și creștere făcută cu spațiu, răbdare și grijă responsabilă.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/ro/contact" className="brand-button">
                Cere detalii
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/ro/galerie" className="ghost-button">
                Vezi galeria
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="page-hero-figure h-[440px] md:h-[560px]"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15 }}
          >
            <img src={bull} alt="Taur premium la Yusuf Farm" className="h-full w-full object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="section-shell py-8 md:py-12">
        <div className="grid gap-4 md:grid-cols-3">
          {animals.map((animal, index) => (
            <motion.div
              key={animal.title}
              className="overflow-hidden rounded-[28px] border border-[rgba(71,56,42,0.1)] bg-white/72 shadow-[0_18px_44px_rgba(57,42,28,0.1)]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: index * 0.1 }}
            >
              <img
                src={animal.image}
                alt={animal.title}
                className="h-64 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[var(--clay)]">
                  Yusuf Farm
                </p>
                <h2 className="mt-3 text-3xl text-[var(--ink)]">{animal.title}</h2>
                <p className="mt-3 text-[var(--muted)]">{animal.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-shell py-8 md:py-12">
        <motion.div
          className="surface-card p-6 md:p-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75 }}
        >
          <span className="eyebrow">Standarde de comerț</span>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {standards.map((standard, index) => {
              const Icon = standard.icon;

              return (
                <motion.div
                  key={standard.title}
                  className="soft-card h-full"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.65, delay: index * 0.08 }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(36,50,38,0.08)] text-[var(--olive)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-2xl text-[var(--ink)]">{standard.title}</h3>
                  <p className="mt-3 text-[var(--muted)]">{standard.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AnimalTradingRo;
