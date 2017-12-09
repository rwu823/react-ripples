import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

const wrapStyleDefault = {
  position: 'relative',
  display: 'inline-block',
  overflow: 'hidden',
}

class Ripples extends PureComponent {
  static propTypes = {
    during: PropTypes.number,
    color: PropTypes.string,
  }

  static defaultProps = {
    during: 600,
    color: 'rgba(0, 0, 0, .3)',
  }

  constructor(props) {
    super(props)

    this.state = {
      rippleStyle: {
        position: 'absolute',
        borderRadius: '50%',
        opacity: 0,
        width: 35,
        height: 35,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        backgroundColor: props.color,
      },
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  handleClick = (ev) => {
    if (ev.stopPropagation) {
      ev.stopPropagation()
    }

    const { onClick, color, during } = this.props
    const {
      pageX, pageY, currentTarget: {
        offsetLeft, offsetTop,
        offsetWidth, offsetHeight
      }
    } = ev

    const left = pageX - offsetLeft
    const top = pageY - offsetTop
    const size = Math.max(offsetWidth, offsetHeight)

    this.setState({
      rippleStyle: {
        ...this.state.rippleStyle,
        top,
        left,
        opacity: 1,
        transform: 'translate(-50%, -50%)',
        transition: 'initial',
      },
    })

    this.timer = setTimeout(() => {
      this.setState({
        rippleStyle: {
          ...this.state.rippleStyle,
          opacity: 0,
          transform: `scale(${size / 9})`,
          transition: `all ${during}ms`,
        },
      })
    })

    if (typeof onClick === 'function') {
      onClick(ev)
    }
  }

  render() {
    const { children, style, during, color, ...props } = this.props
    const { state, handleClick } = this

    const wrapStyle = {
      ...style,
      ...wrapStyleDefault,
    }

    return (
      <div {...props} style={wrapStyle} onClick={handleClick}>
        { children }
        <s style={state.rippleStyle} />
      </div>
    )
  }
}

export default Ripples
