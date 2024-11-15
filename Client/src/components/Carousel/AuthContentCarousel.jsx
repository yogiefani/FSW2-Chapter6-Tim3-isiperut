import CarouselContent from "./CarouselContent";

const AuthContentCarousel = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-600">
      <div className="carousel bg-white w-4/6 h-4/6 rounded-lg">
        <div id="slide1" className="carousel-item relative w-full">
          <CarouselContent
            path="/images/example.png"
            text="Nikmati layanan kami dengan mudah"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide2"
              className="btn btn-circle opacity-0 hover:opacity-100 pointer-events-auto"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle opacity-0 hover:opacity-100 pointer-events-auto"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <CarouselContent
            path="/images/example1.png"
            text="Yogi jual burger coy"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide2"
              className="btn btn-circle opacity-0 hover:opacity-100 pointer-events-auto"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle opacity-0 hover:opacity-100 pointer-events-auto"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <CarouselContent path="/images/example2.png" text="Laper ah" />

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide2"
              className="btn btn-circle opacity-0 hover:opacity-100 pointer-events-auto"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle opacity-0 hover:opacity-100 pointer-events-auto"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthContentCarousel;
