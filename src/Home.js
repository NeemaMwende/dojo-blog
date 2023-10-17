import { useState } from "react";
import BlogList from "./BlogList";


const Home = () => {
    const [blogs, setBlogs] = useState([
        { id: 1, title: 'First Blog', content: 'This is the first blog.', author: 'Angel' },
        { id: 1, title: 'Second Blog', content: 'This is the first blog.', author: 'Neema' },
        { id: 1, title: 'Third Blog', content: 'This is the first blog.', author: 'Grace' }
    ]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Angel')} title="Angel\s Blog" />
        </div>
     );
}
 
export default Home;