"use client";

import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import Logo from "./Logo";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useContactModal } from "./ContactModal";
import type { Plan } from "@/lib/i18n/types";

type PlanGroup = "web" | "software";

type PlanCardProps = {
  plan: Plan;
  group: PlanGroup;
  index: number;
};

function PlanCard({ plan, group, index }: PlanCardProps) {
  const { t } = useLanguage();
  const { open: openContact } = useContactModal();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex flex-col rounded-3xl border p-8 transition-all hover:-translate-y-1.5 ${
        plan.featured
          ? "border-paprika bg-carbon text-floral shadow-2xl shadow-paprika/20"
          : "border-silver bg-white hover:shadow-xl hover:shadow-carbon/5"
      }`}
    >
      {plan.featured ? (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-paprika px-3 py-1 text-xs font-semibold text-carbon">
          {t.pricing.badge}
        </span>
      ) : null}

      <Logo
        variant={plan.featured ? "light" : "dark"}
        className="mb-4 h-10 w-10"
        alt=""
      />

      <h3 className="font-display text-lg font-semibold">{plan.name}</h3>
      <p
        className={`mt-1 text-sm ${
          plan.featured ? "text-silver" : "text-charcoal/70"
        }`}
      >
        {plan.description}
      </p>

      <div className="mt-6 space-y-1">
        <p className="font-display text-5xl font-bold">{t.pricing.requestNow}</p>
        <p
          className={`text-xs ${plan.featured ? "text-silver/80" : "text-charcoal/55"}`}
        >
          {t.pricing.requestNote}
        </p>
      </div>

      <ul className="mt-8 flex flex-1 flex-col gap-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <FiCheck className="mt-0.5 shrink-0 text-paprika" />
            <span
              className={plan.featured ? "text-silver" : "text-charcoal/85"}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => openContact({ group, plan: { name: plan.name } })}
        className={`mt-8 rounded-full px-5 py-3 text-center text-sm font-semibold transition ${
          plan.featured
            ? "bg-paprika text-carbon hover:bg-paprika-light"
            : "border border-silver text-carbon hover:border-carbon"
        }`}
      >
        {t.pricing.cta}
      </button>
    </motion.div>
  );
}

export default function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="planes" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow={t.pricing.eyebrow}
          title={t.pricing.title}
          subtitle={t.pricing.subtitle}
        />

        {(["web", "software"] as const).map((group) => (
          <div key={group}>
            <h3 className="mt-14 flex items-center gap-3 font-display text-xl font-bold text-carbon">
              <span aria-hidden className="h-5 w-1.5 rounded-full bg-paprika" />
              {group === "web"
                ? t.pricing.groups.web
                : t.pricing.groups.software}
            </h3>

            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              {(group === "web" ? t.pricing.plans : t.pricing.softwarePlans).map(
                (plan, i) => (
                  <PlanCard
                    key={`${group}-${plan.name}`}
                    plan={plan}
                    group={group}
                    index={i}
                  />
                )
              )}
            </div>
          </div>
        ))}

        <p className="mt-10 text-center text-sm text-charcoal/70">
          {t.pricing.customTitle}{" "}
          <a
            href="#contacto"
            className="font-semibold text-paprika-deep underline-offset-4 hover:text-carbon hover:underline"
          >
            {t.pricing.customLink}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
