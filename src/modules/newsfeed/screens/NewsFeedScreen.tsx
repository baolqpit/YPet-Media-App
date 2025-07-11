import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {newsfeedService} from "../services/newsfeedService.tsx";
import {NewsfeedResponseDTO} from "../types/newsfeedType.tsx";
import {useEffect, useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {PostCard} from "../components/PostCard.tsx";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../navigation/AppNavigator.tsx";
import {newsfeedScreenStyles} from "../styles/newsfeedScreenStyles.tsx";

export function NewsFeedScreen() {
    const [posts, setPosts] = useState<NewsfeedResponseDTO[]>([]);
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    useEffect(() => {
        let fetchPosts: () => Promise<void>;
        fetchPosts = async () => {
            try {
                const data = await newsfeedService.findAll();
                setPosts(data.data);
            } catch (err) {
                console.error("Failed to load posts", err);
            }
        };

        fetchPosts();
    }, []);

    return (
        <View style={newsfeedScreenStyles.container}>
            <FlatList
                data={posts}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => <PostCard post={item} />}
            />

            <TouchableOpacity
                style={newsfeedScreenStyles.fab}
                onPress={() => navigation.navigate("CreatePost")}
            >
                <Text style={newsfeedScreenStyles.fabText}>+</Text>
            </TouchableOpacity>
        </View>
    );
}