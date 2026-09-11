import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Heart,
  Search,
  ShoppingBag,
  Sparkles,
  UserRound,
} from "lucide-react";

const journeySteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Put your products in front of the people most likely to be interested through targeted campaigns, search, social, and product visibility.",
    icon: Search,
    label: "Visibility",
  },
  {
    number: "02",
    title: "Explore",
    description:
      "Give shoppers the information and experience they need to understand your products and move confidently through your store.",
    icon: Sparkles,
    label: "Experience",
  },
  {
    number: "03",
    title: "Consider",
    description:
      "Build trust and reduce hesitation with relevant content, strong product presentation, reviews, and a frictionless shopping experience.",
    icon: Heart,
    label: "Trust",
  },
  {
    number: "04",
    title: "Purchase",
    description:
      "Make the final step simple with a streamlined path to checkout, clear value, and fewer barriers between intent and action.",
    icon: ShoppingBag,
    label: "Conversion",
  },
  {
    number: "05",
    title: "Return",
    description:
      "Keep the relationship moving with retention strategies that encourage repeat purchases and turn customers into long-term value.",
    icon: UserRound,
    label: "Retention",
  },
];

const EcommerceMarketingJourney = () => {
  return (
    <section
      id="ecommerce-journey"
      className="relative overflow-hidden bg-[var(--light)] py-24 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
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
                The Customer Journey
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="max-w-4xl font-[var(--font-display)] text-4xl font-medium leading-[1.03] tracking-[-0.05em] text-[var(--dark)] sm:text-5xl lg:text-6xl">
              Every stage of the journey is an{" "}
              <span className="text-[var(--primary)]">opportunity.</span>
            </h2>

            <p className="mt-7 max-w-2xl font-[var(--font-body)] text-base leading-7 text-[var(--text)] sm:text-lg sm:leading-8">
              E-commerce growth doesn't happen at a single point. From the
              first impression to the next purchase, we look at the complete
              customer journey and find where your store can perform better.
            </p>
          </motion.div>
        </div>

        {/* Journey visual */}
        <div className="relative mt-20 sm:mt-24 lg:mt-32">
          {/* Desktop connector */}
          <div className="absolute left-[10%] right-[10%] top-10 hidden h-px bg-[var(--border)] lg:block" />

          <div className="grid gap-0 lg:grid-cols-5">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === journeySteps.length - 1;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative"
                >
                  {/* Desktop node */}
                  <div className="relative z-10 hidden lg:flex">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--light)] transition-all duration-300 hover:border-[var(--primary)] hover:bg-white">
                      <Icon
                        size={23}
                        strokeWidth={1.5}
                        className="text-[var(--dark)]"
                      />
                    </div>
                  </div>

                  {/* Mobile connector */}
                  <div className="absolute left-6 top-14 bottom-0 hidden w-px bg-[var(--border)] sm:block lg:hidden" />

                  {/* Mobile / tablet icon */}
                  <div className="relative z-10 mb-6 flex items-center gap-4 lg:hidden">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--light)]">
                      <Icon
                        size={18}
                        strokeWidth={1.5}
                        className="text-[var(--dark)]"
                      />
                    </div>

                    <span className="font-[var(--font-display)] text-sm font-medium text-[var(--primary)]">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="pb-12 lg:pr-7 lg:pt-8">
                    <div className="hidden lg:block">
                      <span className="font-[var(--font-display)] text-xs font-medium text-[var(--primary)]">
                        {step.number}
                      </span>
                    </div>

                    <span className="mt-2 block font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text)]">
                      {step.label}
                    </span>

                    <h3 className="mt-3 font-[var(--font-display)] text-2xl font-medium tracking-[-0.035em] text-[var(--dark)] sm:text-3xl">
                      {step.title}
                    </h3>

                    <p className="mt-4 max-w-[260px] font-[var(--font-body)] text-sm leading-7 text-[var(--text)]">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow between desktop stages */}
                  {!isLast && (
                    <ArrowRight
                      size={17}
                      strokeWidth={1.5}
                      className="absolute right-2 top-[31px] hidden text-[var(--border)] lg:block"
                    />
                  )}

                  {/* Mobile arrow */}
                  {!isLast && (
                    <ArrowDown
                      size={16}
                      strokeWidth={1.5}
                      className="absolute bottom-3 left-[18px] text-[var(--primary)] sm:hidden"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Journey principle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-12 border-t border-[var(--border)] pt-10 sm:mt-16 lg:mt-20"
        >
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <span className="font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text)]">
                The Commerce Principle
              </span>
            </div>

            <div>
              <p className="max-w-4xl font-[var(--font-display)] text-3xl font-medium leading-[1.12] tracking-[-0.04em] text-[var(--dark)] sm:text-4xl lg:text-5xl">
                A better customer journey doesn't just increase the chance of
                one purchase. It creates the foundation for{" "}
                <span className="text-[var(--primary)]">
                  lasting customer value.
                </span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom meta */}
        <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-[var(--border)] pt-5 font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text)]">
          <span>Discovery</span>
          <span>Experience</span>
          <span>Conversion</span>
          <span>Retention</span>
          <span>Customer Value</span>
        </div>
      </div>
    </section>
  );
};

export default EcommerceMarketingJourney;