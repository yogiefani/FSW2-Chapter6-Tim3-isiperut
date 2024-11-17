import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import ProductSection from "../components/ProductSection/ProductSection";

function HomeView() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductSection/>
      <Footer />
    </>
  );
}

export default HomeView;
