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

export const createRipples = (defaultProps: Partial<RipplesProps> = {}) =>
  class extends React.PureComponent<RipplesProps, State> {
    timer: number = 0

    static displayName = 'Ripples'

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
      ...defaultProps,
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
        },
      }
    }

    componentWillUnmount() {
      clearTimeout(this.timer)
    }

    onClick = (ev: React.MouseEvent<HTMLDivElement>) => {
      const { during, onClick, color } = this.props

      ev.stopPropagation()

      const { pageX, pageY, currentTarget } = ev

      const rect = currentTarget.getBoundingClientRect()

      const left = pageX - (rect.left + window.scrollX)
      const top = pageY - (rect.top + window.scrollY)
      const size = Math.max(rect.width, rect.height)

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
              backgroundColor: color,
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
      const {
        children,
        during,
        color,
        onClick,
        className,
        ...props
      } = this.props
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
