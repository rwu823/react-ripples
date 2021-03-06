import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'

import styled, { css } from 'styled-components'
import { CodeBlock } from '@ts-mono/dev-react/components/Markdown/'

import Ripples, { createRipples } from '../src'

const CodeStyled = styled(CodeBlock)`
  margin-bottom: 1em;
`

const MyRipples = createRipples({
  color: 'purple',
  during: 2200,
})

const Main = styled.div`
  ${(_p: {}) => css`
    padding-bottom: 5em;
    width: 700px;
    margin: 0 auto;

    .mdx-code-block {
      margin-bottom: 1em;
    }

    h2 {
      margin-top: 2em;
    }

    .bootstrap-btns .react-ripples {
      margin-right: 7px;
      margin-bottom: 0.5rem;
    }

    @media (max-width: 700px) {
      width: auto;
      padding: 1rem;

      h2 {
        font-size: 4.5vw;
      }

      h3 {
        font-size: 4vw;
      }
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

const App: NextPage<Props> = () => {
  return (
    <div>
      <Head>
        <title>React Ripples - Demo</title>
        <meta
          name="description"
          content="The material ripple effect. Ripples everywhere "
        />
      </Head>
      <Header>
        <img alt="logo" width="200" src="./static/logo.png" />
        <h1>React Ripples</h1>
        <em>– Ripple effect, ripples everywhere</em>
        <Badges>
          <a href="https://www.npmjs.org/package/react-ripples">
            <img
              alt="npm"
              src="https://img.shields.io/npm/v/react-ripples?style=flat-square&logo=npm"
            />
          </a>
          <a href="https://codecov.io/github/rwu823/react-ripples">
            <img
              alt="covrage"
              src="https://img.shields.io/codecov/c/github/rwu823/react-ripples/master?style=flat-square&logo=codecov"
            />
          </a>
          <img
            alt="minizip"
            src="https://img.shields.io/bundlephobia/minzip/react-ripples?style=flat-square&logo=webpack"
          />
        </Badges>
        <div className="star-badge">
          <a href="https://github.com/rwu823/react-ripples" target="_new">
            <img
              alt=""
              src="https://img.shields.io/github/stars/rwu823/react-ripples?style=social"
            />
          </a>
        </div>
      </Header>
      <Main>
        <h2>Works with Bootstrap buttons</h2>
        <CodeStyled
          src={`
import Ripples from 'react-ripples'

<Ripples>
  <button type="button" className="btn btn-primary">
    Primary
  </button>
</Ripples>
        `}
        />

        <div className="bootstrap-btns">
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
        </div>

        <h2>Change color and during</h2>
        <CodeStyled
          src={`
<Ripples color="#fff" during={1200}>
  <button type="button" className="btn btn-outline-primary">
    Primary
  </button>
</Ripples>
        `}
        />

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

        <h2>Ripples with any shape</h2>
        <p>For example: a radius button</p>
        <CodeStyled
          src={`
<div
  style={{
  display: 'inline-flex',
  borderRadius: 25,
  overflow: 'hidden',
}}
>
  <Ripples color={'yellow'}>
  <button type="button" className="btn btn-primary">
    Primary
  </button>
  </Ripples>
</div>
        `}
        />
        <div
          style={{
            display: 'inline-flex',
            borderRadius: 25,
            overflow: 'hidden',
          }}
        >
          <Ripples color={'yellow'}>
            <button type="button" className="btn btn-primary">
              Primary
            </button>
          </Ripples>
        </div>

        <h2>API</h2>
        <h3>createRipples([defaultProps])</h3>
        <p>You can easy to extend default props without HOC.</p>
        <CodeStyled
          src={`
import { createRipples } from 'react-ripples'

const MyRipples = createRipples({
  color: 'purple',
  during: 2200,
})
        `}
        />
        <MyRipples>
          <button type="button" className="btn btn-primary">
            Primary
          </button>
        </MyRipples>
      </Main>
    </div>
  )
}

export default App
