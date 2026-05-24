import About from "./components/About";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FloatingImage from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar/>
      <Hero/>
      <About/>
      <Features/>
      <FloatingImage/>
      <Contact/>
      <Footer/>
    </main>
  );
}

export default App;
