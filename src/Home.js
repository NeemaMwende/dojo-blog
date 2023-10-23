import { useState, useEffect } from "react";
import BlogList from "./BlogList";



const Home = () => {
    

    /* const handleDelete = (id) => 
    {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    } */
 
    /* const [name, setName] = useState('Mario'); */

    /* renders the component each time it loads */
   
   
   
    return ( 
        <div className="home">
            { blogs && <BlogList blogs={blogs} title="All Blogs!" /* handleDelete={ handleDelete} *//>}
            { IsPending && <div> Loading.... </div>}
            { error && <div>{ error}</div>}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Angel')} title="Angel's Blog" /> */}
           {/*  <button onClick={() => setName('Angel')}>Change name</button>
            <p>{ name }</p> */}
        </div>
     );
}

export default Home;
