import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../api/axiosInstance";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : null;
    });
    const [token, setToken] = useState(() => localStorage.getItem("token"));

    const login = async (email, password) => {
        try {
            const response = await axiosInstance.post("/auth/login", {
                email,
                password,
            });

            if (response.data.isSuccess) {
                const token = response.data.data.token;
                const userData = {
                    id: response.data.data.user.id,
                    name: response.data.data.user.name,
                    email: response.data.data.user.email,
                    photoProfile: response.data.data.user.photoProfile,
                    role: response.data.data.user.role,
                };

                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(userData));

                setToken(token);
                setUser(userData);

                toast.success("Login successful");
                return true;
            }
        } catch (error) {
            const errorMessage =
                error?.response?.data?.message || "An error occurred";
            toast.error(errorMessage);
            return false;
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setToken(null);
        setUser(null);
        window.location.href = "/login";
    };

    const value = {
        user,
        token,
        login,
        logout,
        isAuthenticated: !!token,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};