import React, { useState , useEffect } from "react";
import axios from "axios";
import Info from "./info";

export default function NASACard(){
    const [photoData, setPhotoData] = useState({});

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=oP5ONz8QECJuvEpJeBeweeZLs1IMQ34hvW7AtrIr`)
            .then(response =>{
                console.log(response);
                setPhotoData(response.data);
            })
            .catch(error => {
                console.log("no photo for you", error);
            });
    },[]);

    return(
        <div className = "photo-card">

            <img src = {photoData.url} className = "space-img" alt = "spaceimg"/>

            <Info
            title = {photoData.title}
            date = {photoData.date}
            explanation = {photoData.explanation}
            copyright = {photoData.copyright}
            />

        </div>
    )
}