import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store.tsx";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../modules/auth/screens/LoginScreen.tsx";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    const token = useSelector((state: RootState) => state.auth.token);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {token ? (
                    <Stack.Screen name="Home" component={LoginScreen} />
                ) : (
                    <Stack.Screen name="Login" component={LoginScreen} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
