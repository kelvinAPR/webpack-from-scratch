import React from 'react';
import Header from './components/Header';
import webpackImg from './assets/webpack.png';

const App = () => {
  return (
    <div>
      <heading>
        <Header />
      </heading>
      <main>
        <img src={webpackImg} alt="" />
      </main>
    </div>
  );
};

export default App;
