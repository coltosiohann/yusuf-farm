import { motion } from "framer-motion";
import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { FormEvent, useState } from "react";

const ContactRo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = formData.name
      ? `Mesaj de la ${formData.name}`
      : "Mesaj pentru Yusuf Farm";
    const body = [
      `Nume: ${formData.name || "-"}`,
      `Email: ${formData.email || "-"}`,
      "",
      formData.message || "Bună, aș dori să iau legătura cu Yusuf Farm.",
    ].join("\n");

    window.location.href = `mailto:yowsef@yusuf-farm.ro?${new URLSearchParams({
      subject,
      body,
    }).toString()}`;
  };

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
            <span className="eyebrow">Contact Yusuf Farm</span>
            <h1 className="section-title text-[var(--ink)] md:text-[clamp(3rem,6vw,5.2rem)]">
              Hai să vorbim despre vizite, animale și rezervări.
            </h1>
            <p className="max-w-xl text-lg text-[var(--muted)] md:text-xl">
              Scrie-ne dacă vrei să vizitezi ferma, să întrebi despre disponibilitatea
              animalelor sau să afli mai multe despre Yusuf Kebap.
            </p>
          </motion.div>

          <motion.div
            className="surface-card grid gap-4 p-5 md:p-6"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15 }}
          >
            <div className="soft-card flex items-start gap-4">
              <Phone className="mt-1 h-5 w-5 text-[var(--clay)]" />
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[var(--muted)]">
                  Telefon
                </p>
                <a href="tel:+40799619999" className="mt-2 block text-xl text-[var(--ink)]">
                  +40 799 619 999
                </a>
              </div>
            </div>
            <div className="soft-card flex items-start gap-4">
              <Mail className="mt-1 h-5 w-5 text-[var(--clay)]" />
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[var(--muted)]">
                  Email
                </p>
                <a href="mailto:yowsef@yusuf-farm.ro" className="mt-2 block text-xl text-[var(--ink)]">
                  yowsef@yusuf-farm.ro
                </a>
              </div>
            </div>
            <div className="soft-card flex items-start gap-4">
              <MapPin className="mt-1 h-5 w-5 text-[var(--clay)]" />
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[var(--muted)]">
                  Adresă
                </p>
                <p className="mt-2 text-[var(--ink)]">J8FV+P54, Romania 117036</p>
              </div>
            </div>
            <div className="soft-card flex items-start gap-4">
              <Clock3 className="mt-1 h-5 w-5 text-[var(--clay)]" />
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[var(--muted)]">
                  Potrivit pentru
                </p>
                <p className="mt-2 text-[var(--ink)]">
                  Vizite la fermă, întrebări despre animale, rezervări la restaurant și mesaje generale.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-shell py-8 md:py-12">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            className="surface-card p-6 md:p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow">Contact direct</span>
            <h2 className="section-title mt-5 text-[var(--ink)]">
              Spune-ne cu ce te poate ajuta Yusuf Farm.
            </h2>
            <p className="section-lede">
              Fie că te interesează animalele, o vizită la fermă sau restaurantul,
              te putem orienta rapid către informațiile potrivite.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="surface-card p-6 md:p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                  Nume
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(event) =>
                    setFormData((current) => ({
                      ...current,
                      name: event.target.value,
                    }))
                  }
                  className="contact-field"
                  placeholder="Numele tău"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(event) =>
                    setFormData((current) => ({
                      ...current,
                      email: event.target.value,
                    }))
                  }
                  className="contact-field"
                  placeholder="Email-ul tău"
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                Mesaj
              </span>
              <textarea
                name="message"
                rows={6}
                value={formData.message}
                onChange={(event) =>
                  setFormData((current) => ({
                    ...current,
                    message: event.target.value,
                  }))
                }
                className="contact-field resize-none"
                placeholder="Spune-ne cu ce te poate ajuta Yusuf Farm."
              />
            </label>

            <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-[var(--muted)]">
                Trimiterea deschide aplicația ta de email cu mesajul completat automat.
              </p>
              <button type="submit" className="brand-button">
                Trimite mesaj
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default ContactRo;
