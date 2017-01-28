import React, {} from 'react'
import Ripples from '../src'

class App extends React.Component {
  static propTypes = {}

  static defaultProps = {}

  render() {
    return (
      <div>
        <h2>Basic example</h2>
        <p>Works with Bootstrap buttons</p>

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

        <h2>The normal text content</h2>
        <Ripples color="#c9302c" during={1200}>
          <blockquote>
            Ripple touch effect was introduced with material design in Android 5.0 (API level 21).
            Touch feedback in material design provides an instantaneous visual confirmation at the point of contact when users interact with UI elements. For example, buttons now display a ripple effect when they are touched-this is the default touch feedback animation in Android 5.0. Ripple animation is implemented by the new RippleDrawable class. The ripple effect can be configured to end at the bounds of the view or extend beyond the bounds of the view.
          </blockquote>
        </Ripples>
      </div>
    )
  }
}

export default App
