import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');



    return ( 
        <div className="create">
            <h2>Add a new Blog </h2>
            <form>
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
                    </textarea>
                
                <label> Blog author: </label>
                <select >
                    <option value="Angel"> Angel </option>
                    <option value="Grace"> Grace </option>
                </select>
                <button>Add Blog</button>
                <p>{ title }</p>
            </form>
        </div>
     );
}
 
export default Create;