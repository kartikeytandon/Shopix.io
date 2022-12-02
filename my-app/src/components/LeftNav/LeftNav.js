import { Link } from "react-router-dom";

export default function LeftNav() {
    function logout() {
        alert("Are you sure you want to Log Out of your account?")
    }
    return (
            <div id="leftNav">
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/wishlist">Wishlist</Link>
                    </li>
                    <li>
                        <Link to="/clients">Clients</Link>
                    </li>
                    <li>
                        <Link to="/aboutUs">About</Link>
                    </li>
                    <div id="button" onClick={logout}>
                        <Link to="/">Logout</Link> 
                    </div> 
                </ul>
            </div>
    )   
}