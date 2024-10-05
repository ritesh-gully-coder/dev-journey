import React from 'react'

function UseCallbackHookCount({ text, count }) {
    console.log(`Rendering ${text}`);
    return (
        <div>
            <h2>
                {text} - {count}
            </h2>
        </div>
    )
}

export default React.memo(UseCallbackHookCount);