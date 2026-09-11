import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const focusAreas = [
  {
    number: "01",
    title: "Reach Mobile Audiences",
    description:
      "Connect your brand with the mobile users most likely to engage, install, and take meaningful action.",
  },
  {
    number: "02",
    title: "Drive App Growth",
    description:
      "Build acquisition campaigns that turn mobile attention into quality installs and valuable new users.",
  },
  {
    number: "03",
    title: "Improve Engagement",
    description:
      "Go beyond acquisition by creating strategies that encourage users to engage, return, and create long-term value.",
  },
];

const MobilePerformanceMarketingIntro = () => {
  return (
    <section
      id="mobile-performance-intro"
      className="relative overflow-hidden bg-white py-24 sm:py-8 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Top meta */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-between border-b border-[var(--border)] pb-5"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
            Mobile Performance Marketing
          </span>

          <span className="font-[var(--font-display)] text-sm font-medium text-[var(--dark)]/40">
            01 / 05
          </span>
        </motion.div> */}

        {/* Main editorial content */}
        <div className="grid gap-14 pt-4 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:pt-4">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--text)]">
              The Smartek Approach
            </p>

            <h2 className="mt-6 max-w-md font-[var(--font-display)] text-4xl font-medium leading-[1.05] tracking-[-0.045em] text-[var(--dark)] sm:text-5xl">
              Mobile growth is about more than{" "}
              <span className="text-[var(--primary)]">installs.</span>
            </h2>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="max-w-2xl font-[var(--font-display)] text-2xl font-medium leading-tight tracking-[-0.035em] text-[var(--dark)] sm:text-3xl lg:text-4xl">
              The real opportunity begins when the right users discover your
              mobile experience.
            </p>

            <div className="mt-8 max-w-2xl space-y-5 text-base leading-7 text-[var(--text)] sm:text-lg sm:leading-8">
              <p>
                Mobile performance marketing should connect acquisition with
                what happens after the install. It's about reaching relevant
                audiences, creating compelling reasons to take action, and
                continuously learning from user behaviour.
              </p>

              <p>
                We combine audience strategy, campaign optimization, creative
                testing, and performance data to build a mobile growth engine
                that can improve over time.
              </p>
            </div>

            <a
              href="/contact"
              className="group mt-9 inline-flex items-center gap-3 text-sm font-semibold text-[var(--dark)]"
            >
              Talk to Our Team

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white">
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </a>
          </motion.div>
        </div>

        {/* Focus areas */}
        <div className="mt-20 border-t border-[var(--border)] lg:mt-28">
          {focusAreas.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
              }}
              className="group grid gap-5 border-b border-[var(--border)] py-8 sm:grid-cols-[80px_1fr_auto] sm:items-center sm:gap-8 lg:py-10"
            >
              {/* Number */}
              <span className="font-[var(--font-display)] text-sm font-medium tracking-[0.12em] text-[var(--primary)]">
                {item.number}
              </span>

              {/* Title */}
              <div>
                <h3 className="font-[var(--font-display)] text-2xl font-medium tracking-[-0.035em] text-[var(--dark)] transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--text)] sm:text-base sm:leading-7">
                  {item.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white sm:flex">
                <ArrowUpRight size={17} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-16 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          <p className="max-w-3xl font-[var(--font-display)] text-2xl font-medium leading-tight tracking-[-0.035em] text-[var(--dark)] sm:text-3xl">
            The goal isn't simply to acquire more users.{" "}
            <span className="text-[var(--text)]">
              It's to create mobile experiences worth coming back to.
            </span>
          </p>

          <div className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--text)]">
            Acquisition <span className="mx-2 text-[var(--primary)]">·</span>
            Engagement <span className="mx-2 text-[var(--primary)]">·</span>
            Growth
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MobilePerformanceMarketingIntro;