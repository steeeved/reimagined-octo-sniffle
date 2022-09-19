import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider, QueryClient } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.scss';
import { WeatherProvider } from './Context/wetherContext';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <WeatherProvider>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Router>
          <App />
        </Router>
      </QueryClientProvider>
    </React.StrictMode>
  </WeatherProvider>
);
