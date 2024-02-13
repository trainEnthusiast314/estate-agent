// imports

import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { fetchProperty } from "../api/api"
import Booking from './Booking'

function PropertyDetails() {
    const {property_id}=useParams()
    const [isLoading,setIsLoading]=useState(true)
    const [property,setProperty]=useState({})
    useEffect(()=>{
        setIsLoading(true)
        fetchProperty(property_id).then((data)=>{
            setProperty(data)
            setIsLoading(false
                )
        })
    },[setProperty,property_id,setIsLoading])
    return isLoading?<p>... loading</p>:<div>
        <ul key={property_id}>
            <li>property at {property.address}, {property.postcode}</li>
            <li><img src={`${property.image}`} alt={`image of the property at ${property.address}`} /></li>
            <li>
                <p>A {property.bedroom} bedroom {property.type} property with {property.garden?'no':'a'} garden and {property.bathroom} bathroom. Being sold for £{property.price}</p>
            </li>
            <li><p>{property.description}</p></li>
            
        </ul>
        <Booking propId= {property_id}/>
    </div>
    

}

export default PropertyDetails