import About from "./components/About-Me";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Work from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;