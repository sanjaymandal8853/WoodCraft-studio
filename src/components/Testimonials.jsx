import { Star } from "lucide-react";

function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Homeowner",
      text: "The dining table they created for us is absolutely beautiful. The craftsmanship and attention to detail are exceptional.",
    },
    {
      name: "Priya Mehta",
      role: "Interior Client",
      text: "WoodCraft completely transformed our home. They understood our vision and made the entire process simple.",
    },
    {
      name: "Arjun Kapoor",
      role: "Business Owner",
      text: "Professional, creative and extremely detail-oriented. Our office interiors now feel premium and welcoming.",
    },
  ];

  return (
    <section className="section-padding bg-wood-50">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-wood-500">
            Client Stories
          </p>

          <h2 className="mt-3 font-serif text-4xl font-bold text-wood-900 sm:text-5xl">
            Loved by the people
            <span className="text-wood-500"> we create for.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-3xl bg-white p-8 shadow-sm"
            >
              <div className="flex gap-1 text-wood-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={17}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="mt-6 leading-7 text-gray-600">
                “{testimonial.text}”
              </p>

              <div className="mt-7 border-t border-gray-100 pt-5">
                <p className="font-semibold text-wood-900">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;