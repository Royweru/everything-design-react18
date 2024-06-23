export const HeroCarousel = () => {
  return (
    <div className="carousel max-w-md h-[250px]">
      <div id="slide1" className="carousel-item relative w-full rounded-xl">
        <img
          src="https://img.freepik.com/free-photo/person-surrounded-by-wavy-text_23-2150039706.jpg?t=st=1715414003~exp=1715417603~hmac=f4a9c2eac3398bea857ecbbdab11702c7333f6a0fb3c02ecc4482dd5652d5ed2&w=900"
          className="w-full rounded-xl relative"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full rounded-xl">
        <img src="/images/slide1.png" className="w-full rounded-xl relative" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full rounded-xl">
        <img
          src="https://img.freepik.com/free-photo/inspirational-quote-written-mug_23-2149261735.jpg?t=st=1715585905~exp=1715589505~hmac=3178de1027b125fdcce96bb423244f7edca047f6c24c9812badb895a20f5abd6&w=900"
          className="w-full rounded-xl relative"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full rounded-xl">
        <img src="/images/slide2.png" className="w-full rounded-xl relative" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};
