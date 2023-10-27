import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Angel');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        const blog = { title, body, author }; /* add the new blog contents to jsondb */
        /* console.log(blog); */

        setIsPending(true);
         
        fetch('http://localhost:8000/blogs', 
        {
            method:'POST', // or 'PUT'
            headers:{ "content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => 
        {
            console.log('new blog added');
            setIsPending(false);
        })
    }


    return ( 
        <div className="create">
            <h2>Add a new Blog </h2>
            <form onSubmit={handleSubmit}> 
                <label> Blog Title: </label>
                    <input 
                    type='text' 
                    placeholder='Enter title here...'
                    required
                    value={title} 
                    onChange={e=>setTitle(e.target.value)}/>
                
                <label> Blog body: </label>
                    <textarea >
                        required
                        value={body}
                        onChange={e=>setBody(e.target.value)}
                    </textarea>
                
                <label> Blog author: </label>
                <select 
                    value={author}
                    onChange={e=>setAuthor(e.target.value)} >
                    <option value="Angel"> Angel </option>
                    <option value="Grace"> Grace </option>
                </select>
                {!isPending && <button >Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
                {/* <p>{ title }</p>
                <p>{ body }</p>
                <p>{ author }</p> */}
            </form>
        </div>
     );
}
 
export default Create;