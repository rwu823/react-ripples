import React from 'react'
import styled, { css } from 'styled-components'
import NextApp, { Container, AppContext } from 'next/app'

import GlobalStyles from '@ts-mono/dev-react/components/GlobalStyles'
import { mdxRenders } from '@ts-mono/dev-react/components/mdx-renders'
import GlobalStateProvider from '@ts-mono/dev-react/components/GlobalStateProvider'

const { MDXProvider } = require('@mdx-js/react')

const Main = styled.div`
  ${(_p: {}) => css`
    max-width: 800px;
    margin: 0 auto;
  `}
`

class App extends NextApp {
  static async getInitialProps({ Component, ctx }: AppContext) {
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
        <MDXProvider components={mdxRenders}>
          <Main>
            <GlobalStateProvider initState={{}}>
              <Component {...pageProps} />
            </GlobalStateProvider>
          </Main>
        </MDXProvider>
      </Container>
    )
  }
}

export default App
