import About from "./components/About";
import Hero from "./components/Hero";
import Features from "./components/Features";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero/>
      <About/>
      <Features/>
    </main>
  );
}

export default App;
