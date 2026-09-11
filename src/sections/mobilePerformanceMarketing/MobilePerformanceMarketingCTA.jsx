import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const MobilePerformanceMarketingCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--dark)] py-4 text-white sm:py-8 lg:py-6">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-40 bottom-[-180px] h-[500px] w-[500px] rounded-full bg-[var(--primary)]/[0.08] blur-[130px]" />

      <div className="pointer-events-none absolute right-[-160px] top-[-160px] h-[450px] w-[450px] rounded-full bg-[var(--secondary)]/[0.07] blur-[120px]" />

      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Top meta */}
        {/* <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-between border-b border-white/10 pb-5"
        >
          <div className="flex items-center gap-4">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/45">
              Mobile Performance Marketing
            </span>

            <span className="hidden h-px w-12 bg-white/15 sm:block" />
          </div>

          <span className="font-[var(--font-display)] text-sm font-medium text-[var(--primary)]">
            05
          </span>
        </motion.div> */}

        {/* Main CTA */}
        <div className="relative py-20 sm:py-24 lg:py-32">
          {/* Decorative number */}
          <div className="pointer-events-none absolute right-[-30px] top-1/2 hidden -translate-y-1/2 select-none font-[var(--font-display)] text-[20rem] font-light leading-none tracking-[-0.1em] text-white/[0.025] xl:block">
            MOBILE MARKETING
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 max-w-5xl"
          >
            {/* <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              Ready to Grow
            </p> */}

            <h2 className="mt-7 font-[var(--font-display)] text-[3.5rem] font-medium leading-[0.94] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-[6.5rem]">
              Ready to grow
              <br />
              your mobile
              <br />
              <span className="text-[var(--primary)]">audience?</span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
              Let's build a mobile performance strategy that attracts the
              right users, improves engagement, and turns acquisition into
              meaningful long-term growth.
            </p>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="/contact"
                className="group inline-flex items-center gap-4 rounded-full bg-[var(--primary)] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(245,130,32,0.2)]"
              >
                Let's Talk

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight size={16} />
                </span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom information */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid gap-6 border-t border-white/10 pt-7 sm:grid-cols-2 lg:grid-cols-[1fr_auto]"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/30">
              Mobile Performance Marketing
            </p>

            <p className="mt-2 text-sm text-white/45">
              Acquisition · Engagement · Retention · Growth
            </p>
          </div>

          <div className="sm:text-right">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/30">
              The Smartek Approach
            </p>

            <p className="mt-2 text-sm text-white/45">
              Reach the right users. Grow their value.
            </p>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default MobilePerformanceMarketingCTA;