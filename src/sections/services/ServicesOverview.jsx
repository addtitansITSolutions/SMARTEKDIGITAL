import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Digital Marketing",
    description:
      "Build stronger digital visibility with strategic campaigns designed to reach the right audience, create engagement, and turn attention into meaningful business growth.",
    capabilities: [
      "Social Media Marketing",
      "Content Strategy",
      "Brand Campaigns",
      "Audience Growth",
    ],
  },
  {
    number: "02",
    title: "Performance Marketing",
    description:
      "Make every marketing investment work harder with data-led campaigns focused on measurable acquisition, qualified leads, and sustainable returns.",
    capabilities: [
      "Paid Search",
      "Paid Social",
      "Lead Generation",
      "Campaign Optimization",
    ],
  },
  // {
  //   number: "03",
  //   title: "SEO",
  //   description:
  //     "Improve your organic presence with search strategies that bring your business closer to the people actively looking for what you offer.",
  //   capabilities: [
  //     "Technical SEO",
  //     "On-Page SEO",
  //     "Content Strategy",
  //     "Search Visibility",
  //   ],
  // },
  {
  number: "04",
  title: "E-commerce Marketing",
  description:
    "Turn online shoppers into loyal customers with data-driven strategies designed to increase product visibility, improve conversions, and drive sustainable e-commerce growth.",
  capabilities: [
    "E-commerce Strategy",
    "Product Marketing",
    "Conversion Optimization",
    "Customer Retention",
  ],
},
  {
    number: "03",
    title: "Affiliate Marketing",
    description:
      "Expand your reach through performance-focused partnerships that connect your brand with relevant audiences and create new opportunities for scalable growth.",
    capabilities: [
      "Affiliate Strategy",
      "Partner Acquisition",
      "Campaign Management",
      "Performance Tracking",
    ],
  },
  {
    number: "05",
    title: "Mobile Performance Marketing",
    description:
      "Reach mobile-first audiences with targeted campaigns designed to drive app installs, engagement, conversions, and measurable mobile growth.",
    capabilities: [
      "App Acquisition",
      "Mobile Campaigns",
      "User Engagement",
      "Performance Optimization",
    ],
  },
];

const ServicesOverview = () => {
  return (
    <section
      id="services-overview"
      className="bg-white py-24 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 xl:px-20">

        {/* SECTION INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20"
        >
          <div className="flex items-start gap-3">
            <span className="mt-2 h-[2px] w-8 bg-[var(--primary)]" />

            <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text)]">
              What We Do
            </span>
          </div>

          <div>
            <h2 className="max-w-[900px] font-[var(--font-display)] text-4xl font-medium leading-[1.02] tracking-[-0.05em] text-[var(--dark)] sm:text-5xl lg:text-6xl">
              Everything you need to{" "}
              <span className="text-[var(--primary)]">
                move forward.
              </span>
            </h2>

            <p className="mt-7 max-w-[680px] font-[var(--font-body)] text-sm leading-[1.85] text-[var(--text)] sm:text-[15px]">
              We bring strategy, marketing, technology and creative together
              under one roof—giving businesses the expertise they need to
              build, grow and evolve in the digital space.
            </p>
          </div>
        </motion.div>

        {/* SERVICES */}
        <div className="mt-20 border-t border-[var(--border)] lg:mt-28">
          {services.map((service, index) => (
            <motion.article
              key={service.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.04,
              }}
              className="group relative border-b border-[var(--border)] py-10 sm:py-12 lg:py-14"
            >
              {/* Hover background */}
              <div className="pointer-events-none absolute inset-0 -z-0 origin-left scale-x-0 bg-[var(--light)] transition-transform duration-500 ease-out group-hover:scale-x-100" />

              <div className="relative z-10 grid gap-8 lg:grid-cols-[90px_1fr_0.8fr_50px] lg:items-start lg:gap-10">

                {/* NUMBER */}
                <div>
                  <span className="font-[var(--font-display)] text-sm font-medium text-[var(--primary)]">
                    {service.number}
                  </span>
                </div>

                {/* TITLE */}
                <div>
                  <h3 className="font-[var(--font-display)] text-3xl font-medium leading-none tracking-[-0.045em] text-[var(--dark)] transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl lg:text-5xl">
                    {service.title}
                  </h3>

                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                    {service.capabilities.map((capability) => (
                      <span
                        key={capability}
                        className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--text)]"
                      >
                        {capability}
                      </span>
                    ))}
                  </div>
                </div>

                {/* DESCRIPTION */}
                <p className="max-w-[460px] font-[var(--font-body)] text-sm leading-[1.8] text-[var(--text)]">
                  {service.description}
                </p>

                {/* ARROW */}
                <div className="flex">
                  <span className="flex h-11 w-11 items-center justify-center border border-[var(--border)] transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white">
                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.6}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-[600px] font-[var(--font-display)] text-2xl font-medium leading-[1.15] tracking-[-0.035em] text-[var(--dark)] sm:text-3xl">
            One partner.
            <span className="text-[var(--primary)]">
              {" "}
              Multiple digital capabilities.
            </span>
          </p>

          <a
            href="/contact"
            className="group inline-flex w-fit items-center gap-3 border-b border-[var(--dark)] pb-2 font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--dark)] transition-colors duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            Start a Project

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

export default ServicesOverview;