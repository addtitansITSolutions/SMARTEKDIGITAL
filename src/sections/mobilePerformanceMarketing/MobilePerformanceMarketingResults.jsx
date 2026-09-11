import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Download,
  Heart,
  Smartphone,
  Users,
} from "lucide-react";

const outcomes = [
  {
    number: "01",
    title: "Quality Installs",
    description:
      "Focus on acquiring users who are genuinely interested in your product rather than simply increasing install volume.",
    icon: Download,
  },
  {
    number: "02",
    title: "User Engagement",
    description:
      "Understand what encourages users to explore, interact, and experience more of what your mobile product offers.",
    icon: Smartphone,
  },
  {
    number: "03",
    title: "Retention",
    description:
      "Build strategies that help turn new users into returning users and create stronger long-term relationships.",
    icon: Heart,
  },
  {
    number: "04",
    title: "Customer Value",
    description:
      "Measure mobile growth against meaningful business outcomes and identify where future opportunities exist.",
    icon: BarChart3,
  },
];

const MobilePerformanceMarketingResults = () => {
  return (
    <section
      id="mobile-performance-results"
      className="relative overflow-hidden bg-[var(--dark)] py-24 text-white sm:py-28 lg:py-36"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[var(--primary)]/[0.07] blur-[130px]" />

      <div className="pointer-events-none absolute -bottom-40 left-[-10%] h-[420px] w-[420px] rounded-full bg-[var(--secondary)]/[0.06] blur-[120px]" />

      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4">
              <span className="font-[var(--font-display)] text-sm font-medium tracking-[0.18em] text-[var(--primary)]">
                MOBILE PERFORMANCE
              </span>

              <span className="h-px w-12 bg-white/15" />
            </div>

            <div className="mt-7 font-[var(--font-display)] text-[7rem] font-light leading-none tracking-[-0.08em] text-white/[0.05] sm:text-[9rem]">
              04
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-white/40">
              Measuring What Matters
            </p>

            <h2 className="max-w-4xl font-[var(--font-display)] text-4xl font-medium leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Mobile growth should create{" "}
              <span className="text-[var(--primary)]">real value.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
              Installs are only one part of the picture. We look deeper into
              user quality, engagement, retention, and the business outcomes
              that mobile acquisition can create.
            </p>
          </motion.div>
        </div>

        {/* Main outcome visual */}
        <div className="mt-20 lg:mt-28">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
            {outcomes.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                  }}
                  className="group relative bg-[var(--dark)] p-7 transition-colors duration-300 hover:bg-white/[0.025] sm:p-9 lg:p-12"
                >
                  {/* Number */}
                  <div className="flex items-center justify-between">
                    <span className="font-[var(--font-display)] text-xs font-medium tracking-[0.15em] text-[var(--primary)]">
                      {item.number}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white">
                      <Icon size={18} strokeWidth={1.6} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-12 max-w-xl">
                    <h3 className="font-[var(--font-display)] text-2xl font-medium tracking-[-0.035em] sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-5 max-w-md text-sm leading-6 text-white/45 sm:text-base sm:leading-7">
                      {item.description}
                    </p>
                  </div>

                  {/* Hover indicator */}
                  <div className="mt-10 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.14em] text-white/25 transition-colors duration-300 group-hover:text-white/55">
                    <span>Outcome</span>

                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>

                  {/* Large decorative number */}
                  <span className="pointer-events-none absolute bottom-[-30px] right-5 font-[var(--font-display)] text-[8rem] font-light leading-none tracking-[-0.08em] text-white/[0.025]">
                    {item.number}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Featured outcome */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-16 overflow-hidden rounded-2xl border border-white/10 sm:mt-20"
        >
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            {/* Statement */}
            <div className="relative p-8 sm:p-10 lg:p-14">
              <div className="absolute left-0 top-0 h-full w-1 bg-[var(--primary)]" />

              <div className="flex items-center gap-3">
                <Users
                  size={17}
                  className="text-[var(--primary)]"
                />

                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/35">
                  The Right User
                </span>
              </div>

              <h3 className="mt-7 max-w-2xl font-[var(--font-display)] text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                The best mobile campaigns don't just create{" "}
                <span className="text-[var(--primary)]">more users.</span>
              </h3>
            </div>

            {/* Explanation */}
            <div className="flex items-end border-t border-white/10 bg-white/[0.02] p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-14">
              <div>
                <p className="max-w-md text-base leading-7 text-white/50">
                  They create a stronger connection between acquisition,
                  engagement, and business value — giving your team a clearer
                  understanding of what to scale next.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.14em] text-white/30">
                  <span>Users</span>
                  <span className="text-[var(--primary)]">·</span>
                  <span>Engagement</span>
                  <span className="text-[var(--primary)]">·</span>
                  <span>Value</span>
                </div>


                
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom statement */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-2xl text-sm leading-6 text-white/40 sm:text-base">
            Measure the complete mobile journey — not just the first action.
          </p>

          <span className="text-xs font-medium uppercase tracking-[0.14em] text-white/25">
            Acquisition · Engagement · Retention · Value
          </span>
        </motion.div> */}
      </div>
    </section>
  );
};

export default MobilePerformanceMarketingResults;