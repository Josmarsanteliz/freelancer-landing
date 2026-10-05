"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Portfolio() {
  const { t } = useLanguage();

  return (
    <section id="proyectos" className="bg-silver/25 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow={t.portfolio.eyebrow}
          title={t.portfolio.title}
          subtitle={t.portfolio.subtitle}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.portfolio.projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group overflow-hidden rounded-3xl border border-silver bg-white transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-carbon/5"
            >
              <div
                className={`relative h-44 overflow-hidden bg-gradient-to-br ${project.gradient}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-semibold">
                    {project.title}
                  </h3>
                  <FiArrowUpRight className="text-silver transition-colors group-hover:text-paprika" />
                </div>
                <p className="mt-2 text-sm text-charcoal/70">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-silver/30 px-2.5 py-1 text-xs font-medium text-charcoal/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={t.site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-paprika-deep underline-offset-4 hover:text-carbon hover:underline"
          >
            {t.portfolio.more} <FiArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}
