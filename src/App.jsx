import About from "./components/About";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FloatingImage from "./components/Story";
const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero/>
      <About/>
      <Features/>
      <FloatingImage/>
    </main>
  );
}

export default App;
