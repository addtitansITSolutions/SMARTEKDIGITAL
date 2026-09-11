import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Megaphone,
  Sparkles,
  Target,
} from "lucide-react";

const acquisitionPillars = [
  {
    number: "01",
    title: "Audience",
    eyebrow: "WHO TO REACH",
    description:
      "Identify the audiences most likely to become valuable users through behavioural insights, interests, intent, and performance data.",
    points: ["Audience Research", "Targeting Strategy", "User Segmentation"],
    icon: Target,
  },
  {
    number: "02",
    title: "Creative",
    eyebrow: "WHAT TO SAY",
    description:
      "Create mobile-first messaging and creative that captures attention quickly and gives users a clear reason to take the next step.",
    points: ["Creative Testing", "Mobile Messaging", "Ad Variations"],
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Campaign",
    eyebrow: "WHERE TO COMPETE",
    description:
      "Build and manage campaigns across relevant mobile channels with clear objectives, controlled budgets, and measurable outcomes.",
    points: ["Campaign Setup", "Channel Strategy", "Budget Management"],
    icon: Megaphone,
  },
  {
    number: "04",
    title: "Optimization",
    eyebrow: "HOW TO IMPROVE",
    description:
      "Use real performance signals to understand what's working, remove friction, and continuously improve acquisition efficiency.",
    points: ["Performance Analysis", "A/B Testing", "Continuous Optimization"],
    icon: BarChart3,
  },
];

const MobilePerformanceMarketingAcquisition = () => {
  return (
    <section
      id="mobile-performance-acquisition"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4">
              <span className="font-[var(--font-display)] text-sm font-medium tracking-[0.18em] text-[var(--primary)]">
                ACQUISITION ENGINE
              </span>

              <span className="h-px w-12 bg-[var(--border)]" />
            </div>

            <div className="mt-7 font-[var(--font-display)] text-[7rem] font-light leading-none tracking-[-0.08em] text-[var(--dark)]/[0.06] sm:text-[9rem]">
              03
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--text)]">
              What Drives Mobile Performance
            </p>

            <h2 className="max-w-4xl font-[var(--font-display)] text-4xl font-medium leading-[1.05] tracking-[-0.045em] text-[var(--dark)] sm:text-5xl lg:text-6xl">
              Great acquisition starts with{" "}
              <span className="text-[var(--primary)]">better decisions.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-[var(--text)] sm:text-lg sm:leading-8">
              Mobile performance campaigns work best when every part of the
              acquisition engine is connected. We bring audience strategy,
              creative, media, and optimization together around one goal:
              meaningful growth.
            </p>
          </motion.div>
        </div>

        {/* Acquisition flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="mt-20 overflow-hidden rounded-2xl bg-[var(--dark)] lg:mt-28"
        >
          <div className="relative px-7 py-9 sm:px-10 sm:py-11 lg:px-14">
            {/* Decorative line */}
            <div className="absolute left-0 right-0 top-1/2 hidden h-px bg-white/[0.08] lg:block" />

            <div className="relative z-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  label: "AUDIENCE",
                  text: "Find the right users",
                },
                {
                  label: "CREATIVE",
                  text: "Earn their attention",
                },
                {
                  label: "CAMPAIGN",
                  text: "Drive meaningful action",
                },
                {
                  label: "DATA",
                  text: "Learn what works",
                },
              ].map((item, index) => (
                <div key={item.label} className="relative flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[var(--dark)] text-xs font-medium text-[var(--primary)]">
                    0{index + 1}
                  </span>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/35">
                      {item.label}
                    </p>

                    <p className="mt-1 text-sm font-medium text-white/80">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Pillars */}
        <div className="mt-16 border-t border-[var(--border)]">
          {acquisitionPillars.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                }}
                className="group grid gap-8 border-b border-[var(--border)] py-10 lg:grid-cols-[90px_0.8fr_1.2fr_50px] lg:items-center lg:gap-10"
              >
                {/* Number */}
                <span className="font-[var(--font-display)] text-sm font-medium tracking-[0.12em] text-[var(--primary)]">
                  {item.number}
                </span>

                {/* Title */}
                <div className="flex items-center gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--dark)] transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white">
                    <Icon size={19} strokeWidth={1.7} />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--text)]/60">
                      {item.eyebrow}
                    </p>

                    <h3 className="mt-1 font-[var(--font-display)] text-2xl font-medium tracking-[-0.035em] text-[var(--dark)] sm:text-3xl">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Description + points */}
                <div>
                  <p className="max-w-xl text-sm leading-6 text-[var(--text)] sm:text-base sm:leading-7">
                    {item.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                    {item.points.map((point) => (
                      <span
                        key={point}
                        className="text-xs font-medium uppercase tracking-[0.08em] text-[var(--dark)]/60"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-300 group-hover:translate-x-1 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white lg:flex">
                  <ArrowUpRight size={17} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-16 grid gap-6 border-t border-[var(--border)] pt-8 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
              Performance Principle
            </p>

            <p className="mt-5 max-w-3xl font-[var(--font-display)] text-2xl font-medium leading-tight tracking-[-0.035em] text-[var(--dark)] sm:text-3xl lg:text-4xl">
              Acquisition isn't about getting{" "}
              <span className="text-[var(--text)]">
                more users at any cost.
              </span>
            </p>
          </div>

          <p className="max-w-sm text-sm leading-6 text-[var(--text)] lg:text-right">
            It's about finding the users who have the potential to create
            lasting value for your business.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MobilePerformanceMarketingAcquisition;