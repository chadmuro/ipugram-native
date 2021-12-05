import React from "react";
import styled from "styled-components/native";

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

const LoginScreen = () => {
  return (
    <Container>
      <LogoWrap>
        <Logo source={require("../assets/IpugramLogo.png")} />
      </LogoWrap>
    </Container>
  );
};

export default LoginScreen;
