<h1 align="center">
  react-ripples
  <p>
    <img width="200" src="https://raw.githubusercontent.com/rwu823/react-ripples/master/assets/logo.png"/>
  </p>
</h1>

<p align="center">
  <a href="https://www.npmjs.org/package/react-ripples" target="_blank">
    <img src="https://img.shields.io/npm/v/react-ripples.svg?label=version"/>
  </a>
  <a href="https://travis-ci.org/rwu823/react-ripples" target="_blank">
    <img src="https://img.shields.io/travis/rwu823/react-ripples.svg?branch=master"/>
  </a>
  <a href="https://codecov.io/github/rwu823/react-ripples" target="_blank">
    <img src="https://img.shields.io/codecov/c/github/rwu823/react-ripples.svg"/>
  </a>
  <img src="https://img.shields.io/github/license/rwu823/react-ripples.svg" />
</p>

## Installation

```sh
$ npm install --save react-ripples
```

or

```sh
$ yarn add react-ripples --dev
```

## Demo

[live demo](https://rwu823.github.io/react-ripples)


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

