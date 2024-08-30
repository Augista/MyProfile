import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Project";

export default function Home() {
  return (
    <>
    <Navbar />
    <main className="max-w-3xl px-4 mx-auto sm:px-6 md:max-w-5xl ">
      <Hero />
      <About />
      <Projects />
    </main></>
  );
}
