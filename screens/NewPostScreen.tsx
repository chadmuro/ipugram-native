import React from "react";
import styled from "styled-components/native";
import AddNewPost from "../components/NewPost/AddNewPost";

const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.background.dark};
  flex: 1;
`;

const NewPostScreen = () => {
  return (
    <Container>
      <AddNewPost />
    </Container>
  );
};

export default NewPostScreen;
