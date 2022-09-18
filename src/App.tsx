import { useQuery } from 'react-query';
import axios from 'axios';

import './App.css';

function App() {
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
}

export default App;
