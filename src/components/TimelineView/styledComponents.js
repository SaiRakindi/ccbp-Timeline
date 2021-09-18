// Style your elements here

import styled from 'styled-components/macro'

export const TimelineContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 1110px;
  height: 100vh;
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`

export const Heading = styled.h1`
  text-align: center;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
  color: #171f46;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const CCBPHeading = styled.span``
