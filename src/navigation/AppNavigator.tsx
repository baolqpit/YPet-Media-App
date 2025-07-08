import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import LoginScreen from "../modules/auth/screens/LoginScreen.tsx";
import MainTabs from "./MainTabs.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store.tsx";
import RegisterScreen from "../modules/auth/screens/RegisterScreen.tsx";

const Stack = createNativeStackNavigator();


export default function AppNavigator() {
    const token = useSelector((state: RootState) => state.auth.token);
    console.log('AppNavigator token:', token);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {token ? (
                    <Stack.Screen name="MainTabs" component={MainTabs} />
                ) : (
                    <>
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="Register" component={RegisterScreen} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

