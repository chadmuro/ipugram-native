import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity, Text } from "react-native";
import { Divider } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

const Container = styled.View`
  margin-bottom: 30px;
`;

const PostFooterWrap = styled.View`
  margin-horizontal: 15px;
  margin-top: 10px;
`;

interface PostProps {
  post: any;
}

const Post = ({ post }: PostProps) => {
  return (
    <Container>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooterWrap>
        <PostFooter post={post} />
      </PostFooterWrap>
    </Container>
  );
};

const PostHeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 5px;
  align-items: center;
`;

const PostHeaderContainerLeft = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const PostHeaderImage = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  border-width: 1px;
  border-color: #ff8501;
`;

const PostHeaderText = styled.Text`
  color: ${({ theme }) => theme.colors.common.white};
  margin-left: 5px;
  font-weight: 700;
`;

const PostHeader = ({ post }: PostProps) => {
  return (
    <PostHeaderContainer>
      <PostHeaderContainerLeft>
        <PostHeaderImage source={{ uri: post.profile_picture }} />
        <PostHeaderText>{post.user.toLowerCase()}</PostHeaderText>
      </PostHeaderContainerLeft>
      <TouchableOpacity>
        <Ionicons
          name="ellipsis-horizontal"
          size={16}
          color="white"
        />
      </TouchableOpacity>
    </PostHeaderContainer>
  );
};

const PostImageContainer = styled.View`
  width: 100%;
  height: 450px;
`;

const PostImageImage = styled.Image`
  height: 100%;
  resize-mode: cover;
`;

const PostImage = ({ post }: PostProps) => {
  return (
    <PostImageContainer>
      <PostImageImage source={{ uri: post.imageUrl }} />
    </PostImageContainer>
  );
};

const PostFooterIconsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const PostFooterContainerLeft = styled.View`
  flex-direction: row;
  width: 32%;
  justify-content: space-between;
`;

const PostFooterIconWrap = styled.TouchableOpacity`
  width: 33px;
  height: 33px;
`;

const PostFooterLikesContainer = styled.View`
  flex-direction: row;
  margin-top: 4px;
`;

const WhiteText = styled.Text`
  color: ${({ theme }) => theme.colors.common.white};
`;

const BoldText = styled.Text`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.common.white};
`;

const PostFooterCaptionContainer = styled.View`
  margin-top: 5px;
`;

const PostFooterCommentsContainer = styled.View`
  margin-top: 5px;
`;

const CommentsText = styled.Text`
  color: ${({ theme }) => theme.colors.common.gray};
`;

const PostFooter = ({ post }: PostProps) => {
  return (
    <>
      <PostFooterIconsContainer>
        <PostFooterContainerLeft>
          <PostFooterIconWrap>
            <Ionicons name="heart-outline" size={30} color="white" />
          </PostFooterIconWrap>
          <PostFooterIconWrap>
            <Ionicons
              name="chatbubble-outline"
              size={30}
              color="white"
            />
          </PostFooterIconWrap>
          <PostFooterIconWrap>
            <Ionicons
              name="paper-plane-outline"
              size={30}
              color="white"
            />
          </PostFooterIconWrap>
        </PostFooterContainerLeft>
        <PostFooterIconWrap>
          <Ionicons name="bookmark-outline" size={30} color="white" />
        </PostFooterIconWrap>
      </PostFooterIconsContainer>
      <PostFooterLikesContainer>
        <BoldText>{post.likes.toLocaleString("en")} likes</BoldText>
      </PostFooterLikesContainer>
      <PostFooterCaptionContainer>
        <WhiteText>
          <BoldText>{post.user.toLowerCase()}</BoldText>
          <Text> {post.caption}</Text>
        </WhiteText>
      </PostFooterCaptionContainer>
      <PostFooterCommentsContainer>
        {!!post.comments.length && (
          <CommentsText>
            View{post.comments.length > 1 ? " all" : ""}{" "}
            {post.comments.length}{" "}
            {post.comments.length > 1 ? "comments" : "comment"}
          </CommentsText>
        )}
        {post.comments.map((comment: any, index: number) => (
          <PostFooterCommentsContainer key={index}>
            <WhiteText>
              <BoldText>{comment.user.toLowerCase()}</BoldText>
              <Text> {comment.comment}</Text>
            </WhiteText>
          </PostFooterCommentsContainer>
        ))}
      </PostFooterCommentsContainer>
    </>
  );
};

export default Post;
