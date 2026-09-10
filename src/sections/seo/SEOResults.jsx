import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Search,
  TrendingUp,
} from "lucide-react";

const SEOResults = () => {
  const metrics = [
    {
      number: "01",
      title: "Organic Visibility",
      description:
        "Track how your website is performing across the searches that matter to your business.",
      icon: Search,
    },
    {
      number: "02",
      title: "Qualified Traffic",
      description:
        "Look beyond traffic volume and understand whether the people finding you are relevant.",
      icon: TrendingUp,
    },
    {
      number: "03",
      title: "Business Impact",
      description:
        "Connect search performance with meaningful actions, enquiries, opportunities, and growth.",
      icon: BarChart3,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[var(--dark)] py-24 text-white sm:py-28 lg:py-36">
      {/* Subtle background detail */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-48 top-[-160px] h-[500px] w-[500px] rounded-full bg-[var(--primary)]/10 blur-3xl" />

        <div className="absolute -bottom-48 -left-40 h-[450px] w-[450px] rounded-full bg-[var(--secondary)]/10 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.025]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="grid gap-10 border-b border-white/10 pb-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:pb-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4">
              <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />

              <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
                Measuring What Matters
              </span>
            </div>

            {/* <div className="mt-8 flex items-center gap-3">
              <span className="font-[var(--font-display)] text-sm text-[var(--primary)]">
                04
              </span>

              <span className="h-px w-10 bg-white/10" />

              <span className="font-[var(--font-body)] text-[9px] font-bold uppercase tracking-[0.16em] text-white/30">
                SEO Performance
              </span>
            </div> */}
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
            <h2 className="max-w-[900px] font-[var(--font-display)] text-4xl font-medium leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
              Better visibility should lead to{" "}
              <span className="text-[var(--primary)]">better outcomes.</span>
            </h2>

            <p className="mt-7 max-w-[680px] font-[var(--font-body)] text-sm leading-7 text-white/50 sm:mt-9 sm:text-base sm:leading-8">
              We measure SEO through more than rankings. The real value comes
              from understanding whether stronger search visibility is bringing
              the right people closer to your business.
            </p>
          </motion.div>
        </div>

        {/* Measurement visual */}
        <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Main visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative min-h-[420px] overflow-hidden border border-white/10 bg-white/[0.035] p-7 sm:p-10 lg:p-12"
          >
            {/* Top */}
            <div className="flex items-start justify-between border-b border-white/10 pb-6">
              <div>
                <span className="font-[var(--font-body)] text-[9px] font-bold uppercase tracking-[0.18em] text-white/35">
                  Organic Growth
                </span>

                <h3 className="mt-3 font-[var(--font-display)] text-2xl font-medium tracking-[-0.035em] text-white sm:text-3xl">
                  From visibility to opportunity.
                </h3>
              </div>

              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10">
                <TrendingUp
                  size={18}
                  strokeWidth={1.5}
                  className="text-[var(--primary)]"
                />
              </div>
            </div>

            {/* Abstract growth line */}
            <div className="relative mt-12 h-[190px] overflow-hidden">
              {/* Horizontal guides */}
              <div className="absolute inset-x-0 top-0 border-t border-white/[0.06]" />
              <div className="absolute inset-x-0 top-1/2 border-t border-white/[0.06]" />
              <div className="absolute inset-x-0 bottom-0 border-t border-white/[0.06]" />

              {/* Vertical guides */}
              <div className="absolute inset-y-0 left-1/4 border-l border-white/[0.04]" />
              <div className="absolute inset-y-0 left-1/2 border-l border-white/[0.04]" />
              <div className="absolute inset-y-0 left-3/4 border-l border-white/[0.04]" />

              {/* Growth path */}
              <svg
                viewBox="0 0 800 190"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full"
              >
                <motion.path
                  d="M0 165 C90 160 100 145 170 150 C240 155 250 125 325 132 C395 140 420 105 480 112 C545 120 565 72 630 80 C690 88 715 48 800 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-[var(--primary)]"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.8,
                    ease: "easeInOut",
                  }}
                />
              </svg>

              {/* End point */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5, duration: 0.4 }}
                className="absolute right-0 top-[14px] h-3 w-3 rounded-full bg-[var(--primary)] shadow-[0_0_20px_rgba(245,130,32,0.5)]"
              />

              {/* Labels */}
              <div className="absolute bottom-0 left-0 font-[var(--font-body)] text-[8px] font-bold uppercase tracking-[0.15em] text-white/25">
                Starting Point
              </div>

              <div className="absolute right-0 top-0 font-[var(--font-body)] text-[8px] font-bold uppercase tracking-[0.15em] text-[var(--primary)]">
                Growth
              </div>
            </div>

            {/* Bottom */}
            <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <span className="font-[var(--font-body)] text-[9px] font-bold uppercase tracking-[0.16em] text-white/30">
                Visibility · Intent · Opportunity
              </span>

              <span className="font-[var(--font-body)] text-[9px] font-bold uppercase tracking-[0.16em] text-white/30">
                Continuous Measurement
              </span>
            </div>
          </motion.div>

          {/* Side panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: 0.15,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col justify-between border border-white/10 bg-[var(--primary)] p-7 sm:p-10 lg:p-12"
          >
            <div>
              <span className="font-[var(--font-body)] text-[9px] font-bold uppercase tracking-[0.18em] text-white/65">
                The Right Question
              </span>

              <h3 className="mt-6 max-w-[430px] font-[var(--font-display)] text-3xl font-medium leading-[1] tracking-[-0.04em] text-white sm:text-4xl">
                Are the right people finding you?
              </h3>

              <p className="mt-6 max-w-[430px] font-[var(--font-body)] text-sm leading-7 text-white/75">
                Rankings are useful signals, but meaningful SEO goes further.
                We look at the complete journey from search visibility to
                qualified engagement and business opportunity.
              </p>
            </div>

            <div className="mt-12 border-t border-white/20 pt-6">
              <div className="flex items-center justify-between">
                <span className="font-[var(--font-body)] text-[9px] font-bold uppercase tracking-[0.16em] text-white/65">
                  Smartek Digital
                </span>

                <ArrowUpRight
                  size={20}
                  strokeWidth={1.5}
                  className="text-white"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Metrics */}
        <div className="mt-6 grid border border-white/10 sm:grid-cols-3">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;

            return (
              <motion.div
                key={metric.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                }}
                className={`group p-7 sm:p-8 lg:p-10 ${
                  index !== metrics.length - 1
                    ? "border-b border-white/10 sm:border-b-0 sm:border-r"
                    : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-[var(--font-display)] text-sm text-[var(--primary)]">
                    {metric.number}
                  </span>

                  <Icon
                    size={19}
                    strokeWidth={1.4}
                    className="text-white/30 transition-colors duration-300 group-hover:text-[var(--primary)]"
                  />
                </div>

                <h3 className="mt-10 font-[var(--font-display)] text-xl font-medium tracking-[-0.03em] text-white sm:text-2xl">
                  {metric.title}
                </h3>

                <p className="mt-4 font-[var(--font-body)] text-sm leading-7 text-white/40">
                  {metric.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Final statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mt-20 border-t border-white/10 pt-8 sm:mt-28 sm:pt-10 lg:mt-36"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                The SEO Difference
              </span>

              <p className="mt-5 max-w-[850px] font-[var(--font-display)] text-2xl font-medium leading-[1.15] tracking-[-0.035em] text-white sm:text-3xl lg:text-4xl">
                Don't chase rankings.
                <br />
                <span className="text-[var(--primary)]">
                  Build lasting visibility.
                </span>
              </p>
            </div>

            <a
              href="/contact"
              className="group inline-flex w-fit shrink-0 items-center gap-3 bg-[var(--primary)] px-6 py-4 font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[var(--secondary)] hover:text-[var(--dark)]"
            >
              Start a Conversation

              <ArrowUpRight
                size={15}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SEOResults;