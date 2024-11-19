import Navbar from "../components/Navbar/Navbar";

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-1 items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Aduh, halamannya ga ada nih 😢
        </h1>
      </div>
    </div>
  );
};

export default NotFound;
