import axios from "axios";
import { BASE_URL } from "@env";
import {getToken} from "../modules/auth/utils/tokenStorage.tsx";

console.log("🔗 API base URL:", BASE_URL); // ➕ Debug baseURL

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

instance.interceptors.request.use(async (config) => {
    const token = await getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default instance;
