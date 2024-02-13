import React from 'react';
import {Link} from 'react-router-dom';


import city from "../assets/cityphoto.jpg";
function Home() {

    return(
    <div className='home-page-containers'>

        <div className='home-page-row'>
            <div className='company-name'>
                Welcome to Company Name
            </div>

            <div className='about-text'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            
        </div>

        <div className='home-page-row'>
            <div className='home-page-column column1 property-container'>
                <h1 className='title-text'>Available Properties</h1>
                <p className='info-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br/>
                <br/>
                <Link to='/properties?_sort=bedroom&_order=desc&type=&status=' className={'info-link'}>Find out more...</Link>
                </p>
            </div>
            <div className='home-page-column column2'>
                <h1 className='heading-text' >Don't See What You're Looking For?</h1>

                <button className='button-link'>Register New Property</button>

                <button className='button-link'><Link to='/properties?_sort=bedroom&_order=desc&type=&status=' className={'info-link'}>Register New Property</Link></button>

            </div>
        </div>  

        {/* class= "add-property-container" 
            class= "add-property-click"*/}

        <div className='home-page-row'>
            <div className='home-page-column column1 seller-container'>
                <h1 className='title-text'>I'm Selling</h1>
                <p className='info-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                <br/>
                <br/>
                <Link to='/sellers' className={'info-link'}>Register Now</Link></p>
            </div>
            <div id='hiddenFeature' className='home-page-column column2 recently-sold'>
                <h1 className='heading-text'>Recently Sold!</h1>
            </div>
        </div>

        <div className='home-page-row'>
            <div className='home-page-column column1 buyer-container'>
                <h1 className='title-text'>I'm Buying</h1>
                <p className='info-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br/>
                <br/>
                <Link to='/buyers' className={'info-link'}>Register Now</Link></p>
            </div>
            <div id='hiddenFeature' className='home-page-column column2 recently-added'>
                <h1 className='heading-text'>Newly Added!</h1>
            </div>
        </div>

    </div>)
}

export default Home