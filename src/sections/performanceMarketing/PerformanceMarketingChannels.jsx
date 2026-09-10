import { motion } from "framer-motion";
import { ArrowUpRight, MousePointer2, Target, TrendingUp } from "lucide-react";

const stages = [
  {
    number: "01",
    title: "Reach",
    description: "Put your message in front of the audiences that matter.",
    icon: Target,
    metric: "AUDIENCE",
  },
  {
    number: "02",
    title: "Engage",
    description: "Turn attention into meaningful interactions and intent.",
    icon: MousePointer2,
    metric: "ACTION",
  },
  {
    number: "03",
    title: "Convert",
    description: "Turn qualified interest into measurable business outcomes.",
    icon: TrendingUp,
    metric: "GROWTH",
  },
];

const PerformanceMarketingChannels = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--light)]">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
              How Performance Works
            </span>

            <div className="mt-6 flex items-center gap-4">
              <span className="font-[var(--font-display)] text-7xl font-medium leading-none tracking-[-0.08em] text-[var(--dark)]/10 sm:text-8xl">
                03
              </span>

              <span className="h-px w-12 bg-[var(--primary)]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="max-w-[850px] font-[var(--font-display)] text-4xl font-medium leading-[0.98] tracking-[-0.05em] text-[var(--dark)] sm:text-5xl lg:text-6xl">
              From attention
              <br />
              <span className="text-[var(--primary)]">to action.</span>
            </h2>

            <p className="mt-7 max-w-[650px] font-[var(--font-body)] text-sm leading-7 text-[var(--text)] sm:text-base sm:leading-8">
              Great performance marketing doesn't happen at one point in the
              customer journey. We look at the entire path — finding
              opportunities, removing friction and improving what happens at
              every stage.
            </p>
          </motion.div>
        </div>

        {/* Journey visual */}
        <div className="relative mt-16 sm:mt-20 lg:mt-28">
          {/* Connecting line */}
          <div className="pointer-events-none absolute left-[12%] right-[12%] top-[72px] hidden h-px bg-[var(--dark)]/10 lg:block">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="h-full bg-[var(--primary)]"
            />
          </div>

          <div className="grid gap-5 lg:grid-cols-3 lg:gap-8">
            {stages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <motion.div
                  key={stage.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.12,
                  }}
                  className="group relative"
                >
                  {/* Stage number / icon */}
                  <div className="relative z-10 flex items-center justify-between lg:justify-center">
                    <div className="flex h-[145px] w-[145px] items-center justify-center rounded-full border border-[var(--dark)]/10 bg-[var(--light)] transition-all duration-500 group-hover:border-[var(--primary)] group-hover:scale-[1.04]">
                      <div className="flex h-[92px] w-[92px] flex-col items-center justify-center rounded-full bg-white shadow-sm">
                        <Icon
                          size={22}
                          strokeWidth={1.5}
                          className="text-[var(--primary)]"
                        />

                        <span className="mt-2 font-[var(--font-body)] text-[8px] font-bold uppercase tracking-[0.15em] text-[var(--text)]">
                          {stage.metric}
                        </span>
                      </div>
                    </div>

                    <span className="font-[var(--font-display)] text-5xl font-medium tracking-[-0.06em] text-[var(--dark)]/10 lg:absolute lg:-right-2 lg:top-4">
                      {stage.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-7 border-t border-[var(--dark)]/10 pt-6 lg:mt-10 lg:text-center">
                    <h3 className="font-[var(--font-display)] text-3xl font-medium tracking-[-0.04em] text-[var(--dark)]">
                      {stage.title}
                    </h3>

                    <p className="mx-auto mt-4 max-w-[330px] font-[var(--font-body)] text-sm leading-7 text-[var(--text)]">
                      {stage.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom insight */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-16 border-t border-[var(--dark)]/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between"
        >
          <div>
            <span className="font-[var(--font-body)] text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--text)]">
              The Performance Mindset
            </span>

            <p className="mt-3 max-w-[680px] font-[var(--font-display)] text-xl font-medium leading-tight tracking-[-0.03em] text-[var(--dark)] sm:text-2xl">
              Launching is only the beginning.
              <span className="text-[var(--primary)]">
                {" "}
                The real work happens in the optimization.
              </span>
            </p>
          </div>

          <a
            href="/contact"
            className="group mt-7 inline-flex w-fit items-center gap-3 border-b border-[var(--dark)]/20 pb-2 font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--dark)] transition-colors duration-300 hover:border-[var(--primary)] lg:mt-0"
          >
            Build Your Strategy
            <ArrowUpRight
              size={15}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PerformanceMarketingChannels;