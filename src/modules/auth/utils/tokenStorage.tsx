import AsyncStorage from "@react-native-async-storage/async-storage";

const TOKEN_KEY = "token";

export const saveToken = async (token: string) => {
    await AsyncStorage.setItem(TOKEN_KEY, token);
}

export const getToken = async () => {
    return await AsyncStorage.getItem(TOKEN_KEY);
}

export const clearToken = async () => {
    return await AsyncStorage.removeItem(TOKEN_KEY);
}