//
//
//
//             React App
//      -------------------------props & state                                Fetch   ------------------------
//      |                       |<-----------------|--------------|-------------------|                       |
//      |    Web Application    |                  | HTTP Library |                   |        Server         |              |
//      |                       |------------------|--------------|------------------>|                       |
//      ------------------------- Send                  axios                          ------------------------
//
//
//
//Inside your project folder
//npm install axios
//after this command succesfully run ,axios will be added on your deps.
//
//To use HTTP in a React application, the most common approach is to perform API calls
// to a server using libraries like axios, fetch, or superagent. These API calls are
// typically used to interact with backend services, send data, retrieve information, 
//and handle responses in your React components.
//
//how to handle HTTP requests in React?
//1. Choosing an HTTP Library
//2. HTTP Methods
//3. Handling Errors
//4. Asynchronous Patterns
//5. Handling Loading and Success States
//6. Common Best Practices

//There are two main ways to make HTTP requests in React:->
//Native fetch API (built-in browser functionality)
//Third-party libraries like axios, superagent, etc.

//Using Fetch API:->
//The fetch API is a built-in JavaScript function for making network requests. 
//It returns a Promise that resolves to a Response object.

//Example:-
// useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const data = await response.json();
//         console.log(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
  
//     fetchData();
//   }, []);

//Using Axios:->
//Axios is a popular third-party library for HTTP requests. 
//It provides a simpler syntax than fetch and supports additional features 
//like request and response interceptors, error handling, and automatic JSON transformation.

//Example:-
// import axios from 'axios';
// import { useEffect } from 'react';

// const MyComponent = () => {
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//         console.log(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);
//   return <div>Check the console for API data</div>;
// };


