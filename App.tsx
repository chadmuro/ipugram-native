import { StatusBar } from "expo-status-bar";
import React from "react";
import styled, { ThemeProvider } from "styled-components/native";
import Header from "./screens/HomeScreen";
import { theme } from "./styles/theme";

const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <StatusBar style="dark" />
    </ThemeProvider>
  );
}
