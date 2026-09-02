import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="bg-white pt-28 sm:pt-32 lg:pt-36">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* LEFT — IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-square w-full max-w-[560px] min-h-[500px] overflow-hidden rounded-xl">
              <img
                src="/Aboutus/about-us-smartek.jpg"
                alt="Smartek Digital"
                className="h-full w-full min-h-[500px] object-cover"
              />
            </div>

            {/* Small image label */}
            <div className="absolute bottom-0 left-0 flex items-center gap-3 bg-white px-5 py-4">
              <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />

              <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--dark)]">
                Smartek Digital
              </span>
            </div>
          </motion.div>

          {/* RIGHT — CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="max-w-[620px]"
          >
            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-3">
              {/* <span className="h-[2px] w-8 bg-[var(--primary)]" /> */}

              <span className="font-[var(--font-body)] text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--text)]">
                About Smartek Digital
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-[var(--font-display)] text-5xl font-medium leading-[0.98] tracking-[-0.05em] text-[var(--dark)] sm:text-6xl lg:text-7xl">
              We make digital
              <br />
              <span className="text-[var(--primary)]">
                work for business.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-[530px] font-[var(--font-body)] text-[15px] leading-[1.85] text-[var(--text)] sm:text-base">
              Smartek Digital helps businesses build, grow and improve their
              digital presence through strategy, creativity and technology.
            </p>

            {/* Bottom content */}
            <div className="mt-10 flex flex-wrap items-center gap-7">
              <a
                href="#who-we-are"
                className="group inline-flex items-center gap-3 border border-[var(--dark)] px-6 py-3.5 font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--dark)] transition-all duration-300 hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white"
              >
                Discover Smartek
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="#who-we-are"
                className="group inline-flex items-center gap-2 font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--text)] transition-colors duration-300 hover:text-[var(--primary)]"
              >
                Scroll to explore
                <ArrowDown
                  size={14}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </a>
            </div>

            {/* Small bottom line */}
            <div className="mt-12 flex items-center gap-4 border-t border-[var(--border)] pt-5">
              <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--text)]">
                Strategy
              </span>
              <span className="h-1 w-1 rounded-full bg-[var(--primary)]" />

              <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--text)]">
                Creativity
              </span>

              <span className="h-1 w-1 rounded-full bg-[var(--primary)]" />

              <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--text)]">
                Technology
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;