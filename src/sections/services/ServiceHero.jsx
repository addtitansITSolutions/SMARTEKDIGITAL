import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const ServiceHero = () => {
  const scrollToServices = () => {
    document.getElementById("services-overview")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[var(--dark)] text-white">
      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[var(--primary)] opacity-10 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[var(--secondary)] opacity-10 blur-[130px]"
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-center px-6 pb-20 pt-32 sm:px-10 lg:px-16 lg:pt-28 xl:px-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Eyebrow */}
            <div className="mb-8 flex items-center gap-4">
              <span className="h-[2px] w-8 bg-[var(--primary)]" />

              <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.22em] text-white/55 sm:text-[11px]">
                Our Services
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-[850px] font-[var(--font-display)] text-5xl font-medium leading-[0.94] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[5.8rem] xl:text-[6.6rem]">
              Digital solutions
              <br />
              <span className="text-[var(--primary)]">
                built to move
              </span>
              <br />
              your business forward.
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-[600px] font-[var(--font-body)] text-sm leading-[1.85] text-white/60 sm:text-base">
              From strategy and marketing to technology and creative,
              we bring the right digital capabilities together to help
              ambitious businesses grow, compete and evolve.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href="#services-overview"
                className="group inline-flex items-center gap-3 bg-[var(--primary)] px-6 py-4 font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[var(--secondary)] hover:text-[var(--dark)]"
              >
                Explore Our Services

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <button
                type="button"
                onClick={scrollToServices}
                className="group inline-flex items-center gap-3 font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.16em] text-white/60 transition-colors duration-300 hover:text-white"
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

          {/* RIGHT — SERVICES INDEX */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="border-y border-white/10">

              {[
                ["01", "Digital Marketing" , "/services/digital-marketing"],
                ["02", "Performance Marketing" , "/services/performance-marketing"],
                ["03", "SEO" , "/services/seo"],
                ["04", "Affiliate Marketing" , "/services/affiliate-marketing"],
                ["05", "Influencer Marketing" , "/services/influencer-marketing"],
                ["06", "Mobile Performance Marketing" , "/services/mobile-performance-marketing"],
              ].map(([number, service , link]) => (
                <a
                  key={number}
                  href={link}
                  className="group flex items-center justify-between border-b border-white/10 py-5 transition-all duration-300 last:border-b-0 hover:px-3"
                >
                  <div className="flex items-center gap-5">
                    <span className="font-[var(--font-display)] text-xs text-[var(--primary)]">
                      {number}
                    </span>

                    <span className="font-[var(--font-display)] text-lg font-medium tracking-[-0.02em] text-white/75 transition-colors duration-300 group-hover:text-white sm:text-xl">
                      {service}
                    </span>
                  </div>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.5}
                    className="text-white/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--primary)]"
                  />
                </a>
              ))}

            </div>

            <p className="mt-6 font-[var(--font-body)] text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
              Strategy · Technology · Creativity · Performance
            </p>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="absolute bottom-7 left-6 right-6 hidden items-center justify-between border-t border-white/10 pt-5 sm:flex sm:left-10 sm:right-10 lg:left-16 lg:right-16 xl:left-20 xl:right-20"
        >
          <span className="font-[var(--font-body)] text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
            Smartek Digital
          </span>

          <span className="font-[var(--font-body)] text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
            What we do
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;