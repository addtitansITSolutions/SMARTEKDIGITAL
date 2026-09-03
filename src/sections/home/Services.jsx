import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Affiliate Marketing",
    description:
      "Build stronger partnerships that put your brand in front of audiences ready to take action.",
  },
  {
    number: "02",
    title: "Digital Marketing",
    description:
      "Create meaningful connections with your audience across the digital channels.",
  },
  // {
  //   number: "03",
  //   title: "Ecommerce Marketing",
  //   description:
  //     "Bring the right shoppers to your store and create more opportunities to turn interest into purchases.",
  // },
  {
    number: "03",
    title: "Performance Marketing",
    description:
      "Put your marketing efforts behind clear goals, measurable actions and results you can track.",
  },
  {
    number: "04",
    title: "Mobile Performance Marketing",
    description:
      "Reach mobile audiences with campaigns focused on actions that drive business growth.",
  },
  {
    number: "05",
    title: "E-commerce",
    description:
      "Conversion-focused online experiences designed to turn visitors into loyal customers.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[var(--primary)] text-white"
    >
      {/* Generated texture background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/orangetexturebg/servicesbg.png')",
        }}
      />

      {/* Texture overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[var(--primary)]/70"
      />

      {/* Subtle dark gradient for readability */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/15"
      />

      {/* Decorative circle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full border border-white/50"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-36 h-[340px] w-[340px] rounded-full border border-white/10"
      />

      {/* Content */}
      <div className="relative mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36 xl:px-16">
        {/* Section heading */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.7fr_2fr] lg:gap-20">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-start justify-between lg:block"
          >
            <div className="flex items-center gap-3">
              {/* <span className="h-[2px] w-8 bg-white" /> */}

              <span className="font-[var(--font-body)] text-xs font-bold tracking-[0.2em] text-white/80 uppercase">
                What We Do
              </span>
            </div>

            {/* <span className="font-[var(--font-display)] text-4xl font-medium tracking-[-0.05em] text-white/50 lg:mt-8 lg:block">
              03
            </span> */}
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-5xl font-[var(--font-display)] text-4xl font-medium leading-[0.98] tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Boost Your Business 
            <br />
            with our Smart{" "}
            <span className="text-white/55">Digital Solutions.</span>
          </motion.h2>
        </div>

        {/* Services list */}
        <div className="mt-20 border-t border-white/25 sm:mt-24 lg:mt-32">
          {services.map((service, index) => (
            <motion.a
              key={service.number}
              href="#contact"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative grid grid-cols-[42px_1fr_auto] items-center gap-4 border-b border-white/25 py-7 transition-all duration-500 sm:grid-cols-[60px_1fr_auto] sm:py-9 lg:grid-cols-[80px_1fr_1.1fr_auto] lg:gap-8 lg:py-10"
            >
              {/* Hover background */}
              <span className="pointer-events-none absolute inset-x-0 inset-y-1 -z-0 origin-left scale-x-0 bg-black/10 transition-transform duration-500 ease-out group-hover:scale-x-100" />

              {/* Number */}
              <span className="relative z-10 self-start pt-1 font-[var(--font-body)] text-xs font-bold tracking-[0.15em] text-white/60 transition-colors duration-300 group-hover:text-white">
                {service.number}
              </span>

              {/* Title */}
              <div className="relative z-10">
                <h3 className="font-[var(--font-display)] text-2xl font-medium tracking-[-0.03em] text-white transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl lg:text-4xl">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="relative z-10 hidden max-w-md font-[var(--font-body)] text-sm leading-6 text-white/65 lg:block">
                {service.description}
              </p>

              {/* Arrow */}
              <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/40 text-white transition-all duration-500 group-hover:rotate-45 group-hover:border-white group-hover:bg-white group-hover:text-[var(--dark)] sm:h-12 sm:w-12">
                <ArrowUpRight size={18} strokeWidth={1.8} />
              </span>

              {/* Mobile description */}
              <p className="relative z-10 col-start-2 col-end-4 -mt-1 max-w-xl font-[var(--font-body)] text-xs leading-5 text-white/60 lg:hidden">
                {service.description}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-12 flex flex-col gap-5 sm:mt-16 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-lg font-[var(--font-body)] text-sm leading-6 text-white/65">
            From strategy to execution, we bring the right digital expertise
            together to create meaningful business outcomes.
          </p>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-3 font-[var(--font-body)] text-sm font-bold"
          >
            Explore our capabilities

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;