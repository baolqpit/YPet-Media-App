import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {
    View,
    TextInput,
    Button,
    Alert,
    Text,
    ScrollView,
} from "react-native";
import {authService} from "../services/authService";
import {saveToken} from "../utils/tokenStorage";
import {setCredentials} from "../slice/authSlice";
import {styles} from "../styles/loginScreenStyles.tsx";

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleLogin = async () => {
        try {
            const res = await authService.login({email, password});
            await saveToken(res.data.accessToken);
            console.log(res.data);
            console.log("Access Token", res.data.accessToken);
            dispatch(setCredentials(res.data));
        } catch (err) {
            Alert.alert("Login failed", "Invalid credentials or network error");
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Welcome Back</Text>

            <TextInput
                placeholder="Email"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                placeholder="Password"
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <View style={styles.buttonContainer}>
                <Button title="Log In" onPress={handleLogin} color="#2196F3"/>
            </View>
        </ScrollView>
    );
}
