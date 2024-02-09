import React from 'react';


import city from "../assets/cityphoto.jpg";
function Home() {

    return(
    <div>
        <div className='homePageTopper'>
            <h1>Test Text</h1>
            {/* <img src={city}></img>  */}
        </div>
        
        <div className='homePageItems'>
            <h2>About Us Section</h2>
                <ul>
                    <li><h2>Property List Section?</h2></li>
                    <li><h2>Don't see what you're looking for *resister new property link?*</h2></li>
                </ul>

            <h2>Contact Us Form?</h2>
        </div>
        
    </div>)
}

export default Home