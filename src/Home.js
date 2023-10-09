import { useState } from "react";

const Home = () => 
{
    const [blogs, useBlogs] = useState([
        {title: 'My new Website', body: 'lorem lipsum...', author: 'mario', id: 1},
        {title: 'Welcome party', body: 'lorem lipsum...', author: 'angel', id: 2},
        {title: 'Web dev top tips', body: 'lorem lipsum...', author: 'candice', id: 3}
    ]);
    
     
    
    
    return ( 
        <div className="home">

        </div>
     );
}
 
export default Home;