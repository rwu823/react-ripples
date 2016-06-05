import test from 'ava'
import Ripples from '../src'
import React from 'react'
import {shallow, mount} from 'enzyme'

test('should extend className', assert => {
  const $ = shallow(<Ripples className="xyz" />)

  assert.is($.hasClass('xyz'), true)
})

test('should extend onClick', assert => {
  const $ = mount(<Ripples onClick={e => (123)} >
    <span>Click me</span>
  </Ripples>)

  $.simulate('click')
})
