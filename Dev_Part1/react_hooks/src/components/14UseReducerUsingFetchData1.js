//here we are underastanding using useReducer now


import React, { useReducer, useEffect } from 'react'
import axios from 'axios';

const initialState = {
    loading: true,
    error: '',
    post: {}
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_POST_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_POST_ERROR':
            return {
                loading: false,
                post: {},
                error: 'Something went wrong'
            }
        default:
            return state
    }


}
function UseReducerUsingFetchData1() {
const [state,dispatch] = useReducer(reducer,initialState)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
            .then(res => {
                dispatch({type:'FETCH_POST_SUCCESS',payload:res.data})
            })
            .catch(err => {
              dispatch({type:'FETCH_POST_ERROR'})
            })
    }, [])
    return (
        <div>
            <h1>
                Fetching data using useReducer
            </h1>
            {state.loading ? 'Loading...' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default UseReducerUsingFetchData1;