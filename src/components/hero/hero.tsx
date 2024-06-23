import { Button } from "../ui/button";
import { HeroCarousel } from "./hero-carousel";

export const Hero = () => {
  // const imgs: string[] = [

  //   "/images/slide1.png",
  //   "https://img.freepik.com/free-photo/inspirational-quote-written-mug_23-2149261735.jpg?t=st=1715585905~exp=1715589505~hmac=3178de1027b125fdcce96bb423244f7edca047f6c24c9812badb895a20f5abd6&w=900",
  //   "/images/slide2.png",
  //   "/images/slide3.png",
  // ];
  return (
    <div className=" flex flex-col" id="hero">
      <div
        className="hero min-h-max flex flex-col py-10"
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/564x/66/07/10/660710dc317d7b15747c14eca719564d.jpg)",
        }}
      >
        <div
          className="hero-overlay bg-opacity-5 flex justify-center items-center w-full
        "
        >
          <HeroCarousel />
        </div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-gothic font-bold text-white tracking-wide">
              Hello there!
            </h1>
            <p className="mb-5 text-white leading-relaxed font-code">
              Creating visually stunning websites, custom-designed t-shirts,
              unique cake toppers, and high-quality digital prints. Each project
              is crafted with precision and creativity, ensuring exceptional
              results that stand out and captivate.
            </p>
            <a href="#product">
              <Button variant="outline">Explore</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
