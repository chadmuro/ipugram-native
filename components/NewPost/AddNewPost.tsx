import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PostUploader from "./PostUploader";

const AddNewPostContainer = styled.View`
  margin-horizontal: 10px;
`;

const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const BackButtonWrap = styled.TouchableOpacity``;

const HeaderText = styled.Text`
  color: ${({ theme }) => theme.colors.common.white};
  font-weight: 700;
  font-size: 20px;
  margin-right: 25px;
`;

const AddNewPost = () => {
  return (
    <AddNewPostContainer>
      <HeaderContainer>
        <BackButtonWrap>
          <Ionicons name="chevron-back" size={30} color="white" />
        </BackButtonWrap>
        <HeaderText>NEW POST</HeaderText>
        <Text />
      </HeaderContainer>
      <PostUploader />
    </AddNewPostContainer>
  );
};

export default AddNewPost;
