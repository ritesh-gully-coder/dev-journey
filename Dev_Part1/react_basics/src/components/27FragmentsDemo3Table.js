import React from 'react'
import FragmentsDemo3Columns from './27FragmentsDemo3Columns'

function FragmentsDemo3Table() {
  return (
    <table>
      <tbody>
        <tr>
          <FragmentsDemo3Columns/>
        </tr>
      </tbody>
    </table>
  )
}

export default FragmentsDemo3Table;

//as a result it is displaying columns 
//but when you open inspects as get console error like as
//Warning: validateDOMNesting(...): <td> cannot appear as a child of <div>
//Warning: validateDOMNesting(...): <div> cannot appear as a child of <tr>.
