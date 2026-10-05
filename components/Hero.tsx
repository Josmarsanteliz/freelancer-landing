"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiMail } from "react-icons/fi";
import Logo from "./Logo";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Hero() {
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const { t } = useLanguage();
  const words = t.hero.words;

  useEffect(() => {
    const word = words[index % words.length];

    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), 1600);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      const t = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      }, 0);
      return () => clearTimeout(t);
    }

    const t = setTimeout(
      () => {
        setText(
          deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)
        );
      },
      deleting ? 40 : 85
    );
    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  return (
    <section id="inicio" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-paprika/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-silver/40 blur-3xl"
      />

      {/* Composición geométrica animada (solo desktop) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/2 hidden w-[34rem] -translate-y-1/2 lg:block"
      >
        {/* resplandor */}
        <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-paprika/25 via-silver/25 to-transparent blur-3xl" />

        {/* anillo exterior con gradiente, rotando */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 text-paprika/40"
        >
          <svg viewBox="0 0 400 400" className="h-full w-full">
            <defs>
              <linearGradient id="heroRing" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#eb5e28" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ccc5b9" stopOpacity="0.25" />
              </linearGradient>
            </defs>
            <circle
              cx="200"
              cy="200"
              r="185"
              fill="none"
              stroke="url(#heroRing)"
              strokeWidth="1.5"
              strokeDasharray="6 10"
            />
            <circle
              cx="200"
              cy="200"
              r="150"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeOpacity="0.4"
            />
          </svg>
        </motion.div>

        {/* hexágono interior rotando en sentido contrario */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 flex items-center justify-center text-charcoal/30"
        >
          <svg viewBox="0 0 200 200" className="h-1/2 w-1/2">
            <path
              d="M100 10 181 55v90L100 190 19 145V55Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M100 45 147 70v60L100 155 53 130V70Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeOpacity="0.6"
            />
          </svg>
        </motion.div>

        {/* punto orbitando */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          <span className="absolute left-1/2 top-[4%] h-3 w-3 -translate-x-1/2 rounded-full bg-paprika shadow-lg shadow-paprika/40" />
        </motion.div>

        {/* rombo flotando */}
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[8%] top-[18%] text-paprika/60"
        >
          <svg
            viewBox="0 0 48 48"
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M24 4 44 24 24 44 4 24Z" />
          </svg>
        </motion.div>
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-start px-6 pb-24 pt-36 md:pb-32 md:pt-44">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Logo className="h-14 w-14 rounded-2xl shadow-lg shadow-carbon/15" alt="" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-paprika/40 bg-paprika/15 px-3 py-1 text-xs font-medium text-carbon">
            <span className="h-2 w-2 animate-pulse rounded-full bg-paprika" />
            {t.hero.badge}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-balance sm:text-6xl"
        >
          {t.hero.greeting} <span className="text-paprika">{t.site.name}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-3 font-display text-2xl font-semibold text-charcoal/80 sm:text-4xl"
          aria-label={`${t.hero.creates} ${words.join(", ")}`}
        >
          {t.hero.creates} <span className="text-paprika">{text}</span>
          <span
            aria-hidden
            className="ml-0.5 inline-block h-6 w-[3px] translate-y-1 animate-pulse bg-paprika sm:h-8"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/80 sm:text-lg"
        >
          {t.hero.pitch}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#planes"
            className="group inline-flex items-center gap-2 rounded-full bg-paprika px-6 py-3 text-sm font-semibold text-carbon shadow-lg shadow-paprika/25 transition hover:bg-paprika-light"
          >
            {t.hero.ctaPrimary}
            <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full border border-silver bg-white px-6 py-3 text-sm font-semibold text-carbon transition hover:border-carbon"
          >
            <FiMail />
            {t.hero.ctaSecondary}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
