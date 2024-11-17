import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import NavbarForAdmin from "../components/Navbar/NavbarForAdmin";
import ProductSection from "../components/Home/Highligth";
import FeaturesSection from "../components/Home/FeaturesSection";
import OnlineOrder from "../components/Home/OnlineOrder";
import ProductAdvantages from "../components/Home/ProductAdvantages";
import Menu from "../components/Home/Menu";
import OrderNow from "../components/Home/OrderNow";
import Testimoni from "../components/Home/Testimoni";
import NewMenu from "../components/Home/NewMenu";
import BlogSection from "../components/Home/BlogSection";

function HomeView() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkUserRole = () => {
      const userData = localStorage.getItem("user");
      if (userData) {
        try {
          const parsedUser = JSON.parse(userData);
          setIsAdmin(parsedUser.role === "admin");
        } catch (error) {
          console.error("Error parsing user data:", error);
          setIsAdmin(false);
        }
      }
    };

    checkUserRole();
  }, []);

  return (
    <>
      {isAdmin ? <NavbarForAdmin /> : <Navbar />}
      <Hero/>
      <ProductSection/>
      <ProductAdvantages/>
      <FeaturesSection/>
      <OnlineOrder/>
      <Menu/>
      <OrderNow/>
      <NewMenu/>
      <Testimoni/>
      <BlogSection/>
      <Footer />
    </>
  );
}

export default HomeView;
