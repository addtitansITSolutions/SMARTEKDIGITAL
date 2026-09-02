import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

const stats = [
  {
    value: "1000+",
    label: "Projects Completed",
  },
  {
    value: "100+",
    label: "Active Clients",
  },
  {
    value: "10+",
    label: "Years of Experience",
  },
  {
    value: "95%",
    label: "Client Satisfaction",
  },
];

const reasons = [
  {
    number: "01",
    title: "Business-First Approach",
    description:
      "Your marketing spend should foster your vision. We build campaigns around targeted goals.",
  },
  {
    number: "02",
    title: "Data Driven",
    description:
      "Our campaigns leverage market analytics, insights and performance data to ensure you make smarter decisions.",
  },
  {
    number: "03",
    title: "Scalable Outcomes",
    description:
      "Our marketing strategies are designed to drive clarity. No complicated explanations. No unnecessary layers.",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-36"
    >
      {/* Subtle background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[var(--primary)]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[var(--secondary)]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* Header */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.7fr_2fr] lg:gap-20">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex items-center gap-3">
              {/* <span className="h-[2px] w-8 bg-[var(--primary)]" /> */}

              <span className="font-[var(--font-body)] text-xs font-bold tracking-[0.2em] text-[var(--text)] uppercase">
                Why Smartek
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.9,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-4xl font-[var(--font-display)] text-4xl font-medium leading-[0.98] tracking-[-0.045em] text-[var(--dark)] sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Helping Ambitious Brands
              <br />
              <span className="text-[var(--primary)]">
                Make a Difference
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.75,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 max-w-2xl font-[var(--font-body)] text-base leading-7 text-[var(--text)] sm:mt-10 sm:text-lg sm:leading-8"
            >
              We help brands find the right audiences, build meaningful connections and create opportunities for
growth across digital channels.
            </motion.p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 border-y border-[var(--border)] sm:mt-24 lg:mt-32">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative px-4 py-10 sm:px-8 sm:py-12 lg:px-8 lg:py-14 ${
                  index !== 0
                    ? "border-l border-[var(--border)]"
                    : ""
                } ${
                  index === 2
                    ? "border-t border-[var(--border)] lg:border-t-0"
                    : ""
                } ${
                  index === 3
                    ? "border-t border-[var(--border)] lg:border-t-0"
                    : ""
                }`}
              >
                {/* Hover accent */}
                <span className="absolute left-0 top-0 h-[2px] w-0 bg-[var(--primary)] transition-all duration-500 group-hover:w-full" />

                <div className="flex items-end gap-1">
                  <span className="font-[var(--font-display)] text-4xl font-medium tracking-[-0.06em] text-[var(--dark)] sm:text-5xl lg:text-6xl">
                    {stat.value.replace(/[+%]/g, "")}
                  </span>

                  <span className="mb-1 font-[var(--font-display)] text-2xl font-medium text-[var(--primary)] sm:text-3xl lg:text-4xl">
                    {stat.value.includes("%") ? "%" : "+"}
                  </span>
                </div>

                <p className="mt-3 font-[var(--font-body)] text-xs font-semibold tracking-[0.08em] text-[var(--text)] uppercase sm:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Reasons */}
        <div className="mt-20 sm:mt-24 lg:mt-28">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.7fr_2fr] lg:gap-20">

            {/* Side label */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-start"
            >
              <span className="font-[var(--font-body)] text-xs font-bold tracking-[0.18em] text-[var(--text)] uppercase">
                What sets us apart
              </span>
            </motion.div>

            {/* Reasons */}
            <div className="border-t border-[var(--border)]">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group grid grid-cols-[42px_1fr] gap-5 border-b border-[var(--border)] py-7 sm:grid-cols-[60px_1fr] sm:gap-8 sm:py-9 lg:grid-cols-[70px_0.8fr_1fr] lg:items-center lg:gap-10"
                >
                  {/* Number */}
                  <span className="font-[var(--font-body)] text-xs font-bold tracking-[0.15em] text-[var(--primary)]">
                    {reason.number}
                  </span>

                  {/* Title */}
                  <div className="flex items-center gap-3">
                    <h3 className="font-[var(--font-display)] text-2xl font-medium tracking-[-0.03em] text-[var(--dark)] transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl">
                      {reason.title}
                    </h3>

                    <ArrowUpRight
                      size={17}
                      className="text-[var(--primary)] opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
                    />
                  </div>

                  {/* Description */}
                  <p className="col-start-2 font-[var(--font-body)] text-sm leading-6 text-[var(--text)] lg:col-start-auto">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-16 flex flex-col gap-5 border-t border-[var(--border)] pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-3">
            <Check
              size={17}
              strokeWidth={2}
              className="text-[var(--primary)]"
            />

            <p className="font-[var(--font-body)] text-sm text-[var(--text)]">
              One digital partner. Multiple growth capabilities.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-3 font-[var(--font-body)] text-sm font-bold text-[var(--dark)]"
          >
            Start a conversation

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--dark)] text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-[var(--primary)]">
              <ArrowUpRight size={15} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;