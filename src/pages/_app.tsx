import { AppProps } from 'next/app'
import './styles/globals.css'
import Head from 'next/head'
import GlobalStyle from './styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate</title>
        <meta
          name="description"
          content="Boileerplate React, next, typescript, styled-components, jest, testing-library"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
