import React,{useState,useEffect, useDebugValue} from 'react';
import axios from 'axios';


function FetchingDataUsingUseEffect1() {
    const [post,setPost] =useState({});
 
    const [id,setId] = useState(1);
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            console.log(res);
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    },[id])
    return (
        <div>
            <h1>Fetching Data Usin gUseEffect 1</h1>
            <input type='text' value={id} onChange={e=>setId(e.target.value)}/>
            <h3>{post.title}</h3>
        </div>
    )
}

export default FetchingDataUsingUseEffect1;