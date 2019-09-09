import React from 'react'
import styled, { css } from 'styled-components'
import NextApp, { AppContext } from 'next/app'

import GlobalStyles from '@ts-mono/dev-react/components/GlobalStyles'
import { mdxRenders } from '@ts-mono/dev-react/components/mdx-renders'
import GlobalStateProvider from '@ts-mono/dev-react/components/GlobalStateProvider'
import GA from '@ts-mono/dev-react/share/GA'

const { MDXProvider } = require('@mdx-js/react')

const ga = new GA('UA-4476856-23', { debug: true })

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
    ga.pageView()

    return (
      <MDXProvider components={mdxRenders}>
        <GlobalStyles />
        <Main>
          <GlobalStateProvider initState={{}}>
            <Component {...pageProps} />
          </GlobalStateProvider>
        </Main>
      </MDXProvider>
    )
  }
}

export default App
