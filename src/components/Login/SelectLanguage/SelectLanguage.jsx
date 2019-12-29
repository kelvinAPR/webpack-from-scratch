import React, { useState } from 'react';
import './SelectLanguage.scss';

export default function SelectLanguage() {
  const [showLanguages, showLanguagesFn] = useState(false);
  const [slideDirection, setSlideDirection] = useState('slideInUp');
  const [rotateSpan, setRotateSpan] = useState(false);

  function showLanguagesFnC() {
    showLanguagesFn(true);
    setSlideDirection('slideInUp');
    setRotateSpan(true);
  }

  function hideLanguagesFnC() {
    showLanguagesFn(setTimeout(() => showLanguagesFn(false), 600));
    setSlideDirection('slideOutDown');

    setRotateSpan(false);
  }

  return (
    <div
    className={`select_language_container animated fadeInUp del3 show_${showLanguages ? 'one' : 'two'}`}
      onMouseLeave={hideLanguagesFnC}
    >
      <div
        className={`__select ${showLanguages && ''}`}
        onMouseOver={showLanguagesFnC}
      >
        <span>Select language </span>
        <i
          className={`angle down icon tbh ${rotateSpan && '__rotateCaret'}`}
        ></i>
      </div>
      {showLanguages && (
        <div
          // onClick={hideLanguagesFnC}
          className={`animated __selectItems ${slideDirection} "`}
        >
          <p>Swahili</p>
          <p>German</p>
          <p>Portuguese</p>
          <p>French</p>
          <p>Spanish</p>
        </div>
      )}
    </div>
  );
}
