import {
  Armchair,
  Home,
  ChefHat,
  BedDouble,
  BriefcaseBusiness,
  Hammer,
} from "lucide-react";

function Services() {
  const services = [
    {
      icon: Hammer,
      title: "Custom Furniture",
      text: "Bespoke furniture designed and handcrafted around your lifestyle and space.",
    },
    {
      icon: Home,
      title: "Interior Design",
      text: "Complete interior concepts that balance comfort, character and functionality.",
    },
    {
      icon: ChefHat,
      title: "Wooden Kitchens",
      text: "Elegant kitchens combining natural materials, smart storage and modern design.",
    },
    {
      icon: BedDouble,
      title: "Bedroom Interiors",
      text: "Peaceful bedroom spaces with custom beds, wardrobes and wooden details.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Office Interiors",
      text: "Professional workspaces designed for productivity and timeless aesthetics.",
    },
    {
      icon: Armchair,
      title: "Living Spaces",
      text: "Warm living rooms with custom seating, tables, storage and statement pieces.",
    },
  ];

  return (
    <section
      id="services"
      className="section-padding bg-wood-50"
    >
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-wood-500">
            What We Do
          </p>

          <h2 className="mt-3 font-serif text-4xl font-bold text-wood-900 sm:text-5xl">
            Crafted for the way
            <span className="text-wood-500"> you live.</span>
          </h2>

          <p className="mt-5 leading-7 text-gray-600">
            From individual furniture pieces to complete interiors,
            every detail is carefully considered.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-wood-100 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-wood-100 text-wood-700 transition group-hover:bg-wood-800 group-hover:text-white">
                  <Icon size={26} />
                </div>

                <h3 className="mt-6 font-serif text-2xl font-bold text-wood-900">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {service.text}
                </p>

                <a
                  href="#contact"
                  className="mt-6 inline-block text-sm font-bold text-wood-600"
                >
                  Learn More →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;