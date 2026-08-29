import {
  MessageCircle,
  Instagram,
  Facebook,
  ArrowUp,
} from "lucide-react";

const WHATSAPP_NUMBER = "918005168134";

function Footer() {
  const openWhatsApp = () => {
    const message =
      "Hello WoodCraft Studio! I would like to know more about your furniture and interior design services.";

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <footer className="bg-wood-950 bg-[#1b100a] text-white">
      <div className="px-5 container-custom py-14 sm:px-8 lg:px-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center border rounded-full h-11 w-11 border-wood-400 text-wood-300">
                <span className="font-serif text-lg">W</span>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold">
                  WoodCraft
                </h2>
                <p className="text-[10px] uppercase tracking-[0.25em] text-wood-300">
                  Studio
                </p>
              </div>
            </div>

            <p className="max-w-md mt-6 leading-7 text-white/50">
              Handcrafted furniture and thoughtful interiors
              designed to bring warmth, character and timeless
              beauty to your space.
            </p>

            <button
              onClick={openWhatsApp}
              className="inline-flex items-center gap-2 px-5 py-3 mt-6 text-sm font-semibold text-white rounded-full bg-wood-500 hover:bg-wood-400"
            >
              <MessageCircle size={17} />
              Chat on WhatsApp
            </button>
          </div>

          <div>
            <h3 className="font-semibold">Quick Links</h3>

            <div className="flex flex-col gap-3 mt-5 text-sm text-white/50">
              <a href="#home" className="hover:text-white">
                Home
              </a>
              <a href="#about" className="hover:text-white">
                About
              </a>
              <a href="#services" className="hover:text-white">
                Services
              </a>
              <a href="#projects" className="hover:text-white">
                Projects
              </a>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Services</h3>

            <div className="flex flex-col gap-3 mt-5 text-sm text-white/50">
              <span>Custom Furniture</span>
              <span>Interior Design</span>
              <span>Wooden Kitchens</span>
              <span>Bedroom Interiors</span>
              <span>Office Interiors</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-5 mt-12 border-t border-white/10 pt-7 sm:flex-row sm:items-center">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} WoodCraft Studio. All
            rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="flex items-center justify-center w-10 h-10 transition border rounded-full border-white/10 text-white/60 hover:bg-white hover:text-wood-900"
            >
              <Instagram size={17} />
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="flex items-center justify-center w-10 h-10 transition border rounded-full border-white/10 text-white/60 hover:bg-white hover:text-wood-900"
            >
              <Facebook size={17} />
            </a>

            <a
              href="#home"
              aria-label="Back to top"
              className="flex items-center justify-center w-10 h-10 transition border rounded-full border-white/10 text-white/60 hover:bg-white hover:text-wood-900"
            >
              <ArrowUp size={17} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;