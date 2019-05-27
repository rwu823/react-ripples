import React from 'react'
import { NextFunctionComponent } from 'next'
import Head from 'next/head'

import styled, { css } from 'styled-components'
import Ripples from '../src'
import Code from '../components/Code'
import GA from '../src/GA'

const ga = new GA('UA-4476856-23')

const Main = styled.div`
  ${(_p: {}) => css`
    padding: 12px;
    width: 700px;
    margin: 0 auto;

    h2 {
      margin-top: 2em;
    }

    .react-ripples {
      margin-right: 7px;
    }
  `}
`
const Header = styled.header`
  ${(_p: {}) => css`
    text-align: center;
  `}
`

const Badges = styled.div`
  ${(_p: {}) => css`
    margin-bottom: 1em;

    a {
      margin-right: 4px;
    }
  `}
`
type Props = {}

const App: NextFunctionComponent<Props> = () => {
  React.useEffect(() => {
    ga.pageView()
  }, [])

  return (
    <div>
      <Head>
        <title>React Ripples - Demo</title>
      </Head>
      <Header>
        <h1>React Ripples</h1>
        <Badges>
          <a href="https://www.npmjs.org/package/react-ripples" target="_new">
            <img
              alt="npm version"
              src="https://flat.badgen.net/npm/v/react-ripples"
            />
          </a>

          <a href="https://circleci.com/gh/rwu823/react-ripples">
            <img
              alt="circle ci"
              src="https://flat.badgen.net/circleci/github/rwu823/react-ripples/master"
            />
          </a>

          <a
            href="https://codecov.io/github/rwu823/react-ripples"
            target="_new"
          >
            <img
              alt="code coverage"
              src="https://flat.badgen.net/codecov/c/github/rwu823/react-ripples"
            />
          </a>
        </Badges>
        <div className="star-badge">
          <a href="https://github.com/rwu823/react-ripples" target="_new">
            <img
              alt=""
              src="https://img.shields.io/github/stars/rwu823/react-ripples.svg?style=social&label=Stars"
            />
          </a>
        </div>
      </Header>
      <Main>
        <h2>Works with Bootstrap buttons</h2>
        <Code>{`
<Ripples>
  <button type="button" className="btn btn-primary">
    Primary
  </button>
</Ripples>
            `}</Code>
        <Ripples>
          <button type="button" className="btn btn-primary">
            Primary
          </button>
        </Ripples>

        <Ripples>
          <button type="button" className="btn btn-secondary">
            Secondary
          </button>
        </Ripples>

        <Ripples>
          <button type="button" className="btn btn-success">
            Success
          </button>
        </Ripples>

        <Ripples>
          <button type="button" className="btn btn-danger">
            Danger
          </button>
        </Ripples>

        <Ripples>
          <button type="button" className="btn btn-warning">
            Warning
          </button>
        </Ripples>
        <Ripples>
          <button type="button" className="btn btn-info">
            Info
          </button>
        </Ripples>
        <Ripples>
          <button type="button" className="btn btn-light">
            Light
          </button>
        </Ripples>
        <Ripples>
          <button type="button" className="btn btn-dark">
            Dark
          </button>
        </Ripples>

        <h2>Change color and during</h2>
        <Code>{`
<Ripples color="#fff" during={1200}>
  <button type="button" className="btn btn-outline-primary">
    Primary
  </button>
</Ripples>
            `}</Code>

        <Ripples color="#fff" during={1200}>
          <button type="button" className="btn-outline-primary">
            Primary
          </button>
        </Ripples>

        <h2>The normal text content</h2>
        <Ripples color={'red'} during={1200}>
          <blockquote className="blockquote">
            Ripple touch effect was introduced with material design in Android
            5.0 (API level 21). Touch feedback in material design provides an
            instantaneous visual confirmation at the point of contact when users
            interact with UI elements. For example, buttons now display a ripple
            effect when they are touched-this is the default touch feedback
            animation in Android 5.0. Ripple animation is implemented by the new
            RippleDrawable class. The ripple effect can be configured to end at
            the bounds of the view or extend beyond the bounds of the view.
          </blockquote>
        </Ripples>
      </Main>
      <footer />
    </div>
  )
}

export default App
