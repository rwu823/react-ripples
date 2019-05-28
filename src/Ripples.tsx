import React, { CSSProperties } from 'react'
import PropTypes from 'prop-types'

export interface RipplesProps {
  during?: number
  color?: string
  onClick?: (ev: React.MouseEvent<HTMLDivElement>) => any
  className?: string
}

type State = Readonly<{
  rippleStyle: CSSProperties
}>

const boxStyle: CSSProperties = {
  position: 'relative',
  display: 'inline-flex',
  overflow: 'hidden',
}

class Ripples extends React.PureComponent<RipplesProps, State> {
  private timer: number = 0

  static propTypes = {
    during: PropTypes.number,
    color: PropTypes.string,

    onClick: PropTypes.func,
    className: PropTypes.string,
  }

  static defaultProps = {
    during: 600,
    color: 'rgba(0, 0, 0, .3)',
    className: '',
    onClick: () => {},
  }

  constructor(props: RipplesProps) {
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

  onClick = (ev: React.MouseEvent<HTMLDivElement>) => {
    const { during, onClick } = this.props

    ev.stopPropagation()

    const {
      pageX,
      pageY,
      currentTarget: { offsetLeft, offsetTop, offsetWidth, offsetHeight },
    } = ev

    const left = pageX - offsetLeft
    const top = pageY - offsetTop
    const size = Math.max(offsetWidth, offsetHeight)

    this.setState(
      state => {
        return {
          rippleStyle: {
            ...state.rippleStyle,
            left,
            top,
            opacity: 1,
            transform: 'translate(-50%, -50%)',
            transition: 'initial',
          },
        }
      },
      () => {
        this.timer = setTimeout(() => {
          this.setState(state => ({
            rippleStyle: {
              ...state.rippleStyle,
              opacity: 0,
              transform: `scale(${size / 9})`,
              transition: `all ${during}ms`,
            },
          }))
        }, 50)
      },
    )

    if (onClick) onClick(ev)
  }

  render() {
    const { children, during, color, onClick, className, ...props } = this.props
    const { rippleStyle } = this.state

    return (
      <div
        {...props}
        className={`react-ripples ${className}`.trim()}
        style={boxStyle}
        onClick={this.onClick}
      >
        {children}
        <s style={rippleStyle} />
      </div>
    )
  }
}

export default Ripples
