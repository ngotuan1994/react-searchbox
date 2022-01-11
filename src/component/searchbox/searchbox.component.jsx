import React from 'react';
import "./searchbox.styles.scss";
import { useState } from 'react';
const SearchBox = () => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {

    setActive(!isActive);
  }
  return (
    <div className="searchbox">
      <input autoFocus className={ isActive ? 'searchbox__input open' : 'searchbox__input'} ></input>
      <button className='searchbox__btn' onClick={toggleClass}

      ><i className="fas fa-search"></i></button>
    </div>
  );
};

export default SearchBox;
