import React from 'react';
import styled from "styled-components";


const Cardstyle = styled.div `
    width:95%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;

    
`;


    const Info =({title, data, explanation, copyright}) => {
        return(
            <Cardstyle className="photo-info">
                <p>{data}</p>
                <h2>{title}</h2>
                <p>{explanation}</p>
                <p> Photo by: {copyright}</p>
            </Cardstyle>
        );
    };

export default Info;