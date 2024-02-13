// imports
import {Link} from 'react-router-dom';
import "./components.css";
import logo from "../assets/qalogo.jpg";
// import icon from "../assets/profileicon.png";

function Nav() {
    return (
        <div className='nav-bar'>

            <img src={logo} id="logo"/>

            <Link to='/login' className={'nav-bar-element, link'}><img id="icon" src="src\assets\profileicon.png"/></Link>

            <ul>
                <li id="hiddenNav"><Link to='/' className={'nav-bar-element, link'}>Home</Link></li>
                <li id="hiddenNav"><Link to='/properties?_sort=bedroom&_order=desc&type=&status=' className={'nav-bar-element, link'}>Properties</Link></li>
                <li id="hiddenNav"><Link to='/sellers' className={'nav-bar-element, link'}>Sellers</Link></li>
                <li id="hiddenNav"><Link to='/buyers' className={'nav-bar-element, link'}>Buyers</Link></li>
                <li id="hiddenNav"><Link to='/login' className={'nav-bar-element, link'}>Login</Link></li>
            </ul>
{/* 
            <Link to='/login' className={'nav-bar-element, link'}><img id="icon" src="src\assets\profileicon.png"/></Link> */}

        </div>
    )
}

export default Nav 