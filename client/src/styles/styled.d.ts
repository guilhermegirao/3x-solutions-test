import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      primary: string;
      secondary: string;
      gray: string;
      lightGray: string;
      red: string;
      white: string;
    };
    fontFamily: {
      sourceSansPro: string;
    };
    screens: {
      sm?: string;
      md?: string;
      lg?: string;
      xl?: string;
    };
  }
}
