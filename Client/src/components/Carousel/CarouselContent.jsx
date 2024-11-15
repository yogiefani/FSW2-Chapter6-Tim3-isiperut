function CarouselContent({ path, text }) {
  return (
    <div className="w-full h-full bg-white flex items-center justify-center flex-col gap-4">
      <div className="w-5/6">
        <img src={path} alt="Carousel image" />
      </div>
      <p className="text-2xl text-gray-800">{text}</p>
    </div>
  );
}

export default CarouselContent;
