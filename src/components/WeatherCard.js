import React from 'react';
import "../App.css"

const WeatherCard = (props) => {
    let {name,temp,desc,icon,country,maxTemp,minTemp, feelsLike}=props;
    let image="http://openweathermap.org/img/wn/"+icon+"@4x.png"
    
    return <>
        <div className="container" style={{width:"20rem"}}>
        <div className="card rounded-circle" style={{backgroundColor:"#212529"}}>   
            <img src={image} className="text-center mt-4 card-img-top " alt="..." />
            <div className="card-body">
                <h5 className="card-title text-center text-light">{name}, {country}</h5>
                <p className="card-text my-1 text-center text-light">{temp} &#8451;</p>
                <p className="card-text my-1 text-center text-light">Feels Like: {feelsLike}&#8451;</p>
                <p className="card-text my-1 text-center text-light">{desc}</p>
            </div>
        </div>
        </div>
    </>;
};

export default WeatherCard;
