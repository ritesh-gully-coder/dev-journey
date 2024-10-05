import React, { useState, useEffect, useRef } from 'react'

function useDocumentTitle(count) {

    useEffect(() => {
        document.title = `Count ${count}`
    }, [count])
}

export default useDocumentTitle;