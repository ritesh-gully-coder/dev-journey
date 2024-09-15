import { InsertEmoticonTwoTone } from '@mui/icons-material';
import React from 'react'

function FragmentsDemo3Columns2() {
  const items = [];


  return (
    <React.Fragment>
      {
        items.map(item => (
          <React.Fragment key={item.id}>
            <h1>Title</h1>
            <p>{item.title}</p>

          </React.Fragment>
        ))
      }
      <td>Name</td>
      <td>Ritesh</td>

    </React.Fragment>
  )
}

export default FragmentsDemo3Columns2;


