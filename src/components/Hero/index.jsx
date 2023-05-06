import HeroImage from "../../assets/hero-example.png";
const Hero = () => {
  return (
    <section className="hero mb-[35px] lg:mb-11">
      <div className="container mx-auto px-6 flex justify-center max-w-[1110px]">
        <div className="hero__inner w-full  bg-[#101010] rounded-[30px] px-6 sm:px-8 pb-0 sm:py-5 lg:py-0 text-white shadow flex justify-between lg:justify-center lg:gap-x-16 items-center">
          <h1 className="hero-title font-semibold text-[20px] sm:text-[24px] leading-6 sm:leading-8 w-2/3 md:w-1/2 lg:w-1/3 lg:text-center">
            Shopping products for both men and women
          </h1>
          <a href="#">
            <img
              src={HeroImage}
              alt="Image"
              className="sm:w-[300px] sm:scale-125"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
