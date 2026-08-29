import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Furniture from "./components/Furniture";
import Process from "./components/Process";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-wood-50">
      <Header />

      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Furniture />
        <Process />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;