import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

html {
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.btn:focus {
  box-shadow: initial !important;
}
`
