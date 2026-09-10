import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PerformanceMarketingCTA = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--dark)] text-white">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-[-180px] h-[520px] w-[520px] rounded-full bg-[var(--primary)]/10 blur-3xl" />

        <div className="absolute bottom-[-220px] left-[-140px] h-[480px] w-[480px] rounded-full bg-[var(--secondary)]/10 blur-3xl" />

        <div className="absolute right-[12%] top-[18%] h-32 w-32 rounded-full border border-white/[0.05]" />
        <div className="absolute right-[14%] top-[21%] h-20 w-20 rounded-full border border-white/[0.04]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        {/* Top line */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between border-b border-white/10 pb-5"
        >
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />

            <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
              Ready to Grow
            </span>
          </div>

          <span className="font-[var(--font-display)] text-sm text-white/25">
            05
          </span>
        </motion.div>

        {/* Main CTA */}
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_0.45fr] lg:items-end lg:gap-20 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
              Performance Marketing
            </span>

            <h2 className="mt-6 max-w-[950px] font-[var(--font-display)] text-[clamp(3rem,7vw,6.8rem)] font-medium leading-[0.9] tracking-[-0.06em]">
              Make your
              <br />
              marketing
              <br />
              <span className="text-[var(--primary)]">work harder.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:pb-2"
          >
            <p className="max-w-[430px] font-[var(--font-body)] text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
              Let's build a performance strategy focused on smarter
              acquisition, continuous optimization and measurable business
              growth.
            </p>

            <a
              href="/contact"
              className="group mt-8 inline-flex items-center gap-4 bg-[var(--primary)] px-7 py-4 font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[var(--secondary)] hover:text-[var(--dark)]"
            >
              Let's Talk

              <span className="flex h-7 w-7 items-center justify-center border border-white/30 transition-colors duration-300 group-hover:border-[var(--dark)]/20">
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </a>
          </motion.div>
        </div>

        {/* Bottom information */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="font-[var(--font-body)] text-[9px] font-bold uppercase tracking-[0.18em] text-white/25">
            Strategy · Acquisition · Optimization
          </span>

          <span className="font-[var(--font-body)] text-[9px] font-bold uppercase tracking-[0.18em] text-white/25">
            Performance Marketing
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default PerformanceMarketingCTA;