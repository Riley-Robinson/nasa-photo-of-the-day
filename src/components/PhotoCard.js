import React, { useState , useEffect } from "react";
import axios from "axios";
import Info from "./info";
import styled from "styled-components";



const SpaceImg = styled.img`
    width: 90%;
    height: auto;
    padding-top:50px;
`;

const SpaceCard = styled.div`
    width: 100%;
    height: auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    padding-bottom:20px;
    background: #f9f8f6;
`;

export default function NASACard(){
    const [photoData, setPhotoData] = useState({});

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=oP5ONz8QECJuvEpJeBeweeZLs1IMQ34hvW7AtrIr`)
            .then(response =>{
                console.log(response);
                setPhotoData(response.data);
            })
            .catch(error => {
                console.log("no photo for you", error);
            });
    },[]);

    return(
        <SpaceCard className = "photo-card">
            
            <SpaceImg src = {photoData.url} className = "space-img" alt = "spaceimg"/>

            <Info
            title = {photoData.title}
            date = {photoData.date}
            explanation = {photoData.explanation}
            copyright = {photoData.copyright}
            />

        </SpaceCard>
    )
}