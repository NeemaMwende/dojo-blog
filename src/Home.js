import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => 
{
    const [blogs, setBlogs] = useState([
        {title: 'My new Website', body: 'lorem lipsum...', author: 'mario', id: 1},
        {title: 'Welcome party', body: 'lorem lipsum...', author: 'angel', id: 2},
        {title: 'Web dev top tips', body: 'lorem lipsum...', author: 'candice', id: 3}
    ]);
      
    
    return ( 
        <div className="home">
            {/* props enable one to pass data from the parent component
            to the child component: home to bloglist */}
             <BlogList blogs={blogs} />
        </div>
     );
}
 
export default Home;