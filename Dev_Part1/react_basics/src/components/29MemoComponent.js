import React from 'react'

function MemoComponent({ name }) {
    console.log("rendering memo componenttttttttttt");
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComponent);

//by using like this React.memo(MemoComponent) ,we can prevent re-rendering of memo component