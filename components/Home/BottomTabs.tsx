import React, { useState } from "react";
import faker from "faker";
import styled from "styled-components/native";
import { Divider, IconProps } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { bottomTabIcons } from "../../constants/bottomTabIcons";

const BottomTabsWrapper = styled.View`
  position: absolute;
  width: 100%;
  bottom: 3%;
  z-index: 999;
  background-color: ${({ theme }) => theme.background.dark};
`;

const BottomTabsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  height: 50px;
  padding-top: 10px;
`;

const BottomIconWrap = styled.TouchableOpacity``;

type ProfileImageProps = {
  active: boolean;
};

const ProfileImage = styled.Image<ProfileImageProps>`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  border-color: ${({ theme }) => theme.colors.common.white};
  border-width: ${({ active }) => (active ? "2px" : "0px")};
`;

const BottomTabs = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <BottomTabsWrapper>
      <Divider width={1} orientation="vertical" />
      <BottomTabsContainer>
        {bottomTabIcons.map((icon) => (
          <BottomIconWrap
            key={icon.name}
            onPress={() => setActiveTab(icon.name)}
          >
            <Ionicons
              name={
                activeTab === icon.name
                  ? icon.activeIcon
                  : icon.inactiveIcon
              }
              size={30}
              color="white"
            />
          </BottomIconWrap>
        ))}
        <BottomIconWrap onPress={() => setActiveTab("profile")}>
          <ProfileImage
            source={{ uri: faker.random.image() }}
            active={activeTab === "profile"}
          />
        </BottomIconWrap>
      </BottomTabsContainer>
    </BottomTabsWrapper>
  );
};

export default BottomTabs;
