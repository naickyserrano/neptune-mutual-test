// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string,
      title: string,
      text: string,
      border: string
    }
  }
}