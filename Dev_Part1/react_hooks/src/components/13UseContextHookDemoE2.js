import React, { useContext } from 'react'
import UseContextHookDemoF2 from './13UseContextHookDemoF2';
import { UserContext, ChannelContext } from '../App';

function UseContextHookDemoE2() {
  const user = useContext(UserContext);
  const channnel = useContext(ChannelContext);
  return (
    <div>
      {user} - {channnel}
    </div>
  )
}

export default UseContextHookDemoE2;