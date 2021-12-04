export type PostType = {
  id: string;
  imageUrl: string;
  user: string;
  likes: number;
  caption: string;
  profile_picture: string;
  comments: CommentType[];
};

export type CommentType = {
  id: string;
  user: string;
  comment: string;
};
