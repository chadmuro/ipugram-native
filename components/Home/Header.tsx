import React from "react";
import styled from "styled-components/native";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Container = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-horizontal: 20px;
`;

const IconsContainer = styled.View`
  flex-direction: row;
`;

const IconWrap = styled.Text`
  margin-left: 10px;
`;

const Title = styled.Text`
  color: ${({ theme }) => theme.colors.common.white};
  font-size: 16px;
`;

const Header = () => {
  return (
    <Container>
      <TouchableOpacity>
        <Title>Ipugram</Title>
      </TouchableOpacity>
      <IconsContainer>
        <IconWrap>
          <Ionicons
            name="add-circle-outline"
            size={30}
            color="white"
          />
        </IconWrap>
        <IconWrap>
          {" "}
          <Ionicons name="heart-outline" size={30} color="white" />
        </IconWrap>
        <IconWrap>
          <Ionicons
            name="chatbox-ellipses-outline"
            size={30}
            color="white"
          />
        </IconWrap>
      </IconsContainer>
    </Container>
  );
};

export default Header;
