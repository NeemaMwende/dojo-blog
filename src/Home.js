import { useState, useEffect } from "react";
import BlogList from "./BlogList";



const Home = () => {
    const [blogs, setBlogs] = useState(/* [
        { id: 1, title: 'First Blog', content: 'This is the first blog.', author: 'Angel' },
        { id: 1, title: 'Second Blog', content: 'This is the first blog.', author: 'Neema' },
        { id: 1, title: 'Third Blog', content: 'This is the first blog.', author: 'Angel' }
    ] */ null);
const [IsPending, setIsPending] = useState(true);
const [error, setError] = useState(null);

    /* const handleDelete = (id) => 
    {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    } */
 
    const [name, setName] = useState('Mario');

    /* renders the component each time it loads */
   useEffect(() => /* good for fetching data */
   {
        setTimeout(() => 
        {
            /* this is a get request to localhost port 8000 */
    fetch('http://localhost:3000/blogs')
    .then(Response => 
        {
            console.log(Response);
            if(Response.ok)
            {
                throw Error('could not fetch the data for the resource');
                
            }
            return Response.json();
        })
    .then(data => 
        {
            /* console.log("Data received", data); */
            setBlogs(data);
            setIsPending(false);
            setError(null);
        })
    .catch(err => 
        {
            /* console.log(err.message); */
            setError(err.message);
            setIsPending(false);
        })
        }, 1000);
   }, []);
/*    Here, name is the dependancy, useEffect watches for it and 
   only renders once the button is clicked not for the other functions 
   , but still renders initialy on the 1st load*/
   
   
    return ( 
        <div className="home">
            { blogs && <BlogList blogs={blogs} title="All Blogs!" /* handleDelete={ handleDelete} *//>}
            { IsPending && <div> Loading.... </div>}
            { error && <div>{ error}</div>}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Angel')} title="Angel's Blog" /> */}
            <button onClick={() => setName('Angel')}>Change name</button>
            <p>{ name }</p>
        </div>
     );
}

export default Home;
