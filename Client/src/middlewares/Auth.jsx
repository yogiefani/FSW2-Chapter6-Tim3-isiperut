import axiosInstance from "../api/axiosInstance";

export const checkAccess = async () => {
    try {
        const response = await axiosInstance.get("/auth/current");
        console.log(response)
        return response.data.data.role === "admin"; // Return true if the role is admin
    } catch (error) {
        if (error.response || error.response.status === 401) {
            console.log("Unauthorized, redirecting to login...");
            return false; // Unauthorized access
        }
        throw error; // Throw other errors to handle them separately if needed
    }
};