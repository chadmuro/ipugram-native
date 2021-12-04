// import original module declarations
import "styled-components/native";

// and extend them!
declare module "styled-components/native" {
  export interface DefaultTheme {
    colors: {
      primary: {
        main: string;
        light: string;
        dark: string;
      };
      secondary: {
        main: string;
        light: string;
        dark: string;
      };
      common: {
        white: string;
        black: string;
        gray: string;
      };
    };
    background: {
      dark: string;
      light: string;
    };
  }
}
