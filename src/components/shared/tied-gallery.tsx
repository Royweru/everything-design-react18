
 const images = [
  { src: 'https://img.freepik.com/free-photo/person-surrounded-by-wavy-text_23-2150039706.jpg?t=st=1715414003~exp=1715417603~hmac=f4a9c2eac3398bea857ecbbdab11702c7333f6a0fb3c02ecc4482dd5652d5ed2&w=900', width: 100, height: 250 },
  { src: 'https://img.freepik.com/premium-vector/creative-abstract-background_17005-111.jpg?w=740', width: 200, height: 150 },
  { src: 'https://img.freepik.com/free-photo/portrait-woman-representing-virgo-zodiac-sign_23-2151006277.jpg?t=st=1715414298~exp=1715417898~hmac=5b9506f7e40f998ab19d58d0d51b58ff8ac63efae09347c31db9a9f24ba08560&w=360', width: 50, height: 300 },
  { src: 'https://img.freepik.com/free-photo/auto-outdoors-portrait-girl-looking_1304-939.jpg?t=st=1715414326~exp=1715417926~hmac=f4fd5b8b96dcac4e22c75db9c9471e120b99f64278039563ed4e35b3ddb6cf32&w=900', width: 200, height: 200 },
  { src: 'https://img.freepik.com/free-photo/portrait-two-friends-2000s-fashion-style-posing-together-with-tv-camera_23-2149442847.jpg?t=st=1715415163~exp=1715418763~hmac=72e8945417b3131ca4650eec5371f64a8e919621829cf7b4296dce4b62f1140f&w=360', width:150, height: 150 },
  // Add more images as needed
];


const TiedGallery = () => {
  return (
    <div className="tied-gallery-container">
      {images.map((image, index) => (
        <img key={index}  width={image.width} src={image.src} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default TiedGallery;



