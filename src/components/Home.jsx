import React from 'react';
import {Link} from 'react-router-dom';

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
                <span>
                <h1 className='title-text'>Available Properties</h1>
                <p className='info-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br/>
                <br/>
                <Link to='/properties?_sort=bedroom&_order=desc&type=&status=' className={'info-link'}>Find out more...</Link>
                </p>
                </span>
            </div>
            <div className='home-page-column column2'>
                <h1 className='heading-text' >Don't See What You're Looking For?</h1>

                <Link className= 'button-link' to='/properties'>Register New Property</Link>

                {/* <div className='button-link' onClick={<Link to='/properties'></Link>}>Register New Property</div> */}

                {/* <button className='button-link' onClick={e=>{
                    
                    $(window).scrollTo();
                    document.getElementById('{!$hiddenFeature}').focus()
                    
                    }}><Link to='/properties?_sort=bedroom&_order=desc&type=&status='>Register New Property</Link></button> */}

                {/* <div className='button-link' onClick={e=>{
                    <Link to='/properties?_sort=bedroom&_order=desc&type=&status='>Register New Property</Link>
                    $(window).scrollTo();
                    document.getElementById('{!$hiddenFeature}').focus()
                    
                    }}>Click me</div> */}

            </div>
        </div>  

        {/* class= "add-property-container" 
            class= "add-property-click"*/}

        <div className='home-page-row'>
            <div className='home-page-column column1 seller-container'>
                <span>
                <h1 className='title-text'>I'm Selling</h1>
                <p className='info-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                <br/>
                <br/>
                <Link to='/sellers' className={'info-link'}>Register Now</Link></p>
                </span>
            </div>
            <div id='hiddenFeature' className='home-page-column column2 recently-sold'>
                <h1 className='heading-text'>Recently Sold!</h1>
            </div>
        </div>

        <div className='home-page-row'>
            <div className='home-page-column column1 buyer-container'>
                <span>
                <h1 className='title-text'>I'm Buying</h1>
                <p className='info-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br/>
                <br/>
                <Link to='/buyers' className={'info-link'}>Register Now</Link></p>
                </span>
            </div>
            <div id='hiddenFeature' className='home-page-column column2 recently-added'>
                <h1 className='heading-text'>Newly Added!</h1>
            </div>
        </div>

    </div>)
}

export default Home