import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    text: "We begin by understanding your business, audience, challenges and ambitions. The better we understand the problem, the better we can define the opportunity.",
  },
  {
    number: "02",
    title: "Define",
    text: "We turn what we learn into a clear direction. Strategy, priorities and ideas come together around a focused objective.",
  },
  {
    number: "03",
    title: "Create",
    text: "This is where ideas become real. We bring together creativity, technology and digital expertise to build work with purpose.",
  },
  {
    number: "04",
    title: "Refine",
    text: "The work doesn't stop at launch. We evaluate, learn and improve so the result continues to create value as your business evolves.",
  },
];

const HowWeWork = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 xl:px-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-[900px] text-center"
        >
          <div className="mb-7 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[var(--primary)]" />

            <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text)] sm:text-[11px]">
              How We Work
            </span>

            <span className="h-[2px] w-8 bg-[var(--primary)]" />
          </div>

          <h2 className="font-[var(--font-display)] text-4xl font-medium leading-[1] tracking-[-0.05em] text-[var(--dark)] sm:text-5xl lg:text-6xl">
            From first conversation
            <br />
            to{" "}
            <span className="text-[var(--primary)]">
              meaningful results.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-[620px] font-[var(--font-body)] text-[14px] leading-[1.85] text-[var(--text)] sm:text-[15px]">
            Every project is different, but our approach stays grounded in
            clarity, collaboration and purposeful execution.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto mt-20 max-w-[1000px] sm:mt-24 lg:mt-32">

          {/* Central Line */}
          <div className="absolute bottom-0 left-4 top-0 w-px bg-[var(--border)] sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-16 sm:space-y-0">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                  }}
                  className="relative sm:min-h-[250px]"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[9px] top-1 z-10 h-[11px] w-[11px] -translate-x-1/2 rounded-full border-[3px] border-white bg-[var(--primary)] sm:left-1/2" />

                  {/* Content */}
                  <div
                    className={`pl-10 sm:w-1/2 sm:pl-0 ${
                      isLeft
                        ? "sm:pr-20 sm:text-right"
                        : "sm:ml-auto sm:pl-20 sm:text-left"
                    }`}
                  >
                    {/* Number */}
                    <span className="font-[var(--font-display)] text-5xl font-medium leading-none tracking-[-0.05em] text-[var(--border)] sm:text-6xl lg:text-7xl">
                      {step.number}
                    </span>

                    {/* Title */}
                    <h3 className="mt-3 font-[var(--font-display)] text-3xl font-medium tracking-[-0.04em] text-[var(--dark)] sm:text-4xl">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`mt-4 max-w-[430px] font-[var(--font-body)] text-[13px] leading-[1.8] text-[var(--text)] sm:text-[14px] ${
                        isLeft ? "sm:ml-auto" : ""
                      }`}
                    >
                      {step.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-20 border-t border-[var(--border)] pt-8 sm:mt-24 lg:mt-28"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--text)]">
              Our approach
            </span>

            <p className="max-w-[600px] font-[var(--font-body)] text-[13px] leading-[1.7] text-[var(--text)] sm:text-right">
              Simple in principle. Thoughtful in execution. Focused on
              creating work that makes a difference.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HowWeWork;