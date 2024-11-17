import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import AboutView from "./page/AboutView";
import HomeView from "./pages/HomeView";
import ProductView from "./pages/ProductView";
import MyCartView from "./pages/MyCartView";
import NotFoundView from "./pages/NotFoundView";
import RegisterView from "./pages/RegisterView";
import LoginView from "./pages/LoginView";
// import { LoginPage } from "./page/LoginPage";
// import { RegisterPage } from "./page/RegisterPage";

//admin view
import AdminDashboard from "./pages/admin/AdminDashboardView";
import AdminEditUserView from "./pages/admin/AdminEditUserView";
import AdminProductDashboard from "./pages/admin/AdminProductView";
import AdminEditProductView from "./pages/admin/AdminEditProductView";

//loader
import { loader as AdminHomeLoader } from "./pages/admin/AdminDashboardView";
import { loader as AdminProductLoader } from "./pages/admin/AdminProductView";

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
    loader: AdminHomeLoader,
  },
  {
    path: "/admin-dashboard/user/:id/edit",
    element: <AdminEditUserView />,
  },
  {
    path: "/admin-dashboard-product",
    element: <AdminProductDashboard />,
    loader: AdminProductLoader,
  },
  {
    path: "/admin-dashboard/product/:id/edit",
    element: <AdminEditProductView />,
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
