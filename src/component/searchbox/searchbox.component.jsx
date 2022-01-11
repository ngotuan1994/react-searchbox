import React from 'react';
import "./searchbox.styles.scss";
import { useState, useRef } from 'react';
const SearchBox = () => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {

    setActive(!isActive);
  };
  const input = useRef(null);
  const handleFocus = () => {
    input.current.focus();
  }
  return (
    <div className={`searchbox`}>
      <input ref={input} className={`searchbox__input${isActive ? ' open' : ''}`} ></input>

      <button className={`searchbox__btn${isActive ? ' open' : ''}`} onClick={() => {
        toggleClass();
        handleFocus();
      }}

      ><i className="fas fa-search"></i></button>
    </div>
  );
};

export default SearchBox;
