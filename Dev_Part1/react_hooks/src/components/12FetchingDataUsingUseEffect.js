import React,{useState,useEffect, useDebugValue} from 'react';
import axios from 'axios';


function FetchingDataUsingUseEffect() {
    const [posts,setPosts] =useState([]);
 
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=>{
            console.log(res);
            setPosts(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    })
    return (
        <div>
            <h1>Fetching Data Using UseEffect</h1>
            <ul>
                {posts.map(post=>(
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default FetchingDataUsingUseEffect;