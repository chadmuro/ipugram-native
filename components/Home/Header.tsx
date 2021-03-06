import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../Navigation";

const Container = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-horizontal: 20px;
  margin-bottom: 10px;
`;

const IconsContainer = styled.View`
  flex-direction: row;
`;

const IconWrap = styled.TouchableOpacity`
  margin-left: 10px;
`;

const UnreadBadge = styled.View`
  background-color: #ff3250;
  position: absolute;
  width: 25px;
  height: 18px;
  left: 16px;
  bottom: 16px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const UnreadBadgeText = styled.Text`
  color: ${({ theme }) => theme.colors.common.white};
  font-weight: 600;
`;

const TitleWrap = styled.TouchableOpacity``;

const Title = styled.Image`
  height: 30px;
  width: 100px;
  resize-mode: contain;
`;

const Header = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<StackParamList, "HomeScreen">;
}) => {
  return (
    <Container>
      <TitleWrap>
        <Title source={require("../../assets/IpugramText.png")} />
      </TitleWrap>
      <IconsContainer>
        <IconWrap onPress={() => navigation.push("NewPostScreen")}>
          <Ionicons
            name="add-circle-outline"
            size={30}
            color="white"
          />
        </IconWrap>
        <IconWrap>
          <Ionicons name="heart-outline" size={30} color="white" />
        </IconWrap>
        <IconWrap>
          <UnreadBadge>
            <UnreadBadgeText>10</UnreadBadgeText>
          </UnreadBadge>
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={30}
            color="white"
          />
        </IconWrap>
      </IconsContainer>
    </Container>
  );
};

export default Header;
