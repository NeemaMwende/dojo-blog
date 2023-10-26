import { useParams } from "react-router-dom";
import useFetch from './UseFetch';
  
const BlogDetails = () => 
{
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);
    return ( 
        <div className="blog-details">
            {/* <h2>Blog Details - { id }</h2> */}
            {isPending ? 'Loading...' : ''}
            {error && <p>{error}</p>}
            { blog && 
            ( 
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by  { blog.author }</p>
                    <div> { blog.content }</div>
                 </article>
            )}
        </div>
     );
}
 
export default BlogDetails;