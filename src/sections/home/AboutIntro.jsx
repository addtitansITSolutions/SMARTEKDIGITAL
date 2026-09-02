import { motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";

const AboutIntro = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[var(--light)] py-24 sm:py-28 lg:py-36"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-[var(--primary)]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[var(--secondary)]/5 blur-3xl"
      />

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Top row */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.7fr_2fr] lg:gap-20">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-start"
          >
            <div className="flex items-center gap-3">
              {/* <span className="h-[2px] w-8 bg-[var(--primary)]" /> */}

              <span className="font-[var(--font-body)] text-xs font-bold tracking-[0.2em] text-[var(--dark)] uppercase">
                Who We Are
              </span>
            </div>
          </motion.div>

          {/* Main content */}
          <div>
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.9,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-5xl font-[var(--font-display)] text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-[var(--dark)] sm:text-5xl md:text-6xl lg:text-7xl"
            >
              We turn digital ideas{" "}
              <span className="text-[var(--primary)]">into business growth.</span>
            </motion.h2>

            {/* Bottom content */}
            <div className="mt-10 grid grid-cols-1 gap-10 sm:mt-12 sm:grid-cols-[1fr_auto] sm:items-end">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.75,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <p className="max-w-2xl font-[var(--font-body)] text-base leading-7 text-[var(--text)] sm:text-lg sm:leading-8">
                  Smartek Digital combines strategy, creativity and technology
                  to help brands build stronger digital experiences, reach the
                  right audience and turn attention into measurable results.
                </p>

                <div className="mt-8">
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-3 font-[var(--font-body)] text-sm font-bold tracking-wide text-[var(--dark)]"
                  >
                    <span className="relative">
                      Let's Work Together
                      <span className="absolute -bottom-1 left-0 h-[1px] w-full origin-left scale-x-100 bg-[var(--primary)] transition-transform duration-300 group-hover:scale-x-0" />
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)] text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-[var(--dark)]">
                      <ArrowUpRight size={17} strokeWidth={2} />
                    </span>
                  </a>
                </div>
              </motion.div>

              {/* Small stat / number */}
              {/* <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.7,
                  delay: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex items-center gap-3 sm:pb-1"
              >
                <span className="font-[var(--font-display)] text-5xl font-medium tracking-[-0.05em] text-[var(--dark)]">
                  01
                </span>

                <span className="h-8 w-px bg-[var(--border)]" />

                <span className="max-w-[90px] font-[var(--font-body)] text-[10px] font-bold leading-4 tracking-[0.15em] text-[var(--text)] uppercase">
                  Digital
                  <br />
                  Partner
                </span>
              </motion.div> */}
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ transformOrigin: "left" }}
          className="mt-20 h-px w-full bg-[var(--border)] sm:mt-24 lg:mt-32"
        />

        {/* Bottom mini information row */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
          {[
            {
              number: "01",
              title: "Strategy",
              text: "Clear direction built around your goals.",
            },
            {
              number: "02",
              title: "Creativity",
              text: "Ideas designed to make your brand stand out.",
            },
            {
              number: "03",
              title: "Performance",
              text: "Digital experiences focused on real results.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: 0.1 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex items-start gap-4"
            >
              <span className="pt-1 font-[var(--font-body)] text-[10px] font-bold tracking-[0.15em] text-[var(--primary)]">
                {item.number}
              </span>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-[var(--font-display)] text-lg font-medium text-[var(--dark)]">
                    {item.title}
                  </h3>

                  <Plus
                    size={14}
                    className="text-[var(--primary)] transition-transform duration-300 group-hover:rotate-90"
                  />
                </div>

                <p className="mt-1 max-w-xs font-[var(--font-body)] text-sm leading-6 text-[var(--text)]">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;