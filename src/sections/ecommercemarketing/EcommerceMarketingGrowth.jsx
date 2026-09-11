import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Repeat2,
  ShoppingCart,
  Eye,
} from "lucide-react";

const growthPoints = [
  {
    number: "01",
    title: "Product Visibility",
    short: "Get noticed",
    description:
      "Make your products easier to discover through the channels and audiences that matter most to your business.",
    points: [
      "Product discovery",
      "Search visibility",
      "Paid campaigns",
    ],
    icon: Eye,
  },
  {
    number: "02",
    title: "Conversion",
    short: "Turn interest into action",
    description:
      "Remove friction from the buying journey and give shoppers the information, confidence, and experience they need to purchase.",
    points: [
      "Product presentation",
      "Store experience",
      "Conversion optimization",
    ],
    icon: ShoppingCart,
  },
  {
    number: "03",
    title: "Retention",
    short: "Create repeat customers",
    description:
      "Build stronger relationships after the first purchase with experiences that encourage customers to return and engage again.",
    points: [
      "Customer engagement",
      "Repeat purchases",
      "Retention strategy",
    ],
    icon: Repeat2,
  },
  {
    number: "04",
    title: "Revenue Growth",
    short: "Grow what works",
    description:
      "Use customer and campaign insights to understand what drives growth and scale the opportunities that create real business value.",
    points: [
      "Performance analysis",
      "Growth opportunities",
      "Continuous optimization",
    ],
    icon: BarChart3,
  },
];

const EcommerceMarketingGrowth = () => {
  return (
    <section
      id="ecommerce-growth"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-36"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-10%] top-[15%] h-[420px] w-[420px] rounded-full bg-[var(--primary)]/[0.05] blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-8%] h-[360px] w-[360px] rounded-full bg-[var(--secondary)]/[0.04] blur-3xl" />
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
                E-COMMERCE GROWTH
              </span>

              <span className="h-px w-16 bg-[var(--border)]" />
            </div>

            <div className="mt-8 font-[var(--font-display)] text-[7rem] font-light leading-none tracking-[-0.08em] text-[var(--dark)]/[0.06] sm:text-[9rem]">
              03
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--text)]">
              The Growth Engine
            </p>

            <h2 className="max-w-4xl font-[var(--font-display)] text-4xl font-medium leading-[1.05] tracking-[-0.045em] text-[var(--dark)] sm:text-5xl lg:text-6xl">
              Build a store that grows{" "}
              <span className="text-[var(--primary)]">beyond the first sale.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-[var(--text)] sm:text-lg sm:leading-8">
              Sustainable e-commerce growth isn't driven by one campaign or one
              conversion. It comes from improving every part of the customer
              experience and understanding how those improvements work together.
            </p>
          </motion.div>
        </div>

        {/* Main growth visual */}
        <div className="mt-20 lg:mt-28">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-0 right-0 top-[78px] hidden h-px bg-[var(--border)] lg:block" />

            <div className="grid gap-0 lg:grid-cols-4">
              {growthPoints.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.number}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.65,
                      delay: index * 0.1,
                    }}
                    className="group relative border-t border-[var(--border)] py-10 lg:border-l lg:border-t-0 lg:px-7 lg:py-0 first:lg:border-l-0 first:lg:pl-0 last:lg:pr-0"
                  >
                    {/* Number + icon */}
                    <div className="relative z-10 flex items-center justify-between lg:justify-start">
                      <span className="font-[var(--font-display)] text-sm font-medium tracking-[0.12em] text-[var(--primary)]">
                        {item.number}
                      </span>

                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-white transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white lg:ml-8">
                        <Icon size={19} strokeWidth={1.7} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mt-8">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text)]">
                        {item.short}
                      </p>

                      <h3 className="mt-3 font-[var(--font-display)] text-2xl font-medium tracking-[-0.035em] text-[var(--dark)] sm:text-3xl">
                        {item.title}
                      </h3>

                      <p className="mt-5 max-w-sm text-sm leading-6 text-[var(--text)]">
                        {item.description}
                      </p>

                      <ul className="mt-7 space-y-3">
                        {item.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-center gap-3 text-sm text-[var(--dark)]"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Hover arrow */}
                    <div className="mt-9 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-300 group-hover:translate-x-1 group-hover:border-[var(--primary)] group-hover:text-[var(--primary)]">
                      <ArrowUpRight size={16} strokeWidth={1.8} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-20 border-t border-[var(--border)] pt-8 sm:mt-24 lg:mt-28"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
                The Growth Principle
              </p>

              <p className="mt-5 max-w-3xl font-[var(--font-display)] text-2xl font-medium leading-tight tracking-[-0.035em] text-[var(--dark)] sm:text-3xl lg:text-4xl">
                More traffic is useful.{" "}
                <span className="text-[var(--text)]">
                  More value from every customer is better.
                </span>
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.14em] text-[var(--text)]">
              <span>Visibility</span>
              <span className="text-[var(--primary)]">·</span>
              <span>Conversion</span>
              <span className="text-[var(--primary)]">·</span>
              <span>Retention</span>
              <span className="text-[var(--primary)]">·</span>
              <span>Revenue</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EcommerceMarketingGrowth;