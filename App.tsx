import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import AppNavigator from './src/navigation/AppNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <AppNavigator />
            </SafeAreaProvider>
        </Provider>
    );
}

/*
* 1. [Provider]: bọc toàn bộ app để Redux hoạt động
* 2. [store]: chứa các reducers đã tạo
* 3. [AppNavigator]: điều hướng các màn hình
* 4. [SafeAreaProvider]: Tránh tràn viền
* */