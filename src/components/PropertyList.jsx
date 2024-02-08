// imports

import { useEffect } from "react"
import { useState } from "react"
import { fetchProperties } from "../api/api"

function PropertyList() {
    const [isLoading,setIsLoading]=useState(true)
    const [listOfProperties,setListOfProperties]=useState([])
    useEffect(()=>{
        setIsLoading(true)
        fetchProperties().then(data=>{
            setListOfProperties([...data])
            setIsLoading(false)
        })
    },[setListOfProperties])
    
    return isLoading?<div>...is loading</div>:<div className="property-list-page">
        <h2>list of properties</h2>
        <div className="property-list-container">{listOfProperties.map(property=>{
            return <ul key={property.id} className="property-list-item">
                <li><h3>address: {property.address}</h3></li>
                <li><h4>{property.status}</h4></li>
                <li><img src={`${property.image}`} width='100vw' height="100vh" alt={`image of property at ${property.address}`}/></li>
                <li>price £{property.price}</li>
            </ul>
        })}</div>
        
    </div>
}

export default PropertyList