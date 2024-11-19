import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
// import AboutView from "./page/AboutView";
import HomeView from "./pages/HomeView";
import ProductView from "./pages/user/UserProductView";
import ProductDetailView from "./pages/user/UserProductDetailView";
import MyCartView from "./pages/MyCartView";
import NotFoundView from "./pages/NotFoundView";
import RegisterView from "./pages/RegisterView";
import LoginView from "./pages/LoginView";
import ProfileView from "./pages/ProfileView";
// import { LoginPage } from "./page/LoginPage";
// import { RegisterPage } from "./page/RegisterPage";
import { PrivateRoute } from "./routes/PrivateRoute";

//admin view
import AdminDashboard from "./pages/admin/AdminDashboardView";
import AdminEditUserView from "./pages/admin/AdminEditUserView";
import AdminProductDashboard from "./pages/admin/AdminProductView";
import AdminEditProductView from "./pages/admin/AdminEditProductView";

//loader
import { loader as AdminHomeLoader } from "./pages/admin/AdminDashboardView";
import { loader as AdminProductLoader } from "./pages/admin/AdminProductView";
import { loader as HomeProductLoader } from "./pages/HomeView";
import { loader as ProductProductLoader } from "./pages/ProductView";
import { loader as MyCartLoader } from "./pages/MyCartView";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeView />,
        loader: HomeProductLoader,
    },
    {
        path: "/products",
        element: <ProductView />,
        loader: ProductProductLoader,
    },
    {
        path: "/product/:id",
        element: <ProductDetailView />,
    },
    {
        path: "/my-cart",
        element: (
            <PrivateRoute>
                <MyCartView />
            </PrivateRoute>
        ),
        loader: MyCartLoader,
    },
    {
        path: "/profile",
        element: <ProfileView />,
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
    return (
        <>
            <AuthProvider>
                <RouterProvider router={router} />
            </AuthProvider>
        </>
    );
}

export default App;
