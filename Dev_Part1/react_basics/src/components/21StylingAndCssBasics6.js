//Css Modules advantages is as classes is locally scoped


import React from 'react';

const heading = {
  fontSize: '120px',
  color: 'blue'
}

function StylingAndCssBasics6() {

  return (
    <div>
      <h1 className='error'>Error</h1>
      <h1 style={heading}>
        Inline Styling
      </h1>
    </div>
  )
}

export default StylingAndCssBasics6;;