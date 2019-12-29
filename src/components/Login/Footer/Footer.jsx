import React from 'react';
import './Footer.scss';

export default function Footer() {
  return (
    <div className="__loginFooter">
      <h2>Reuters News:</h2>
      <div className="__marqueHolder">
        <marquee>
          <span>Oil jumps above $61 on talk of further OPEC+ suppy curbs</span>
          <span>
            Hong Kong Airlines told to improve finances or reduce cuts on local
            aviation
          </span>
        </marquee>
      </div>
      <p>&copy; 2019 United Bank for Africa. All Rights Reserved.</p>
    </div>
  );
}
