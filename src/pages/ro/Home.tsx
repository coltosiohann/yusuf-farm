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
import bull from "../../images/bull.jpg";
import farm from "../../images/FERMA.jpg";
import kebap from "../../images/yusufkebap.png";
import sheep from "../../images/sheep.jpg";

const pillars = [
  {
    icon: Leaf,
    title: "Grijă orientată spre pășune",
    description:
      "Animalele sunt crescute cu spațiu, ritm și o rutină mai calmă care susține calitatea încă de la început.",
  },
  {
    icon: ShieldCheck,
    title: "Standarde de încredere",
    description:
      "Manipularea ghidată de standarde halal, sursele responsabile și atenția pentru calitatea genetică definesc modul în care lucrează ferma.",
  },
  {
    icon: Users,
    title: "Ospitalitate de familie",
    description:
      "Vizitatorii sunt primiți prin mese, vizite ghidate și conversații directe cu oamenii din spatele fermei.",
  },
];

const experiences = [
  {
    title: "Comerț cu animale",
    description:
      "Tauri și oi premium selectați pentru cumpărători care apreciază sănătatea, temperamentul și consecvența.",
    image: bull,
    url: "/ro/comert-animale",
    external: false,
  },
  {
    title: "Yusuf Kebap",
    description:
      "Restaurantul duce valorile fermei în farfurie prin gust, ospitalitate și aprovizionare atentă.",
    image: kebap,
    url: "https://yusufkebapdoner.ro/",
    external: true,
  },
  {
    title: "Vizite la fermă",
    description:
      "Plimbă-te prin fermă, vezi animalele și înțelege ritmul locului prin vizite programate.",
    image: sheep,
    url: "/ro/contact",
    external: false,
  },
];

const stats = [
  { value: "1920", label: "punct de plecare" },
  { value: "Halal", label: "standard de bază" },
  { value: "Vizite", label: "cu programare" },
];

const HomeRo = () => {
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
            <span className="eyebrow">România . Comerț, halal și ospitalitate</span>
            <h1 className="display-title max-w-[13ch] text-[var(--ink)]">
              Crescut cu grijă. Prezentat cu personalitate.
            </h1>
            <p className="max-w-xl text-lg text-[var(--muted)] md:text-xl">
              De la tauri și oi până la ospitalitate și mâncare ghidată de valori halal,
              Yusuf Farm este un loc unde terenul deschis, creșterea atentă și primirea caldă merg împreună.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link to="/ro/oferte" className="brand-button">
                Explorează domeniul
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/ro/povestea-noastra" className="ghost-button">
                Citește povestea
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
              <img src={farm} alt="Peisaj Yusuf Farm" className="h-full w-full object-cover" />
            </div>

            <motion.div
              className="absolute -bottom-8 left-4 right-12 soft-card p-5 md:left-8 md:right-28"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[var(--muted)]">
                Modul de lucru
              </p>
              <p className="mt-3 text-lg font-semibold text-[var(--ink)]">
                Animale crescute pe teren deschis, cu răbdare și rutină.
              </p>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Hrănirea echilibrată, aerul curat și grija constantă susțin calitatea fiecărui animal.
              </p>
            </motion.div>

            <motion.div
              className="absolute -top-5 right-4 hidden w-48 overflow-hidden rounded-[24px] border border-white/50 bg-white/80 shadow-[0_18px_45px_rgba(57,42,28,0.16)] md:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.5 }}
            >
              <img src={bull} alt="Animale premium" className="h-32 w-full object-cover" />
              <div className="p-4">
                <p className="text-sm font-semibold text-[var(--ink)]">Selecție premium</p>
                <p className="mt-1 text-xs text-[var(--muted)]">
                  Tauri și oi alese pentru sănătate, temperament și calitate constantă.
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
            <span className="eyebrow">De ce aleg oamenii Yusuf Farm</span>
            <h2 className="section-title mt-5 text-[var(--ink)]">
              Animale bune, muncă onestă și un loc liniștit.
            </h2>
            <p className="section-lede">
              Ferma este construită în jurul bunăstării animalelor, selecției atente,
              respectului halal și unei ospitalități care transformă o vizită într-o relație de durată.
            </p>
            <Link to="/ro/oferte" className="brand-button mt-8">
              Explorează serviciile
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
            <span className="eyebrow">Pe domeniu</span>
            <h2 className="section-title mt-5 text-[var(--ink)]">
              Ce poți descoperi la Yusuf Farm.
            </h2>
            <p className="section-lede">
              Unii vizitatori vin pentru animale. Alții vin pentru dining, aprovizionare
              sau pur și simplu pentru a înțelege locul din spatele numelui.
            </p>
            <Link to="/ro/contact" className="ghost-button mt-8">
              Planifică o vizită
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
                      Vezi Yusuf Kebap
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <Link
                      to={experience.url}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--olive)]"
                    >
                      Află mai multe
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
              alt="Oi crescute la Yusuf Farm"
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
            <span className="eyebrow">Vizite cu programare</span>
            <h2 className="section-title mt-5 text-[var(--ink)]">
              Vino să vezi ferma chiar la ea acasă.
            </h2>
            <p className="section-lede">
              Vizitele programate fac mai ușor să vezi animalele, să mergi prin
              teren și să vorbești direct cu oamenii care îngrijesc ferma.
            </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="stat-chip">
                <div className="flex items-center gap-2 text-[var(--olive)]">
                  <ChefHat className="h-4 w-4" />
                  <span className="text-sm font-semibold">Dining</span>
                </div>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  Valorile fermei continuă prin experiența de dining Yusuf Kebap.
                </p>
              </div>
              <div className="stat-chip">
                <div className="flex items-center gap-2 text-[var(--olive)]">
                  <Wheat className="h-4 w-4" />
                  <span className="text-sm font-semibold">Vizite</span>
                </div>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  Plimbă-te prin fermă și vorbește direct cu echipa.
                </p>
              </div>
            </div>

            <Link to="/ro/galerie" className="brand-button mt-8 w-fit">
              Vezi viața fermei
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomeRo;
