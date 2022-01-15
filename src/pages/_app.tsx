require('../styles/variables.less')
import '../styles/normalize.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/global'

const theme = {
  colors: {
    primarybackground: '#080808',
    secondarybackground: '#FFF',
    title: '#f4f4f5',
    text: '#a1a1aa',
    border: '#3f3f46',
  },
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
