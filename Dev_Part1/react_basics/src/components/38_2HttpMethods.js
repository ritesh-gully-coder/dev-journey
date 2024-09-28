//GET Request
//Fetching data is typically done with GET.

// using fetch:

// useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())
//       .then(data => console.log(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);
  

//with axios

// useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then(response => console.log(response.data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);
  


//POST Request
//Sending data to a server (e.g., form submission) is done with POST.

//Using fetch:

// const handleSubmit = async (formData) => {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//       const data = await response.json();
//       console.log('Success:', data);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };
  

//With axios:


// const handleSubmit = async (formData) => {
//   try {
//     const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
//     console.log('Success:', response.data);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

//PUT Request
//For updating data, you can use PUT (or PATCH if partially updating).

//Using fetch:

// const updateData = async (id, updatedData) => {
//     try {
//       const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updatedData),
//       });
//       const data = await response.json();
//       console.log('Updated data:', data);
//     } catch (error) {
//       console.error('Error updating data:', error);
//     }
//   };
  
// using axios:

// const updateData = async (id, updatedData) => {
//     try {
//       const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, updatedData);
//       console.log('Updated data:', response.data);
//     } catch (error) {
//       console.error('Error updating data:', error);
//     }
//   };
  

// DELETE Request
// To delete data, use the DELETE method.

// Using fetch:

// const deleteData = async (id) => {
//     try {
//       const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//         method: 'DELETE',
//       });
//       console.log('Data deleted:', response.status);
//     } catch (error) {
//       console.error('Error deleting data:', error);
//     }
//   };
  

// With axios:

// const deleteData = async (id) => {
//   try {
//     const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
//     console.log('Data deleted:', response.status);
//   } catch (error) {
//     console.error('Error deleting data:', error);
//   }
// };