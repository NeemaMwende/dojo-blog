import { useParams } from "react-router-dom";
import useFetch from './UseFetch';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
  
const BlogDetails = () => 
{
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);

    const handleClick = () => 
    {
        fetch('http://localhost:8000/blogs/' + blog.id, 
        {
            method: 'DELETE'
        }).then (() => 
        {
            history.push('/');
        })
    }
    return ( 
        <div className="blog-details">
            {/* <h2>Blog Details - { id }</h2> */}
            {/* {isPending ? 'Loading...' : ''} */}
            { isPending && <div> loading ... </div>}
            {error && <p>{error}</p>}
            { blog && 
            ( 
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by  { blog.author }</p>
                    <div> { blog.content }</div>
                    <button onClick={ handleClick }>Delete Blog</button>
                 </article>
            )}
        </div>
     );
}
 
export default BlogDetails;