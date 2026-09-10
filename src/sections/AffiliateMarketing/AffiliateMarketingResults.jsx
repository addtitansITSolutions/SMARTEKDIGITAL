import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Globe2,
  TrendingUp,
  UsersRound,
} from "lucide-react";

const outcomes = [
  {
    number: "01",
    label: "Reach",
    title: "Extend your brand's reach",
    description:
      "Connect with relevant audiences through partners who already have attention, trust, and influence within your market.",
    icon: Globe2,
  },
  {
    number: "02",
    label: "Acquisition",
    title: "Create qualified acquisition",
    description:
      "Turn partner relationships into measurable customer journeys that contribute to meaningful business outcomes.",
    icon: TrendingUp,
  },
  {
    number: "03",
    label: "Partnership Value",
    title: "Build stronger relationships",
    description:
      "Give valuable partners a reason to stay engaged by creating campaigns and opportunities that work for both sides.",
    icon: UsersRound,
  },
  {
    number: "04",
    label: "Scale",
    title: "Grow what performs",
    description:
      "Use performance insights to identify your strongest opportunities and gradually scale the partnerships delivering the most value.",
    icon: BarChart3,
  },
];

const AffiliateMarketingResults = () => {
  return (
    <section
      id="affiliate-results"
      className="relative overflow-hidden bg-[var(--dark)] py-24 text-white sm:py-28 lg:py-36"
    >
      {/* Subtle background details */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[var(--primary)] opacity-[0.07] blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[var(--secondary)] opacity-[0.06] blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4">
              <span className="font-[var(--font-display)] text-7xl font-medium leading-none tracking-[-0.08em] text-[var(--primary)] sm:text-8xl">
                04
              </span>

              <span className="font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                Affiliate Performance
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
          >
            <h2 className="max-w-4xl font-[var(--font-display)] text-4xl font-medium leading-[1.03] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Partnerships should create{" "}
              <span className="text-[var(--primary)]">business value.</span>
            </h2>

            <p className="mt-7 max-w-2xl font-[var(--font-body)] text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              A well-managed affiliate channel can become more than another
              acquisition source. It can create new connections, strengthen
              your reach, and build a scalable path to growth.
            </p>
          </motion.div>
        </div>

        {/* Main visual */}
        <div className="mt-20 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:mt-24 lg:mt-28 lg:grid-cols-2">
          {outcomes.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative min-h-[330px] bg-[var(--dark)] p-7 transition-colors duration-500 hover:bg-[#182131] sm:p-9 lg:min-h-[360px] lg:p-11"
              >
                {/* Number */}
                <div className="flex items-start justify-between">
                  <span className="font-[var(--font-display)] text-sm font-medium text-[var(--primary)]">
                    {item.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-[var(--primary)]">
                    <Icon
                      size={19}
                      strokeWidth={1.5}
                      className="text-white/70 transition-colors duration-300 group-hover:text-[var(--primary)]"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-20 sm:mt-24">
                  <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                    {item.label}
                  </span>

                  <h3 className="mt-3 font-[var(--font-display)] text-2xl font-medium tracking-[-0.035em] sm:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-lg font-[var(--font-body)] text-sm leading-7 text-white/55 sm:text-base">
                    {item.description}
                  </p>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-8 right-8 h-px w-8 origin-right bg-[var(--primary)] transition-all duration-500 group-hover:w-16" />
              </motion.article>
            );
          })}
        </div>

        {/* Featured outcome */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="mt-20 border-t border-white/10 pt-10 sm:mt-24"
        >
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <span className="font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                The Bigger Opportunity
              </span>

              <div className="mt-7 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10">
                  <TrendingUp
                    size={20}
                    strokeWidth={1.5}
                    className="text-[var(--primary)]"
                  />
                </div>

                <span className="font-[var(--font-display)] text-sm font-medium text-white/70">
                  Performance-led growth
                </span>
              </div>
            </div>

            <div>
              <p className="max-w-4xl font-[var(--font-display)] text-3xl font-medium leading-[1.12] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                The best partnerships don't just bring more traffic. They
                bring the{" "}
                <span className="text-[var(--primary)]">
                  right opportunities.
                </span>
              </p>

              <a
                href="/contact"
                className="group mt-9 inline-flex items-center gap-3 border-b border-white/40 pb-2 font-[var(--font-body)] text-sm font-semibold text-white transition-colors duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                Start a Conversation

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom meta */}
        <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-5 font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
          <span>Reach</span>
          <span>Acquisition</span>
          <span>Partnership Value</span>
          <span>Scalable Growth</span>
        </div>
      </div>
    </section>
  );
};

export default AffiliateMarketingResults;