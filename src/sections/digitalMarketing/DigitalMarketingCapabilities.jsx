import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Megaphone,
  PenTool,
  Users,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "Social Media Marketing",
    description:
      "Build an active and recognizable presence across the platforms where your audience spends their time.",
    icon: Megaphone,
  },
  {
    number: "02",
    title: "Content Strategy",
    description:
      "Create useful, relevant content that gives your audience a reason to discover, follow and engage with your brand.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Audience Growth",
    description:
      "Reach new audiences and turn attention into a growing community around your brand.",
    icon: Users,
  },
  {
    number: "04",
    title: "Campaign Management",
    description:
      "Plan, launch and refine campaigns with a clear connection between creative activity and business objectives.",
    icon: BarChart3,
  },
];

const DigitalMarketingCapabilities = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--light)] py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 xl:px-20">

        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-20">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-[var(--font-display)] text-[8rem] font-medium leading-none tracking-[-0.08em] text-[var(--dark)]/[0.06] sm:text-[10rem] lg:text-[12rem]">
              03
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[var(--primary)]" />

              <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text)]">
                What We Do
              </span>
            </div>

            <h2 className="max-w-[900px] font-[var(--font-display)] text-4xl font-medium leading-[1] tracking-[-0.05em] text-[var(--dark)] sm:text-5xl lg:text-6xl">
              Turning strategy into{" "}
              <span className="text-[var(--primary)]">
                digital action.
              </span>
            </h2>

            <p className="mt-7 max-w-[680px] font-[var(--font-body)] text-sm leading-[1.85] text-[var(--text)] sm:text-[15px]">
              From building your social presence to creating campaigns that
              move people to act, we bring together the right mix of
              creativity, channels and strategy for your business.
            </p>
          </motion.div>
        </div>

        {/* CAPABILITY PANEL */}
        <div className="mt-16 grid gap-8 lg:mt-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">

          {/* LEFT FEATURE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex min-h-[380px] flex-col justify-between overflow-hidden bg-[var(--dark)] p-8 sm:p-10 lg:min-h-[500px] lg:p-12"
          >
            {/* Decorative circle */}
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10"
            />

            <div
              aria-hidden="true"
              className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-[var(--primary)]/20"
            />

            <div className="relative z-10">
              <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                Our Focus
              </span>

              <h3 className="mt-6 max-w-[400px] font-[var(--font-display)] text-3xl font-medium leading-[1.05] tracking-[-0.04em] text-white sm:text-4xl">
                The right message.
                <br />
                <span className="text-[var(--primary)]">
                  The right audience.
                </span>
              </h3>
            </div>

            <div className="relative z-10 mt-12">
              <div className="mb-4 h-px w-full bg-white/10" />

              <p className="max-w-[360px] font-[var(--font-body)] text-xs leading-[1.8] text-white/50">
                Every activity has a purpose—from increasing awareness to
                creating meaningful interactions and supporting business
                growth.
              </p>
            </div>
          </motion.div>

          {/* RIGHT CAPABILITIES */}
          <div className="grid gap-px bg-[var(--border)] sm:grid-cols-2">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="group relative flex min-h-[280px] flex-col justify-between bg-white p-7 transition-colors duration-300 hover:bg-[var(--dark)] sm:p-8 lg:min-h-[245px] lg:p-9"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-[var(--font-display)] text-xs font-medium text-[var(--primary)]">
                      {item.number}
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center border border-[var(--border)] text-[var(--dark)] transition-all duration-300 group-hover:border-white/20 group-hover:text-white">
                      <Icon
                        size={16}
                        strokeWidth={1.5}
                      />
                    </span>
                  </div>

                  <div>
                    <h3 className="font-[var(--font-display)] text-xl font-medium tracking-[-0.03em] text-[var(--dark)] transition-colors duration-300 group-hover:text-white sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 font-[var(--font-body)] text-xs leading-[1.8] text-[var(--text)] transition-colors duration-300 group-hover:text-white/50">
                      {item.description}
                    </p>

                    <div className="mt-5 flex items-center gap-2 font-[var(--font-body)] text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--dark)] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--primary)] group-hover:opacity-100">
                      Explore
                      <ArrowUpRight
                        size={13}
                        strokeWidth={1.7}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM LINE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-12 flex flex-col gap-4 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="font-[var(--font-body)] text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--text)]">
            Strategy · Creativity · Distribution
          </span>

          <span className="font-[var(--font-display)] text-sm font-medium tracking-[-0.02em] text-[var(--dark)]">
            Built around your business goals.
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalMarketingCapabilities;