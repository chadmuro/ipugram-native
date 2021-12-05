import React from "react";
import faker from "faker";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import Header from "../components/Home/Header";
import Stories from "../components/Home/Stories";
import Post from "../components/Home/Post";
import BottomTabs from "../components/Home/BottomTabs";
import { PostType } from "../constants/types/PostType";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "./Navigation";

const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.background.dark};
  flex: 1;
`;

const POSTS: PostType[] = [
  {
    id: "1",
    imageUrl: faker.random.image(),
    user: faker.internet.userName(),
    likes: faker.datatype.number(1000),
    caption: faker.lorem.sentence(),
    profile_picture: faker.random.image(),
    comments: [
      {
        id: "1",
        user: faker.internet.userName(),
        comment: faker.lorem.sentence(),
      },
    ],
  },
  {
    id: "2",
    imageUrl: faker.random.image(),
    user: faker.internet.userName(),
    likes: faker.datatype.number(),
    caption: faker.lorem.sentence(),
    profile_picture: faker.random.image(),
    comments: [
      {
        id: "1",
        user: faker.internet.userName(),
        comment: faker.lorem.sentence(),
      },
      {
        id: "2",
        user: faker.internet.userName(),
        comment: faker.lorem.sentence(),
      },
    ],
  },
  {
    id: "3",
    imageUrl: faker.random.image(),
    user: faker.internet.userName(),
    likes: faker.datatype.number(1000),
    caption: faker.lorem.sentence(),
    profile_picture: faker.random.image(),
    comments: [],
  },
];

export const HomeScreen = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<StackParamList, "HomeScreen">;
}) => {
  return (
    <Container>
      <Header navigation={navigation} />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <BottomTabs />
    </Container>
  );
};

export default HomeScreen;
