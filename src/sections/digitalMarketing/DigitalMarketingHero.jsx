import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const DigitalMarketingHero = () => {
  const scrollToNext = () => {
    document.getElementById("digital-marketing-intro")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden bg-[var(--dark)] text-white">
      <div className="mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-center px-6 pb-16 pt-32 sm:px-10 lg:px-16 lg:pt-28 xl:px-20">

        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10"
          >
            {/* Eyebrow */}
            <div className="mb-8 flex items-center gap-4">
              <span className="font-[var(--font-display)] text-sm font-medium text-[var(--primary)]">
                01
              </span>

              <span className="h-px w-10 bg-white/20" />

              <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.22em] text-white/55 sm:text-[11px]">
                Digital Marketing
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-[850px] font-[var(--font-display)] text-5xl font-medium leading-[0.94] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[5.8rem] xl:text-[6.6rem]">
              Make your brand
              <br />
              <span className="text-[var(--primary)]">
                impossible to ignore.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-[590px] font-[var(--font-body)] text-sm leading-[1.85] text-white/60 sm:text-base">
              We create strategic digital marketing campaigns that put your
              brand in front of the right people, build meaningful connections,
              and turn attention into lasting business growth.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href="#digital-marketing-intro"
                className="group inline-flex items-center gap-3 bg-[var(--primary)] px-6 py-4 font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[var(--secondary)] hover:text-[var(--dark)]"
              >
                Explore Digital Marketing

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <button
                type="button"
                onClick={scrollToNext}
                className="group inline-flex items-center gap-3 font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.16em] text-white/55 transition-colors duration-300 hover:text-white"
              >
                Scroll to explore

                <ArrowDown
                  size={14}
                  strokeWidth={1.6}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </button>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-[560px] overflow-hidden lg:ml-auto">

              {/* Main Image */}
              <img
                src="/Services/DigitalMarketing.png"
                alt="Digital Marketing"
                className="h-full w-full object-cover"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/5" />

              {/* Orange accent */}
              <div className="absolute bottom-0 left-0 h-1 w-28 bg-[var(--primary)]" />

              {/* Image content */}
              <div className="absolute bottom-7 left-7 right-7">
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <span className="font-[var(--font-body)] text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
                      Smartek Digital
                    </span>

                    <p className="mt-2 max-w-[280px] font-[var(--font-display)] text-xl font-medium leading-[1.05] tracking-[-0.03em] text-white sm:text-2xl">
                      Strategy that gets your brand noticed.
                    </p>
                  </div>

                  <span className="hidden h-11 w-11 shrink-0 items-center justify-center border border-white/30 sm:flex">
                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.5}
                    />
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative Number */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-12 -left-6 font-[var(--font-display)] text-[10rem] font-medium leading-none tracking-[-0.08em] text-white/[0.035] sm:-left-12 sm:text-[13rem]"
            >
              01
            </span>
          </motion.div>
        </div>

        {/* Bottom Meta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.55,
          }}
          className="mt-14 hidden items-center justify-between border-t border-white/10 pt-5 sm:flex"
        >
          <span className="font-[var(--font-body)] text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
            Digital Marketing
          </span>

          <span className="font-[var(--font-body)] text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
            Strategy · Content · Social · Growth
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalMarketingHero;