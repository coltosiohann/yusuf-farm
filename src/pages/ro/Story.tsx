import { motion } from "framer-motion";
import { ArrowRight, Leaf, Quote, ShieldCheck, Users } from "lucide-react";
import { Link } from "react-router-dom";
import story1 from "../../images/story1.jpg";
import story2 from "../../images/taur_story.jpg";

const milestones = [
  {
    year: "1920",
    title: "Un început bine înrădăcinat",
    description:
      "Yusuf Farm a pornit dintr-un respect practic pentru pământ, animale și oamenii care depind de ambele.",
  },
  {
    year: "Astăzi",
    title: "Grija dusă mai departe",
    description:
      "Rutina zilnică, pășunea deschisă și grija familiei continuă să modeleze felul în care lucrează ferma.",
  },
  {
    year: "Mâine",
    title: "Creștere cu disciplină",
    description:
      "Următorul capitol înseamnă creștere responsabilă, comerț cinstit și ospitalitate pentru fiecare vizitator.",
  },
];

const values = [
  {
    icon: Leaf,
    title: "Sustenabilitate",
    description:
      "Practicile agricole responsabile și deciziile luate pe termen lung modelează felul în care domeniul crește și se prezintă.",
  },
  {
    icon: Users,
    title: "Comunitate",
    description:
      "Ferma se construiește prin relații: cu cumpărătorii, cu vizitatorii și cu oamenii care duc munca mai departe.",
  },
  {
    icon: ShieldCheck,
    title: "Integritate",
    description:
      "Standardele de grijă, principiile halal și comunicarea transparentă susțin încrederea în jurul fermei.",
  },
];

const StoryRo = () => {
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
            <span className="eyebrow">Din 1920</span>
            <h1 className="section-title text-[var(--ink)] md:text-[clamp(3rem,6vw,5.3rem)]">
              Povestea noastră începe cu pământul, animalele și munca răbdătoare.
            </h1>
            <p className="max-w-xl text-lg text-[var(--muted)] md:text-xl">
              Yusuf Farm s-a construit prin grijă zilnică, pășune deschisă și respect
              pentru oamenii care cresc, comercializează și pregătesc hrană din acest loc.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="stat-chip">
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[var(--muted)]">
                  Moștenire
                </p>
                <p className="mt-2 text-[var(--ink)]">
                  Construită pe continuitate, grijă față de animale și un simț puternic al locului.
                </p>
              </div>
              <div className="stat-chip">
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[var(--muted)]">
                  Practică
                </p>
                <p className="mt-2 text-[var(--ink)]">
                  Rutina zilnică, îngrijirea constantă și terenul deschis definesc și astăzi ferma.
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
              <img src={story1} alt="Cadru istoric Yusuf Farm" className="h-full w-full object-cover" />
            </div>
            <div className="absolute bottom-5 right-5 hidden w-44 overflow-hidden rounded-[24px] border border-white/50 bg-white/80 shadow-[0_18px_45px_rgba(57,42,28,0.18)] md:block">
              <img src={story2} alt="Cadru actual Yusuf Farm" className="h-28 w-full object-cover" />
              <div className="p-4">
                <p className="text-sm font-semibold text-[var(--ink)]">Trecut și prezent</p>
                <p className="mt-1 text-xs text-[var(--muted)]">
                  Aceleași valori continuă prin munca de astăzi.
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
              O fermă construită pe răbdare, continuitate și muncă.
            </h2>
            <p className="section-lede">
              Yusuf Farm a crescut prin cunoaștere practică, îngrijire atentă a animalelor
              și un loc în care vizitatorii pot simți și astăzi ritmul real al fermei.
            </p>
            <Link to="/ro/contact" className="brand-button mt-8">
              Vizitează ferma
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
          <span className="eyebrow">Valori de bază</span>
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

export default StoryRo;
