//Inline css in React is not specified as string,
//instead it is specified as object whose key is in camelCase version of style name 
//and whose value is usually an string.



import React from 'react';

const heading = {
  fontSize: '120px',
  color: 'green'
}

function StylingAndCssBasics5() {

  return (
    <div>
      <h1 style={heading}>
        Inline Styling
      </h1>
    </div>
  )
}

export default StylingAndCssBasics5;