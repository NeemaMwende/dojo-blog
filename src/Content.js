import { useState } from "react";
import BlogList from "./BlogList";

const Content = () => {
    const [ blogs, setBlogs] = useState(null);

    useState(() => 
    {
        fetch("http://localhost:8000/blogs")
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

    const [name, setName] = useState('Mario');


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