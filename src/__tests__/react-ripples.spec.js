import React from 'react'
import { shallow, mount } from 'enzyme'

import Ripples from '../'

describe('<Ripple />', () => {
  it('should extend className', () => {
    const $ = shallow(<Ripples className="xyz" />)

    expect($.hasClass('xyz')).toBe(true)
  })

  it('should extend onClick', async () => {
    const com = (
      <Ripples onClick={() => {}}>
        <span>Click me</span>
      </Ripples>
    )

    const $ = mount(com)

    $.simulate('click')

    const rippleStyle = await new Promise((done) => {
      setTimeout(() => {
        done($.state('rippleStyle'))
      }, 100)
    })

    expect(rippleStyle.transition).toBeTruthy()
  })
})
