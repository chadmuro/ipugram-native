import React, { useState } from "react";
import styled from "styled-components/native";
import { Divider } from "react-native-elements";
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
      </BottomTabsContainer>
    </BottomTabsWrapper>
  );
};

export default BottomTabs;
