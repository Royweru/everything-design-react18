import GradientButton from "../shared/gradient-button";
import { SlidingCarousel } from "../sliding-carousel";
import { HeroText } from "./hero-text";

export const Hero = () => {
  const imgs: string[] = [
    "https://img.freepik.com/free-photo/person-surrounded-by-wavy-text_23-2150039706.jpg?t=st=1715414003~exp=1715417603~hmac=f4a9c2eac3398bea857ecbbdab11702c7333f6a0fb3c02ecc4482dd5652d5ed2&w=900",
    "/images/slide1.png",
    "https://img.freepik.com/free-photo/inspirational-quote-written-mug_23-2149261735.jpg?t=st=1715585905~exp=1715589505~hmac=3178de1027b125fdcce96bb423244f7edca047f6c24c9812badb895a20f5abd6&w=900",
    "/images/slide2.png",
    "/images/slide3.png",

  ];
  return (
    <div className="container flex flex-col gap-y-3" id="hero">
   <div className="  grid grid-cols-1 md:grid-cols-2 gap-3 py-5 ">
      <div className=" col-span-1">
        <SlidingCarousel images={imgs} />
      </div>
      <div className=" col-span-1">
        <HeroText
          title="Transform Your Brand with Stunning Designs "
          description="At Everything Design, we bring your vision to life with custom branding and graphic design services. From eye-catching mugs and hats to standout t-shirts and jerseys, our creative experts craft unique and memorable designs that elevate your brand. Let’s create something amazing together."
        />
      </div>
    </div>
    <div className=" w-full flex justify-center items-center">
      <GradientButton content="EXPLORE" href="#product" />
    </div>
    </div>
 
  );
};
