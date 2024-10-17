import emotionStyled from '@emotion/styled'
import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import lpLock from '../../../assets/Liquidity-Locked-icon.png'
import contractVerified from '../../../assets/Contract-Verified4.png'
import flaunch from '../../../assets/Fair-Launch.png'

const Wrapper = emotionStyled(Box)`
    padding: 80px 0;
`

const Card = ({imgLink, title, details}) => {
    return(
        <Grid xs={12} sm={6} md={4} padding={{xs: '10px 0', sm: 1, md: 2, lg: 4}}>
            <Box  style={{backgroundColor: '#090909', borderRadius: 5, padding: 30}}>
                <img src={imgLink} style={{width: 40, height: 40}} />
                <Typography variant='h5' marginY={3}>{title}</Typography>
                <Typography variant='body2' minHeight={'80px'}>{details}</Typography>
            </Box>
        </Grid>
    )
}
const LctoDc = () => {
  return (
    <Wrapper>
        <Container maxWidth="xl">
            <Grid container>
                <Grid xs={12}>
                    <Typography variant='h2' textAlign={'center'} marginBottom={4}>LuckyCoin &lt; doge coin</Typography>
                </Grid>
                <Card 
                    imgLink={flaunch}
                    title={'Fair Launch'}
                    details={'No presales or private allocations, everyone gets equal access from the start.'}
                />
                <Card 
                    imgLink={contractVerified}
                    title={'Contract Verified'}
                    details={'The smart contract is publicly audited and transparent for all to review.'}
                />
                <Card 
                    imgLink={lpLock}
                    title={'Liquidity Locked'}
                    details={'Funds are secured in the liquidity pool, ensuring stability and preventing rug pulls.'}
                />
            </Grid>
        </Container>
    </Wrapper>
  )
}

export default LctoDc