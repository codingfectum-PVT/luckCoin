import React from 'react'
import LockerMenu from '../../Components/LockerMenu'
import { PageWrapper } from '../../Styles/style'
import Header from '../../Sections/S1_Header'
import emotionStyled from '@emotion/styled'
import bgVideo from '../../../assets/background-video.mp4'
import { Box } from '@mui/material'
import About from '../../Sections/S2_About'
import Ticker from '../../Sections/S3_Ticker'
import LctoDc from '../../Sections/S4_LCtoDC'
import FindUsON from '../../Sections/S5_Findus'
import Tokenomics from '../../Sections/S6_Tokenomics'
import Footer from '../../Sections/S7_Footer'

const MainPage = (props) => {
  const VideoWrapper = emotionStyled(Box)`
    position: fixed;
    top: 0;
    left:0;
    right: 0;
    bottom: 0;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    

    &:after{
      content: "";
      position: fixed;
      width: 100vw;
      height: 100vh;
      z-index: 0;
      background: linear-gradient(355deg, black, transparent);
      top: 0;
      left: 0;
      right: 0;
      border: 0;
    }
`
const BackGroundVideo = emotionStyled(Box)`
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    object-position: center;
    overflow-x: hidden;
   
`
  return (
    <PageWrapper>
      <VideoWrapper>
        <BackGroundVideo component="video" autoPlay muted loop playsInline>
            <source src={bgVideo} type="video/mp4" />
            Your browser does not support the video tag.
        </BackGroundVideo>
      </VideoWrapper>
        <LockerMenu />
        <Header />
        <About />
        <Ticker />
        <LctoDc />
        <FindUsON />
        <Tokenomics />
        <Footer />
    </PageWrapper>
  )
}

export default MainPage