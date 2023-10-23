import { useState, useEffect } from "react";

const useFetch = () => 
{
const [data, setData] = useState(null);
const [IsPending, setIsPending] = useState(true);
const [error, setError] = useState(null);


    useEffect(() => /* good for fetching data */
   {
        setTimeout(() =>  
        {
            /* this is a get request to localhost port 8000 */
    fetch('http://localhost:3000/blogs')
    .then(Response => 
        {
            console.log(Response);
            if(Response.ok)
            {
                throw Error('could not fetch the data for the resource');
                
            }
            return Response.json();
        })
    .then(data => 
        {
            /* console.log("Data received", data); */
            setData(data);
            setIsPending(false);
            setError(null);
        })
    .catch(err => 
        {
            /* console.log(err.message); */
            setError(err.message);
            setIsPending(false);
        })
        }, 1000);
   }, []);
/*    Here, name is the dependancy, useEffect watches for it and 
   only renders once the button is clicked not for the other functions 
   , but still renders initialy on the 1st load*/

   return { data, IsPending, error };
}

export default useFetch;