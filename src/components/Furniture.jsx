import { ArrowRight } from "lucide-react";

function Furniture() {
  const furniture = [
    {
      image: "/images/furniture-1.jpg",
      title: "Signature Dining Table",
      category: "Dining Collection",
    },
    {
      image: "/images/furniture-2.jpg",
      title: "Handcrafted Lounge Chair",
      category: "Seating Collection",
    },
    {
      image: "/images/furniture-3.jpg",
      title: "Minimal Wooden Cabinet",
      category: "Storage Collection",
    },
  ];

  return (
    <section
      id="furniture"
      className="section-padding bg-wood-900"
    >
      <div className="container-custom">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-wood-300">
              Furniture Collection
            </p>

            <h2 className="mt-3 font-serif text-4xl font-bold text-white sm:text-5xl">
              Objects with
              <span className="text-wood-300"> soul.</span>
            </h2>
          </div>

          <p className="max-w-xl leading-7 text-white/60 lg:ml-auto">
            Each piece is designed to celebrate the natural beauty
            of wood while bringing practical elegance into your
            everyday life.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {furniture.map((item) => (
            <div key={item.title} className="group">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <p className="mt-5 text-sm text-wood-300">
                {item.category}
              </p>

              <h3 className="mt-1 font-serif text-2xl font-bold text-white">
                {item.title}
              </h3>

              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white"
              >
                Request Custom Piece
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Furniture;