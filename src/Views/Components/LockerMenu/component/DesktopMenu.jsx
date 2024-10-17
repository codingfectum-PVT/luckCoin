import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import logo from "../../../../assets/logo.png";
import { DesktopMainMenu, MaterialUISwitch, MenuLink } from "../styles";
import { toggleTheme } from '../../../../Redux/switchTheme'
import { useDispatch, useSelector } from "react-redux";
import { tgLink, xLink } from "../../../../links";
import tg from '../../../../assets/tg.png'
import x from '../../../../assets/x.png'

const DesktopMenu = (props) => {
  const currentTheme = useSelector( (state) => state.LDTheme.value )
  const dispatch = useDispatch();
 
  return (
    <DesktopMainMenu maxWidth="xl">
      <MenuLink href="/" p="0px">
        <img src={logo} width="auto" height='60px' alt="Logo" />
      </MenuLink>
      <div style={{display:'flex', alignItems: 'center'}}>
        {props.menuList.map((value, i) => <MenuLink key={i} href={value.link} target={value.target} className={value.customClass}>{value.title}</MenuLink> )}
        <MenuLink href={xLink} target='_blank' className="customButton"><img src={x} /></MenuLink>
        <MenuLink href={tgLink} target='_blank' className="customButton"><img src={tg} /></MenuLink>
        
      </div>
    </DesktopMainMenu>
  );
};

export default DesktopMenu;
