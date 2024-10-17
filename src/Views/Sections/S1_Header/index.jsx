import emotionStyled from '@emotion/styled'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import headerImg from '../../../assets/headerImg.png'
import { dexToolsLink, uniSwapLink } from '../../../links'
import { ButtonEX } from '../../Styles/style'

const Wrapper = emotionStyled(Box)`
    padding: 80px 0;
`
const Image = emotionStyled.img`
    max-width: 500px;
    width: 100%;
    height: auto;
`
const GradientFont = emotionStyled(Typography)`
    font-size: 72px;
    background: linear-gradient(90deg, #FFE168, #DD9025);
    background-clip: text;
    text-fill-color: transparent;
`

const Header = () => {
  return (
    <Wrapper>
        <Container maxWidth="xl">
            <Grid container textAlign={'center'}>
                <Grid xs={12}>
                    <Image src={headerImg} />
                    <GradientFont variant='h1' style={{marginBottom:20}}>LUCKYCOIN($LKY)</GradientFont>
                    <ButtonEX marginTop={3} href='#' className='gold'>OG of Dogecoin</ButtonEX>
                    <Typography marginTop={3} variant='body2'>Feeling lucky? You should! Luckycoin, created in 2013 and revived in 2024.</Typography>
                    <Box marginTop={3}>
                        <ButtonEX href={uniSwapLink} target='_blank' className='margin' style={{ marginBottom: 20}}>Buy Now</ButtonEX>
                        <ButtonEX href={dexToolsLink} className='transparent' style={{ marginBottom: 20}} target='_blank'>View Chart</ButtonEX>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Wrapper>
  )
}

export default Header