import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const focusAreas = [
  {
    number: "01",
    title: "Reach the right audience",
    description:
      "Put your campaigns in front of people who are most likely to engage, enquire, subscribe or buy.",
  },
  {
    number: "02",
    title: "Improve every campaign",
    description:
      "Use real performance data to understand what is working, what is not, and where the next opportunity lies.",
  },
  {
    number: "03",
    title: "Grow with confidence",
    description:
      "Build a repeatable acquisition engine that can be refined, scaled and aligned with your business goals.",
  },
];

const PerformanceMarketingIntro = () => {
  return (
    <section
      id="performance-marketing-intro"
      className="w-full bg-white"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between border-b border-[var(--border)] pb-5"
        >
          <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text)]">
            Performance Marketing
          </span>

          <span className="font-[var(--font-display)] text-sm text-gray-300">
            02 / 05
          </span>
        </motion.div>

        {/* Main editorial area */}
        <div className="grid gap-14 py-16 lg:grid-cols-[0.85fr_1.5fr] lg:gap-24 lg:py-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--primary)]">
              The Smartek Approach
            </span>

            <p className="mt-6 max-w-[280px] font-[var(--font-display)] text-xl font-medium leading-tight tracking-[-0.035em] text-[var(--dark)] sm:text-2xl">
              More spend doesn't always mean more growth.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="max-w-[900px] font-[var(--font-display)] text-4xl font-medium leading-[0.98] tracking-[-0.05em] text-[var(--dark)] sm:text-5xl lg:text-6xl">
              Marketing should be{" "}
              <span className="text-[var(--primary)]">
                accountable to results.
              </span>
            </h2>

            <p className="mt-8 max-w-[720px] font-[var(--font-body)] text-sm leading-7 text-[var(--text)] sm:text-base sm:leading-8">
              Performance marketing is not simply about putting ads in front
              of more people. It is about understanding your audience,
              choosing the right channels, measuring what matters and
              continuously improving the path from click to conversion.
            </p>

            <p className="mt-5 max-w-[720px] font-[var(--font-body)] text-sm leading-7 text-[var(--text)] sm:text-base sm:leading-8">
              At Smartek Digital, we combine data, creative thinking and
              continuous optimization to build campaigns around real business
              objectives — not vanity metrics.
            </p>
          </motion.div>
        </div>

        {/* Focus areas */}
        <div className="border-t border-[var(--border)]">
          {focusAreas.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group grid gap-6 border-b border-[var(--border)] py-8 sm:py-10 lg:grid-cols-[100px_1fr_1fr_40px] lg:items-center lg:gap-10"
            >
              {/* Number */}
              <span className="font-[var(--font-display)] text-sm font-medium text-gray-300">
                {item.number}
              </span>

              {/* Title */}
              <h3 className="font-[var(--font-display)] text-2xl font-medium tracking-[-0.035em] text-[var(--dark)] transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
                {item.title}
              </h3>

              {/* Description */}
              <p className="max-w-[480px] font-[var(--font-body)] text-sm leading-7 text-[var(--text)]">
                {item.description}
              </p>

              {/* Arrow */}
              <div className="hidden lg:flex lg:justify-end">
                <ArrowUpRight
                  size={20}
                  strokeWidth={1.5}
                  className="text-gray-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--primary)]"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6 pt-10 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-[600px] font-[var(--font-display)] text-lg font-medium leading-tight tracking-[-0.025em] text-[var(--dark)] sm:text-xl">
            The goal isn't simply to spend more.
            <span className="text-[var(--primary)]">
              {" "}
              It's to make every decision smarter.
            </span>
          </p>

          <a
            href="/contact"
            className="group inline-flex w-fit items-center gap-3 font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--dark)]"
          >
            Talk to Our Team
            <span className="flex h-9 w-9 items-center justify-center border border-[var(--border)] transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white">
              <ArrowUpRight
                size={14}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PerformanceMarketingIntro;