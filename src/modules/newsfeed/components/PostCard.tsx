import { View, Text, Image, FlatList } from "react-native";
import { NewsfeedResponseDTO } from "../types/newsfeedType";
import {postCardStyles} from "../styles/postCardStyles.tsx";
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import Icon from "react-native-vector-icons/MaterialIcons"

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
                        <Icon
                            name="person"
                            size={24}
                            color="#000"
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

            {/* Action Buttons */}
            <View style={postCardStyles.buttonsContainer}>
                <View style={postCardStyles.iconNumbers}>
                    <EvilIcon
                        name="heart"
                        size={30}
                        color="#000"
                    />
                    <Text style={postCardStyles.countText}>{post.favouriteCount}</Text>
                </View>
                <View style={postCardStyles.iconNumbers}>
                    <EvilIcon
                        name="comment"
                        size={30}
                        color="#000"
                    />
                    <Text style={postCardStyles.countText}>{post.commentCount}</Text>
                </View>
                <EvilIcon
                    name="share-google"
                    size={30}
                />
            </View>
        </View>
    );
}
