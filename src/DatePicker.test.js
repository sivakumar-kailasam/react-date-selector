import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import DatePicker from './DatePicker'

it('renders without crashing', () => {
  const tree = renderer.create(<DatePicker />).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toBeTruthy()
})
