WoodCraft Studio

Wooden Furniture Craftsman & Interior Designer Portfolio

A modern, elegant, and fully responsive portfolio website for a wooden furniture craftsman and interior designer. Built with React, Vite, and Tailwind CSS, with direct WhatsApp integration for customer enquiries.

✨ Features
Modern and elegant furniture portfolio
Responsive design for mobile, tablet, and desktop
Wooden/earth-tone visual design
Professional hero section
About the designer section
Custom furniture showcase
Interior design services
Project portfolio/gallery
Design process section
Why choose us section
Client testimonials
Contact section
WhatsApp enquiry buttons
Mobile navigation menu
Smooth section navigation
Lucide React icons
Easy image customization
Production-ready Vite build
🛠️ Technologies
React.js
Vite
Tailwind CSS
JavaScript
Lucide React
HTML5
CSS3
📁 Project Structure
woodcraft-studio/
│
├── public/
│   ├── images/
│   │   ├── hero.jpg
│   │   ├── about.jpg
│   │   ├── profile.jpg
│   │   ├── furniture-1.jpg
│   │   ├── furniture-2.jpg
│   │   ├── furniture-3.jpg
│   │   ├── project-1.jpg
│   │   ├── project-2.jpg
│   │   ├── project-3.jpg
│   │   ├── project-4.jpg
│   │   ├── project-5.jpg
│   │   └── project-6.jpg
│   │
│   └── manifest.json
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Projects.jsx
│   │   ├── Furniture.jsx
│   │   ├── Process.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
🚀 Installation
1. Open the project

Open the woodcraft-studio folder in VS Code.

Open the terminal:

Ctrl + `

or select:

Terminal → New Terminal

2. Install dependencies

Run:

npm install
3. Start the development server

Run:

npm run dev

Vite will display a local URL similar to:

http://localhost:5173/

Open the URL in your browser.

🖼️ Adding Images

Place your images inside:

public/images/

Recommended files:

hero.jpg
about.jpg
profile.jpg
furniture-1.jpg
furniture-2.jpg
furniture-3.jpg
project-1.jpg
project-2.jpg
project-3.jpg
project-4.jpg
project-5.jpg
project-6.jpg

Use them in React like:

<img
  src="/images/hero.jpg"
  alt="Luxury wooden interior"
/>

For the profile image:

<img
  src="/images/profile.jpg"
  alt="Paresh Mandal - Wooden Furniture Craftsman and Interior Designer"
/>
💬 WhatsApp Integration

The website includes WhatsApp contact buttons.

The configured WhatsApp number is:

+91 80051 68134

In Header.jsx:

const WHATSAPP_NUMBER = "918005168134";

The WhatsApp message is:

const WHATSAPP_MESSAGE =
  "Hello Paresh Mandal! I would like to discuss a furniture or interior design project.";

The WhatsApp URL is generated using:

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;
Change WhatsApp Number

Open:

src/components/Header.jsx

Find:

const WHATSAPP_NUMBER = "918005168134";

Replace it with your own number.

Example

For:

+91 98765 43210

use:

const WHATSAPP_NUMBER = "919876543210";

Do not include:

+
spaces
-
()
📱 WhatsApp App Link

For devices with WhatsApp installed, the project can attempt to open the WhatsApp application using:

whatsapp://send

The fallback is:

https://wa.me/

On desktop browsers, WhatsApp may display an Open app button. This is controlled by the browser and WhatsApp and is not a React error.

🧩 Website Sections
Home

The hero section introduces the WoodCraft Studio brand and includes:

Main heading
Furniture craftsmanship description
Interior design introduction
Experience statistics
Explore Projects button
WhatsApp CTA
About

The About section introduces:

Paresh Mandal

as a wooden furniture craftsman and interior designer.

It can include:

Profile photograph
Personal introduction
Experience
Design philosophy
Craftsmanship information
Services

The Services section can showcase:

Custom Furniture
Interior Design
Custom Woodwork
Residential Interiors
Commercial Interiors
Space Planning
Furniture Restoration
Bespoke Furniture
Projects

The Projects section displays completed work.

Images are stored in:

public/images/

Example:

project-1.jpg
project-2.jpg
project-3.jpg
project-4.jpg
project-5.jpg
project-6.jpg
Furniture

Showcase handcrafted furniture including:

Dining tables
Wooden chairs
Beds
Cabinets
Coffee tables
TV units
Custom furniture
Process

The design process can be presented as:

01 Consultation
02 Design
03 Material Selection
04 Crafting
05 Installation
06 Final Delivery
Why Choose Us

Highlight:

Experienced craftsmanship
Quality materials
Custom designs
Attention to detail
Professional service
Premium finishing
Long-lasting furniture
Testimonials

Display customer reviews and experiences.

You can edit the testimonial information inside:

src/components/Testimonials.jsx
Contact

The Contact section provides visitors with a way to start a project.

The WhatsApp button can be used for:

Furniture enquiries
Interior design enquiries
Custom orders
Project discussions
Pricing enquiries
🎨 Customizing the Design

The project uses custom wood-* Tailwind colors.

Open:

tailwind.config.js

Example:

theme: {
  extend: {
    colors: {
      wood: {
        100: "#f5e6d3",
        200: "#e6c9a8",
        300: "#c99a6b",
        400: "#a97042",
        500: "#8b5e34",
        600: "#70452a",
        700: "#56341f",
        800: "#3b2418",
        900: "#24160f",
      },
    },
  },
},

You can change these colors to match your furniture brand.

✏️ Customize Your Name

To change the designer name, search the project for:

Paresh Mandal

You can replace it with your own name.

For example:

<h2>I am Your Name</h2>
🔧 Available Commands
Install packages
npm install
Development
npm run dev
Production build
npm run build
Preview production build
npm run preview
📦 Production Build

Before deploying:

npm run build

Vite creates:

dist/

The dist folder contains the production version of the website.

🌐 Deployment

This project can be deployed on:

Netlify
Vercel
Cloudflare Pages
GitHub Pages
Other static hosting platforms

Typical build settings:

Build command:
npm run build
Publish directory:
dist
📞 Contact Information
Designer

Paresh Mandal

WhatsApp

+91 80051 68134

Website

WoodCraft Studio

You can replace the contact information with your own business details.

🔐 Customization Checklist

Before publishing the website, update:

 Designer name
 Profile image
 Hero image
 About image
 Furniture images
 Project images
 WhatsApp number
 WhatsApp message
 Contact information
 Email address
 Social media links
 Business location
 Services
 Testimonials
 Logo/brand name
📄 License

This project can be customized for personal or commercial website projects according to the license under which the template is distributed.

If you plan to sell this template, provide your own license specifying whether buyers can use, modify, or redistribute the source code.

👨‍💻 Credits

WoodCraft Studio

Wooden Furniture Craftsman & Interior Designer Portfolio

Built with:

React
Vite
Tailwind CSS
Lucide React
⭐ Final Setup

After installation, run:

npm install
npm run dev

Then open:

http://localhost:5173

For production:

npm run build

Your production website will be available in:

dist/

WoodCraft Studio — Crafting Timeless Spaces in Wood.