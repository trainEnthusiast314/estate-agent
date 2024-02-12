// imports

import { useEffect } from "react"
import { useState } from "react"
import { fetchProperties } from "../api/api"
import { Link } from "react-router-dom"
import AddProperty from "./AddProperty"
import './property-list-style.css'

function PropertyList() {
    const [isLoading,setIsLoading]=useState(true)
    const [listOfProperties,setListOfProperties]=useState([])
   const [clicked,setClicked]=useState(true)
    useEffect(()=>{
        setIsLoading(true)
        fetchProperties().then(data=>{
            setListOfProperties([...data])
            setIsLoading(false)
        })
    },[setListOfProperties])
    
    return isLoading?<div>...is loading</div>:<div className="property-list-page">
        {listOfProperties.map(property=>{
            return (

                <div class="property-wrapper">
                <div class="ppt title"><Link to={`/properties/${property.id}`}><h1>{property.address}</h1></Link></div>
                <div class="ppt image"><Link to={`/properties/${property.id}`}><img class="property-list-image" src={`${property.image}`} alt={`image of property at ${property.address}`}/></Link></div>
                <div class="ppt description">{property.description}</div>
                <div class="ppt content">
                    <h2>£{property.price}</h2>
                    <h3>{property.address}, {property.postcode}</h3>
                    <p>Bedrooms: {property.bedroom}</p>
                    <p>Bathrooms: {property.bathroom}</p>
                    <p>{property.type}</p>
                    <h4>{property.status}</h4>
                </div>
                </div>
                )

        })}
        <div onClick={e=>{clicked?setClicked(false):null}}>{clicked?<div id="add-property-click">List Property Click here</div>:<AddProperty setListOfProperties={setListOfProperties} setClicked={setClicked}/>}</div>
        
        </div>
        
       

}

export default PropertyList