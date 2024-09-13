//`key` is not a prop. Trying to access it will result in `undefined` being returned.
// If you need to access the same value within the child component, 
//you should pass it as a different prop.

import React from 'react'

function ListRendering7a({person,key}) {
  return (
    <div>
      <h2>{key}I am {person.name} .I am {person.age} years old. I am {person.profession}</h2>
    </div>
  )
}

export default ListRendering7a;
