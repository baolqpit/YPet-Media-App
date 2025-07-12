import axiosInstance from "../../../api/axiosInstance.tsx";

export const userService = {
    getUser: async () => {
        const response = await axiosInstance.get(`/user/info`);
        return response.data;
    }
}