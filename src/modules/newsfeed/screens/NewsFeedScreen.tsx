import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {newsfeedService} from "../services/newsfeedService.tsx";
import {NewsfeedResponseDTO} from "../types/newsfeedType.tsx";
import {useEffect, useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {PostCard} from "../components/PostCard.tsx";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../navigation/AppNavigator.tsx";
import {newsfeedScreenStyles} from "../styles/newsfeedScreenStyles.tsx";
import {User} from "../../auth/types/authTypes.tsx";
import {userService} from "../../auth/services/userService.tsx";
import {postCardStyles} from "../styles/postCardStyles.tsx";
import Icon from 'react-native-vector-icons/MaterialIcons';

export function NewsFeedScreen() {
    const [posts, setPosts] = useState<NewsfeedResponseDTO[]>([]);
    const [user, setUser] = useState<User | null>(null);
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

        const fetchUser = async () => {
            try {
                const response = await userService.getUser();
                setUser(response.data);
            } catch (err) {
                console.error("Failed to load User", err);
            }
        };

        fetchUser();
        fetchPosts();
    }, []);

    return (
        <View style={newsfeedScreenStyles.container}>
            <TouchableOpacity style={newsfeedScreenStyles.postContainer} onPress={() => navigation.navigate("CreatePost")}>
                {user?.avatar ? (
                    <Image
                        source={{
                            uri: user.avatar,
                        }}
                        style={postCardStyles.avatar}
                    />
                ) : (
                    <View style={postCardStyles.avatarPlaceholder}>
                        <Icon
                            name="person"
                            size={24}
                            color="#000"
                        />
                    </View>
                )}

                <View style={newsfeedScreenStyles.userInfo} >
                    <Text style={newsfeedScreenStyles.userName}>
                        {user != null ? user.firstName + " " + user.lastName : ""}
                    </Text>
                    <Text style={newsfeedScreenStyles.userMind}>Chia sẻ cảm nghĩ ...</Text>
                </View>
            </TouchableOpacity>

            <FlatList
                data={posts}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => <PostCard post={item} />}
            />
        </View>
    );
}