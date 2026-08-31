import { ArrowUpRight } from "lucide-react";

function Projects() {
  const projects = [
    {
      image: "/images/project-1.jpg",
      title: "Modern Wall-Mounted TV Unit & Entertainment Cabinet Design",
      category: "Interior Design",
      size: "large",
    },
    {
      image: "/images/project-2.jpg",
      title: "Modern Stainless Steel Main Door Design",
      category: "Custom Furniture",
      size: "normal",
    },
    {
      image: "/images/project-3.jpg",
      title: "Modern Black Fitted Wardrobe Design",
      category: "Kitchen Design",
      size: "normal",
    },
    {
      image: "/images/project-4.jpg",
      title: "Built-in Wall Cupboard with Loft Cabinets",
      category: "Bedroom Interior",
      size: "normal",
    },
    {
      image: "/images/project-5.jpg",
      title: "Smith & John's Auto Clean Kitchen Chimney",
      category: "Office Interior",
      size: "normal",
    },
    {
      image: "/images/project-6.jpg",
      title: "Blue Kitchen Cabinets Under Construction",
      category: "Furniture",
      size: "large",
    },
    {
      image: "/images/project-7.jpg",
      title: "Modern Kitchen Setup with Blue Cabinets and Electric Chimney",
      category: "Furniture",
      size: "large",
    },
    {
      image: "/images/project-8.jpg",
      title: "Bespoke Living Room",
      category: "Furniture",
      size: "large",
    },
  ];

  return (
    <section id="projects" className="bg-white section-padding">
      <div className="container-custom">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-wood-500">
              Selected Work
            </p>

            <h2 className="mt-3 font-serif text-4xl font-bold text-wood-900 sm:text-5xl">
              Spaces we've
              <span className="text-wood-500"> crafted.</span>
            </h2>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-semibold text-wood-700"
          >
            Start Your Project
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="grid gap-5 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="relative overflow-hidden group rounded-3xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-[400px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-sm text-wood-300">
                  {project.category}
                </p>

                <h3 className="mt-1 font-serif text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-white"
                >
                  Discuss Similar Project
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;