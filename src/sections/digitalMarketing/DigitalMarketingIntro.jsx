import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const DigitalMarketingIntro = () => {
  const focusAreas = [
    {
      number: "01",
      title: "Build Visibility",
      description:
        "Put your brand in front of the people who matter through relevant channels, consistent messaging, and purposeful campaigns.",
    },
    {
      number: "02",
      title: "Create Engagement",
      description:
        "Turn passive audiences into active communities with content and experiences that give people a reason to connect with your brand.",
    },
    {
      number: "03",
      title: "Drive Growth",
      description:
        "Connect marketing activity with business objectives, continuously learning from performance to create stronger opportunities for growth.",
    },
  ];

  return (
    <section
      id="digital-marketing-intro"
      className="bg-white py-24 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 xl:px-20">

        {/* TOP INTRO */}
        <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">
          
          {/* LABEL */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex items-start gap-3"
          >
            <span className="mt-2 h-[2px] w-8 bg-[var(--primary)]" />

            <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text)]">
              Digital Marketing
            </span>
          </motion.div>

          {/* MAIN STATEMENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="max-w-[950px] font-[var(--font-display)] text-4xl font-medium leading-[1.02] tracking-[-0.05em] text-[var(--dark)] sm:text-5xl lg:text-6xl">
              Digital marketing should do more than{" "}
              <span className="text-[var(--primary)]">
                make noise.
              </span>
            </h2>

            <p className="mt-8 max-w-[720px] font-[var(--font-body)] text-sm leading-[1.9] text-[var(--text)] sm:text-[15px]">
              It should help people discover your brand, understand what you
              offer, and give them a reason to choose you. At Smartek Digital,
              we combine strategy, creativity and data to build marketing
              programs that work towards real business objectives.
            </p>
          </motion.div>
        </div>

        {/* FOCUS AREAS */}
        <div className="mt-20 border-t border-[var(--border)] lg:mt-28">
          {focusAreas.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
              }}
              className="group grid gap-6 border-b border-[var(--border)] py-9 sm:py-10 lg:grid-cols-[90px_0.9fr_1.1fr] lg:items-start lg:gap-10 lg:py-12"
            >
              {/* NUMBER */}
              <span className="font-[var(--font-display)] text-sm font-medium text-[var(--primary)]">
                {item.number}
              </span>

              {/* TITLE */}
              <h3 className="font-[var(--font-display)] text-2xl font-medium tracking-[-0.035em] text-[var(--dark)] transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <div className="flex items-start justify-between gap-8">
                <p className="max-w-[520px] font-[var(--font-body)] text-sm leading-[1.85] text-[var(--text)]">
                  {item.description}
                </p>

                <span className="hidden h-10 w-10 shrink-0 items-center justify-center border border-[var(--border)] transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white sm:flex">
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.6}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <p className="max-w-[760px] font-[var(--font-display)] text-2xl font-medium leading-[1.15] tracking-[-0.035em] text-[var(--dark)] sm:text-3xl lg:text-4xl">
            The goal isn't simply to be{" "}
            <span className="text-[var(--primary)]">
              seen.
            </span>{" "}
            It's to be remembered.
          </p>

          <a
            href="/contact"
            className="group inline-flex w-fit items-center gap-3 border-b border-[var(--dark)] pb-2 font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--dark)] transition-colors duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            Talk to Our Team

            <ArrowUpRight
              size={15}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalMarketingIntro;