<<<<<<< HEAD
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { Navbar } from './Elements';
import { Home, About, Weather } from './Pages';
import { ILongLat } from './Elements/Types';
=======
import { useQuery } from 'react-query';
import axios from 'axios';
>>>>>>> 4e740f7cbe73b53387c4523bbeb6f4328b45e996

import './App.css';

function App() {
<<<<<<< HEAD
  console.log('App page rendered');
  const [longLat, setLongLat] = useState<ILongLat>({
    longitude: 0,
    latitude: 0
  });

  const navigate = useNavigate();

  const successCallback = (position: any) => {
    setLongLat({
      longitude: position.coords.longitude,
      latitude: position.coords.latitude
    });
  };
  const errorCallback = (error: any) => {
    console.log(error);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);
  //navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

  // if (longLat.longitude === 0 && longLat.latitude === 0) {
  //   return <div>{<Home />}</div>;
  // } else {
  //   navigate('/weather');
  // }

  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/weather' element={<Weather />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
=======
  const successCallback = (position : any) => {
    console.log(position);
  };

  const errorCallback = (error : any) => {
    console.log(error);
  };

  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  
  const options = {
    method: 'GET',
    url: 'https://weatherbit-v1-mashape.p.rapidapi.com/current',
    params: { lon: '37.147176', lat: '-0.717751' },
    headers: {
      'X-RapidAPI-Key': '3b32d1897bmshd900876b274af28p1d46e5jsn0a440868f822',
      'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
    }
  };

  //fetching data from the API using fetch
  const axios = require('axios');

  // fetch the data and store it in a variable
  const getData = async () => {
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return <div className='App'></div>;
>>>>>>> 4e740f7cbe73b53387c4523bbeb6f4328b45e996
}

export default App;
