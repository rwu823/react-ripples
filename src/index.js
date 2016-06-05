import React, {PropTypes} from 'react'

const rippleStyle = {
  position: 'absolute',
  borderRadius: '50%',
  opacity: 0,
  width: 20,
  height: 20,
  transform: 'translate(-50%, -50%)',
  pointerEvents: 'none',
}

const wrapStyle = {
  position: 'relative',
  display: 'inline-block',
  overflow: 'hidden',
}

class Ripples extends React.Component {
  static propTypes = {
    during: PropTypes.number,
    color: PropTypes.string,
  }

  static defaultProps = {
    during: 600,
    color: 'rgba(255, 255, 255, .5)',
  }

  state = {
    rippleStyle: {},
    wrapStyle: {}
  }

  handleClick = (ev) => {
    ev.stopPropagation()

    const {onClick, color, during} = this.props
    const {pageX, pageY, currentTarget: {offsetLeft, offsetTop,
      offsetWidth, offsetHeight}} = ev

    const left = pageX - offsetLeft
    const top = pageY - offsetTop

    this.setState({
      rippleStyle: {
        top, left,
        opacity: 1,
        backgroundColor: color,
      }
    })

    setTimeout(()=> {
      const size = Math.max(offsetWidth, offsetHeight)

      this.setState({
        rippleStyle: {
          left, top,
          transform: `${rippleStyle.transform} scale(${size/9})`,
          opacity: 0,
          transition: `all ${during}ms`,
        }
      })
    }, 50)

    if (typeof onClick === 'function') {
      onClick(ev)
    }
  }
  
  render() {
    const {children, style, color, ...props} = this.props
    const {state} = this

    let s = {
      ...style,
      ...wrapStyle,
      ...state.wrapStyle,
    }

    return (
      <div {...props} style={s} onClick={this.handleClick}>
        {children}

        <s style={{
          ...rippleStyle,
          ...state.rippleStyle,
        }} />
      </div>
    )
  }
}

module.exports = Ripples
