import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const DigitalMarketingCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--dark)] py-24 text-white sm:py-28 lg:py-36">
      {/* Decorative elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border border-white/[0.04]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-[260px] w-[260px] rounded-full border border-[var(--primary)]/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[var(--secondary)]/[0.07] blur-[120px]"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 xl:px-20">

        {/* TOP LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3"
        >
          <span className="h-[2px] w-8 bg-[var(--primary)]" />

          <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
            Start Growing
          </span>
        </motion.div>

        {/* MAIN CTA */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-8 max-w-[1050px]"
        >
          <h2 className="font-[var(--font-display)] text-5xl font-medium leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-[6rem]">
            Ready to put your brand
            <br />
            <span className="text-[var(--primary)]">
              in front of more people?
            </span>
          </h2>
        </motion.div>

        {/* LOWER CONTENT */}
        <div className="mt-12 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="max-w-[620px] font-[var(--font-body)] text-sm leading-[1.9] text-white/55 sm:text-[15px]">
              Let's create a digital marketing strategy that gives your brand
              greater visibility, stronger connections and a clearer path to
              growth.
            </p>
          </motion.div>

          <motion.a
            href="/contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="group inline-flex w-fit items-center gap-4 bg-[var(--primary)] px-7 py-5 font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[var(--secondary)] hover:text-[var(--dark)]"
          >
            Let's Talk

            <span className="flex h-8 w-8 items-center justify-center border border-white/30 transition-colors duration-300 group-hover:border-[var(--dark)]/20">
              <ArrowUpRight
                size={16}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </motion.a>
        </div>

        {/* BOTTOM META */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-20 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="font-[var(--font-body)] text-[9px] font-bold uppercase tracking-[0.2em] text-white/25">
            Smartek Digital
          </span>

          <span className="font-[var(--font-body)] text-[9px] font-bold uppercase tracking-[0.2em] text-white/25">
            Digital Marketing · Strategy · Growth
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default DigitalMarketingCTA;