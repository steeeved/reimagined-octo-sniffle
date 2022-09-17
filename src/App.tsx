import { useQuery } from 'react-query';
import axios from 'axios';

import './App.css';

function App() {
  const apiKey = '535f82aa5aaf100cf054ac22471e1a03';
  const lat = 33.44;
  const lon = -94.04;
  const { isLoading, error, data } = useQuery(['wetherData'], () => {
    return axios.get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${apiKey}`
    );
  });

  console.log(data);
  console.log(error);

  return <div className='App'></div>;
}

export default App;
