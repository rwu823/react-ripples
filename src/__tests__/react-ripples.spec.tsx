import React from 'react'
import { render } from 'react-dom'
import { act } from 'react-dom/test-utils'

import Ripples from '..'

let app: HTMLDivElement
let root: Element

const onClick = jest.fn()

beforeEach(() => {
  app = document.createElement('div')
  app.id = 'app'
  document.body.appendChild(app)

  act(() => {
    render(
      <Ripples className="foo" onClick={onClick}>
        <span>Click</span>
      </Ripples>,

      app,
    )
  })

  root = app.firstElementChild!
})

afterEach(() => {
  document.body.removeChild(app)
})

describe('<Ripples />', () => {
  it('should extend className', () => {
    expect(root.classList.contains('foo')).toBe(true)
  })

  it('should extend onClick', () => {
    expect(root.textContent).toBe('Click')

    root.dispatchEvent(new MouseEvent('click', { bubbles: true }))

    expect(onClick).toHaveBeenCalled()
  })
})
