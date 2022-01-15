import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Container, Main, Footer } from '../styles/containers/home'

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Neptune Mutual - Crypto Converter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>

      </Main>

      <Footer>
        <p>Neptune Mutual &#169; 2022</p>
      </Footer>
    </Container>
  )
}

export default Home
