import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import NavbarForAdmin from "../components/Navbar/NavbarForAdmin";
import ProductSection from "../components/ProductSection/ProductSection";
import Container3 from "../components/ProductSection/Container3";

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
      <Container3/>
      <Footer />
    </>
  );
}

export default HomeView;
