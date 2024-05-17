
 const images = [
  { src:     "/images/t-shirts/bt13.png", width: 100, height: 250 },
  { src: "/images/t-shirts/bt14.png", width: 200, height: 150 },
  { src: "/images/t-shirts/bt15.png", width: 50, height: 300 },
  { src:"/images/t-shirts/bt16.png", width: 200, height: 200 },
  // { src:"/images/t-shirts/bt14.png", width:150, height: 150 },
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



