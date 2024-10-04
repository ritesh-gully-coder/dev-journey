import React,{useState,useEffect, useDebugValue} from 'react';
import axios from 'axios';


function FetchingDataUsingUseEffect2() {
    const [post,setPost] =useState({});
    const [id,setId] = useState(1);
    const[idFromButtonClicked,setIdFromButtonClicked] = useState(1);

    
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClicked}`)
        .then(res=>{
            console.log(res);
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    },[idFromButtonClicked])
    const handleClick = ()=>{
        setIdFromButtonClicked(id)

    }
    return (
        <div>
            <h1>Fetching Data Usin gUseEffect 2</h1>
            <input type='text' value={id} onChange={e=>setId(e.target.value)}/>
            <button type='button' onClick={handleClick}>Fetch Post</button>
            <h3>{post.title}</h3>
        </div>
    )
}

export default FetchingDataUsingUseEffect2;