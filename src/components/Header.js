import React from "react";
import styled from "styled-components";


const Headerstyle = styled.div `
    background: #336699;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    padding-bottom:20px;

    `;

    const H1style = styled.h1`
        color: #ecf2f9;
        
        `;

function Header(){
    return(
        <Headerstyle>
            <H1style> NASA GET YOUR ASS TO MARS! </H1style>
        </Headerstyle>
    );
}

export default Header;