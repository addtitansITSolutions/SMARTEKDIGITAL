import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";

const EcommerceMarketingHero = () => {
  return (
    <section className="relative min-h-[90svh] overflow-hidden bg-[var(--dark)] text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-[var(--primary)] opacity-[0.08] blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[var(--secondary)] opacity-[0.06] blur-3xl" />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[90svh] max-w-7xl flex-col justify-between px-6 pb-8 pt-28 sm:px-8 sm:pb-10 lg:px-10 lg:pt-32">
        {/* Top meta */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-between border-b border-white/10 pb-5"
        >
          <div className="flex items-center gap-4">
            <span className="font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
              E-commerce Marketing
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-[var(--primary)] sm:block" />

            <span className="hidden font-[var(--font-body)] text-xs uppercase tracking-[0.16em] text-white/35 sm:block">
              03
            </span>
          </div>

          <span className="font-[var(--font-display)] text-sm font-medium text-white/45">
            03 / 05
          </span>
        </motion.div>

        {/* Main content */}
        <div className="grid gap-12 py-14 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-20 lg:py-16">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-6 block font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]"
            >
              Strategy · Conversion · Growth
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-3xl font-[var(--font-display)] text-5xl font-medium leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[5.6rem]"
            >
              Turn more
              <br />
              <span className="text-[var(--primary)]">shoppers</span>
              <br />
              into customers.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-7 max-w-xl font-[var(--font-body)] text-base leading-7 text-white/60 sm:text-lg sm:leading-8"
            >
              We build e-commerce marketing strategies that improve product
              visibility, create better shopping experiences, increase
              conversions, and turn one-time buyers into returning customers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-9 flex flex-wrap items-center gap-6"
            >
              <a
                href="#ecommerce-intro"
                className="group inline-flex items-center gap-3 rounded-full bg-[var(--primary)] px-6 py-3.5 font-[var(--font-body)] text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e97518]"
              >
                Explore E-commerce Marketing

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#ecommerce-intro"
                className="group inline-flex items-center gap-2 font-[var(--font-body)] text-sm font-medium text-white/60 transition-colors duration-300 hover:text-white"
              >
                Scroll to explore

                <ArrowDown
                  size={15}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </a>
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[560px] lg:ml-auto"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <img
                src="/Services/ecommerce-marketing.webp"
                alt="E-commerce Marketing"
                className="h-full w-full object-cover"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />

              {/* Commerce indicator */}
              <div className="absolute left-5 top-5 flex items-center gap-3 rounded-full border border-white/15 bg-black/25 px-4 py-2.5 backdrop-blur-sm">
                <ShoppingBag
                  size={16}
                  strokeWidth={1.7}
                  className="text-[var(--primary)]"
                />

                <span className="font-[var(--font-body)] text-xs font-medium text-white/80">
                  Online Store Growth
                </span>
              </div>

              {/* Growth metric */}
              <div className="absolute bottom-5 right-5 flex items-center gap-3 rounded-lg border border-white/15 bg-black/30 px-4 py-3 backdrop-blur-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--primary)]/15">
                  <TrendingUp
                    size={17}
                    strokeWidth={1.7}
                    className="text-[var(--primary)]"
                  />
                </div>

                <div>
                  <span className="block font-[var(--font-body)] text-[9px] font-semibold uppercase tracking-[0.15em] text-white/40">
                    Focus
                  </span>

                  <span className="font-[var(--font-display)] text-sm font-medium text-white">
                    Conversion & Growth
                  </span>
                </div>
              </div>

              {/* Bottom image statement */}
              <div className="absolute bottom-5 left-5 max-w-[230px]">
                <p className="font-[var(--font-display)] text-xl font-medium leading-[1.1] tracking-[-0.03em] text-white">
                  Better shopping experiences create better business.
                </p>
              </div>
            </div>

            {/* Decorative number */}
            <span className="pointer-events-none absolute -bottom-14 -right-3 font-[var(--font-display)] text-[8rem] font-medium leading-none tracking-[-0.1em] text-white/[0.025] sm:-right-6 sm:text-[10rem]">
              03
            </span>
          </motion.div>
        </div>

        {/* Bottom meta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5"
        >
          <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
            E-commerce Marketing
          </span>

          <div className="flex flex-wrap gap-x-5 gap-y-2 font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.16em] text-white/30">
            <span>Visibility</span>
            <span>Conversion</span>
            <span>Retention</span>
            <span>Growth</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EcommerceMarketingHero;