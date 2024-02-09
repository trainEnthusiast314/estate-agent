// imports
import {Link} from 'react-router-dom';
import "./navbar.css";
import logo from "../assets/qalogo.jpg";
import city from "../assets/cityphoto.jpg";

function Nav() {
    return (
        <div>
        <ul className='nav-bar'>
            <li id="firstNav"><img src={logo} id="logo"/></li>
            <li id="hiddenNav"><Link to='/' className='nav-bar-element'>Home</Link></li>
            <li id="hiddenNav"><Link to='/properties' className='nav-bar-element'>Properties</Link></li>
            <li id="hiddenNav"><Link to='/sellers' className='nav-bar-element'>Sellers</Link></li>
            <li id="hiddenNav"><Link to='/buyers' className='nav-bar-element'>Buyers</Link></li>
            <li id="lastNav"><Link to='/login' className='nav-bar-element'>Login</Link></li>
        </ul>
       
    </div>
    )
}

export default Nav 