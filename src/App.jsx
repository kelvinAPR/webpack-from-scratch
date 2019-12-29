import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

import './assets/styles/global.scss';

export default function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}
