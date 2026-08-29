import {
  MessageSquare,
  PencilRuler,
  TreePine,
  Hammer,
  Truck,
} from "lucide-react";

function Process() {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Consultation",
      text: "We understand your space, lifestyle, requirements and vision.",
    },
    {
      number: "02",
      icon: PencilRuler,
      title: "Design",
      text: "Our ideas are translated into detailed concepts and plans.",
    },
    {
      number: "03",
      icon: TreePine,
      title: "Material Selection",
      text: "We carefully select wood, finishes and materials for your project.",
    },
    {
      number: "04",
      icon: Hammer,
      title: "Handcrafting",
      text: "Our craftsmen turn the design into a beautifully finished piece.",
    },
    {
      number: "05",
      icon: Truck,
      title: "Installation",
      text: "Everything is delivered and installed with professional care.",
    },
  ];

  return (
    <section className="section-padding bg-wood-50">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-wood-500">
            Our Process
          </p>

          <h2 className="mt-3 font-serif text-4xl font-bold text-wood-900 sm:text-5xl">
            From idea to
            <span className="text-wood-500"> reality.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-5">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative rounded-3xl bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-bold text-wood-200">
                    {step.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-wood-100 text-wood-700">
                    <Icon size={20} />
                  </div>
                </div>

                <h3 className="mt-7 font-serif text-xl font-bold text-wood-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Process;