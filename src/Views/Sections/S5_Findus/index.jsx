import React from 'react'
import { Markee } from '../../Components/Markee'
import emotionStyled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import tg from '../../../assets/tg.png'
import x from '../../../assets/x.png'
import uniswap from '../../../assets/uniswap.png'
import etherscan from '../../../assets/etherscan.png'
import dextools from '../../../assets/dextools.png'
import dexscreener from '../../../assets/dexscreener.png'
import { dexScreenerLink, dexToolsLink, ethScanner, tgLink, uniSwapLink, xLink } from '../../../links'
import { MenuLink } from '../../Components/LockerMenu/styles'

const Wrapper = emotionStyled(Box)`
    padding: 80px 0;
`
const FindUsON = () => {
  return (
    <div>
        <Markee />
            <Wrapper>
                <Typography variant='h2' marginBottom={3} textAlign={'center'}>Find us on</Typography>
                <Box textAlign={'center'}>
                    <MenuLink href={tgLink} target='_blank' className="customButton"><img src={tg} /></MenuLink>
                    <MenuLink href={xLink} target='_blank' className="customButton"><img src={x} /></MenuLink>
                    <MenuLink href={uniSwapLink} target='_blank' className="customButton"><img src={uniswap} /></MenuLink>
                    <MenuLink href={dexToolsLink} target='_blank' className="customButton"><img src={dextools} /></MenuLink>
                    <MenuLink href={dexScreenerLink} target='_blank' className="customButton"><img src={dexscreener} /></MenuLink>
                    <MenuLink href={ethScanner} target='_blank' className="customButton"><img src={etherscan} /></MenuLink>
                </Box>
            </Wrapper>
        <Markee />
    </div>
  )
}

export default FindUsON