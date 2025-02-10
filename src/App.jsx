import Footer from "./global_ui/footer/Footer";
import NavBar from "./global_ui/nav/NavBar";
import Expriences from "./home_ui/Expriences";
import HeroSection from "./home_ui/HeroSection";
import Projects from "./home_ui/Projects";

const App = () => {
  return (
    <div className="bg-[#161618]">
      <NavBar />
      <main className="md:px-[10.23rem] px-5 lg:px-[19.68rem]">
        <HeroSection />
        <Projects />
        <Expriences />
      </main>
      <Footer />
    </div>
  );
};

export default App;
