//Handling errors in HTTP requests is important to notify users 
//about network failures, unauthorized access, or server issues.

//Using fetch with error handling:


// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));

//With axios, error handling is straightforward as well:


// axios.get('https://jsonplaceholder.typicode.com/posts')
//   .then(response => console.log(response.data))
//   .catch(error => {
//     console.error('Error:', error.response ? error.response.data : error.message);
//   });


