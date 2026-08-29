import {
  Check,
  ArrowUpRight,
} from "lucide-react";

function About() {
  const features = [
    "Premium quality natural wood",
    "Custom-made furniture",
    "Attention to every detail",
    "Professional interior planning",
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom grid items-center gap-14 lg:grid-cols-2">
        <div className="relative">
          <img
            src="/images/about.jpg"
            alt="Woodcraft artisan"
            className="h-[520px] w-full rounded-[2rem] object-cover"
          />

          <div className="absolute -bottom-8 -right-5 rounded-2xl bg-wood-800 p-6 text-white shadow-2xl sm:right-5">
            <p className="font-serif text-4xl font-bold">15+</p>
            <p className="mt-1 text-sm text-white/70">
              Years of Craftsmanship
            </p>
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-wood-500">
            About WoodCraft
          </p>

          <h2 className="font-serif text-4xl font-bold leading-tight text-wood-900 sm:text-5xl">
            Where craftsmanship
            <span className="block text-wood-500">
              meets imagination.
            </span>
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            WoodCraft Studio is a furniture and interior design
            practice focused on creating warm, functional and
            timeless spaces. Every project begins with an idea and
            ends with a handcrafted result.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            From a single custom dining table to complete interior
            transformations, we combine traditional woodworking
            techniques with contemporary design.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-wood-100 text-wood-700">
                  <Check size={14} />
                </span>

                <span className="text-sm font-medium text-wood-800">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-wood-700 hover:text-wood-500"
          >
            Work With Us
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;