[![version](https://img.shields.io/npm/v/react-ripples.svg?label=version)](https://www.npmjs.org/package/react-ripples) [![Build Status](https://img.shields.io/travis/rwu823/react-ripples.svg)](https://travis-ci.org/rwu823/react-ripples) [![Coverage](https://img.shields.io/coveralls/rwu823/react-ripples.svg)](https://coveralls.io/github/rwu823/react-ripples)
# react-ripples


## Install

```sh
$ npm install --save react-ripples
```



## Demo

[live demo](https://rwu823.github.io/react-ripples/demo)



## Usage

```javascript
import Ripples from 'react-ripples'
  
render() {
  <div>
    <Ripples>
      <button>Hello</button>
    </Ripples>
  </div>
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

