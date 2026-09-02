import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    eyebrow: "SMART DIGITAL SOLUTIONS",
    title: "DIGITAL",
    highlight: "GROWTH",
    description:
      "We build digital strategies that help ambitious brands connect, convert and grow.",
    image:
      "/HeroBg/digital-marketing-banner.webp",
  },
  {
    id: 2,
    eyebrow: "STRATEGY • CREATIVE • PERFORMANCE",
    title: "IDEAS",
    highlight: "THAT MOVE",
    description:
      "From strategy to execution, we turn creative thinking into meaningful business results.",
    image:
      "/HeroBg/graphic-design-banner.webp",
  },
  {
    id: 3,
    eyebrow: "BUILDING BRANDS FOR TOMORROW",
    title: "THINK",
    highlight: "DIGITAL",
    description:
      "Technology, creativity and performance come together to create smarter digital experiences.",
    image:
      "/HeroBg/website-development-banner.webp",
  },
];

const socialLinks = [
  { name: "LINKEDIN", href: "#" },
  { name: "INSTAGRAM", href: "#" },
  { name: "FACEBOOK", href: "#" },
];

const textVariants = {
  initial: {
    opacity: 0,
    y: 80,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Hero = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const swiperRef = useRef(null);

  return (
    <section className="relative h-[100svh] min-h-[650px] w-full overflow-hidden bg-[var(--dark)] text-white">

      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        speed={1400}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        loop
        allowTouchMove
        onSwiper={(swiper) => {
            swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
            setActiveSlide(swiper.realIndex);
        }}
        className="heroSwiper h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative h-full w-full">

            {/* Background */}
            <div
              className="hero-bg absolute inset-0 h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/65" />

            {/* Secondary gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/60" />

            {/* Subtle orange glow */}
            <div className="absolute right-[10%] top-[25%] h-72 w-72 rounded-full bg-[var(--primary)]/10 blur-[120px]" />

            {/* Content */}
            <div className="relative z-10 flex h-full items-center">

              <div className="mx-auto w-full max-w-[1500px] px-6 sm:px-10 lg:px-16 xl:px-20">

                <div className="max-w-[1200px]">

                  {/* Eyebrow */}
                  <motion.div
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                    className="mb-6 flex items-center gap-4 sm:mb-8"
                  >
                    <span className="h-px w-10 bg-[var(--primary)] sm:w-16" />

                    <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.28em] text-white/70 sm:text-xs">
                      {slide.eyebrow}
                    </span>
                  </motion.div>

                  {/* Heading */}
                  <div className="relative">

                    {/* Outline typography */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -left-1 top-1/2 hidden -translate-y-1/2 font-[var(--font-display)] text-[clamp(4rem,12vw,11rem)] font-semibold uppercase leading-[0.82] tracking-[-0.06em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.12)] lg:block"
                    >
                      {slide.title}
                    </div>

                    {/* Main title */}
                    <motion.h1
                      variants={textVariants}
                      initial="initial"
                      animate="animate"
                      className="relative font-[var(--font-display)] text-[clamp(4rem,14vw,11.5rem)] font-light uppercase leading-[0.82] tracking-[-0.065em]"
                    >
                      <span className="block">
                        {slide.title}
                      </span>

                      <span className="ml-[6vw] block text-[var(--primary)]">
                        {slide.highlight}
                      </span>
                    </motion.h1>
                  </div>

                  {/* Description + CTA */}
                  <motion.div
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                    className="mt-8 flex flex-col gap-7 sm:mt-10 sm:flex-row sm:items-center sm:gap-10"
                  >
                    <p className="max-w-md font-[var(--font-body)] text-sm leading-7 text-white/65 sm:text-base">
                      {slide.description}
                    </p>

                    <a
                      href="/contact"
                      className="group inline-flex w-fit items-center gap-4 border border-white/40 px-6 py-4 font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.18em] transition-all duration-300 hover:border-[var(--primary)] hover:bg-[var(--primary)]"
                    >
                      Let's Talk

                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.6}
                        className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </a>
                  </motion.div>

                </div>
              </div>
            </div>

            {/* Left social links */}
            <div className="absolute bottom-14 left-6 z-20 hidden flex-col gap-8 lg:flex xl:left-10">

              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="writing-mode-vertical font-[var(--font-body)] text-[9px] font-semibold tracking-[0.2em] text-white/60 transition-colors duration-300 hover:text-[var(--primary)]"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  {social.name}
                </a>
              ))}

            </div>

            {/* Bottom right scroll */}
            <div className="absolute bottom-8 right-6 z-20 flex items-center gap-4 sm:right-10">

              <span className="hidden font-[var(--font-body)] text-[9px] font-semibold uppercase tracking-[0.25em] text-white/50 sm:block">
                Scroll to explore
              </span>

              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20">
                <ArrowDown
                  size={15}
                  strokeWidth={1.4}
                  className="animate-bounce text-white/70"
                />
              </div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

      {/* Slider Progress */}
        <div className="pointer-events-auto absolute bottom-9 left-1/2 z-[40] flex -translate-x-1/2 items-center gap-2">
    {slides.map((slide, index) => {
        const isActive = activeSlide === index;

        return (
        <button
            key={slide.id}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            if (swiperRef.current) {
                swiperRef.current.slideToLoop(index, 700);
            }
            }}
            className="relative h-[4px] w-10 cursor-pointer overflow-hidden bg-white/30 p-0 sm:w-14"
        >
            <span
            key={`${activeSlide}-${index}`}
            className={`absolute inset-y-0 left-0 block ${
                isActive
                ? "hero-progress-active"
                : "w-0"
            }`}
            />
        </button>
        );
    })}
        </div>

    </section>
  );
};

export default Hero;