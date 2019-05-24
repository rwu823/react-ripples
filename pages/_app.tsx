import React from 'react'
import App, { Container, NextAppContext } from 'next/app'
import GlobalStyles from '../components/GlobalStyles'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: NextAppContext) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <GlobalStyles />
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp
