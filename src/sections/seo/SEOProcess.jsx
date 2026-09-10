import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  FileSearch,
  Gauge,
  Lightbulb,
  Search,
} from "lucide-react";

const SEOProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Research",
      description:
        "We understand your market, audience, competitors, and the searches that create meaningful opportunities for your business.",
      icon: Search,
      label: "DISCOVER",
    },
    {
      number: "02",
      title: "Optimize",
      description:
        "We improve the technical structure and on-page experience so search engines can better understand and evaluate your website.",
      icon: Gauge,
      label: "STRENGTHEN",
    },
    {
      number: "03",
      title: "Create",
      description:
        "We develop useful, relevant content built around search intent and the questions your audience actually wants answered.",
      icon: Lightbulb,
      label: "RELEVANCE",
    },
    {
      number: "04",
      title: "Build Authority",
      description:
        "We strengthen your digital credibility with strategies that increase relevance, trust, and authority within your market.",
      icon: FileSearch,
      label: "CREDIBILITY",
    },
    {
      number: "05",
      title: "Measure & Improve",
      description:
        "We monitor performance, identify new opportunities, and continuously refine the strategy as search behaviour and your business evolve.",
      icon: BarChart3,
      label: "GROWTH",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4">
              <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />

              <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text)]">
                Our SEO Process
              </span>
            </div>

            <div className="mt-8 flex items-center gap-3">
              {/* <span className="font-[var(--font-display)] text-sm text-[var(--primary)]">
                03
              </span>

              <span className="h-px w-10 bg-[var(--border)]" /> */}

              <span className="font-[var(--font-body)] text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--text)]/50">
                From Search to Growth
              </span>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: 0.1,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="max-w-[900px] font-[var(--font-display)] text-4xl font-medium leading-[0.95] tracking-[-0.05em] text-[var(--dark)] sm:text-5xl lg:text-7xl">
              A strategy that keeps moving{" "}
              <span className="text-[var(--primary)]">forward.</span>
            </h2>

            <p className="mt-7 max-w-[680px] font-[var(--font-body)] text-sm leading-7 text-[var(--text)] sm:mt-9 sm:text-base sm:leading-8">
              SEO is not a single optimization project. It is a continuous
              process of understanding, improving, measuring, and adapting.
              Every stage gives us insight into what should happen next.
            </p>
          </motion.div>
        </div>

        {/* Process journey */}
        <div className="relative mt-20 sm:mt-24 lg:mt-32">
          {/* Connecting line */}
          <div className="absolute left-[23px] top-8 bottom-8 w-px lg:left-1/2 lg:top-[58px] lg:bottom-auto lg:h-px lg:w-[calc(100%-160px)] lg:-translate-x-1/2" />

          <div className="relative space-y-14 lg:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative lg:grid lg:grid-cols-5 lg:items-start"
                >
                  {/* Desktop connector point */}
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-white lg:left-1/2 lg:top-0 lg:h-[116px] lg:w-[116px] lg:-translate-x-1/2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--dark)] transition-colors duration-300 group-hover:bg-[var(--primary)] lg:h-12 lg:w-12">
                      <Icon
                        size={17}
                        strokeWidth={1.5}
                        className="text-white lg:size-[20px]"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`pl-20 lg:col-span-2 lg:pl-0 ${
                      index % 2 === 0
                        ? "lg:col-start-1 lg:pr-28 lg:text-right"
                        : "lg:col-start-4 lg:pl-28"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-4 lg:mb-5 ${
                        index % 2 === 0
                          ? "lg:justify-end"
                          : "lg:justify-start"
                      }`}
                    >
                      <span className="font-[var(--font-display)] text-xs font-medium text-[var(--primary)]">
                        {step.number}
                      </span>

                      <span className="font-[var(--font-body)] text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--text)]/45">
                        {step.label}
                      </span>
                    </div>

                    <h3 className="font-[var(--font-display)] text-2xl font-medium tracking-[-0.035em] text-[var(--dark)] sm:text-3xl">
                      {step.title}
                    </h3>

                    <p
                      className={`mt-4 max-w-[460px] font-[var(--font-body)] text-sm leading-7 text-[var(--text)] ${
                        index % 2 === 0 ? "lg:ml-auto" : ""
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Empty desktop side */}
                  <div className="hidden lg:col-span-1 lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mt-20 border-t border-[var(--border)] pt-8 sm:mt-28 sm:pt-10 lg:mt-36"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text)]/50">
                Continuous Improvement
              </span>

              <p className="mt-5 max-w-[820px] font-[var(--font-display)] text-2xl font-medium leading-[1.15] tracking-[-0.035em] text-[var(--dark)] sm:text-3xl lg:text-4xl">
                Search changes. Markets change.{" "}
                <span className="text-[var(--primary)]">
                  Your strategy should too.
                </span>
              </p>
            </div>

            <a
              href="/contact"
              className="group inline-flex w-fit shrink-0 items-center gap-3 border-b border-[var(--dark)] pb-3 font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.17em] text-[var(--dark)] transition-colors duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              Build Your SEO Strategy

              <ArrowUpRight
                size={15}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="mt-14 flex justify-center lg:hidden">
          <ArrowDown
            size={16}
            strokeWidth={1.4}
            className="animate-bounce text-[var(--text)]/30"
          />
        </div>
      </div>
    </section>
  );
};

export default SEOProcess;