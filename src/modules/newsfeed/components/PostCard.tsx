import { View, Text, Image, FlatList } from "react-native";
import { NewsfeedResponseDTO } from "../types/newsfeedType";
import {postCardStyles} from "../styles/postCardStyles.tsx";

type Props = {
    post: NewsfeedResponseDTO;
};

export function PostCard({post}: Props) {
    const formattedDate = new Date(post.publishedAt).toLocaleString("vi-VN", {
        hour: "2-digit",
        minute: "2-digit",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });

    return (
        <View style={postCardStyles.card}>
            {/* Header - Avatar + Name + Date */}
            <View style={postCardStyles.header}>
                {post.authorAvatar ? (
                    <Image source={{uri: post.authorAvatar}} style={postCardStyles.avatar}/>
                ) : (
                    <View style={postCardStyles.avatarPlaceholder}>
                        <Image
                            source={{ uri: 'https://th.bing.com/th/id/R.8f5d322e92422a4932357c30a535d20c?rik=IVHHDpGnHyTiRQ&pid=ImgRaw&r=0' }}
                            style={postCardStyles.avatar}
                        />

                    </View>
                )}

                <View style={postCardStyles.authorInfo}>
                    <Text style={postCardStyles.authorName}>{post.authorName}</Text>
                    <Text style={postCardStyles.createdDate}>{formattedDate}</Text>
                </View>
            </View>

            {/* Title */}
            <Text style={postCardStyles.title}>{post.title}</Text>

            {/* Description */}
            <Text style={postCardStyles.description}>{post.description}</Text>

            {/* Content */}
            <Text style={postCardStyles.content}>{post.content}</Text>

            {/* Images */}
            {post.urlToImages.length > 0 && (
                <FlatList
                    horizontal
                    data={post.urlToImages}
                    keyExtractor={(url, index) => index.toString()}
                    renderItem={({item}) => (
                        <Image
                            source={{ uri: item }}
                            style={postCardStyles.postImage}
                            resizeMode="cover"
                        />
                    )}
                    style={postCardStyles.imageList}
                    showsHorizontalScrollIndicator={false}
                />
            )}
        </View>
    );
}
