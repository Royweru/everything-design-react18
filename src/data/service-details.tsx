import { FaInstagram, FaMugHot,FaPalette } from 'react-icons/fa';


export const images = [
  { src: 'https://img.freepik.com/free-photo/person-surrounded-by-wavy-text_23-2150039706.jpg?t=st=1715414003~exp=1715417603~hmac=f4a9c2eac3398bea857ecbbdab11702c7333f6a0fb3c02ecc4482dd5652d5ed2&w=900', width: 400, height: 300 },
  { src: 'https://img.freepik.com/premium-vector/creative-abstract-background_17005-111.jpg?w=740', width: 300, height: 500 },
  { src: 'https://img.freepik.com/free-photo/portrait-woman-representing-virgo-zodiac-sign_23-2151006277.jpg?t=st=1715414298~exp=1715417898~hmac=5b9506f7e40f998ab19d58d0d51b58ff8ac63efae09347c31db9a9f24ba08560&w=360', width: 500, height: 350 },
  { src: 'https://img.freepik.com/free-photo/auto-outdoors-portrait-girl-looking_1304-939.jpg?t=st=1715414326~exp=1715417926~hmac=f4fd5b8b96dcac4e22c75db9c9471e120b99f64278039563ed4e35b3ddb6cf32&w=900', width: 200, height: 200 },
  { src: 'https://img.freepik.com/free-photo/portrait-two-friends-2000s-fashion-style-posing-together-with-tv-camera_23-2149442847.jpg?t=st=1715415163~exp=1715418763~hmac=72e8945417b3131ca4650eec5371f64a8e919621829cf7b4296dce4b62f1140f&w=360', width: 450, height: 400 },
  // Add more images as needed
];
export const ServiceDetails:{id:number,icon:React.ReactElement<unknown>,label:string,description:string}[] = [
  {
    id: 1,
    icon: <FaMugHot className="  w-24 h-24 text-n-5 font-bold" />,
    label: "Custom Merchandise Design",
    description:
      "Make your brand unforgettable with our custom merchandise design service. Whether you need mugs, hats, t-shirts, or jerseys, our team creates striking designs that represent your brand’s identity. Perfect for promotional events, corporate gifts, or retail collections.",
  },
  {
    id: 2,
    icon: <FaPalette className=" w-24 h-24 text-n-5 font-bold" />,
    label: "Logo and Brand Identity Development",
    description:
      "Your brand’s logo is the cornerstone of its identity. Our expert designers work closely with you to develop a unique and impactful logo, along with a cohesive brand identity that includes color schemes, typography, and visual guidelines. Stand out in the market with a brand that speaks volumes.",
  },
  {
    id: 3,
    icon: <FaInstagram className=" w-24 h-24 text-n-5 font-bold" />,
    label: " Social Media Graphics and Marketing Collateral",
    description:
      "Boost your online presence with our tailored social media graphics and marketing collateral. From eye-catching Instagram posts and Facebook banners to professional brochures and business cards, we ensure your brand stays consistent and visually appealing across all platforms.",
  },
//   {
//     id: 4,
//     icon: <SprayCanIcon className=" w-15 h-15" />,
//     label: "Fast Quick Delivery",
//     description:
//       "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual",
//   },
];
