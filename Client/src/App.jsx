import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import AboutView from "./page/AboutView";
import HomeView from "./pages/HomeView";
import ProductView from "./pages/ProductView";
import MyCartView from "./pages/MyCartView";
import AdminDashboard from "./pages/AdminDashboardView";
import NotFoundView from "./pages/NotFoundView";
import RegisterView from "./pages/RegisterView";
import LoginView from "./pages/LoginView";
// import { LoginPage } from "./page/LoginPage";
// import { RegisterPage } from "./page/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />,
  },
  {
    path: "/products",
    element: <ProductView />,
  },
  {
    path: "/my-cart",
    element: <MyCartView />,
  },
  {
    path: "/admin-dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/register",
    element: <RegisterView />,
  },
  {
    path: "/login",
    element: <LoginView />,
  },
  {
    path: "/*",
    element: <NotFoundView />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
