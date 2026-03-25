import { motion } from "framer-motion";
import { ArrowRight, ChefHat, ExternalLink, Sprout } from "lucide-react";
import { Link } from "react-router-dom";
import farm from "../images/FERMA.jpg";
import yusufkebap from "../images/optimized/yusufkebap.webp";

const offerings = [
  {
    badge: "Dining",
    title: "Farm-to-table restaurant",
    description:
      "Yusuf Kebap brings farm values to the table through flavor, hospitality, and halal-minded sourcing.",
    image: yusufkebap,
    url: "https://yusufkebapdoner.ro/",
    external: true,
  },
  {
    badge: "Estate",
    title: "Sustainable farm",
    description:
      "Open land, balanced care, and daily animal routines remain at the heart of Yusuf Farm.",
    image: farm,
    url: "/animal-trading",
    external: false,
  },
  {
    badge: "Story",
    title: "Farm story and visits",
    description:
      "Guests can learn the history of the farm, see the setting, and arrange visits or conversations with the team.",
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1400&q=80",
    url: "/story",
    external: false,
  },
];

const OfferingLink = ({
  external,
  url,
}: {
  external: boolean;
  url: string;
}) => {
  if (external) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="brand-button mt-6 w-fit"
      >
        Visit Yusuf Kebap
        <ExternalLink className="h-4 w-4" />
      </a>
    );
  }

  return (
    <Link to={url} className="brand-button mt-6 w-fit">
      Learn more
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
};

const Offerings = () => {
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
            <span className="eyebrow">What Yusuf Farm offers</span>
            <h1 className="section-title text-[var(--ink)] md:text-[clamp(3rem,6vw,5.2rem)]">
              From livestock to meals, every offering starts at the farm.
            </h1>
            <p className="max-w-xl text-lg text-[var(--muted)] md:text-xl">
              Yusuf Farm brings together premium animals, halal-minded food, and
              visitor experiences that help people understand the place behind the name.
            </p>
          </motion.div>

          <motion.div
            className="page-hero-figure h-[440px] md:h-[560px]"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15 }}
          >
            <img src={farm} alt="Yusuf Farm offering hero" className="h-full w-full object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="section-shell py-8 md:py-12">
        <div className="space-y-5">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              className="surface-card grid gap-6 overflow-hidden p-4 md:p-5 lg:grid-cols-[0.95fr_1.05fr]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
            >
              <div className={`media-frame ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <img
                  src={offering.image}
                  alt={offering.title}
                  className="h-[320px] w-full object-cover md:h-[360px]"
                  loading="lazy"
                />
              </div>
              <div
                className={`flex flex-col justify-center p-2 md:p-4 ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[var(--clay)]">
                  {offering.badge}
                </p>
                <h2 className="mt-4 text-[clamp(2rem,4vw,3.4rem)] leading-[1.02] text-[var(--ink)]">
                  {offering.title}
                </h2>
                <p className="mt-4 max-w-xl text-[var(--muted)]">{offering.description}</p>
                <OfferingLink external={offering.external} url={offering.url} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-shell py-8 md:py-12">
        <motion.div
          className="surface-card grid gap-4 p-6 md:grid-cols-3 md:p-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75 }}
        >
          <div className="soft-card h-full">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(36,50,38,0.08)] text-[var(--olive)]">
              <ChefHat className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-2xl text-[var(--ink)]">Dining rooted here</h3>
            <p className="mt-3 text-[var(--muted)]">
              Meals at Yusuf Kebap carry the same care for origin and hospitality found on the farm.
            </p>
          </div>
          <div className="soft-card h-full">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(36,50,38,0.08)] text-[var(--olive)]">
              <Sprout className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-2xl text-[var(--ink)]">Land and routine</h3>
            <p className="mt-3 text-[var(--muted)]">
              Animals, land, and daily routines work together to shape the quality of the farm.
            </p>
          </div>
          <div className="soft-card h-full">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(36,50,38,0.08)] text-[var(--olive)]">
              <ArrowRight className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-2xl text-[var(--ink)]">Visit the estate</h3>
            <p className="mt-3 text-[var(--muted)]">
              Visitors can come for livestock, dining, or a closer look at the estate itself.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Offerings;
