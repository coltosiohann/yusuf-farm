import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, ShieldCheck, Wheat } from "lucide-react";
import { Link } from "react-router-dom";
import bull from "../images/bull.jpg";
import halal from "../images/halal.jpg";
import sheep from "../images/sheep.jpg";

const animals = [
  {
    title: "Bull trading",
    description:
      "Premium bulls selected to support stronger breeding outcomes, herd quality, and buyer confidence.",
    image: bull,
  },
  {
    title: "Sheep trading",
    description:
      "Sheep chosen for welfare, breed quality, and the consistency expected from a more serious livestock partner.",
    image: sheep,
  },
  {
    title: "Halal standards",
    description:
      "Halal-led principles reinforce cleanliness, ethical treatment, and a clearer sense of trust across the offering.",
    image: halal,
  },
];

const standards = [
  {
    icon: BadgeCheck,
    title: "Health and quality checks",
    description:
      "Each animal is reviewed with care before any trade conversation moves forward.",
  },
  {
    icon: ShieldCheck,
    title: "Ethical handling",
    description:
      "Welfare, calm movement, and responsible farm routines remain central to the operation.",
  },
  {
    icon: Wheat,
    title: "Balanced raising",
    description:
      "Good pasture, consistent feeding, and patient day-to-day management support the final result.",
  },
];

const AnimalTrading = () => {
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
            <span className="eyebrow">Premium livestock</span>
            <h1 className="section-title text-[var(--ink)] md:text-[clamp(3rem,6vw,5.2rem)]">
              Animal trading built on health, calm handling, and trust.
            </h1>
            <p className="max-w-xl text-lg text-[var(--muted)] md:text-xl">
              Yusuf Farm works with buyers who value strong breeding stock, steady
              routines, and animals raised with room, patience, and responsible care.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="brand-button">
                Request details
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/gallery" className="ghost-button">
                View the gallery
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="page-hero-figure h-[440px] md:h-[560px]"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15 }}
          >
            <img src={bull} alt="Premium bull at Yusuf Farm" className="h-full w-full object-cover" />
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
          <span className="eyebrow">Trading standards</span>
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

export default AnimalTrading;
