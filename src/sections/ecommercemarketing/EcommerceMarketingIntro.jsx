import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

const growthAreas = [
  {
    number: "01",
    title: "Attract",
    description:
      "Bring the right shoppers to your store through focused campaigns, product visibility, and audience targeting.",
  },
  {
    number: "02",
    title: "Convert",
    description:
      "Remove friction from the buying journey and create experiences that make it easier for shoppers to take action.",
  },
  {
    number: "03",
    title: "Retain",
    description:
      "Turn first-time buyers into returning customers through relevant communication, better experiences, and ongoing engagement.",
  },
];

const EcommerceMarketingIntro = () => {
  return (
    <section
      id="ecommerce-intro"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Top label */}
        {/* <div className="mb-16 flex items-center justify-between border-b border-[var(--border)] pb-5 sm:mb-20">
          <span className="font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text)]">
            E-commerce Marketing
          </span>

          <span className="font-[var(--font-display)] text-sm font-medium text-[var(--text)]">
            01 / 05
          </span>
        </div> */}

        {/* Main statement */}
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20">
          {/* Large statement */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="mb-7 block font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              The Smartek Approach
            </span>

            <h2 className="max-w-5xl font-[var(--font-display)] text-4xl font-medium leading-[1.02] tracking-[-0.055em] text-[var(--dark)] sm:text-5xl lg:text-7xl">
              Getting people to your store is only the beginning.
            </h2>
          </motion.div>

          {/* Side content */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:pt-20"
          >
            <div className="h-px w-12 bg-[var(--primary)]" />

            <p className="mt-6 font-[var(--font-display)] text-2xl font-medium leading-[1.2] tracking-[-0.03em] text-[var(--dark)] sm:text-3xl">
              The real opportunity begins when a shopper lands on your store.
            </p>

            <div className="mt-7 space-y-4 font-[var(--font-body)] text-base leading-7 text-[var(--text)]">
              <p>
                From product discovery to checkout and beyond, every part of
                the customer journey can influence whether someone buys,
                returns, or moves on.
              </p>

              <p>
                We bring acquisition, product marketing, conversion strategy,
                and customer retention together to create a more connected
                e-commerce growth engine.
              </p>
            </div>

            <a
              href="/contact"
              className="group mt-8 inline-flex items-center gap-3 border-b border-[var(--dark)] pb-2 font-[var(--font-body)] text-sm font-semibold text-[var(--dark)] transition-colors duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)]"
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

        {/* Journey divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 border-t border-[var(--border)] pt-7 sm:mt-32"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text)]">
              The Growth Journey
            </span>

            <span className="font-[var(--font-display)] text-sm text-[var(--text)]">
              Attract → Convert → Retain
            </span>
          </div>
        </motion.div>

        {/* Growth areas */}
        <div className="mt-10 grid border-l border-[var(--border)] sm:grid-cols-3">
          {growthAreas.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
              }}
              className="group relative border-b border-r border-t border-[var(--border)] p-7 transition-colors duration-300 hover:bg-[var(--light)] sm:border-b-0 sm:p-8 lg:p-10"
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="font-[var(--font-display)] text-sm font-medium text-[var(--primary)]">
                  {item.number}
                </span>

                <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--text)]">
                  {item.title}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-16 font-[var(--font-display)] text-3xl font-medium tracking-[-0.04em] text-[var(--dark)] sm:mt-20">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-4 font-[var(--font-body)] text-sm leading-7 text-[var(--text)]">
                {item.description}
              </p>

              {/* Small indicator */}
              <div className="mt-8 flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] transition-transform duration-300 group-hover:scale-150" />

                <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--text)]">
                  Growth Focus
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="mt-20 border-t border-[var(--border)] pt-10 sm:mt-24"
        >
          <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:items-start">
            <div>
              <span className="font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text)]">
                Our Focus
              </span>
            </div>

            <div>
              <div className="flex items-start gap-4">
                <Check
                  size={21}
                  strokeWidth={1.8}
                  className="mt-1 shrink-0 text-[var(--primary)]"
                />

                <p className="max-w-4xl font-[var(--font-display)] text-3xl font-medium leading-[1.12] tracking-[-0.04em] text-[var(--dark)] sm:text-4xl lg:text-5xl">
                  Don't just drive more traffic. Build a store that gives
                  people a reason to{" "}
                  <span className="text-[var(--primary)]">
                    buy and come back.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom meta */}
        <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-[var(--border)] pt-5 font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text)]">
          <span>Acquisition</span>
          <span>Conversion</span>
          <span>Retention</span>
          <span>Growth</span>
        </div>
      </div>
    </section>
  );
};

export default EcommerceMarketingIntro;