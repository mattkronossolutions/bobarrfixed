// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    navbarHeight: number;
    tmdbCardHeight: number;
    breakpoints: {
      mobile: number;
      tablet: number;
    };
    media: {
      mobile: string;
      tablet: string;
      desktop: string;
      touchDevice: string;
    };
    colors: {
      navbarBackground: string;
      coral: string;
      blue: string;
    };
  }
}
