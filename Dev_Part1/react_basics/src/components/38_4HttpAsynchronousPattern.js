//Asynchronous Patterns

//HTTP requests are asynchronous, meaning they don’t block the execution of your code. 
//You can handle asynchronous operations using:

//1>Promises (then/catch)
//2>async/await (preferred for readability)

//For example, using async/await with fetch:


// const fetchData = async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };