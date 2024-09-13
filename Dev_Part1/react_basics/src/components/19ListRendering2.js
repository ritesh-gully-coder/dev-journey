import React from 'react'

function ListRendering2() {
  const names = ['Ritesh', 'Nitesh', 'Niraj'];
  return (
    //with mapping process in  return 
    <div>
      {names.map(name =><h2>{name}</h2>)}
    </div>
  )
}

export default ListRendering2;
