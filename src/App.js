import Navbar from './Navbar';
import Home from './Home';
import MyComponent from './MyComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



// This is the root component of the application which gets rendered to the DOM
function App() {
  // const title = "Welcome to the new blog";
  // const likes = 50;
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
          <Home /> 
        {/*  {/* <h1>{ title }</h1>
          <p>Liked { likes }</p>
          <p>{ Math.random() * 10 }</p>
          <p>{ "Hello, World"}</p>
          <p>{ [1, 2, 3, 4, 5] }</p> */}
          {/* <a href={'link'}>Google Site</a> */}
      </div>
    </div>
  </Router>
  );
}

export default App;
 