//Warning: Each child in a list should have a unique "key" prop.
//solution below
//add prop to each item then



import React from 'react'
import ListRendering7a from './19ListRendering7a';

function ListRendering7() {

  const persons = [
    {
      "id": "1",
      "name": "Ritesh",
      "age": "27",
      "profession": "Full Stack Developer",
    },
    {
      "id": "2",
      "name": "Nitesh",
      "age": "23",
      "profession": "Software Trainee",
    },
    {
      "id": "3",
      "name": "Niraj",
      "age": "22",
      "profession": "Full Time Trader",
    }

  ]
  const personList = persons.map(person =>
    <ListRendering7a key={person.id} person={person} />
  )

  return (
    <div>
      {personList}
    </div>
  )
}

export default ListRendering7;