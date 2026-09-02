import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Think clearly",
    text: "We start with the problem, the audience and the objective before deciding on the solution.",
  },
  {
    number: "02",
    title: "Create with purpose",
    text: "Ideas should have a reason to exist. We create experiences that communicate, engage and move people to action.",
  },
  {
    number: "03",
    title: "Keep improving",
    text: "Digital never stands still. We learn from performance, adapt quickly and keep looking for better outcomes.",
  },
];

const WhatDrivesUs = () => {
  return (
    <section className="bg-[var(--light)] py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 xl:px-20">

        {/* INTRO */}
        <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-24">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              {/* <span className="h-[2px] w-8 bg-[var(--primary)]" /> */}

              <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text)] sm:text-[11px]">
                What Drives Us
              </span>
            </div>
          </motion.div>

          {/* Main statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, delay: 0.08 }}
          >
            <h2 className="max-w-[950px] font-[var(--font-display)] text-4xl font-medium leading-[1.02] tracking-[-0.045em] text-[var(--dark)] sm:text-5xl lg:text-6xl">
              Good digital work starts with{" "}
              <span className="text-[var(--primary)]">
                good thinking.
              </span>
            </h2>

            <p className="mt-7 max-w-[650px] font-[var(--font-body)] text-[14px] leading-[1.85] text-[var(--text)] sm:text-[15px]">
              We believe the best results come from combining a clear
              understanding of the business with thoughtful creative and
              continuous improvement. No unnecessary complexity. Just focused
              work built around a clear objective.
            </p>
          </motion.div>
        </div>

        {/* PRINCIPLES */}
        <div className="mt-20 border-t border-[var(--border)] lg:mt-28">
          {principles.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group grid gap-6 border-b border-[var(--border)] py-8 sm:py-10 lg:grid-cols-[90px_0.8fr_1.2fr_auto] lg:items-center lg:gap-10"
            >
              {/* Number */}
              <span className="font-[var(--font-body)] text-[10px] font-bold tracking-[0.15em] text-[var(--primary)]">
                {item.number}
              </span>

              {/* Title */}
              <h3 className="font-[var(--font-display)] text-2xl font-medium tracking-[-0.03em] text-[var(--dark)] sm:text-3xl">
                {item.title}
              </h3>

              {/* Description */}
              <p className="max-w-[520px] font-[var(--font-body)] text-[13px] leading-[1.8] text-[var(--text)] sm:text-sm">
                {item.text}
              </p>

              {/* Arrow */}
              <div className="hidden h-11 w-11 items-center justify-center border border-[var(--border)] transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] lg:flex">
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.5}
                  className="transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatDrivesUs;