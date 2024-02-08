// imports
import {Link} from 'react-router-dom'
function Nav() {
    return <div className='nav-bar'>
       <Link to='/' className='nav-bar-element'>Home</Link>
       <Link to='/properties' className='nav-bar-element'>Properties</Link>
       <Link to='/sellers' className='nav-bar-element'>Sellers</Link>
       <Link to='/buyers' className='nav-bar-element'>Buyers</Link>
       <Link to='/login' className='nav-bar-element'>Home</Link>
    </div>
}

export default Nav