
interface ProductCarouselProps{
  
    Product:{
      thumbnail:string,
      images:string[],
      description:string,
      name:string,
      id:number,
      price:number
    }[]
}
const ProductCarousel = ({Product}:ProductCarouselProps) => {


  return (
    <div className="relative w-full">
      <div className="flex overflow-x-scroll space-x-4 p-4 scrollbar-hide">
        {Product.map(product => (
          <div
           key={product.id}
            className="flex-none w-64  bg-n-4 rounded-lg shadow-md"
            
            >
            <img
              src={product.thumbnail}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">Kes {product.price}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2">
        <button className="bg-gray-800 text-white rounded-full p-2 focus:outline-none" onClick={() => scroll('left')}>
          &#8592;
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2">
        <button className="bg-gray-800 text-white rounded-full p-2 focus:outline-none" onClick={() => scroll('right')}>
          &#8594;
        </button>
      </div> */}
    </div>
  );
  }

export default ProductCarousel;
