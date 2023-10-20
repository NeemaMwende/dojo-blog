import React, { useState, useEffect } from 'react';
import BlogList from "./BlogList";

function MyComponent() {
  // Define a state variable to store the JSON data
  const [blogs, setBlogs] = useState(null);
  const [name, setName] = useState('Mario');
 
  useEffect(() => {
    // Inside the useEffect function, you can fetch and import the JSON data.
    // You can use the Fetch API or other methods to do this.

    fetch('http://localhost:8000/blogs')
      .then(response => response.json())
      .then(data => {
        // Update the state variable with the JSON data
        setBlogs(data);
      })
      .catch(error => {
        console.error('Error fetching JSON data:', error);
      });
  }, []); // The empty dependency array ensures that the effect runs only once on component mount

  // You can render your component with the JSON data
  return (
    <div className='mycomponent'>
      {blogs ? (
        <pre>{JSON.stringify(blogs, null, 2)}</pre>
      ) : (
        <p>Loading JSON data...</p>
      )}
       { blogs && <BlogList blogs={blogs} title="All Blogs!" /* handleDelete={ handleDelete} *//>}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Angel')} title="Angel's Blog" /> */}
            <button onClick={() => setName('Angel')}>Change name</button>
            <p>{ name }</p>
    </div>
  );
}

export default MyComponent;
