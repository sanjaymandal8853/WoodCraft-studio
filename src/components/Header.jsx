import { useState } from "react";
import {
  Menu,
  X,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

const WHATSAPP_NUMBER = "918005168134";

const WHATSAPP_MESSAGE =
  "Hello Paresh Mandal! I would like to discuss a furniture or interior design project.";

function openWhatsApp() {
  const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);

  // Try to open the installed WhatsApp application
  const appUrl = `whatsapp://send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;

  // Fallback to WhatsApp Web
  const webUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  window.location.href = appUrl;

  // If the WhatsApp app is not installed/openable,
  // redirect to WhatsApp Web.
  setTimeout(() => {
    window.location.href = webUrl;
  }, 1500);
}

function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Services", "#services"],
    ["Projects", "#projects"],
    ["Furniture", "#furniture"],
    ["Contact", "#contact"],
  ];

  const handleLinkClick = () => {
    setOpen(false);
  };

  const handleWhatsApp = () => {
    setOpen(false);
    openWhatsApp();
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-wood-900/95 backdrop-blur-md">
      <div className="flex items-center justify-between h-20 px-5 container-custom sm:px-8 lg:px-16">

        {/* Logo */}
        <a
          href="#home"
          onClick={handleLinkClick}
          className="flex items-center gap-3"
        >
          <div className="flex items-center justify-center w-10 h-10 border rounded-full border-wood-300 text-wood-200">
            <span className="font-serif text-lg font-bold">
              W
            </span>
          </div>

          <div>
            <h1 className="font-serif text-lg font-bold tracking-wide text-white">
              WoodCraft
            </h1>

            <p className="text-[10px] uppercase tracking-[0.25em] text-wood-300">
              Studio
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="items-center hidden gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={handleLinkClick}
              className="text-sm font-medium transition text-white/80 hover:text-wood-300"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop WhatsApp */}
        <button
          type="button"
          onClick={handleWhatsApp}
          className="items-center hidden gap-2 px-5 py-3 text-sm font-semibold text-white transition rounded-full bg-wood-500 hover:bg-wood-400 lg:inline-flex"
        >
          <MessageCircle size={17} />
          WhatsApp
          <ArrowUpRight size={15} />
        </button>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="text-white lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="px-5 py-6 border-t shadow-xl border-white/10 bg-wood-900 lg:hidden">
          <nav className="flex flex-col gap-2">

            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={handleLinkClick}
                className="px-3 py-3 text-sm font-medium transition rounded-lg text-white/90 hover:bg-white/10 hover:text-wood-300"
              >
                {label}
              </a>
            ))}

            {/* Mobile WhatsApp */}
            <button
              type="button"
              onClick={handleWhatsApp}
              className="flex items-center justify-center gap-2 px-5 py-3 mt-4 font-semibold text-white transition rounded-full bg-wood-500 hover:bg-wood-400"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
              <ArrowUpRight size={15} />
            </button>

          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;