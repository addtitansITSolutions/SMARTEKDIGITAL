import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const PerformanceMarketingHero = () => {
  const scrollToNext = () => {
    document.getElementById("performance-marketing-intro")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[var(--dark)] text-white">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[var(--primary)]/10 blur-3xl" />
        <div className="absolute -bottom-48 left-[-120px] h-[420px] w-[420px] rounded-full bg-[var(--secondary)]/10 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.035]">
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

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1440px] flex-col px-5 pb-8 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pt-36">
        {/* Top meta */}
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
            <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
              Performance Marketing
            </span>
          </motion.div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-[var(--font-display)] text-sm tracking-wide text-white/40"
          >
            02
          </motion.span>
        </div>

        {/* Main content */}
        <div className="grid flex-1 items-center gap-12 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:py-16">
          {/* Left */}
          <div className="max-w-[780px]">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="mb-6 font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--primary)] sm:mb-8"
            >
              Strategy · Acquisition · Optimization
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.25,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-[var(--font-display)] text-[clamp(3.5rem,8vw,7.5rem)] font-medium leading-[0.88] tracking-[-0.055em]"
            >
              Turn every
              <br />
              <span className="text-white/40">click into</span>
              <br />
              <span className="text-[var(--primary)]">growth.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="mt-8 max-w-[580px] font-[var(--font-body)] text-sm leading-7 text-white/60 sm:mt-10 sm:text-base sm:leading-8"
            >
              We build performance campaigns designed around measurable growth
              — reaching the right audiences, optimizing every stage of the
              journey, and turning marketing investment into meaningful business
              results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="mt-9 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center"
            >
              <a
                href="#performance-marketing-intro"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToNext();
                }}
                className="group inline-flex w-fit items-center gap-3 bg-[var(--primary)] px-6 py-4 font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[var(--secondary)] hover:text-[var(--dark)]"
              >
                Explore Performance Marketing
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <button
                type="button"
                onClick={scrollToNext}
                className="group inline-flex w-fit items-center gap-3 px-2 py-4 font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.16em] text-white/50 transition-colors duration-300 hover:text-white"
              >
                Scroll to explore
                <ArrowDown
                  size={14}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </button>
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.35,
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[560px] lg:ml-auto"
          >
            <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-white/[0.03]">
              <img
                src="/Services/PerformanceMarketing.png"
                alt="Performance marketing campaign"
                className="h-full w-full object-cover"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark)] via-transparent to-transparent opacity-80" />

              {/* Performance metric */}
              <div className="absolute left-5 top-5 border border-white/15 bg-[var(--dark)]/70 px-4 py-3 backdrop-blur-sm sm:left-6 sm:top-6">
                <span className="block font-[var(--font-body)] text-[9px] font-bold uppercase tracking-[0.16em] text-white/40">
                  Performance
                </span>

                <span className="mt-1 block font-[var(--font-display)] text-2xl font-medium tracking-[-0.04em] text-white">
                  + Growth
                </span>
              </div>

              {/* Bottom statement */}
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
                <div className="mb-4 h-px w-12 bg-[var(--primary)]" />

                <p className="max-w-[360px] font-[var(--font-display)] text-xl font-medium leading-tight tracking-[-0.03em] text-white sm:text-2xl">
                  Data that tells us what to do next.
                </p>
              </div>
            </div>

            {/* Decorative number */}
            <span className="pointer-events-none absolute -bottom-10 -right-3 font-[var(--font-display)] text-[8rem] font-medium leading-none tracking-[-0.08em] text-white/[0.035] sm:-right-8 sm:text-[11rem]">
              02
            </span>
          </motion.div>
        </div>

        {/* Bottom meta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="font-[var(--font-body)] text-[9px] font-bold uppercase tracking-[0.18em] text-white/30">
            Performance Marketing
          </span>

          <span className="font-[var(--font-body)] text-[9px] font-bold uppercase tracking-[0.18em] text-white/30">
            Paid Media · Acquisition · Data · ROI
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default PerformanceMarketingHero;