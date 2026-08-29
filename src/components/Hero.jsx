
import {
  ArrowRight,
  MessageCircle,
  Sparkles,
  UserRound,
} from "lucide-react";

const WHATSAPP_NUMBER = "918005168134";

function Hero() {
  const openWhatsApp = () => {
    const message =
      "Hello WoodCraft Studio! I am interested in your custom furniture and interior design services.";

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="/imags/hero.jpg"
        alt="Luxury wooden interior"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-wood-900 via-wood-900/90 to-wood-900/40" />

      <div className="container-custom relative z-10 px-5 py-32 sm:px-8 lg:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">

          {/* LEFT CONTENT */}
          <div className="max-w-3xl">

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-wood-300/40 bg-white/10 px-4 py-2 text-sm text-wood-100 backdrop-blur">
              <Sparkles size={16} />
              Bespoke Furniture & Interior Design
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              Crafting
              <span className="block text-wood-300">
                Timeless Spaces
              </span>
              in Wood.
            </h1>

            {/* Intro */}
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
              We transform natural wood into elegant furniture and
              thoughtfully designed interiors that are made to last
              for generations.
            </p>

            {/* About Me */}
            <div className="mt-8 max-w-2xl border-l-2 border-wood-400 pl-5">
              <div className="flex items-center gap-2 text-wood-300">
                <UserRound size={18} />

                <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                  About Me
                </span>
              </div>

              <h2 className="mt-2 font-serif text-3xl font-bold text-white sm:text-4xl">
                I am Paresh Mandal
              </h2>

              <p className="mt-3 text-base leading-7 text-white/65">
                I am a passionate wooden furniture craftsman and
                interior designer dedicated to creating beautiful,
                functional and timeless spaces. My work combines
                traditional craftsmanship with modern interior
                design to create pieces that feel personal and
                meaningful.
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="btn-primary bg-wood-500 hover:bg-wood-400"
              >
                Explore My Work
                <ArrowRight size={18} />
              </a>

              <button
                type="button"
                onClick={openWhatsApp}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 font-medium text-white transition hover:bg-white hover:text-wood-900"
              >
                <MessageCircle size={18} />
                Start a Project
              </button>
            </div>

            {/* Stats */}
            <div className="mt-14 grid max-w-2xl grid-cols-3 gap-5 border-t border-white/20 pt-7">

              <div>
                <p className="font-serif text-3xl font-bold text-white">
                  15+
                </p>

                <p className="mt-1 text-sm text-white/60">
                  Years Experience
                </p>
              </div>

              <div>
                <p className="font-serif text-3xl font-bold text-white">
                  350+
                </p>

                <p className="mt-1 text-sm text-white/60">
                  Projects Completed
                </p>
              </div>

              <div>
                <p className="font-serif text-3xl font-bold text-white">
                  98%
                </p>

                <p className="mt-1 text-sm text-white/60">
                  Happy Clients
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT PROFILE CARD */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">

              {/* Decorative Circle */}
              <div className="absolute -inset-4 rounded-full border border-wood-300/30" />

              <div className="absolute -inset-8 rounded-full border border-white/10" />

              {/* Profile Image */}
              <div className="relative h-72 w-72 overflow-hidden rounded-full border-8 border-white/20 shadow-2xl sm:h-80 sm:w-80 lg:h-96 lg:w-96">
                <img
                  src="/images/profile.jpg"
                  alt="Paresh Mandal - Wooden Furniture Craftsman and Interior Designer"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Profile Label */}
              <div className="absolute -bottom-5 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-white/10 bg-wood-900/90 px-5 py-4 text-center shadow-xl backdrop-blur-md">
                <p className="font-serif text-xl font-bold text-white">
                  Paresh Mandal
                </p>

                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-wood-300">
                  Furniture Craftsman
                </p>

                <p className="text-xs uppercase tracking-[0.18em] text-white/50">
                  Interior Designer
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;

