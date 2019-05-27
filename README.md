<h1 align="center">
  react-ripples
  <a href="https://www.npmjs.org/package/react-ripples" target="_blank">
    <img src="https://flat.badgen.net/npm/v/react-ripples"/>
  </a>
  <a href="https://circleci.com/gh/rwu823/react-ripples" alt="Build Status">
    <img src="https://flat.badgen.net/circleci/github/rwu823/react-ripples/master" />
  </a>
  <a href="https://codecov.io/github/rwu823/react-ripples" target="_blank">
    <img src="https://flat.badgen.net/codecov/c/github/rwu823/react-ripples"/>
  </a>
  <p>
    <img width="200" src="https://raw.githubusercontent.com/rwu823/react-ripples/master/assets/logo.png"/>
  </p>
</h1>

## Attraction
- ✅ Zero dependencies
- 🚀 Tiny and blazing fast (Pure Component)
- ⚡ Typescript and definition file supported
- 🌍 SSR supported

## Installation

```sh
$ npm install --save react-ripples
```

or

```sh
$ yarn add react-ripples
```

## Demo

[Live Demo](https://rwu823.github.io/react-ripples)

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
