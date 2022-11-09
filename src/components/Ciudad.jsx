import React from "react";
import { useParams } from "react-router-dom";
import './Ciudad.css'
import { Link } from 'react-router-dom';

export default function Ciudad({cities}) {
    let params = useParams()
    // console.log(params)
    //filtrando

    let [city] = cities.filter(city => city.id === parseInt(params.ciudadId))
    return (

            <div class="container">
                <div class="card-details">
                    <h2 class="text-title">{city.name}</h2>
                    <div className="text-body">
                        <div>Temperatura: {city.temp} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                    </div>
                </div>
                <Link to='/'>
                    <button class="card-button">Back to Home</button>
                </Link>
                
            </div>
        
    )
}