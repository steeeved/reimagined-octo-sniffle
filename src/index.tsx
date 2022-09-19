import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider, QueryClient } from 'react-query';
<<<<<<< HEAD
import { BrowserRouter as Router } from 'react-router-dom';
=======
>>>>>>> 4e740f7cbe73b53387c4523bbeb6f4328b45e996
import App from './App';
import './index.scss';
import { WeatherProvider } from './Context/wetherContext';

const queryClient = new QueryClient();

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<<<<<<< HEAD
  <WeatherProvider>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Router>
          <App />
        </Router>
      </QueryClientProvider>
    </React.StrictMode>
  </WeatherProvider>
=======
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
>>>>>>> 4e740f7cbe73b53387c4523bbeb6f4328b45e996
);
