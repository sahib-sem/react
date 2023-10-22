import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>first React App - Blog!!</h1>
            <div className="link">
                <Link to="">Home</Link>
                <Link to="create"
                style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: "8px"
                }}
                >New Blog</Link>

            </div>
        </nav>
     );
}
 
export default Navbar;