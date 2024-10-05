import React, { useState, useEffect, useRef } from 'react'
import useDocumentTitle from './hooks/19useDocumentTitle';

function UseDocumentTitleHookOne() {
    const [count, setCount] = useState(0);
    useDocumentTitle(count)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count - {count}</button>
        </div>
    )
}

export default UseDocumentTitleHookOne;