import React from "react";
import faker from "faker";
import styled from "styled-components/native";
import { ScrollView } from "react-native";

const Container = styled.View`
  margin-bottom: 13px;
`;

const StoryWrap = styled.TouchableOpacity`
  align-items: center;
  margin-left: 6px;
`;

const StoryImage = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  border-width: 3px;
  border-color: ${({ theme }) => theme.colors.primary.main};
`;

const StoryText = styled.Text`
  color: ${({ theme }) => theme.colors.common.white};
`;

const shortenName = (username: string) => {
  return username.length > 10
    ? username.slice(0, 9).toLowerCase() + "..."
    : username.toLowerCase();
};

const Stories = () => {
  return (
    <Container>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <StoryWrap>
          <StoryImage source={{ uri: faker.random.image() }} />
          <StoryText>
            {shortenName(faker.internet.userName())}
          </StoryText>
        </StoryWrap>
        <StoryWrap>
          <StoryImage source={{ uri: faker.random.image() }} />
          <StoryText>
            {shortenName(faker.internet.userName())}
          </StoryText>
        </StoryWrap>
        <StoryWrap>
          <StoryImage source={{ uri: faker.random.image() }} />
          <StoryText>
            {shortenName(faker.internet.userName())}
          </StoryText>
        </StoryWrap>
        <StoryWrap>
          <StoryImage source={{ uri: faker.random.image() }} />
          <StoryText>
            {shortenName(faker.internet.userName())}
          </StoryText>
        </StoryWrap>
        <StoryWrap>
          <StoryImage source={{ uri: faker.random.image() }} />
          <StoryText>
            {shortenName(faker.internet.userName())}
          </StoryText>
        </StoryWrap>
        <StoryWrap>
          <StoryImage source={{ uri: faker.random.image() }} />
          <StoryText>
            {shortenName(faker.internet.userName())}
          </StoryText>
        </StoryWrap>
        <StoryWrap>
          <StoryImage source={{ uri: faker.random.image() }} />
          <StoryText>
            {shortenName(faker.internet.userName())}
          </StoryText>
        </StoryWrap>
        <StoryWrap>
          <StoryImage source={{ uri: faker.random.image() }} />
          <StoryText>
            {shortenName(faker.internet.userName())}
          </StoryText>
        </StoryWrap>
      </ScrollView>
    </Container>
  );
};

export default Stories;
