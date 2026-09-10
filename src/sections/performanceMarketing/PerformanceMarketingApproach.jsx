import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Define",
    description:
      "We start with the business objective, target audience and metrics that actually matter to your growth.",
    points: ["Business goals", "Audience research", "KPIs & benchmarks"],
  },
  {
    number: "02",
    title: "Launch",
    description:
      "We build campaigns around the right channels, messaging, audiences and creative to create a strong starting point.",
    points: ["Campaign setup", "Audience targeting", "Creative testing"],
  },
  {
    number: "03",
    title: "Measure",
    description:
      "Once campaigns are live, we look beyond surface-level numbers to understand what is driving meaningful performance.",
    points: ["Performance data", "Conversion tracking", "Audience behaviour"],
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "We continuously test, refine and reallocate resources toward the opportunities showing the strongest potential.",
    points: ["A/B testing", "Budget optimization", "Continuous improvement"],
  },
];

const PerformanceMarketingApproach = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
              Our Approach
            </span>

            <div className="mt-7">
              <span className="font-[var(--font-display)] text-8xl font-medium leading-none tracking-[-0.08em] text-[var(--dark)]/8 sm:text-[10rem]">
                04
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="max-w-[850px] font-[var(--font-display)] text-4xl font-medium leading-[0.98] tracking-[-0.05em] text-[var(--dark)] sm:text-5xl lg:text-6xl">
              Performance isn't
              <br />
              a <span className="text-[var(--primary)]">one-time task.</span>
            </h2>

            <p className="mt-7 max-w-[680px] font-[var(--font-body)] text-sm leading-7 text-[var(--text)] sm:text-base sm:leading-8">
              The strongest campaigns evolve with the data. Our process is
              built around continuous learning — allowing us to identify what
              works, remove what doesn't and find new opportunities for growth.
            </p>
          </motion.div>
        </div>

        {/* Process */}
        <div className="relative mt-16 sm:mt-20 lg:mt-28">
          {/* Vertical line */}
          <div className="pointer-events-none absolute bottom-0 left-[23px] top-0 hidden w-px bg-[var(--border)] sm:block" />

          <div className="space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                className="group relative grid gap-7 border-b border-[var(--border)] py-10 sm:pl-20 sm:py-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:py-14"
              >
                {/* Timeline point */}
                <div className="absolute left-[16px] top-[48px] hidden h-[15px] w-[15px] rounded-full border-4 border-white bg-[var(--primary)] sm:block" />

                {/* Left */}
                <div>
                  <div className="flex items-center gap-4">
                    <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
                      Step {step.number}
                    </span>

                    <span className="h-px w-8 bg-[var(--border)] transition-all duration-300 group-hover:w-12 group-hover:bg-[var(--primary)]" />
                  </div>

                  <h3 className="mt-5 font-[var(--font-display)] text-4xl font-medium tracking-[-0.05em] text-[var(--dark)] sm:text-5xl">
                    {step.title}
                  </h3>
                </div>

                {/* Right */}
                <div>
                  <p className="max-w-[620px] font-[var(--font-body)] text-sm leading-7 text-[var(--text)] sm:text-base sm:leading-8">
                    {step.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                    {step.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-2"
                      >
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[var(--light)]">
                          <Check
                            size={9}
                            strokeWidth={2.2}
                            className="text-[var(--primary)]"
                          />
                        </span>

                        <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--text)]">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex flex-col gap-7 sm:mt-16 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <span className="font-[var(--font-body)] text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--text)]">
              Continuous Optimization
            </span>

            <p className="mt-3 max-w-[720px] font-[var(--font-display)] text-2xl font-medium leading-tight tracking-[-0.035em] text-[var(--dark)] sm:text-3xl">
              Every result gives us another opportunity
              <span className="text-[var(--primary)]">
                {" "}
                to get better.
              </span>
            </p>
          </div>

          <a
            href="/contact"
            className="group inline-flex w-fit items-center gap-3 border-b border-[var(--dark)]/20 pb-2 font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--dark)] transition-colors duration-300 hover:border-[var(--primary)]"
          >
            Discuss Your Goals
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

export default PerformanceMarketingApproach;