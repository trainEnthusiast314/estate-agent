import React from 'react';
import {Link, useSearchParams} from 'react-router-dom';
import {  fetchProperties, fetchSellers, fetchSoldProperties } from "../api/api"
import { useEffect } from "react"
import { useState } from "react"


function Home() {   

    const [soldProp, setSoldProp] = useState([])
    const [soldPropId, setSoldPropId]=useState([])
    const [soldPropImg, setSoldPropImg] = useState([])

    useEffect(()=>{
        fetchSoldProperties().then(res=>{return(
            console.log(res),
            setSoldPropId(res[res.length-1].id),
            setSoldPropImg(res[res.length-1].image),
            setSoldProp(res))
        })
    }, [setSoldProp, setSoldPropId, setSoldPropImg])

    // console.log(soldProp[soldProp.length -1])

    // console.log(soldPropId)
    // console.log(soldPropImg)

    let imageStyleSold = {
        backgroundImage : `url(${soldPropImg})`
    };

    return(

        
    <div className='home-page-containers'>

        {/* {console.log(soldProp[0])} */}
        {/* <img src={`${soldProp[0].image}`}></img> */}
        {/* <img src={`${soldPropImg}`}></img>

        <h1>{`${soldPropId}`}</h1> */}

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

            </div>
        </div>  

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
            <div id='hiddenFeature' className='home-page-column column2' style={imageStyleSold}>
                <Link to={`/properties/${soldPropId}`}><h1 className='heading-text'>Recently Sold!</h1></Link>
                {/* <h1 className='heading-text'>Recently Sold!</h1> */}
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