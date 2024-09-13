import React from 'react'

function ListRendering3() {
  const names = ['Ritesh', 'Nitesh', 'Niraj'];
  const namesList = names.map(name => <h2>{name}</h2>)
  return (
    //with mapping but call above return 
    <div>
      {namesList}
    </div>
  )
}

export default ListRendering3;
