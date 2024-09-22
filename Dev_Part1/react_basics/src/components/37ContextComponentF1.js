import React, { Component } from 'react'
import { UserConsumer } from './37UserContext1'

export class ContextComponentF1 extends Component {
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

export default ContextComponentF1;