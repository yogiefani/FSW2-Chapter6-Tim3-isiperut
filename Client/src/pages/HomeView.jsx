import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import NavbarForAdmin from "../components/Navbar/NavbarForAdmin";
import { checkAccess } from "../middlewares/auth";

function HomeView() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const verifyAdmin = async () => {
      try {
        const isAdminUser = await checkAccess();
        setIsAdmin(isAdminUser);
      } catch (error) {
        console.error("Error checking admin access:", error);
        setIsAdmin(false);
      }
    };

    verifyAdmin();
  }, []);

  return (
    <>
      {isAdmin ? <NavbarForAdmin /> : <Navbar />}
      <h1>Home</h1>
      <Footer />
    </>
  );
}

export default HomeView;
