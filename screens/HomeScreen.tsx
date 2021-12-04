import React from "react";
import faker from "faker";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import Header from "../components/Home/Header";
import Stories from "../components/Home/Stories";
import Post from "../components/Home/Post";

const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.background.dark};
  flex: 1;
`;

const POSTS = [
  {
    imageUrl: faker.random.image(),
    user: faker.internet.userName(),
    likes: faker.random.number(1000),
    caption: faker.lorem.sentence(),
    profile_picture: faker.random.image(),
    comments: [
      {
        user: faker.internet.userName(),
        comment: faker.lorem.sentence(),
      },
    ],
  },
  {
    imageUrl: faker.random.image(),
    user: faker.internet.userName(),
    likes: faker.random.number(),
    caption: faker.lorem.sentence(),
    profile_picture: faker.random.image(),
    comments: [
      {
        user: faker.internet.userName(),
        comment: faker.lorem.sentence(),
      },
      {
        user: faker.internet.userName(),
        comment: faker.lorem.sentence(),
      },
    ],
  },
  {
    imageUrl: faker.random.image(),
    user: faker.internet.userName(),
    likes: faker.random.number(1000),
    caption: faker.lorem.sentence(),
    profile_picture: faker.random.image(),
    comments: [],
  },
];

export default function HomeScreen() {
  return (
    <Container>
      <Header />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
    </Container>
  );
}
