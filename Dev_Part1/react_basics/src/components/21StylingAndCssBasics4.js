//here styling is based on passing multiple props.


import React from 'react';
import './21StylingAndCssBasics5.css';

function StylingAndCssBasics4(props) {
  let className = props.primary ? 'primary' : '';
  return (
    <div>
      <h1 className={`${className} font-xl`}>
      Styling And Css Basics
      </h1>
      </div>
  )
}

export default StylingAndCssBasics4;