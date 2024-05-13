import GradientButton from "../shared/gradient-button";
import { SlidingCarousel } from "../sliding-carousel";
import { HeroText } from "./hero-text";

export const Hero = () => {
  const imgs: string[] = [
    "https://img.freepik.com/free-photo/person-surrounded-by-wavy-text_23-2150039706.jpg?t=st=1715414003~exp=1715417603~hmac=f4a9c2eac3398bea857ecbbdab11702c7333f6a0fb3c02ecc4482dd5652d5ed2&w=900",
    "https://img.freepik.com/premium-vector/creative-abstract-background_17005-111.jpg?w=740",
    "https://img.freepik.com/free-photo/portrait-woman-representing-virgo-zodiac-sign_23-2151006277.jpg?t=st=1715414298~exp=1715417898~hmac=5b9506f7e40f998ab19d58d0d51b58ff8ac63efae09347c31db9a9f24ba08560&w=360",
    "https://img.freepik.com/free-photo/auto-outdoors-portrait-girl-looking_1304-939.jpg?t=st=1715414326~exp=1715417926~hmac=f4fd5b8b96dcac4e22c75db9c9471e120b99f64278039563ed4e35b3ddb6cf32&w=900",
  ];
  return (
    <div className="container flex flex-col gap-y-3" id="#hero">
   <div className="  grid grid-cols-1 md:grid-cols-2 gap-3 py-5 ">
      <div className=" col-span-1">
        <SlidingCarousel images={imgs} />
      </div>
      <div className=" col-span-1">
        <HeroText
          title="Lorem ipsum is placeholder text  "
          description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
        />
      </div>
    </div>
    <div className=" w-full flex justify-center items-center">
      <GradientButton content="START"  />
    </div>
    </div>
 
  );
};
