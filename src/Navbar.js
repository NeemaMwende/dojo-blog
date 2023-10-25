import { link } from 'react-router-dom';

// use an sfc command
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/"> Home </Link>
                <Link to="/create" /* style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }} */> New Blog </Link>
            </div> 
        </nav>
     );
}
 
export default Navbar;