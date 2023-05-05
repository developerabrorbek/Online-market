import HeroImage from "../../assets/hero-example.png"
const Hero = () => {
  return (
    <section className="hero">
      <div className="container mx-auto px-6">
        <div className="hero__inner bg-[#101010] rounded-[30px] px-6 pb-0 text-white shadow flex justify-between items-center">
          <h1 className="hero-title font-semibold text-[20px] leading-6 w-1/2">
            Shopping products for both men and women
          </h1>
          <a href="#">
            <img src={HeroImage} alt="Image" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
