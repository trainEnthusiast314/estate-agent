import React from 'react';


import city from "../assets/cityphoto.jpg";
function Home() {

    return(
    <div>
        <div className='home-page-topper'>
            <div className='company-name'>
                Welcome to <br/>
                Company Name
            </div>
            <div className='company-info'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            
            
        </div>

        <br/>

        <div className='property-container'>
            <div>
                <h1>Available Properties</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. .</p>
            </div>
            <div>
                <h3>Don't See What You're Looking For?</h3>
                <h3>**Insert Link to add property form**</h3>
            </div>
        </div>

        <br/>

        <div className='seller-container'>
            <div>
                <h1>I'm Selling</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. .</p>
            </div>
            <div>
                <h1>*Display featured property?*</h1>
            </div>
        </div>

        <br/>

        <div className='buyer-container'>
            <div>
                <h1>I'm Selling</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. .</p>
            </div>
            <div>
                <h1>*Display featured property?*</h1>
            </div>
        </div>

        
    </div>)
}

export default Home