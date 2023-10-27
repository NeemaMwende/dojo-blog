const Create = () => {
    return ( 
        <div className="create">
            <h2>Add a new Blog </h2>
            <form>
                <label> Blog Title: </label>
                    <input 
                    type='text' 
                    placeholder='Enter title here...'
                    required />
                
                <label> Blog body: </label>
                    <textarea >
                        required
                    </textarea>
                
                <label> Blog author: </label>
                <select >
                    <option value="Angel"> Angel </option>
                    <option value="Grace"> Grace </option>
                </select>
            </form>
        </div>
     );
}
 
export default Create;