<h1 align="center">
  <img width="200" src="./assets/logo2.png"/>
  <p>react-ripples</p>
</h1>

<p align="center">
  <a href="https://www.npmjs.org/package/react-ripples">
    <img src="https://flat.badgen.net/npm/v/react-ripples"/>
  </a>
  <a href="https://circleci.com/gh/rwu823/react-ripples" alt="Build Status">
    <img src="https://flat.badgen.net/circleci/github/rwu823/react-ripples/master" />
  </a>
  <a href="https://codecov.io/github/rwu823/react-ripples">
    <img src="https://flat.badgen.net/codecov/c/github/rwu823/react-ripples"/>
  </a>
  <img src="https://flat.badgen.net/bundlephobia/minzip/react-ripples" />
</p>

<h4 align="center">
  <sub>Material ripple effect, ripples everywhere</sub>
</h4>

<h3 align="center">
  <a href="https://rwu823.github.io/react-ripples">Live Demo</a>
</h3>

## Attraction

- ✅ Zero dependencies
- 🚀 Tiny and blazing fast (Pure Component)
- ⚡ Typescript and definition file supported
- 🎨 Pure CSS animation
- 🌍 SSR supported

## Installation

```sh
$ npm install --save react-ripples
```

or

```sh
$ yarn add react-ripples
```

## Usage

```jsx
import Ripples from 'react-ripples'

render() {
  <Ripples>
    <button>Ripple Button</button>
  </Ripples>
}
```

## API

### createRipples([defaultProps])

Extends default props without HOC

```jsx
import { createRipples } from 'react-ripples'

const MyRipples = createRipples({
  color: 'purple',
  during: 2200,
})
```

### Props

```javascript
static propTypes = {
  during: PropTypes.number,
  color: PropTypes.string,
}

static defaultProps = {
  during: 600,
  color: 'rgba(0, 0, 0, .3)',
}
```

| Property | Description                   |
| -------- | ----------------------------- |
| during   | The css animate duration [ms] |
| color    | The ripple's background color |
