import React from 'react'

function ListRendering1() {
  const names = ['Ritesh', 'Nitesh', 'Niraj'];
  return (
    // manual process without mapping
    <div>
      <h2>{names[0]}</h2>
      <h2>{names[1]}</h2>
      <h2>{names[2]}</h2>
    </div>
  )
}

export default ListRendering1;
