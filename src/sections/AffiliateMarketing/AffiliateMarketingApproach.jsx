import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Compass,
  Gauge,
  Handshake,
  RefreshCw,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    icon: Compass,
    description:
      "We identify the partners, publishers, creators, and platforms that can genuinely connect your brand with relevant audiences.",
    points: [
      "Partner research",
      "Audience alignment",
      "Opportunity mapping",
    ],
  },
  {
    number: "02",
    title: "Activate",
    icon: Handshake,
    description:
      "We create the foundation for productive partnerships with clear positioning, compelling offers, and the right campaign structure.",
    points: [
      "Partner onboarding",
      "Campaign setup",
      "Offer & messaging strategy",
    ],
  },
  {
    number: "03",
    title: "Manage",
    icon: Gauge,
    description:
      "We monitor partner activity and campaign performance while keeping the channel aligned with your wider acquisition goals.",
    points: [
      "Performance monitoring",
      "Partner communication",
      "Campaign management",
    ],
  },
  {
    number: "04",
    title: "Optimize",
    icon: RefreshCw,
    description:
      "We use performance insights to improve what is working, identify new opportunities, and scale the partnerships creating the most value.",
    points: [
      "Performance analysis",
      "Partner optimization",
      "Continuous improvement",
    ],
  },
];

const AffiliateMarketingApproach = () => {
  return (
    <section
      id="affiliate-approach"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-36"
    >
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
                03
              </span>

              <span className="font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text)]">
                Our Approach
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
            <h2 className="max-w-4xl font-[var(--font-display)] text-4xl font-medium leading-[1.03] tracking-[-0.05em] text-[var(--dark)] sm:text-5xl lg:text-6xl">
              Build the partnership.{" "}
              <span className="text-[var(--primary)]">
                Improve the performance.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl font-[var(--font-body)] text-base leading-7 text-[var(--text)] sm:text-lg sm:leading-8">
              Affiliate growth doesn't happen simply by joining a network.
              Strong results come from finding the right opportunities,
              building productive relationships, and continuously improving
              the channel.
            </p>
          </motion.div>
        </div>

        {/* Process */}
        <div className="mt-20 sm:mt-24 lg:mt-28">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group border-t border-[var(--border)] py-9 sm:py-11 lg:py-12"
              >
                <div className="grid gap-7 lg:grid-cols-[100px_0.75fr_1fr_70px] lg:items-start lg:gap-10">
                  {/* Number */}
                  <span className="font-[var(--font-display)] text-sm font-medium text-[var(--primary)]">
                    {step.number}
                  </span>

                  {/* Title */}
                  <div>
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--light)]">
                      <Icon
                        size={20}
                        strokeWidth={1.5}
                        className="text-[var(--dark)] transition-colors duration-300 group-hover:text-[var(--primary)]"
                      />
                    </div>

                    <h3 className="font-[var(--font-display)] text-3xl font-medium tracking-[-0.04em] text-[var(--dark)] sm:text-4xl">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description + points */}
                  <div>
                    <p className="max-w-xl font-[var(--font-body)] text-sm leading-7 text-[var(--text)] sm:text-base sm:leading-7">
                      {step.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                      {step.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-center gap-2 font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.08em] text-[var(--dark)]"
                        >
                          <Check
                            size={14}
                            strokeWidth={2}
                            className="text-[var(--primary)]"
                          />
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden justify-end lg:flex">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[var(--primary)]">
                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.7}
                        className="text-[var(--dark)] transition-colors duration-300 group-hover:text-[var(--primary)]"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Last border */}
          <div className="border-t border-[var(--border)]" />
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid gap-8 lg:mt-24 lg:grid-cols-[0.7fr_1.3fr]"
        >
          <div>
            <span className="font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text)]">
              Continuous Management
            </span>
          </div>

          <div>
            <p className="max-w-4xl font-[var(--font-display)] text-3xl font-medium leading-[1.12] tracking-[-0.04em] text-[var(--dark)] sm:text-4xl">
              The strongest affiliate programs aren't built once.{" "}
              <span className="text-[var(--primary)]">
                They're continuously improved.
              </span>
            </p>

            <a
              href="/contact"
              className="group mt-8 inline-flex items-center gap-3 border-b border-[var(--dark)] pb-2 font-[var(--font-body)] text-sm font-semibold text-[var(--dark)] transition-colors duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              Discuss Your Strategy

              <ArrowUpRight
                size={17}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </motion.div>

        {/* Bottom meta */}
        <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-[var(--border)] pt-5 font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text)]">
          <span>Partner Discovery</span>
          <span>Activation</span>
          <span>Management</span>
          <span>Optimization</span>
        </div>
      </div>
    </section>
  );
};

export default AffiliateMarketingApproach;