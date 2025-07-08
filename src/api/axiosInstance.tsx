import axios from "axios";
import { BASE_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

console.log("🔗 API base URL:", BASE_URL); // ➕ Debug baseURL

const instance = axios.create({
    baseURL: BASE_URL, // fallback an toàn
    headers: {
        "Content-Type": "application/json",
    },
});

instance.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default instance;
