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
                The very best in lettings in Manchester!
            </div>
            
            
        </div>

        <br/>

        <div className='property-container'>
            <div>
                Property List Section?
            </div>
            <div>
                Don't see what you're looking for?
                *Link to register property form*
            </div>
        </div>

        <br/>

        <div className='seller-container'>
            <div>
                I'm Selling  <br/>
                *link to find out more*
            </div>
            <div>
                *Display featured property?*
            </div>
        </div>

        <br/>

        <div className='buyer-container'>
            <div>
                I'm Buying  <br/>
                *link to find out more*
            </div>
            <div>
                *Diplay featured property?*
            </div>
        </div>

        <div>

            <h2>Contact Us Form?</h2>
        </div>
        
    </div>)
}

export default Home