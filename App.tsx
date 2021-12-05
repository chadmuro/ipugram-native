import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import SignedInStack from "./screens/Navigation";
import { theme } from "./styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SignedInStack />
      <StatusBar style="dark" />
    </ThemeProvider>
  );
}
