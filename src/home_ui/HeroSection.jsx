import ExperienceWith from "./ExperienceWith";
import advater from "../assets/images/WhatsApp_Image_2024-12-03_at_16.19.56-removebg-preview.png";
const HeroSection = () => {
  return (
    <section className="pt-40 pb-40 md:pt-72 w-full">
      <div className="flex h-fit w-full overflow-hidden relative flex-col-reverse  xl:flex-row">
        <div className="absolute z-100 circle-grandient " />

        <div className=" xl:w-[60%] relative z-20 flex justify-center items-center overflow-hidden ">
          <div className="hero-sec-text-before bg-transparent" />

          <div className="relative z-20 flex flex-col gap-8 p-5 md:px-10 md:py-20 rounded-3xl    size-[99.85%]  bg-transparent">
            <div className="flex justify-between flex-col gap-3">
              <p className="text-base font-medium text-[#efeded] sm:text-xl">
                Hi, I&#39;m Raymond.
              </p>
            </div>
            <h1 className="md:text-[2rem] text-3xl lg:text-[3.5rem] md:leading-[67.2px] md:max-w-[20ch] text-white font-semibold">
              🚀 Crafting Seamless Front-End Experiences
            </h1>
            <p className="text-[#b6b5b5] text-base md:max-w-[60ch] pb-10">
              I build high-performance, user-centric web solutions that blend
              innovation, speed, and scalability. Let’s build interfaces that
              feel as good as they
            </p>
            <ExperienceWith />
          </div>
        </div>
        <div
          className="w-[4%] xl:flex hidden bg-[#161618] relative z-[90]"
          aria-hidden="true"
        ></div>
        <div
          className="w-full h-20 xl:hidden flex bg-[#161618] relative z-[90]"
          aria-hidden="true"
        ></div>
        <div className="xl:h-full h-[26rem] w-full xl:w-[36%]  border-[1px] border-[#f5f4f421] rounded-3xl overflow-hidden ">
          <img
            src={advater}
            alt="raymond's advater"
            className="object-cover !size-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
