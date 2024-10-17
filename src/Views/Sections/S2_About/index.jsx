import React from 'react'
import aboutImage1 from '../../../assets/aboutImage1.png'
import aboutImage2 from '../../../assets/aboutImage2.png'
import { Box, Container, Grid, Typography } from '@mui/material'
import emotionStyled from '@emotion/styled'

const Wrapper = emotionStyled(Box)`
    padding: 80px 0;
`
const AboutImage = emotionStyled.img`
    // max-width: 600px; 
    width: 100%;
    height: auto;
    padding-right: 30px;
`
const About = () => {
  return (
    <Wrapper id="about">
        <Container maxWidth="xl">
            <Grid container>
                <Grid xs={12} md={6} marginY={2}>
                    <AboutImage src={aboutImage1} />
                </Grid>
                <Grid xs={12} md={6} paddingTop={'10%'}  marginY={2}>
                    <Typography variant='h2' marginBottom={3}>Origins</Typography>
                    <Typography variant='body2' maxWidth={'540px'}>Luckycoin, introduced in 2013 as a fork of Litecoin, featured randomized block rewards to add variability to mining. Though it didn’t gain widespread traction, its mechanics and playful approach directly influenced the creation of Dogecoin, which used similar mining rules before switching to fixed rewards.</Typography>
                </Grid>
                <Grid xs={12} md={6} paddingTop={'10%'}  marginY={2}>
                    <Typography variant='h2'  maxWidth={'540px'} marginBottom={3}>The Return of Luckycoin</Typography>
                    <Typography variant='body2' maxWidth={'540px'}>In 2024, Luckycoin is being relaunched as a simple ERC-20 token on the Ethereum blockchain. The revival simplifies its structure with fixed supply and fair distribution, focusing on easy integration with wallets and DeFi platforms while maintaining its original theme of accessibility and community engagement.</Typography>
                </Grid>
                <Grid xs={12} md={6} marginY={2}>
                    <AboutImage src={aboutImage2} />
                </Grid>
            </Grid>
        </Container>
    </Wrapper>
  )
}

export default About