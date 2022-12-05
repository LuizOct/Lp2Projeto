import React from "react";
import { LogoHeader, StyledHeader } from "../StyledComponents/StyledHeader";
import logo from "../assets/images/pokeLogo.png"

export default function Header(){
    return(
        <StyledHeader>
            <LogoHeader alt="Logo Pokemon" src={logo}/>
        </StyledHeader>
    );
}