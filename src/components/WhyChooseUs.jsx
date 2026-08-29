import {
  Award,
  Leaf,
  Ruler,
  HeartHandshake,
} from "lucide-react";

function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: "Premium Craftsmanship",
      text: "Every piece receives careful attention from concept to final finish.",
    },
    {
      icon: Leaf,
      title: "Natural Materials",
      text: "We value authentic materials and the unique character of natural wood.",
    },
    {
      icon: Ruler,
      title: "Made to Measure",
      text: "Furniture and interiors are designed around your exact requirements.",
    },
    {
      icon: HeartHandshake,
      title: "Personal Service",
      text: "We work closely with every client throughout the entire project.",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-wood-500">
              Why WoodCraft
            </p>

            <h2 className="mt-3 font-serif text-4xl font-bold text-wood-900 sm:text-5xl">
              Built with purpose.
              <span className="block text-wood-500">
                Designed to last.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Good design should feel natural. That's why we focus
              on proportions, materials, textures and craftsmanship
              to create spaces that remain beautiful for years.
            </p>

            <a
              href="#contact"
              className="btn-primary mt-8"
            >
              Discuss Your Project
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="rounded-3xl border border-wood-100 bg-wood-50 p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-wood-800 text-white">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 font-serif text-xl font-bold text-wood-900">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {reason.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;