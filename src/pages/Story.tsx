import { motion } from "framer-motion";
import { ArrowRight, Leaf, Quote, ShieldCheck, Users } from "lucide-react";
import { Link } from "react-router-dom";
import story1 from "../images/story1.jpg";
import story2 from "../images/taur_story.jpg";

const milestones = [
  {
    year: "1920",
    title: "A rooted beginning",
    description:
      "Yusuf Farm was established with a practical respect for land, livestock, and the people who rely on both.",
  },
  {
    year: "Today",
    title: "Care carried forward",
    description:
      "Daily routines, open pasture, and family stewardship still shape the way the farm works.",
  },
  {
    year: "Tomorrow",
    title: "Growth with discipline",
    description:
      "The next chapter is about continuing responsible raising, honest trade, and warm hospitality for every visitor.",
  },
];

const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Responsible farming practices and long-view decisions shape how the estate grows and how it presents itself.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "The farm is built around relationships: with buyers, with visitors, and with the people who help the work continue.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "Clear standards, halal respect, and direct communication help build long-term trust around the farm.",
  },
];

const Story = () => {
  return (
    <div className="pb-12 pt-6 md:pt-10">
      <section className="page-hero">
        <div className="page-hero-grid">
          <motion.div
            className="page-hero-copy"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <span className="eyebrow">Since 1920</span>
            <h1 className="section-title text-[var(--ink)] md:text-[clamp(3rem,6vw,5.3rem)]">
              Our story begins with land, animals, and patient work.
            </h1>
            <p className="max-w-xl text-lg text-[var(--muted)] md:text-xl">
              Yusuf Farm was built through daily care, open pasture, and a strong
              respect for the people who raise, trade, and prepare food from the land.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="stat-chip">
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[var(--muted)]">
                  Legacy
                </p>
                <p className="mt-2 text-[var(--ink)]">
                  Built on continuity, animal care, and a strong sense of place.
                </p>
              </div>
              <div className="stat-chip">
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[var(--muted)]">
                  Practice
                </p>
                <p className="mt-2 text-[var(--ink)]">
                  Daily care, steady routines, and open land still shape the farm today.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15 }}
          >
            <div className="page-hero-figure h-[480px] md:h-[560px]">
              <img src={story1} alt="Historic Yusuf Farm scene" className="h-full w-full object-cover" />
            </div>
            <div className="absolute bottom-5 right-5 hidden w-44 overflow-hidden rounded-[24px] border border-white/50 bg-white/80 shadow-[0_18px_45px_rgba(57,42,28,0.18)] md:block">
              <img src={story2} alt="Modern Yusuf Farm scene" className="h-28 w-full object-cover" />
              <div className="p-4">
                <p className="text-sm font-semibold text-[var(--ink)]">Past meets present</p>
                <p className="mt-1 text-xs text-[var(--muted)]">
                  The same values continue through today's work.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-shell py-8 md:py-12">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            className="surface-card p-6 md:p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(36,50,38,0.08)] text-[var(--olive)]">
              <Quote className="h-5 w-5" />
            </div>
            <h2 className="section-title mt-5 text-[var(--ink)]">
              A farm built on patience, continuity, and work.
            </h2>
            <p className="section-lede">
              Yusuf Farm grew through practical knowledge, careful animal handling,
              and a setting where visitors can still feel the pace of real farm life.
            </p>
            <Link to="/contact" className="brand-button mt-8">
              Visit the farm
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.title}
                className="soft-card h-full"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, delay: index * 0.1 }}
              >
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[var(--clay)]">
                  {milestone.year}
                </p>
                <h3 className="mt-4 text-2xl text-[var(--ink)]">{milestone.title}</h3>
                <p className="mt-3 text-[var(--muted)]">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
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
          <span className="eyebrow">Core values</span>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  className="soft-card h-full"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.65, delay: index * 0.08 }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(174,94,52,0.08)] text-[var(--clay)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-2xl text-[var(--ink)]">{value.title}</h3>
                  <p className="mt-3 text-[var(--muted)]">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Story;
