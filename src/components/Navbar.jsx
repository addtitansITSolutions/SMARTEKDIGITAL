import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
//   { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[88px] w-full max-w-[1440px] items-center justify-between px-6 lg:px-10 xl:px-12">

        {/* Logo */}
        <NavLink
          to="/"
          onClick={() => setMobileOpen(false)}
          className="relative z-50 flex items-center gap-3"
        >
          {/* Temporary text-based brand mark */}
          <div className="relative flex h-11 w-11 items-center justify-center">
            <div className="absolute left-0 top-0 h-7 w-7 bg-[var(--secondary)]" />
            <div className="absolute bottom-0 right-0 h-7 w-7 bg-[var(--primary)]" />

            <span
              className={`relative z-10 font-[var(--font-display)] text-sm font-medium ${
                scrolled ? "text-white" : "text-white"
              }`}
            >
              SD
            </span>
          </div>

          <div className="hidden sm:block leading-none">
            <span
              className={`block font-[var(--font-display)] text-[15px] font-semibold tracking-[0.16em] ${
                scrolled ? "text-[var(--dark)]" : "text-white"
              }`}
            >
              SMARTEK
            </span>

            <span
              className={`mt-1 block text-[8px] font-semibold tracking-[0.32em] ${
                scrolled
                  ? "text-[var(--secondary)]"
                  : "text-white/70"
              }`}
            >
              DIGITAL
            </span>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `group relative py-2 font-[var(--font-body)] text-[12px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300 ${
                  scrolled
                    ? "text-[var(--dark)]"
                    : "text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}

                  <span
                    className={`absolute bottom-0 left-0 h-[1px] bg-[var(--primary)] transition-all duration-300 ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <NavLink
            to="/contact"
            className={`group flex items-center gap-2 border px-5 py-3 text-[11px] font-bold uppercase tracking-[0.12em] transition-all duration-300 ${
              scrolled
                ? "border-[var(--primary)] text-[var(--dark)] hover:bg-[var(--primary)] hover:text-white"
                : "border-white/60 text-white hover:border-[var(--primary)] hover:bg-[var(--primary)]"
            }`}
          >
            Let's Talk

            <ArrowUpRight
              size={15}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((prev) => !prev)}
          className={`relative z-50 flex h-11 w-11 items-center justify-center lg:hidden ${
            scrolled ? "text-[var(--dark)]" : "text-white"
          }`}
        >
          {mobileOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[var(--dark)] transition-all duration-500 lg:hidden ${
          mobileOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-center px-8 sm:px-12">
          <nav className="flex flex-col gap-5">
            {navItems.map((item, index) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className="group flex items-center gap-4 font-[var(--font-display)] text-4xl font-light text-white transition-colors hover:text-[var(--primary)] sm:text-5xl"
              >
                <span className="text-xs text-white/30">
                  0{index + 1}
                </span>

                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="mt-14 border-t border-white/10 pt-6">
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              Start a conversation
            </p>

            <a
              href="mailto:hello@smartekdigital.com"
              className="mt-2 inline-block text-lg text-white transition-colors hover:text-[var(--primary)]"
            >
              hello@smartekdigital.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;