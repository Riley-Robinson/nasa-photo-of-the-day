import React from 'react';



    const Info =({title, data, explanation, copyright}) => {
        return(
            <div className="photo-info">
                <p>{data}</p>
                <h2>{title}</h2>
                <p>{explanation}</p>
                <p> Photo by: {copyright}</p>
            </div>
        );
    };

export default Info;