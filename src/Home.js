import { useState } from "react";

const Home = () => {

    let name = 'Angel';

    const handleClick = () => 
    {
        name = 'Candace';
        console.log( name );
    }

    /* const handleClickk = (e) => 
    {
        console.log('hello, ninjas', e);
    }

    const handleClickAgain = (name) =>
    {
        console.log('hello' + name);
    } */


    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name }</p>
            <button onClick={handleClick}> Click me</button>
            {/* <button onClick={handleClickk}> Click me</button> */}
            {/* <button onClick={handleClickAgain}> Click me again</button> */}
             {/* anonymous function gets access to the function event automatically */}
            {/* <button onClick={ () => handleClickAgain(' mario ')}> Click me again</button> */}
        </div>
     );
}
 
export default Home;











