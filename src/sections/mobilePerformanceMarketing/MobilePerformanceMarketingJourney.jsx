import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Download,
  Heart,
  MousePointer2,
  Smartphone,
  Users,
} from "lucide-react";

const journeySteps = [
  {
    number: "01",
    title: "Discover",
    label: "REACH",
    description:
      "Put your brand in front of mobile audiences who are most likely to care about what you offer.",
    icon: Users,
  },
  {
    number: "02",
    title: "Install",
    label: "ACQUIRE",
    description:
      "Turn interest into action with campaigns and experiences designed to drive quality app installs.",
    icon: Download,
  },
  {
    number: "03",
    title: "Engage",
    label: "ACTIVATE",
    description:
      "Give new users a reason to explore, interact, and experience the value your product provides.",
    icon: MousePointer2,
  },
  {
    number: "04",
    title: "Retain",
    label: "GROW",
    description:
      "Build lasting user relationships through smarter engagement and continuous performance optimization.",
    icon: Heart,
  },
];

const MobilePerformanceMarketingJourney = () => {
  return (
    <section
      id="mobile-performance-journey"
      className="relative overflow-hidden bg-[var(--light)] py-24 sm:py-28 lg:py-36"
    >
      {/* Background details */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-[20%] h-[400px] w-[400px] rounded-full bg-[var(--secondary)]/[0.035] blur-3xl" />

        <div className="absolute bottom-[-10%] right-[-10%] h-[420px] w-[420px] rounded-full bg-[var(--primary)]/[0.045] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4">
              <span className="font-[var(--font-display)] text-sm font-medium tracking-[0.18em] text-[var(--primary)]">
                MOBILE GROWTH JOURNEY
              </span>

              <span className="h-px w-12 bg-[var(--border)]" />
            </div>

            <div className="mt-7 font-[var(--font-display)] text-[7rem] font-light leading-none tracking-[-0.08em] text-[var(--dark)]/[0.06] sm:text-[9rem]">
              02
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--text)]">
              From Reach to Retention
            </p>

            <h2 className="max-w-4xl font-[var(--font-display)] text-4xl font-medium leading-[1.05] tracking-[-0.045em] text-[var(--dark)] sm:text-5xl lg:text-6xl">
              Every mobile interaction is an opportunity to{" "}
              <span className="text-[var(--primary)]">move users forward.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-[var(--text)] sm:text-lg sm:leading-8">
              Strong mobile performance isn't about optimizing for one moment.
              We look at the complete journey — from the first impression to
              long-term user engagement.
            </p>
          </motion.div>
        </div>

        {/* Desktop journey */}
        <div className="relative mt-20 hidden lg:block lg:mt-28">
          {/* Connector */}
          {/* <div className="absolute left-[12.5%] right-[12.5%] top-[72px] h-px bg-[var(--border)]" /> */}

          <div className="grid grid-cols-4">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.12,
                  }}
                  className="group relative px-5 first:pl-0 last:pr-0"
                >
                  {/* Node */}
                  <div className="relative z-10 flex items-center">
                    <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[var(--border)] bg-[var(--light)] transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white">
                      <Icon size={23} strokeWidth={1.6} />
                    </div>

                    {index < journeySteps.length - 1 && (
                      <ArrowRight
                        size={16}
                        className="absolute left-[calc(100%-8px)] text-[var(--primary)]/50"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="mt-9">
                    <div className="flex items-center gap-3">
                      <span className="font-[var(--font-display)] text-xs font-medium tracking-[0.15em] text-[var(--primary)]">
                        {step.number}
                      </span>

                      <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--text)]/60">
                        {step.label}
                      </span>
                    </div>

                    <h3 className="mt-4 font-[var(--font-display)] text-2xl font-medium tracking-[-0.035em] text-[var(--dark)] xl:text-3xl">
                      {step.title}
                    </h3>

                    <p className="mt-4 max-w-xs text-sm leading-6 text-[var(--text)]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile journey */}
        <div className="relative mt-16 lg:hidden">
          {/* Vertical connector */}
          <div className="absolute bottom-10 left-[24px] top-10 w-px bg-[var(--border)]" />

          <div className="space-y-10">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="relative flex gap-6"
                >
                  {/* Node */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--light)] text-[var(--dark)]">
                    <Icon size={18} strokeWidth={1.7} />
                  </div>

                  {/* Content */}
                  <div className="pb-2">
                    <div className="flex items-center gap-3">
                      <span className="font-[var(--font-display)] text-xs font-medium tracking-[0.15em] text-[var(--primary)]">
                        {step.number}
                      </span>

                      <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--text)]/60">
                        {step.label}
                      </span>
                    </div>

                    <h3 className="mt-3 font-[var(--font-display)] text-2xl font-medium tracking-[-0.035em] text-[var(--dark)]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[var(--text)]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Central mobile-growth statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-20 overflow-hidden rounded-2xl bg-[var(--dark)] sm:mt-24"
        >
          <div className="relative px-7 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            {/* Decorative phone outline */}
            <div className="pointer-events-none absolute right-[-20px] top-1/2 hidden h-[280px] w-[145px] -translate-y-1/2 rounded-[28px] border border-white/[0.06] sm:block lg:right-[12%]">
              <div className="absolute left-1/2 top-3 h-1 w-12 -translate-x-1/2 rounded-full bg-white/[0.06]" />

              <div className="absolute inset-x-5 top-16 h-px bg-white/[0.05]" />
              <div className="absolute inset-x-5 top-24 h-12 rounded-lg border border-white/[0.04]" />
              <div className="absolute inset-x-5 top-40 h-8 rounded-lg border border-white/[0.04]" />
            </div>

            <div className="relative z-10 max-w-2xl">
              <div className="flex items-center gap-3">
                <Smartphone
                  size={17}
                  className="text-[var(--primary)]"
                />

                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                  The Mobile Mindset
                </span>
              </div>

              <p className="mt-6 font-[var(--font-display)] text-2xl font-medium leading-tight tracking-[-0.035em] text-white sm:text-3xl lg:text-4xl">
                Don't optimize only for the install.
                <span className="text-white/40">
                  {" "}
                  Optimize for what happens after it.
                </span>
              </p>
            </div>

            <div className="relative z-10 mt-9 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.14em] text-white/35">
              <span>Reach</span>
              <span className="text-[var(--primary)]">·</span>
              <span>Acquire</span>
              <span className="text-[var(--primary)]">·</span>
              <span>Engage</span>
              <span className="text-[var(--primary)]">·</span>
              <span>Retain</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex flex-col gap-5 border-t border-[var(--border)] pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-2xl text-sm leading-6 text-[var(--text)] sm:text-base">
            The strongest mobile strategies connect acquisition with the
            experience that follows.
          </p>

          <span className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--text)]/60">
            Acquisition → Engagement → Retention
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default MobilePerformanceMarketingJourney;