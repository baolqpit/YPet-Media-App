import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
    View,
    TextInput,
    Button,
    Alert,
    ScrollView,
    Text,
} from "react-native";
import { authService } from "../services/authService";
import { saveToken } from "../utils/tokenStorage";
import { setCredentials } from "../slice/authSlice";
import { styles } from "../styles/registerScreenStyles.tsx";

export default function RegisterScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const dispatch = useDispatch();

    const handleLogin = async () => {
        try {
            const res = await authService.login({ email, password });
            await saveToken(res.token);
            dispatch(setCredentials(res));
        } catch (err) {
            Alert.alert("Login failed", "Invalid credentials or network error");
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Welcome to Pet Social</Text>

            <TextInput
                placeholder="First Name"
                style={styles.input}
                value={firstName}
                onChangeText={setFirstName}
            />

            <TextInput
                placeholder="Last Name"
                style={styles.input}
                value={lastName}
                onChangeText={setLastName}
            />

            <TextInput
                placeholder="Phone Number"
                style={styles.input}
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
            />

            <TextInput
                placeholder="Address"
                style={styles.input}
                value={address}
                onChangeText={setAddress}
            />

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
                <Button title="Log In" onPress={handleLogin} color="#2196F3" />
            </View>
        </ScrollView>
    );
}
