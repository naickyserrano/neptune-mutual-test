// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primarybackground: string
      secondarybackground: string
      title: string
      text: string
      border: string
      connect: string
      disconnect: string
    }
  }
}
