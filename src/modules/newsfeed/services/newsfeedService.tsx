import axiosInstance from '../../../api/axiosInstance.tsx';
import { CreateNewsfeedDTO } from '../types/newsfeedType.tsx';

export const newsfeedService = {
  create: async (payload: CreateNewsfeedDTO) => {
    const res = await axiosInstance.post('/newsfeeds', payload);
    return res.data;
  },

  findAll: async () => {
    const res = await axiosInstance.get('/newsfeeds');
    console.log('Response: ', res.data);
    return res.data;
  },

  like: async (postId: string) => {
    const res = await axiosInstance.post(`/newsfeeds/${postId}/like`);
    console.log('Response: ', res.data);
    return res.data;
  },

  unlike: async (postId: string) => {
    const res = await axiosInstance.delete(`/newsfeeds/${postId}/unlike`);
    console.log('Response: ', res.data);
    return res.data;
  },

  isLike: async (postId: string) => {
    const res = await axiosInstance.get(`/newsfeeds/${postId}/isLiked`);
    console.log('Response: ', res.data);
    return res.data;
  }
};
