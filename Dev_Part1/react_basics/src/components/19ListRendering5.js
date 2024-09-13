import React from 'react'
import ListRendering5a from './19ListRendering5a';

function ListRendering4() {

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
    <ListRendering5a person={person} />
  )

  return (
    <div>
      {personList}
    </div>
  )
}

export default ListRendering4;
