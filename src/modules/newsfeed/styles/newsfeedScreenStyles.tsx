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
    postContainer: {
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        elevation: 3,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 6,
    },
    userInfo: {
        marginLeft: 16
    },
    userName: {
        fontSize: 18,
        fontWeight: "bold",
    },
    userMind: {
        fontSize: 16,
        fontWeight: "light",
        color: "grey"
    }
});