require('../styles/variables.less')
import '../styles/normalize.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/global'
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import { provider } from 'web3-core'

const theme = {
  colors: {
    primarybackground: '#080808',
    secondarybackground: '#FFF',
    title: '#f4f4f5',
    text: '#a1a1aa',
    border: '#3f3f46',
    connect: 'green',
    disconnect: 'red',
  },
}

function getLibrary(provider: provider) {
  return new Web3(provider)
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </Web3ReactProvider>
  )
}

export default MyApp
