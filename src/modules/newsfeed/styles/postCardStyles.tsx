import {StyleSheet} from "react-native";

export const postCardStyles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        elevation: 3,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 6,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#f5f5f5",
    },
    avatarPlaceholder: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#eee",
        justifyContent: "center",
        alignItems: "center",
    },
    authorInfo: {
        marginLeft: 10,
    },
    authorName: {
        fontWeight: "bold",
        fontSize: 14,
    },
    createdDate: {
        fontSize: 12,
        color: "gray",
    },
    title: {
        fontWeight: "600",
        fontSize: 16,
        marginBottom: 4,
    },
    description: {
        fontSize: 14,
        color: "#555",
        marginBottom: 8,
    },
    content: {
        fontSize: 14,
        color: "#333",
        marginBottom: 8,
    },
    imageList: {
        marginTop: 8,
        marginBottom: 8,
    },
    postImage: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginRight: 8,
    },
    buttonsContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconNumbers: {
        flexDirection: "row",
        marginRight: 16,
    },
    countText: {
        fontSize: 16,
        lineHeight: 30,
        marginLeft: 4,
        color: "#000",
    },
});
