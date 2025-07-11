import { StyleSheet } from "react-native";

export const newsfeedScreenStyles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#f9f9f9", padding: 12 },
    fab: {
        position: "absolute",
        bottom: 24,
        right: 24,
        width: 56,
        height: 56,
        backgroundColor: "#007bff",
        borderRadius: 28,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
    },
    fabText: {
        color: "white",
        fontSize: 28,
        fontWeight: "bold",
    },
});