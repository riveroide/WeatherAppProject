import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <div className="card">
        <div id="closeIcon" className="row">
            <button onClick={onClose} className="btnclose">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash-x" width="33" height="33" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M4 7h16" />
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                <path d="M10 12l4 4m0 -4l-4 4" />
              </svg>
            </button>
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
