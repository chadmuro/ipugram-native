import React from "react";
import styled from "styled-components/native";
import Header from "../components/Home/Header";

const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.background.dark};
  flex: 1;
`;

export default function HomeScreen() {
  return (
    <Container>
      <Header />
    </Container>
  );
}
