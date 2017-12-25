import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import App from './App'

it('renders without crashing', () => {
  renderer.create(<App />).toJSON()
})
