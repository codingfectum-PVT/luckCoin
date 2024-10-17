import { Container } from '@mui/material';
import React from 'react'
import DesktopMenu from './component/DesktopMenu';
import MobileMenu from './component/MobileMenu';

const LockerMenu = (props) => {
    const menuList = [ // You can pass 4 perameters for menu title, link, target and customClass
        {
        title: "Home",
        link: "/",
        },
        {
        title: "About",
        link: "/#about",
        },
        {
        title: "Tokenomics",
        link: "/#tokenomics",
        },
    ];
  return (
    <div style={{backgroundColor: '#000000'}}>
      <Container maxWidth="xl">
          <DesktopMenu menuList={menuList} />
          <MobileMenu menuList={menuList} />
      </Container>
    </div>
  )
}

export default LockerMenu