import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const focusAreas = [
  {
    number: "01",
    title: "Find the Right Partners",
    description:
      "Identify publishers, creators, platforms, and partners whose audiences genuinely align with your brand and business objectives.",
  },
  {
    number: "02",
    title: "Build Performance",
    description:
      "Create partnership strategies that give affiliates the right tools, messaging, and incentives to drive meaningful customer action.",
  },
  {
    number: "03",
    title: "Scale What Works",
    description:
      "Use performance insights to strengthen successful partnerships, improve acquisition, and expand the opportunities that deliver real value.",
  },
];

const AffiliateMarketingIntro = () => {
  return (
    <section
      id="affiliate-intro"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Top meta */}
        {/* <div className="mb-16 flex items-center justify-between border-b border-[var(--border)] pb-5 sm:mb-20">
          <span className="font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text)]">
            Affiliate Marketing
          </span>

          <span className="font-[var(--font-display)] text-sm font-medium text-[var(--text)]">
            01 / 05
          </span>
        </div> */}

        {/* Main introduction */}
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="mb-6 block font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              The Smartek Approach
            </span>

            <h2 className="max-w-4xl font-[var(--font-display)] text-4xl font-medium leading-[1.04] tracking-[-0.045em] text-[var(--dark)] sm:text-5xl lg:text-6xl">
              Growth doesn't always come from reaching more people.
            </h2>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:pt-14"
          >
            <p className="font-[var(--font-display)] text-2xl font-medium leading-[1.2] tracking-[-0.025em] text-[var(--dark)] sm:text-3xl">
              Sometimes, it comes from reaching the right people through the
              right partners.
            </p>

            <div className="mt-8 space-y-5 font-[var(--font-body)] text-base leading-7 text-[var(--text)] sm:text-lg sm:leading-8">
              <p>
                Affiliate marketing gives brands a way to grow through
                partnerships that are built around shared audiences and
                measurable performance.
              </p>

              <p>
                We help identify relevant partners, create the right
                partnership structure, and continuously improve performance so
                your affiliate channel becomes a meaningful part of your
                acquisition strategy.
              </p>
            </div>

            <a
              href="/contact"
              className="group mt-9 inline-flex items-center gap-3 border-b border-[var(--dark)] pb-2 font-[var(--font-body)] text-sm font-semibold text-[var(--dark)] transition-colors duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              Talk to Our Team

              <ArrowUpRight
                size={17}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>
        </div>

        {/* Focus areas */}
        <div className="mt-24 border-t border-[var(--border)] sm:mt-32">
          {focusAreas.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid gap-5 border-b border-[var(--border)] py-8 sm:py-10 lg:grid-cols-[90px_0.8fr_1.2fr] lg:items-start lg:gap-10"
            >
              {/* Number */}
              <span className="font-[var(--font-display)] text-sm font-medium text-[var(--primary)]">
                {item.number}
              </span>

              {/* Title */}
              <h3 className="font-[var(--font-display)] text-2xl font-medium tracking-[-0.03em] text-[var(--dark)] sm:text-3xl">
                {item.title}
              </h3>

              {/* Description */}
              <p className="max-w-xl font-[var(--font-body)] text-sm leading-7 text-[var(--text)] sm:text-base sm:leading-7">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-20 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          <div>
            <span className="mb-5 block font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text)]">
              Partnership That Performs
            </span>

            <p className="max-w-4xl font-[var(--font-display)] text-3xl font-medium leading-[1.12] tracking-[-0.04em] text-[var(--dark)] sm:text-4xl lg:text-5xl">
              The goal isn't simply more partners. It's better partnerships
              that create measurable growth.
            </p>
          </div>

          {/* Small visual marker */}
          <div className="hidden h-20 w-20 items-center justify-center rounded-full border border-[var(--border)] lg:flex">
            <ArrowUpRight
              size={24}
              strokeWidth={1.5}
              className="text-[var(--primary)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AffiliateMarketingIntro;