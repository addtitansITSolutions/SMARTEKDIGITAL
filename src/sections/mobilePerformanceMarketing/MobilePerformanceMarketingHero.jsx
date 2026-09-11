import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Smartphone,
  TrendingUp,
} from "lucide-react";

const MobilePerformanceMarketingHero = () => {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[var(--dark)] text-white">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-[var(--primary)]/[0.08] blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[-120px] right-[15%] h-[380px] w-[380px] rounded-full bg-[var(--secondary)]/[0.07] blur-[120px]" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col px-6 pb-10 pt-28 sm:px-8 sm:pt-32 lg:px-10 lg:pt-36">
        {/* Top meta */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-between border-b border-white/10 pb-5"
        >
          <div className="flex items-center gap-4">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/60">
              Mobile Performance Marketing
            </span>

            <span className="hidden h-px w-12 bg-white/20 sm:block" />

            <span className="hidden text-xs uppercase tracking-[0.16em] text-white/35 sm:block">
              05 / 05
            </span>
          </div>

          <span className="font-[var(--font-display)] text-sm font-medium text-[var(--primary)]">
            05
          </span>
        </motion.div>

        {/* Main content */}
        <div className="grid flex-1 items-center gap-12 py-14 lg:grid-cols-[1fr_0.85fr] lg:gap-20 lg:py-16">
          {/* Left */}
          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]"
            >
              Acquisition · Mobile · Engagement · Growth
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-3xl font-[var(--font-display)] text-[3.4rem] font-medium leading-[0.94] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[5.7rem]"
            >
              Turn mobile
              <br />
              attention into{" "}
              <span className="text-[var(--primary)]">growth.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-8 max-w-xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8"
            >
              We build mobile performance campaigns designed to reach
              high-intent audiences, drive app installs, increase engagement,
              and create measurable growth throughout the mobile journey.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-9 flex flex-wrap items-center gap-5"
            >
              <a
                href="#mobile-performance-intro"
                className="group inline-flex items-center gap-3 rounded-full bg-[var(--primary)] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(245,130,32,0.2)]"
              >
                Explore Mobile Growth

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowUpRight size={15} />
                </span>
              </a>

              <a
                href="#mobile-performance-intro"
                className="group inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors duration-300 hover:text-white"
              >
                Scroll to explore

                <ArrowDown
                  size={15}
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
              duration: 0.9,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[560px] lg:ml-auto"
          >
            {/* Image frame */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
              <div className="aspect-[4/5] w-full">
                <img
                  src="/Services/mobile-performance-marketing.webp"
                  alt="Mobile Performance Marketing"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark)]/70 via-transparent to-transparent" />

              {/* Top floating label */}
              <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                <div className="flex items-center gap-3 rounded-full border border-white/15 bg-[var(--dark)]/70 px-4 py-2.5 backdrop-blur-md">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--primary)] text-white">
                    <Smartphone size={14} />
                  </span>

                  <span className="text-xs font-medium text-white/80">
                    Mobile Growth
                  </span>
                </div>
              </div>

              {/* Performance indicator */}
              <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7">
                <div className="border-l border-[var(--primary)] pl-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40">
                    Focus
                  </p>

                  <p className="mt-1 text-sm font-medium text-white">
                    Acquisition & Engagement
                  </p>
                </div>
              </div>

              {/* Growth badge */}
              <div className="absolute bottom-5 right-5 sm:bottom-7 sm:right-7">
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3.5 py-2 backdrop-blur-md">
                  <TrendingUp
                    size={14}
                    className="text-[var(--primary)]"
                  />

                  <span className="text-xs font-medium text-white/80">
                    Performance
                  </span>
                </div>
              </div>
            </div>

            {/* Image statement */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="mt-5 flex items-start gap-3"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />

              <p className="max-w-sm text-sm leading-6 text-white/45">
                Reach the right users. Create meaningful engagement. Grow
                beyond the install.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom meta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="text-xs uppercase tracking-[0.16em] text-white/35">
            Mobile Performance Marketing
          </span>

          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.14em] text-white/35 sm:gap-5">
            <span>Acquisition</span>
            <span className="text-[var(--primary)]">·</span>
            <span>App Growth</span>
            <span className="text-[var(--primary)]">·</span>
            <span>Engagement</span>
            <span className="text-[var(--primary)]">·</span>
            <span>Retention</span>
          </div>
        </motion.div>

        {/* Decorative number */}
        <div className="pointer-events-none absolute -bottom-12 right-[-20px] hidden select-none font-[var(--font-display)] text-[18rem] font-light leading-none tracking-[-0.1em] text-white/[0.025] lg:block">
          05
        </div>
      </div>
    </section>
  );
};

export default MobilePerformanceMarketingHero;