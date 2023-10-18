import { useState } from "react";
import BlogList from "./BlogList";

const Content = () => {
    const [ blogs, setBlogs] = useState(null);

    useState(() => 
    {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => 
        {
            return res.json()
        })
            .then(data => 
        { 
            console.log(data)
        })
    }, []);

    const handleDelete = (id) => 
    {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }


    return (  
        <div className="home">
        { blogs && <BlogList blogs={blogs} title="All Blogs!" /* handleDelete={ handleDelete} *//>}
        {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Angel')} title="Angel's Blog" /> */}
        <button onClick={() => setName('Angel')}>Change name</button>
        <p>{ name }</p>
    </div>
    );
}
 
export default Content;