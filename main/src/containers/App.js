import React, { useState } from 'react';
import { Route , Routes } from 'react-router-dom';
import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import Ciudad from '../components/Ciudad.jsx';
import Swal from 'sweetalert2';


const apiKey = '4ae2636d8dfbdc3044bede63951a019b';


function App() {
  const [cities, setCities] = useState([]);
  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  function onSearch(ciudad) {
    
    if (cities.every((e) => removeAccents(e.name.toLowerCase()) !== removeAccents(ciudad.toLowerCase()))) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          Swal.fire({
            title: 'No existe esa ciudad, por favor ingrese otra válida',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          });
        }
      });
    } else 
    Swal.fire('Esa ciudad ya está siendo mostrada en pantalla')
    
  }

  return (
      <div className="App">
        <Nav onSearch={onSearch}/>
        <p className='footer'>Coded by <a className='linkedin' href='https://www.linkedin.com/in/nicoerivero/'>Nicolás Rivero</a></p>
        <Routes>
          <Route path="/" element={<Cards cities={cities}
    onClose={onClose}/>}/>
          <Route path="/ciudad/:ciudadId" element={<Ciudad cities={cities}/>}/>
        </Routes>
        
      </div>
  );
}

export default App;
