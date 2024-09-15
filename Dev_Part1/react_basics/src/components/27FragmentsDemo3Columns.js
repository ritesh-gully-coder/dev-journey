import React from 'react'

function FragmentsDemo3Columns() {
  return (
    <div>
      <td>Name</td>
      <td>Ritesh</td>
    </div>
  )
}

export default FragmentsDemo3Columns;

//as a result it is displaying columns 
//but when you open inspects as get console error like as
//Warning: validateDOMNesting(...): <td> cannot appear as a child of <div>
//Warning: validateDOMNesting(...): <div> cannot appear as a child of <tr>.
