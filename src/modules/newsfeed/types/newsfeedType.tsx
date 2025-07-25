export interface CreateNewsfeedDTO {
    title: string;
    description: string;
    content: string;
    urlToImages: string[];
}

export interface NewsfeedResponseDTO {
    id: string;
    title: string;
    description: string;
    content: string;
    urlToImages: string[];
    authorId: string;
    authorName: string;
    authorAvatar: string;
    createdAt: string;
    publishedAt: string;
    favouriteCount: number;
    commentCount: number;
}