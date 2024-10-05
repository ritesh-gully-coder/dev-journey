import React from 'react'
import { UserContext, ChannelContext } from '../App';

function UseContextHookDemoF1() {
  return (
    <div>
      <UserContext.Consumer>
        {user => {
          return (
            <ChannelContext.Consumer>
              {channel => {
                return (
                  <div>User Context value {user} ,Channel context value {channel}</div>
                )
              }}

            </ChannelContext.Consumer>
          )
        }}
      </UserContext.Consumer>
    </div>
  )
}

export default UseContextHookDemoF1;
