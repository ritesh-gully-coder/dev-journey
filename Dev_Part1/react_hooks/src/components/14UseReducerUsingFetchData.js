//here we are underastanding first using useState


import React, { useState, useEffect } from 'react'
import axios from 'axios';

function UseReducerUsingFetchData() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState({});


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
            .then(res => {
                setLoading(false)
                setPost(res.data)
                setError('')
            })
            .catch(err => {
                setLoading(false)
                setPost({})
                setError('Something went wrong')
            })
    },[])
    return (
        <div>
            <h1>
                Fetching data using useState
            </h1>
            {loading ? 'Loading...' : post.title}
            {error ? error : null}
        </div>
    )
}

export default UseReducerUsingFetchData;