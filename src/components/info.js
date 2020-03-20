import React from 'react';
import styled from "styled-components";


const Cardstyle = styled.div `
    width:95%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    line-height:1.5rem;
    
`;


const Textstyle1 = styled.p `

    width:90%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    color:#414a4c;
    font-size: 1rem;
`;



const Textstyle2 = styled.p `

    width:90%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    font-size: 2rem;
    font-weight: bold;
    color:#3a4040;
`;


const Textstyle3 = styled.p `

    width:90%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    font-size: 2rem;
    color:#3a4040;
`;


const H2 = styled.h2 `
    width:90%;
    font-weight: bold;
    color:#3a4040;
    font-size: 2.5rem;
    line-height:3rem;
`;

    const Info =({title, data, explanation, copyright}) => {
        return(
            <Cardstyle className="photo-info">
                <Textstyle3>{data}</Textstyle3>
                <H2>{title} ! </H2>
                <Textstyle1>{explanation}</Textstyle1>
                <Textstyle2 > Photo by: {copyright}</Textstyle2>
            </Cardstyle>
        );
    };

export default Info;