import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Building2,
  MousePointer2,
  Users,
} from "lucide-react";

const networkItems = [
  {
    id: "01",
    title: "Your Brand",
    description: "Clear positioning, offers, and campaigns built for partner-led growth.",
    icon: Building2,
  },
  {
    id: "02",
    title: "The Right Partners",
    description: "Relevant publishers, creators, platforms, and communities.",
    icon: Users,
  },
  {
    id: "03",
    title: "Qualified Audiences",
    description: "Reach people who already have an interest in what you offer.",
    icon: MousePointer2,
  },
  {
    id: "04",
    title: "Measurable Growth",
    description: "Track performance and scale the partnerships that deliver value.",
    icon: BarChart3,
  },
];

const AffiliateMarketingNetwork = () => {
  return (
    <section
      id="affiliate-network"
      className="relative overflow-hidden bg-[var(--light)] py-24 sm:py-28 lg:py-36"
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
                02
              </span>

              <span className="font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text)]">
                The Affiliate Network
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="max-w-4xl font-[var(--font-display)] text-4xl font-medium leading-[1.03] tracking-[-0.05em] text-[var(--dark)] sm:text-5xl lg:text-6xl">
              Growth happens when the right parts{" "}
              <span className="text-[var(--primary)]">connect.</span>
            </h2>

            <p className="mt-7 max-w-2xl font-[var(--font-body)] text-base leading-7 text-[var(--text)] sm:text-lg sm:leading-8">
              A successful affiliate strategy is more than adding partners to
              a network. It is about creating a connected ecosystem where
              brands, partners, audiences, and performance work together.
            </p>
          </motion.div>
        </div>

        {/* Network visual */}
        <div className="relative mt-20 sm:mt-24 lg:mt-28">
          {/* Desktop connecting line */}
          <div className="absolute left-[12.5%] right-[12.5%] top-[92px] hidden h-px bg-[var(--border)] lg:block" />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {networkItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                  className="group relative"
                >
                  {/* Connection node */}
                  <div className="relative z-10 mb-8 flex items-center justify-between lg:justify-start">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--light)] transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-white">
                      <Icon
                        size={22}
                        strokeWidth={1.5}
                        className="text-[var(--dark)] transition-colors duration-300 group-hover:text-[var(--primary)]"
                      />
                    </div>

                    <span className="font-[var(--font-display)] text-sm font-medium text-[var(--text)] lg:hidden">
                      {item.id}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="border-t border-[var(--border)] pt-6 lg:border-t-0 lg:pt-0">
                    <span className="mb-3 hidden font-[var(--font-display)] text-xs font-medium text-[var(--primary)] lg:block">
                      {item.id}
                    </span>

                    <h3 className="font-[var(--font-display)] text-2xl font-medium tracking-[-0.035em] text-[var(--dark)] sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-xs font-[var(--font-body)] text-sm leading-7 text-[var(--text)]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Strategy statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="mt-24 border-t border-[var(--border)] pt-10 sm:mt-28 lg:mt-32"
        >
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <span className="font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text)]">
                Built Around Performance
              </span>
            </div>

            <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-3xl font-[var(--font-display)] text-2xl font-medium leading-[1.18] tracking-[-0.035em] text-[var(--dark)] sm:text-3xl lg:text-4xl">
                Every connection should have a purpose — and every
                partnership should have something measurable behind it.
              </p>

              <a
                href="/contact"
                className="group inline-flex shrink-0 items-center gap-3 self-start border-b border-[var(--dark)] pb-2 font-[var(--font-body)] text-sm font-semibold text-[var(--dark)] transition-colors duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                Build Your Network

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom micro-meta */}
        <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-[var(--border)] pt-5 font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text)]">
          <span>Partnerships</span>
          <span>Acquisition</span>
          <span>Performance</span>
          <span>Scale</span>
        </div>
      </div>
    </section>
  );
};

export default AffiliateMarketingNetwork;