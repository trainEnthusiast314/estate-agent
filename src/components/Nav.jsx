import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Nav.css'
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

function ResponsiveBurger() {
  const CustomBurgerIcon = () => <img className="bm-img" src="src\assets\menus.png" />
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 768;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  if (width > breakPoint) {
    return (
      <div className='nav-bar'>
            <ul>
                <li className="hiddenNav"><Link to='/' className={'link'}>Home</Link></li>
                <li className="hiddenNav"><Link to='/properties?_sort=bedroom&_order=desc&type=&status=' className={'link'}>Properties</Link></li>
                <li className="hiddenNav"><Link to='/sellers' className={'link'}>Sellers</Link></li>
                <li className="hiddenNav"><Link to='/buyers' className={'link'}>Buyers</Link></li>

            </ul>

        </div>
    )
  } else {
    return (
      <div className='nav-bar'>
        <div class ='nav-strip'>
        <Menu right customBurgerIcon={ <CustomBurgerIcon /> }>
        <Link to='/' className={'link'}>Home</Link>
        <Link to='/properties?_sort=bedroom&_order=desc&type=&status=' className={'link'}>Properties</Link>
        <Link to='/sellers' className={'link'}>Sellers</Link>
        <Link to='/buyers' className={'link'}>Buyers</Link>
      </Menu>
      </div>
      </div>
    );
  }
}
export default ResponsiveBurger;