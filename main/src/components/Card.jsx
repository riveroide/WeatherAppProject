import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <div className="card">
        <div id="closeIcon" className="row">
            <button onClick={onClose} className="btnclose">X</button>
        </div>
        <div className="contClima">
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
        </div>
        <div className="card-body">
          <Link to={`/ciudad/${id}`} >
            <h4 className="card-title">{name}</h4>
          </Link>
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <h5>Min</h5>
              <p>{(min-273.15).toFixed(1)}°C</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <h5>Max</h5>
              <p>{(max-273.15).toFixed(1)}°C</p>
            </div>
            
          </div>
        </div>
        
      </div>
    );
};
