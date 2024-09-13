import React from 'react'

function ListRendering4() {
  
  const persons = [
    {
      "id":"1",
      "name":"Ritesh",
      "age":"27",
      "profession":"Full Stack Developer",
    },
    {
      "id":"2",
      "name":"Nitesh",
      "age":"23",
      "profession":"Software Trainee",
    },
    {
      "id":"3",
      "name":"Niraj",
      "age":"22",
      "profession":"Full Time Trader",
    }

  ]
  const personList = persons.map(person=>
    <h2>I am {person.name} .I am {person.age} years old. I am {person.profession}</h2>
  )

  return (
    <div>
      {personList}
    </div>
  )
}

export default ListRendering4;
