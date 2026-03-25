import { motion } from "framer-motion";
import {
  ArrowRight,
  ChefHat,
  Leaf,
  ShieldCheck,
  Users,
  Wheat,
} from "lucide-react";
import { Link } from "react-router-dom";
import bull from "../images/Bullw.webp";
import farm from "../images/FERMA.jpg";
import kebap from "../images/optimized/yusufkebap.webp";
import sheep from "../images/sheepw.webp";

const pillars = [
  {
    icon: Leaf,
    title: "Pasture-led care",
    description:
      "Animals are raised with room, routine, and a calmer pace that supports quality from the start.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted standards",
    description:
      "Halal-led handling, responsible sourcing, and attention to breeding quality shape the way the farm operates.",
  },
  {
    icon: Users,
    title: "Family hospitality",
    description:
      "Visitors are welcomed through meals, guided visits, and direct conversations with the people behind the farm.",
  },
];

const experiences = [
  {
    title: "Livestock trading",
    description:
      "Premium bulls and sheep selected for buyers who care about health, temperament, and consistency.",
    image: bull,
    url: "/animal-trading",
    external: false,
  },
  {
    title: "Yusuf Kebap",
    description:
      "The restaurant carries the farm's values into everyday meals, hospitality, and halal-minded sourcing.",
    image: kebap,
    url: "https://yusufkebapdoner.ro/",
    external: true,
  },
  {
    title: "Farm visits",
    description:
      "Walk the grounds, see the animals, and understand the rhythm of Yusuf Farm through scheduled visits.",
    image: sheep,
    url: "/contact",
    external: false,
  },
];

const stats = [
  { value: "1920", label: "farm heritage" },
  { value: "Halal", label: "guiding standard" },
  { value: "Visits", label: "by appointment" },
];

const Home = () => {
  return (
    <div className="pb-8 pt-6 md:pt-10">
      <section className="page-hero">
        <div className="absolute left-[8%] top-0 h-52 w-52 rounded-full bg-[radial-gradient(circle,_rgba(200,155,86,0.24),_transparent_70%)] blur-3xl" />
        <div className="absolute right-[12%] top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(36,50,38,0.12),_transparent_72%)] blur-3xl" />
        <div className="page-hero-grid">
          <motion.div
            className="page-hero-copy"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow">Romania . Halal-led livestock and hospitality</span>
            <h1 className="display-title max-w-[13ch] text-[var(--ink)]">
              Raised with care. Presented with character.
            </h1>
            <p className="max-w-xl text-lg text-[var(--muted)] md:text-xl">
              From bulls and sheep to halal-led hospitality, Yusuf Farm is a place
              where open land, careful raising, and a warm welcome come together.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link to="/offerings" className="brand-button">
                Explore the estate
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/story" className="ghost-button">
                Read our story
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-chip">
                  <p className="text-2xl font-semibold text-[var(--ink)]">{stat.value}</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <div className="page-hero-figure h-[480px] md:h-[580px]">
              <img src={farm} alt="Yusuf Farm landscape" className="h-full w-full object-cover" />
            </div>

            <motion.div
              className="absolute -bottom-8 left-4 right-12 soft-card p-5 md:left-8 md:right-28"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[var(--muted)]">
                Daily approach
              </p>
              <p className="mt-3 text-lg font-semibold text-[var(--ink)]">
                Raised on open ground with patience and routine.
              </p>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Balanced feeding, fresh air, and steady care shape the quality of
                every animal at Yusuf Farm.
              </p>
            </motion.div>

            <motion.div
              className="absolute -top-5 right-4 hidden w-48 overflow-hidden rounded-[24px] border border-white/50 bg-white/80 shadow-[0_18px_45px_rgba(57,42,28,0.16)] md:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.5 }}
            >
              <img src={bull} alt="Premium livestock" className="h-32 w-full object-cover" />
              <div className="p-4">
                <p className="text-sm font-semibold text-[var(--ink)]">Premium livestock</p>
                <p className="mt-1 text-xs text-[var(--muted)]">
                  Bulls and sheep selected for health, temperament, and consistent quality.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section-shell pb-6 pt-6 md:pb-12">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            className="surface-card p-6 md:p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow">Why people choose Yusuf Farm</span>
            <h2 className="section-title mt-5 text-[var(--ink)]">
              Strong animals, honest work, and a peaceful setting.
            </h2>
            <p className="section-lede">
              The farm is built around animal welfare, careful selection, halal
              respect, and the kind of hospitality that turns a visit into a long-term relationship.
            </p>
            <Link to="/offerings" className="brand-button mt-8">
              Explore our services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <motion.div
                  key={pillar.title}
                  className="soft-card h-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.65, delay: index * 0.1 }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(36,50,38,0.08)] text-[var(--olive)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-2xl text-[var(--ink)]">{pillar.title}</h3>
                  <p className="mt-3 text-[var(--muted)]">{pillar.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell py-8 md:py-12">
        <motion.div
          className="surface-card grid gap-8 p-6 md:p-8 lg:grid-cols-[0.72fr_1.28fr]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75 }}
        >
          <div>
            <span className="eyebrow">On the estate</span>
            <h2 className="section-title mt-5 text-[var(--ink)]">
              What you can discover at Yusuf Farm.
            </h2>
            <p className="section-lede">
              Some visitors come for livestock. Others come for dining, sourcing,
              or simply to understand the place behind the name.
            </p>
            <Link to="/contact" className="ghost-button mt-8">
              Plan a visit
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                className="overflow-hidden rounded-[28px] border border-[rgba(71,56,42,0.1)] bg-white/72 shadow-[0_16px_44px_rgba(57,42,28,0.1)]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: index * 0.1 }}
              >
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-5">
                  <h3 className="text-2xl text-[var(--ink)]">{experience.title}</h3>
                  <p className="mt-3 text-sm text-[var(--muted)]">{experience.description}</p>
                  {experience.external ? (
                    <a
                      href={experience.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--olive)]"
                    >
                      Visit Yusuf Kebap
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <Link
                      to={experience.url}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--olive)]"
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="section-shell pb-12 pt-4 md:pb-16">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            className="media-frame"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75 }}
          >
            <img
              src={sheep}
              alt="Sheep raised at Yusuf Farm"
              className="h-[360px] w-full object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            className="surface-card flex h-full flex-col justify-between p-6 md:p-8"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75 }}
          >
            <div>
            <span className="eyebrow">Visits by appointment</span>
            <h2 className="section-title mt-5 text-[var(--ink)]">
              Come experience the farm in person.
            </h2>
            <p className="section-lede">
              Scheduled visits make it easier to see the animals, walk the land,
              and speak directly with the people who care for the farm every day.
            </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="stat-chip">
                <div className="flex items-center gap-2 text-[var(--olive)]">
                  <ChefHat className="h-4 w-4" />
                  <span className="text-sm font-semibold">Dining</span>
                </div>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  Farm values continue through the Yusuf Kebap dining experience.
                </p>
              </div>
              <div className="stat-chip">
                <div className="flex items-center gap-2 text-[var(--olive)]">
                  <Wheat className="h-4 w-4" />
                  <span className="text-sm font-semibold">Visits</span>
                </div>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  Walk the grounds and speak directly with the farm team.
                </p>
              </div>
            </div>

            <Link to="/gallery" className="brand-button mt-8 w-fit">
              See farm life
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
