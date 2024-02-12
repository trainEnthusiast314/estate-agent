import React from 'react';


import city from "../assets/cityphoto.jpg";
function Home() {

    return(
    <div className='home-page-containers'>

        <div className='home-page-row'>
            <div className='company-name'>
                Welcome to Company Name
            </div>

            <div className='info-text'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
        </div>

        <div className='home-page-row'>
            <div className='home-page-column column1'>
                <h1 className='title-text'>Available Properties</h1>
                <p className='info-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <div className='home-page-column column2'>
                <h3>Don't See What You're Looking For?</h3>
                <h3>**Insert Link to add property form**</h3>
            </div>
        </div>  

        <div className='home-page-row'>
            <div className='home-page-column column1'>
                <h1 className='title-text'>I'm Selling</h1>
                <p className='info-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. .</p>
            </div>
            <div className='home-page-column column2'>
                <h1>*Display featured property?*</h1>
            </div>
        </div>

        <div className='home-page-row'>
            <div className='home-page-column column1'>
                <h1 className='title-text'>I'm Buying</h1>
                <p className='info-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. .</p>
            </div>
            <div className='home-page-column column2'>
                <h1>*Display featured property?*</h1>
            </div>
        </div>

    </div>)
}

export default Home