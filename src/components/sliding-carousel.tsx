import  { useState,useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

export const SlidingCarousel = ({ images }:{
    images:string[]
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToSlide = (index:number) => {
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 3000); // Slide every 3 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);
  
  return (
    <div className="relative h-[450px] group cursor-pointer rounded-lg">
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          className="max-h-full w-full hover:opacity-100 rounded-lg"
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
        />
      </div>
      <div className="absolute bottom-2 left-0 right-0 flex justify-center">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 mx-1 rounded-full focus:outline-none ${
              index === currentIndex ? ' bg-color-1' : 'bg-gray-500'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 
        bg-gray-800 text-white rounded-full p-2 focus:outline-none hidden group-hover:block"
        onClick={goToPrevSlide}
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800
         text-white rounded-full p-2 focus:outline-none hidden group-hover:block"
        onClick={goToNextSlide}
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

