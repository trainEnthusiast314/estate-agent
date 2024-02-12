// imports
import {Link} from 'react-router-dom';
import "./components.css";
import logo from "../assets/qalogo.jpg";
import city from "../assets/cityphoto.jpg";

function Nav() {
    return (
        <div>
            <ul className='nav-bar'>
                <li id="firstNav"><img src={logo} id="logo"/></li>
                <li id="hiddenNav"><Link to='/' className={'nav-bar-element, link'}>Home</Link></li>
                <li id="hiddenNav"><Link to='/properties?_sort=bedroom&_order=desc&type=&status=' className={'nav-bar-element, link'}>Properties</Link></li>
                <li id="hiddenNav"><Link to='/sellers' className={'nav-bar-element, link'}>Sellers</Link></li>
                <li id="hiddenNav"><Link to='/buyers' className={'nav-bar-element, link'}>Buyers</Link></li>
                <li id="lastNav"><Link to='/login' className={'nav-bar-element, link'}>Login</Link></li>
            </ul>
        </div>
    )
}

export default Nav 