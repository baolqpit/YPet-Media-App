import {useState} from "react";
import {useDispatch} from "react-redux";
import {Alert, Button, TextInput, View} from "react-native";
import {authService} from "../services/authService.tsx";
import {saveToken} from "../utils/tokenStorage.tsx";
import {setCredentials} from "../slice/authSlice.tsx";

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleLogin = async () => {
       try {
           const res = await authService.login({ email, password });
           await saveToken(res.token);
           dispatch(setCredentials(res))
       } catch (err) {
           Alert.alert("Login failed");
       }
    }

    return(
        <View>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                autoCapitalize="none"
                keyboardType="email-address"
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
            />
            <Button title="Log In" onPress={handleLogin} />
        </View>
    );
}