import emotionStyled from '@emotion/styled'
import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { buySellTax, CA, supply } from '../../../links'
import { ButtonEX } from '../../Styles/style'

const Wrapper = emotionStyled(Box)`
    padding: 80px 0;
`
const GradientFont = emotionStyled(Typography)`
    font-size: 72px;
    background: linear-gradient(90deg, #FFE168, #DD9025);
    background-clip: text;
    text-fill-color: transparent;
`

const Card = ({imgLink, title, details}) => {
    return(
        <Grid xs={12} sm={6} md={3} padding={{xs: '10px 0', sm: 1, md: 2, lg: 4}}>
            <Box  style={{backgroundColor: '#090909', borderRadius: 5, padding: 30}}>
                <GradientFont variant='body2' marginBottom={3}>{title}</GradientFont>
                <Typography variant='h5' >{details}</Typography>
            </Box>
        </Grid>
    )
}
const Tokenomics = () => {
  return (
    <Wrapper id="tokenomics">
        <Container maxWidth="xl">
            <Grid container>
                <Grid xs={12} textAlign={'center'}>
                    <Typography variant='h2' textAlign={'center'} marginBottom={4}>Tokenomics</Typography>
                    <ButtonEX className='transparent' style={{ marginBottom: 20, maxWidth: '600px', display: 'flex', justifyContent: 'space-between', margin: 'auto'}} target='_blank'>
                        <span>Contract Address:</span>
                        <span>{CA}</span>
                    </ButtonEX>
                </Grid>
                <Card 
                    title={'Supply'}
                    details={supply}
                />
                <Card 
                    title={'Taxes'}
                    details={buySellTax}
                />
                <Card 
                    title={'LP Lock'}
                    details={'TBA'}
                />
                <Card 
                    title={'Renounced'}
                    details={'TBA'}
                />
            </Grid>
        </Container>
    </Wrapper>
  )
}

export default Tokenomics