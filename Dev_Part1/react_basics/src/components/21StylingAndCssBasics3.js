//here styling is based on passing single props.

import React from 'react';
import './21StylingAndCssBasics5.css';

function StylingAndCssBasics3(props) {
  let className = props.primary ? 'primary' : '';
  return (
    <div>
      <h1 className={className}>
      Styling And Css Basics
      </h1>
      </div>
  )
}

export default StylingAndCssBasics3;