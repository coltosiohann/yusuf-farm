import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import glr1Large from "../../images/optimized/glr1-large.webp";
import glr1Thumb from "../../images/optimized/glr1-thumb.webp";
import glr10Large from "../../images/optimized/glr10-large.webp";
import glr10Thumb from "../../images/optimized/glr10-thumb.webp";
import glr2Large from "../../images/optimized/glr2-large.webp";
import glr2Thumb from "../../images/optimized/glr2-thumb.webp";
import glr3Large from "../../images/optimized/glr3-large.webp";
import glr3Thumb from "../../images/optimized/glr3-thumb.webp";
import glr4Large from "../../images/optimized/glr4-large.webp";
import glr4Thumb from "../../images/optimized/glr4-thumb.webp";
import glr5Large from "../../images/optimized/glr5-large.webp";
import glr5Thumb from "../../images/optimized/glr5-thumb.webp";
import glr6Large from "../../images/optimized/glr6-large.webp";
import glr6Thumb from "../../images/optimized/glr6-thumb.webp";
import glr7Large from "../../images/optimized/glr7-large.webp";
import glr7Thumb from "../../images/optimized/glr7-thumb.webp";
import glr8Large from "../../images/optimized/glr8-large.webp";
import glr8Thumb from "../../images/optimized/glr8-thumb.webp";
import glr9Large from "../../images/optimized/glr9-large.webp";
import glr9Thumb from "../../images/optimized/glr9-thumb.webp";

type GalleryItem = {
  fullUrl: string;
  thumbnailUrl: string;
  title: string;
  category: string;
  note: string;
  layout: string;
};

const images: GalleryItem[] = [
  {
    fullUrl: glr1Large,
    thumbnailUrl: glr1Thumb,
    title: "Peisajul domeniului",
    category: "Cadru",
    note: "Vederi ample care stabilesc atmosfera rurală din jurul fermei.",
    layout: "md:col-span-2 md:row-span-2",
  },
  {
    fullUrl: glr2Large,
    thumbnailUrl: glr2Thumb,
    title: "Vaci la pășunat",
    category: "Animale",
    note: "Vaci care pasc pe teren deschis în ritmul obișnuit al fermei.",
    layout: "md:col-span-1",
  },
  {
    fullUrl: glr3Large,
    thumbnailUrl: glr3Thumb,
    title: "Vaci premium",
    category: "Animale",
    note: "Un cadru apropiat cu animale selectate pentru forță și calitate constantă.",
    layout: "md:col-span-1",
  },
  {
    fullUrl: glr4Large,
    thumbnailUrl: glr4Thumb,
    title: "De la fermă la masă",
    category: "Dining",
    note: "Mese și ingrediente care duc mai departe valorile fermei.",
    layout: "md:col-span-1",
  },
  {
    fullUrl: glr5Large,
    thumbnailUrl: glr5Thumb,
    title: "Piața fermei",
    category: "Experiență",
    note: "Vizitatorii văd în același loc și produsul, și atmosfera.",
    layout: "md:col-span-1 md:row-span-2",
  },
  {
    fullUrl: glr6Large,
    thumbnailUrl: glr6Thumb,
    title: "Oi de patrimoniu",
    category: "Animale",
    note: "Oi crescute cu spațiu, rutină și grijă constantă.",
    layout: "md:col-span-1",
  },
  {
    fullUrl: glr7Large,
    thumbnailUrl: glr7Thumb,
    title: "Activitate la fermă",
    category: "Mișcare",
    note: "Muncă zilnică, mișcare și viață reală în jurul fermei.",
    layout: "md:col-span-1",
  },
  {
    fullUrl: glr8Large,
    thumbnailUrl: glr8Thumb,
    title: "Produse proaspete",
    category: "Producție",
    note: "Produse care adaugă prospețime și varietate ofertei fermei.",
    layout: "md:col-span-1",
  },
  {
    fullUrl: glr9Large,
    thumbnailUrl: glr9Thumb,
    title: "Viața de zi cu zi",
    category: "Atmosferă",
    note: "Scene liniștite din ritmul zilnic al Yusuf Farm.",
    layout: "md:col-span-2",
  },
  {
    fullUrl: glr10Large,
    thumbnailUrl: glr10Thumb,
    title: "Apus peste fermă",
    category: "Atmosferă",
    note: "Seara arată liniștea locului și deschiderea terenului din jur.",
    layout: "md:col-span-2",
  },
];

const GalleryRo = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

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
            <span className="eyebrow">Poveste vizuală</span>
            <h1 className="section-title text-[var(--ink)] md:text-[clamp(3rem,6vw,5.2rem)]">
              O privire mai atentă asupra vieții de la Yusuf Farm.
            </h1>
            <p className="max-w-xl text-lg text-[var(--muted)] md:text-xl">
              Galeria adună peisajele, animalele, mesele și momentele de zi cu zi
              care definesc experiența Yusuf Farm.
            </p>
            <Link to="/ro/contact" className="brand-button">
              Programează o vizită
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            className="page-hero-figure h-[440px] md:h-[560px]"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15 }}
          >
            <img
              src={glr1Large}
              alt="Imagine principală a galeriei Yusuf Farm"
              className="h-full w-full object-cover"
              fetchPriority="high"
              decoding="async"
            />
          </motion.div>
        </div>
      </section>

      <section className="section-shell py-8 md:py-12">
        <div className="grid gap-4 md:auto-rows-[220px] md:grid-cols-4">
          {images.map((image, index) => (
            <motion.button
              key={image.title}
              type="button"
              className={`group relative overflow-hidden rounded-[28px] border border-white/40 text-left shadow-[0_18px_48px_rgba(57,42,28,0.14)] ${image.layout}`}
              onClick={() => setSelectedImage(image)}
              aria-label={`Deschide ${image.title}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.55, delay: index * 0.04 }}
            >
              <img
                src={image.thumbnailUrl}
                alt={image.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedImage ? (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-[rgba(12,10,8,0.85)] p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="surface-card relative w-full max-w-5xl overflow-hidden p-3 md:p-4"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(12,10,8,0.55)] text-white"
                onClick={() => setSelectedImage(null)}
                aria-label="Închide imaginea din galerie"
              >
                <X className="h-5 w-5" />
              </button>
              <img
                src={selectedImage.fullUrl}
                alt={selectedImage.title}
                className="max-h-[72vh] w-full rounded-[24px] object-cover"
                decoding="async"
              />
              <div className="p-4 md:p-5">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[var(--clay)]">
                  {selectedImage.category}
                </p>
                <h2 className="mt-2 text-3xl text-[var(--ink)]">{selectedImage.title}</h2>
                <p className="mt-3 max-w-2xl text-[var(--muted)]">{selectedImage.note}</p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default GalleryRo;
