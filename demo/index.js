import React, {} from 'react'
const {render} = require('react-dom')
const Ripples = require('../src')

class App extends React.Component {
  static propTypes = {}

  static defaultProps = {}

  render() {
    return (
      <div>
        <h2>Basic example</h2>
        <p>Works with bootstrap</p>

        <div className="btn-wrap">
          <Ripples>
            <span className="btn btn-default">Default</span>
          </Ripples>
        </div>

        <div className="btn-wrap">
          <Ripples>
            <span className="btn btn-primary">Primary</span>
          </Ripples>
        </div>

        <div className="btn-wrap">
          <Ripples>
            <span className="btn btn-success">Success</span>
          </Ripples>
        </div>

        <div className="btn-wrap">
          <Ripples>
            <span className="btn btn-info">Info</span>
          </Ripples>
        </div>

        <div className="btn-wrap">
          <Ripples>
            <span className="btn btn-warning">Warning</span>
          </Ripples>
        </div>

        <div className="btn-wrap">
          <Ripples>
            <span className="btn btn-danger">Danger</span>
          </Ripples>
        </div>

        <h2>Change <span className="code">color</span> and <span className="code">duration</span></h2>
        <p></p>
        <div className="btn-wrap">
          <Ripples color="#337AB7" during={2000}>
            <span className="btn btn-default">Default</span>
          </Ripples>
        </div>
      </div>
    )
  }
}

render(<App />, document.querySelector('#app'))
