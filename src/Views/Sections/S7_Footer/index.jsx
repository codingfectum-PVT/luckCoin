import emotionStyled from '@emotion/styled'
import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import headerImg from '../../../assets/headerImg.png'
import { ButtonEX } from '../../Styles/style'
import { CA, tgLink, xLink } from '../../../links'
import { MenuLink } from '../../Components/LockerMenu/styles'
import tg from '../../../assets/tg.png'
import x from '../../../assets/x.png'

const Wrapper = emotionStyled(Box)`
    padding: 80px 0 40px;
    background: linear-gradient(0deg, #CBA028, transparent 40%);
`
const Image = emotionStyled.img`
    max-width: 500px;
    width: 100%;
    height: auto;
`

const Footer = () => {
  return (
    <Wrapper>
        <Container maxWidth="xl">
            <Grid container>
                <Grid xs={12} textAlign={'center'}>
                    <Image src={headerImg} />
                    <ButtonEX className='transparent' style={{ marginBottom: 20, maxWidth: '600px', display: 'flex', justifyContent: 'space-between', margin: 'auto'}} target='_blank'>
                        <span>Contract Address:</span>
                        <span>{CA}</span>
                    </ButtonEX>
                    <Typography marginTop={3} maxWidth={'1140px'} marginX={'auto'} variant='body2'>$LKY is a meme coin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. the coin is completely useless and for entertainment purposes only.</Typography>
                    <Typography marginY={3} variant='body2'>info@luckyeth.xyz</Typography>
                    <Box textAlign={'center'}>
                        <MenuLink href={tgLink} target='_blank' className="customButton"><img src={tg} /></MenuLink>
                        <MenuLink href={xLink} target='_blank' className="customButton"><img src={x} /></MenuLink>
                    </Box>
                    <Typography marginTop={6} variant='body2'>Copyright 2024. All Rights Reserved $LKY</Typography>
                </Grid>
            </Grid>
        </Container>
    </Wrapper>
  )
}

export default Footer