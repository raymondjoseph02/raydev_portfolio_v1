import { useEffect } from "react";
import Footer from "./global_ui/footer/Footer";
import NavBar from "./global_ui/nav/NavBar";
import Expriences from "./home_ui/Expriences";
import HeroSection from "./home_ui/HeroSection";
import Projects from "./home_ui/Projects";
import Lenis from "lenis";
import { RefProvider } from "./context/RefContext";
import { Theme } from "@radix-ui/themes";

const App = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <RefProvider>
      <Theme>
        <div className="bg-[#161618]">
          <NavBar />
          <main className="md:px-[10.23rem] px-5 lg:px-[19.68rem]">
            <HeroSection />
            <Projects />
            <Expriences />
          </main>
          <Footer />
        </div>
      </Theme>
    </RefProvider>
  );
};

export default App;
