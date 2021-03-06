import React from 'react'
import styled, { keyframes } from 'styled-components'
import logo from './logo.svg'

const Container = styled.div`
  text-align: center;
`

const Header = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`
const logoSpin = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`

const Img = styled.img`
  animation: ${logoSpin} infinite 20s linear;
  height: 80px;
`
const H1 = styled.h1`
  font-size: 1.5em;
`

const Intro = styled.p`
  font-size: large;
`
Intro.displayName = 'App-intro'

const DatePicker = () => {
  return (
    <Container>
      <Header>
        <Img src={logo} alt="logo" />
        <H1>Welcome to React</H1>
      </Header>
      <Intro>
        To get started, edit <code>src/App.js</code> and save to reload.
      </Intro>
    </Container>
  )
}

export default DatePicker
