import React, { Component } from 'react'
import { UserConsumer } from './37UserContext'

export class ContextComponentF extends Component {
  render() {
    return (
    //   <div>Context Component F</div>
    <UserConsumer>
        {
            (username)=>{
                return(<div>Hello {username}</div>)

            }
        }
    </UserConsumer>
    )
  }
}

export default ContextComponentF