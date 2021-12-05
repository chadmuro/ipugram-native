import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import styled from "styled-components/native";
import AddNewPost from "../components/NewPost/AddNewPost";
import { StackParamList } from "./Navigation";

const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.background.dark};
  flex: 1;
`;

const NewPostScreen = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<
    StackParamList,
    "NewPostScreen"
  >;
}) => {
  return (
    <Container>
      <AddNewPost navigation={navigation} />
    </Container>
  );
};

export default NewPostScreen;
