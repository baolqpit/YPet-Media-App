import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    ScrollView,
    Alert,
} from "react-native";
import { newsfeedService } from "../services/newsfeedService";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../../navigation/AppNavigator";
import {CreateNewsfeedDTO} from "../types/newsfeedType.tsx";

const CreatePostScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
    const [imageUrlInput, setImageUrlInput] = useState("");
    const [urlToImages, setUrlToImages] = useState<string[]>([]);

    const handleAddImage = () => {
        if (imageUrlInput.trim()) {
            setUrlToImages([...urlToImages, imageUrlInput.trim()]);
            setImageUrlInput("");
        }
    };

    const handleSubmit = async () => {
        if (!title || !content) {
            Alert.alert("Lỗi", "Vui lòng nhập tiêu đề và nội dung");
            return;
        }

        const payload: CreateNewsfeedDTO = {
            title,
            description,
            content,
            urlToImages,
        };

        try {
            await newsfeedService.create(payload);
            Alert.alert("Thành công", "Đăng bài thành công");
            navigation.goBack();
        } catch (error) {
            console.error("CreatePost error:", error);
            Alert.alert("Thất bại", "Không thể đăng bài viết");
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.label}>Tiêu đề</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={setTitle}
                placeholder="Nhập tiêu đề bài viết"
            />

            <Text style={styles.label}>Mô tả</Text>
            <TextInput
                style={styles.input}
                value={description}
                onChangeText={setDescription}
                placeholder="Nhập mô tả ngắn"
            />

            <Text style={styles.label}>Nội dung</Text>
            <TextInput
                style={[styles.input, { height: 100 }]}
                value={content}
                onChangeText={setContent}
                placeholder="Nhập nội dung bài viết"
                multiline
            />

            <Text style={styles.label}>Ảnh (URL)</Text>
            <View style={{ flexDirection: "row", gap: 8 }}>
                <TextInput
                    style={[styles.input, { flex: 1 }]}
                    value={imageUrlInput}
                    onChangeText={setImageUrlInput}
                    placeholder="https://example.com/image.jpg"
                />
                <Button title="Thêm" onPress={handleAddImage} />
            </View>

            {urlToImages.length > 0 && (
                <View style={styles.imageList}>
                    {urlToImages.map((url, idx) => (
                        <Text key={idx} style={styles.imageUrl}>{url}</Text>
                    ))}
                </View>
            )}

            <View style={{ marginTop: 20 }}>
                <Button title="Đăng bài" onPress={handleSubmit} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    label: {
        fontWeight: "bold",
        marginTop: 12,
        marginBottom: 4,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        backgroundColor: "#fff",
    },
    imageList: {
        marginTop: 8,
    },
    imageUrl: {
        fontSize: 12,
        color: "gray",
        marginBottom: 4,
    },
});

export default CreatePostScreen;
