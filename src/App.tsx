import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { Navbar } from './Elements';
import { Home, About, Weather } from './Pages';
import { ILongLat } from './Elements/Types';

import './App.css';

function App() {
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
}

export default App;
