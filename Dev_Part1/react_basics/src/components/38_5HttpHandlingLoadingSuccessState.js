//Handling Loading and Success States

//When making HTTP requests in React, you often need to track the state
//of the request, such as:

//1.Loading state: while the request is pending.
//2.Success state: when data is successfully fetched.
//3.Error state: if the request fails.

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const MyComponent = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//         setData(response.data);
//         setError(null); // Clear any previous errors
//       } catch (err) {
//         setError('Error fetching data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <ul>
//       {data && data.map(post => (
//         <li key={post.id}>{post.title}</li>
//       ))}
//     </ul>
//   );
// };






//Common Best Practices:-

//Debounce API Calls: For search or typing, debounce requests to prevent sending too many requests.
//Throttling: For limiting how often a function is called in a period.
//Centralize API Logic: Use services or custom hooks for cleaner code.
//Error Handling & Retry Logic: Handle failed requests and implement retry strategies if needed.