import axiosInstance from "../../../api/axiosInstance.tsx";
import {LoginDto, RegisterDto} from "../types/authTypes.tsx";


export const authService = {
    login: async (payload: LoginDto) => {
        const res = await axiosInstance.post('/auth/login', payload);
        return res.data;
    },

    register: async (payload: RegisterDto) => {
        const res = await axiosInstance.post('/auth/register', payload);
        return res.data;
    }
}