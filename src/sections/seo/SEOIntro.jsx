import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const SEOIntro = () => {
  return (
    <section
      id="seo-intro"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Top label */}
        <div className="mb-16 flex items-center justify-between border-b border-[var(--border)] pb-5 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text)]"
          >
            Search Engine Optimization
          </motion.span>

          {/* <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-[var(--font-display)] text-sm text-[var(--dark)]/25"
          >
            01 / 05
          </motion.span> */}
        </div>

        {/* Main content */}
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
              The Smartek Approach
            </span>

            <h2 className="mt-6 max-w-[520px] font-[var(--font-display)] text-4xl font-medium leading-[0.95] tracking-[-0.045em] text-[var(--dark)] sm:text-5xl lg:text-6xl">
              Being visible is only the beginning.
            </h2>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: 0.15,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[760px]"
          >
            <p className="font-[var(--font-display)] text-2xl font-medium leading-[1.2] tracking-[-0.03em] text-[var(--dark)] sm:text-3xl lg:text-[2.6rem]">
              Search should connect your business with people who are already
              looking for what you offer.
            </p>

            <p className="mt-8 max-w-[650px] font-[var(--font-body)] text-sm leading-7 text-[var(--text)] sm:text-base sm:leading-8">
              Great SEO is not about chasing rankings for the sake of rankings.
              It is about understanding how people search, creating useful
              experiences, and building a digital presence that search engines
              and customers can trust.
            </p>

            <p className="mt-5 max-w-[650px] font-[var(--font-body)] text-sm leading-7 text-[var(--text)] sm:text-base sm:leading-8">
              We combine technical optimization, relevant content, search
              intent, and continuous analysis to build organic visibility that
              supports your wider business goals.
            </p>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="/contact"
                className="group inline-flex items-center gap-3 border-b border-[var(--dark)] pb-3 font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.17em] text-[var(--dark)] transition-colors duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                Talk to Our Team

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Focus areas */}
        <div className="mt-24 border-t border-[var(--border)] pt-8 sm:mt-28 lg:mt-36">
          <div className="mb-10 flex items-center justify-between">
            <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text)]/60">
              What We Focus On
            </span>

            <span className="hidden font-[var(--font-body)] text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--text)]/40 sm:block">
              Search · Content · Authority
            </span>
          </div>

          <div className="grid border-t border-[var(--border)] sm:grid-cols-3">
            {/* Focus 01 */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="border-b border-[var(--border)] py-8 sm:border-b-0 sm:border-r sm:pr-8 lg:py-10"
            >
              <span className="font-[var(--font-display)] text-sm text-[var(--primary)]">
                01
              </span>

              <h3 className="mt-5 font-[var(--font-display)] text-xl font-medium tracking-[-0.03em] text-[var(--dark)] sm:text-2xl">
                Build Visibility
              </h3>

              <p className="mt-4 max-w-[320px] font-[var(--font-body)] text-sm leading-7 text-[var(--text)]">
                Strengthen your presence where your audience is actively
                searching for solutions, products, and services.
              </p>
            </motion.div>

            {/* Focus 02 */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="border-b border-[var(--border)] py-8 sm:border-b-0 sm:border-r sm:px-8 lg:py-10"
            >
              <span className="font-[var(--font-display)] text-sm text-[var(--primary)]">
                02
              </span>

              <h3 className="mt-5 font-[var(--font-display)] text-xl font-medium tracking-[-0.03em] text-[var(--dark)] sm:text-2xl">
                Match Intent
              </h3>

              <p className="mt-4 max-w-[320px] font-[var(--font-body)] text-sm leading-7 text-[var(--text)]">
                Align your content and digital experience with what people
                actually need at every stage of their search.
              </p>
            </motion.div>

            {/* Focus 03 */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="py-8 sm:pl-8 lg:py-10"
            >
              <span className="font-[var(--font-display)] text-sm text-[var(--primary)]">
                03
              </span>

              <h3 className="mt-5 font-[var(--font-display)] text-xl font-medium tracking-[-0.03em] text-[var(--dark)] sm:text-2xl">
                Grow Authority
              </h3>

              <p className="mt-4 max-w-[320px] font-[var(--font-body)] text-sm leading-7 text-[var(--text)]">
                Create a stronger foundation of trust, relevance, and
                credibility that can continue delivering value over time.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mt-20 border-t border-[var(--border)] pt-8 sm:mt-24 sm:pt-10"
        >
          <p className="max-w-[850px] font-[var(--font-display)] text-2xl font-medium leading-[1.15] tracking-[-0.035em] text-[var(--dark)] sm:text-3xl lg:text-4xl">
            The goal isn't simply to rank higher.
            <span className="text-[var(--primary)]">
              {" "}
              It's to become the right answer.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SEOIntro;