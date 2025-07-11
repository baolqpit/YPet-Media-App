import axiosInstance from "../../../api/axiosInstance.tsx";
import {CreateNewsfeedDTO} from "../types/newsfeedType.tsx";

export const newsfeedService = {
    create: async (payload: CreateNewsfeedDTO) => {
        const res = await axiosInstance.post('/newsfeeds', payload);
        return res.data;
    },

    findAll: async () => {
        const res = await axiosInstance.get('/newsfeeds');
        console.log("Response: ", res.data);
        return res.data;
    }
}
