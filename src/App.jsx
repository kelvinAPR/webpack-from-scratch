import React from 'react';
import Header from './components/Header';
import webpackImg from './assets/webpack.png';

export default function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <img src={webpackImg} alt="" />
      </main>
    </div>
  );
}
