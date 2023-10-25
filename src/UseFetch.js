import { cleanup } from "@testing-library/react";
import { useState, useEffect } from "react";

const useFetch = (url) => 
{

const [data, setData] = useState(null);
const [isPending, setIsPending] = useState(true);
const [error, setError] = useState(null);


    useEffect(() => /* good for fetching data */
   {
        const abortCont = new abortController();
        
        setTimeout(() =>  
        {
            /* this is a get request to localhost port 8000 */
            fetch(url, { signal: abortCont.signal }) //fetch the url
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
                        if (err.name === 'AbortError')
                        {
                            console.log('fetch aborted');
                        } else
                        {
                            /* console.log(err.message); */
                        setError(err.message);
                        setIsPending(false);
                        }
                    })
                    }, 1000);
                    
                    return() => abortCont.abort();
   }, []);
/*    Here, name is the dependancy, useEffect watches for it and 
   only renders once the button is clicked not for the other functions 
   , but still renders initialy on the 1st load*/

   return { data, isPending, error };
}

export default useFetch;