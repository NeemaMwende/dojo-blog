import './App.css';
import Navbar from './Navbar';
import Home from './Home';

// This is the root component of the application which gets rendered to the DOM
function App() {
  const title = "Welcome to the new blog";
  const likes = 50;

  return (
    <div className="App">
      <Navbar />
      <div className="className">
        <h1>{ title }</h1>
        <p>Liked { likes }</p>
        <p>{ Math.random() * 10 }</p>
        <p>{ "Hello, World"}</p>
        <p>{ [1, 2, 3, 4, 5] }</p>
        
        

        <a href={'link'}>Google Site</a>
        
      </div>

    </div>
  );
}

export default App;
 