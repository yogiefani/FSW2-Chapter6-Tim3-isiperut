import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import Navbar from "../components/Navbar/Navbar";
import NavbarForAdmin from "../components/Navbar/NavbarForAdmin";
import Footer from "../components/Footer/Footer";

const ProfileView = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getProfileData = async () => {
      try {
        const userData = localStorage.getItem("user");
        if (!userData) {
          navigate("/login");
          return;
        }

        const parsedUser = JSON.parse(userData);
        const response = await axiosInstance.get(`/users/${parsedUser.id}`);
        setUser(response.data.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
        if (error.response?.status === 401) {
          navigate("/login");
        }
      } finally {
        setIsLoading(false);
      }
    };

    getProfileData();
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <span className="loading loading-spinner loading-lg text-[#C03822]"></span>
      </div>
    );
  }

  const renderNavbar = () => {
    return user?.role === "admin" ? <NavbarForAdmin /> : <Navbar />;
  };

  return (
    <>
      {renderNavbar()}
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-[#C03822] to-[#A02812] text-white rounded-xl p-8 mb-8">
            <h1 className="text-4xl font-bold mb-2">My Profile</h1>
            <p className="text-white/80">View your account information</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="relative group">
                <div className="w-48 h-48 rounded-full overflow-hidden ring-4 ring-[#C03822]/20">
                  <img
                    src={user?.photoProfile || "/images/default-avatar.png"}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-bold text-gray-800">
                    {user?.name}
                  </h2>
                </div>

                <div className="divider my-2"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
                    <div className="card-body p-4">
                      <div className="flex items-center gap-3 text-[#C03822]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="font-medium">Email</span>
                      </div>
                      <p className="text-lg mt-1">{user?.email}</p>
                    </div>
                  </div>

                  <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
                    <div className="card-body p-4">
                      <div className="flex items-center gap-3 text-[#C03822]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <span className="font-medium">Phone</span>
                      </div>
                      <p className="text-lg mt-1">
                        {user?.phone || "Not provided"}
                      </p>
                    </div>
                  </div>

                  <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
                    <div className="card-body p-4">
                      <div className="flex items-center gap-3 text-[#C03822]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="font-medium">Address</span>
                      </div>
                      <p className="text-lg mt-1">
                        {user?.address || "Not provided"}
                      </p>
                    </div>
                  </div>

                  <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
                    <div className="card-body p-4">
                      <div className="flex items-center gap-3 text-[#C03822]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        <span className="font-medium">Role</span>
                      </div>
                      <p className="text-lg mt-1 capitalize">{user?.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfileView;
