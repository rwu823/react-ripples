import Ripples from '../src'
import React from 'react'
import { shallow, mount } from 'enzyme'

it('should extend className', () => {
  const $ = shallow(<Ripples className="xyz"/>)

  expect($.hasClass('xyz')).toBe(true)
})

it('should extend onClick', () => {
  const $ = mount(
    <Ripples onClick={e => (123)}>
      <span>Click me</span>
    </Ripples>
  )

  $.simulate('click')
})
