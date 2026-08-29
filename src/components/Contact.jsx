import { useState } from "react";
import {
  ArrowUpRight,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const WHATSAPP_NUMBER = "918005168134";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    budget: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const whatsappMessage = `
Hello WoodCraft Studio!

I would like to discuss a project.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Project Type: ${formData.project}
Budget: ${formData.budget}

Project Details:
${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="contact"
      className="section-padding bg-wood-900"
    >
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-wood-300">
              Let's Create Together
            </p>

            <h2 className="mt-3 font-serif text-4xl font-bold text-white sm:text-6xl">
              Have a space
              <span className="block text-wood-300">
                in mind?
              </span>
            </h2>

            <p className="max-w-xl mt-6 leading-8 text-white/60">
              Tell us about your project. Fill out the form and
              we'll open WhatsApp with your project details ready
              to send to our team.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center rounded-full h-11 w-11 bg-white/10 text-wood-300">
                  <MessageCircle size={19} />
                </div>

                <div>
                  <p className="text-sm text-white/50">
                    WhatsApp
                  </p>
                  <p className="font-medium text-white">
                    +918005168134
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center rounded-full h-11 w-11 bg-white/10 text-wood-300">
                  <Phone size={19} />
                </div>

                <div>
                  <p className="text-sm text-white/50">
                    Call Us
                  </p>
                  <p className="font-medium text-white">
                    +918005168134
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center rounded-full h-11 w-11 bg-white/10 text-wood-300">
                  <Mail size={19} />
                </div>

                <div>
                  <p className="text-sm text-white/50">
                    Email
                  </p>
                  <p className="font-medium text-white">
                    hello@woodcraftstudio.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center rounded-full h-11 w-11 bg-white/10 text-wood-300">
                  <MapPin size={19} />
                </div>

                <div>
                  <p className="text-sm text-white/50">
                    Studio
                  </p>
                  <p className="font-medium text-white">
                    New Delhi, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] bg-white p-6 shadow-2xl sm:p-8"
          >
            <h3 className="font-serif text-3xl font-bold text-wood-900">
              Start a conversation
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Submit your details and continue on WhatsApp.
            </p>

            <div className="grid gap-5 mt-7 sm:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm font-medium text-wood-800">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 transition border border-gray-200 outline-none rounded-xl focus:border-wood-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-wood-800">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 transition border border-gray-200 outline-none rounded-xl focus:border-wood-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-wood-800">
                  Phone
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 transition border border-gray-200 outline-none rounded-xl focus:border-wood-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-wood-800">
                  Project Type
                </label>

                <select
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 outline-none rounded-xl focus:border-wood-500"
                >
                  <option value="">Select project</option>
                  <option value="Custom Furniture">
                    Custom Furniture
                  </option>
                  <option value="Interior Design">
                    Interior Design
                  </option>
                  <option value="Kitchen">
                    Wooden Kitchen
                  </option>
                  <option value="Bedroom">
                    Bedroom
                  </option>
                  <option value="Office">
                    Office Interior
                  </option>
                  <option value="Complete Home">
                    Complete Home
                  </option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-wood-800">
                  Estimated Budget
                </label>

                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 outline-none rounded-xl focus:border-wood-500"
                >
                  <option value="">Select budget</option>
                  <option value="Under ₹1 Lakh">
                    Under ₹1 Lakh
                  </option>
                  <option value="₹1 - ₹3 Lakhs">
                    ₹1 - ₹3 Lakhs
                  </option>
                  <option value="₹3 - ₹5 Lakhs">
                    ₹3 - ₹5 Lakhs
                  </option>
                  <option value="₹5 - ₹10 Lakhs">
                    ₹5 - ₹10 Lakhs
                  </option>
                  <option value="₹10 Lakhs+">
                    ₹10 Lakhs+
                  </option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-wood-800">
                  Project Details
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 transition border border-gray-200 outline-none resize-none rounded-xl focus:border-wood-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center w-full gap-2 px-6 py-4 mt-6 font-semibold text-white transition rounded-full bg-wood-800 hover:bg-wood-600"
            >
              <MessageCircle size={19} />
              Send via WhatsApp
              <ArrowUpRight size={17} />
            </button>

            <p className="mt-4 text-xs text-center text-gray-500">
              Your message will open in WhatsApp with the details
              you entered.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;