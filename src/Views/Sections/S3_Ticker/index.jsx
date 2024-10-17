import emotionStyled from '@emotion/styled'
import { Box } from '@mui/material'
import React from 'react'
import bgRow from '../../../assets/bg-row.png'
import tickerimg from '../../../assets/tickerimg.png'

const Wrapper = emotionStyled(Box)`
    padding: 80px 0;
    background-image: url(${bgRow});
    background-size: 100%;
    text-align: center;
`
const AboutImage = emotionStyled.img`
    max-width: 850px; 
    width: 100%;
    height: auto;
    margin: auto;
`
const Ticker = () => {
  return (
    <Wrapper>
        <AboutImage src={tickerimg} />
    </Wrapper>
  )
}

export default Ticker