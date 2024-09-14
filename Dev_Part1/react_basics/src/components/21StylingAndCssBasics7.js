//Css Modules advantages is as classes is locally scoped
//will get error as follows
//Line 16:22:  'styles' is not defined.
//so we can't accidently used class that is defined for some other component.


import React from 'react';

const heading = {
  fontSize: '120px',
  color: 'blue'
}

function StylingAndCssBasics7() {

  return (
    <div>
      <h1 className={styles.success}>Success</h1>
      <h1 style={heading}>
        Inline Styling
      </h1>
    </div>
  )
}

export default StylingAndCssBasics7;;