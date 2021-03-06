import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import styled from "styled-components/native";
import LoginForm from "../components/Login/LoginForm";
import { StackParamList } from "../Navigation";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background.dark};
  padding-top: 50px;
  padding-horizontal: 12px;
`;

const LogoWrap = styled.View`
  align-items: center;
  margin-top: 60px;
`;

const Logo = styled.Image`
  height: 100px;
  width: 100px;
`;

const LoginScreen = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<
    StackParamList,
    "LoginScreen"
  >;
}) => {
  return (
    <Container>
      <LogoWrap>
        <Logo source={require("../assets/IpugramLogo.png")} />
      </LogoWrap>
      <LoginForm navigation={navigation} />
    </Container>
  );
};

export default LoginScreen;
