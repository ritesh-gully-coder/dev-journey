import React from 'react'

function ListRenderingndexAsKeyAntiPattern1() {
 const names=['Ritesh','Nitesh','Niraj']
  const nameList = names.map((name,index) =>
    <h2 key={index} >{index} {name}</h2>
  )

  return (
    <div>
      {nameList}
    </div>
  )
}

export default ListRenderingndexAsKeyAntiPattern1;