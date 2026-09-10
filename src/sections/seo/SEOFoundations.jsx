import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  FileText,
  Link2,
  SearchCheck,
} from "lucide-react";

const SEOFoundations = () => {
  const foundations = [
    {
      number: "01",
      title: "Technical Foundation",
      description:
        "Make sure search engines can properly crawl, understand, and index your website.",
      items: [
        "Site structure",
        "Technical health",
        "Page performance",
        "Indexation",
      ],
      icon: Code2,
    },
    {
      number: "02",
      title: "Search Intent",
      description:
        "Understand what your audience is searching for and create content that answers the right questions.",
      items: [
        "Keyword research",
        "Search intent",
        "Content planning",
        "On-page optimization",
      ],
      icon: SearchCheck,
    },
    {
      number: "03",
      title: "Content Relevance",
      description:
        "Build useful, focused content that gives both search engines and your audience a clear reason to trust your brand.",
      items: [
        "Content strategy",
        "Topic authority",
        "Content optimization",
        "User experience",
      ],
      icon: FileText,
    },
    {
      number: "04",
      title: "Authority & Trust",
      description:
        "Strengthen your website's credibility through relevant signals that support long-term organic visibility.",
      items: [
        "Link strategy",
        "Digital authority",
        "Brand relevance",
        "Ongoing growth",
      ],
      icon: Link2,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[var(--light)] py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="grid gap-10 border-b border-[var(--border)] pb-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4">
              <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />

              <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text)]">
                SEO Foundations
              </span>
            </div>

            {/* <span className="mt-8 block font-[var(--font-display)] text-[7rem] font-medium leading-none tracking-[-0.08em] text-[var(--dark)]/[0.06] sm:text-[9rem]">
              02
            </span> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: 0.1,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="max-w-[850px] font-[var(--font-display)] text-4xl font-medium leading-[0.95] tracking-[-0.05em] text-[var(--dark)] sm:text-5xl lg:text-7xl">
              Strong rankings start with a{" "}
              <span className="text-[var(--primary)]">strong foundation.</span>
            </h2>

            <p className="mt-7 max-w-[680px] font-[var(--font-body)] text-sm leading-7 text-[var(--text)] sm:mt-9 sm:text-base sm:leading-8">
              Sustainable SEO is built from several connected layers. We look
              beyond individual keywords to understand the technical health,
              content, relevance, and authority of your entire digital
              presence.
            </p>
          </motion.div>
        </div>

        {/* Foundation list */}
        <div className="mt-14 sm:mt-20">
          {foundations.map((foundation, index) => {
            const Icon = foundation.icon;

            return (
              <motion.div
                key={foundation.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group border-b border-[var(--border)] py-10 first:border-t sm:py-12 lg:py-14"
              >
                <div className="grid gap-8 lg:grid-cols-[80px_1fr_1.1fr_50px] lg:items-start lg:gap-10">
                  {/* Number */}
                  <span className="font-[var(--font-display)] text-sm font-medium text-[var(--primary)]">
                    {foundation.number}
                  </span>

                  {/* Title */}
                  <div>
                    <div className="mb-5 flex items-center gap-4">
                      <Icon
                        size={22}
                        strokeWidth={1.4}
                        className="text-[var(--dark)] transition-colors duration-300 group-hover:text-[var(--primary)]"
                      />

                      <h3 className="font-[var(--font-display)] text-2xl font-medium tracking-[-0.035em] text-[var(--dark)] sm:text-3xl">
                        {foundation.title}
                      </h3>
                    </div>

                    <p className="max-w-[470px] font-[var(--font-body)] text-sm leading-7 text-[var(--text)]">
                      {foundation.description}
                    </p>
                  </div>

                  {/* Items */}
                  <div className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-[var(--border)] pt-6 sm:grid-cols-4 lg:border-t-0 lg:pt-2">
                    {foundation.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--text)]"
                      >
                        <span className="h-1 w-1 shrink-0 rounded-full bg-[var(--primary)]" />
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* Arrow */}
                  <div className="hidden justify-end lg:flex">
                    <ArrowUpRight
                      size={22}
                      strokeWidth={1.5}
                      className="text-[var(--dark)]/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--primary)]"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex flex-col gap-8 sm:mt-20 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text)]/50">
              The Bigger Picture
            </span>

            <p className="mt-5 max-w-[760px] font-[var(--font-display)] text-2xl font-medium leading-[1.15] tracking-[-0.035em] text-[var(--dark)] sm:text-3xl lg:text-4xl">
              SEO works best when every part of your digital presence is
              working toward the{" "}
              <span className="text-[var(--primary)]">same goal.</span>
            </p>
          </div>

          <a
            href="/contact"
            className="group inline-flex w-fit shrink-0 items-center gap-3 border-b border-[var(--dark)] pb-3 font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.17em] text-[var(--dark)] transition-colors duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            Discuss Your SEO

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

export default SEOFoundations;