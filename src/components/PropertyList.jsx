// imports

import { useEffect } from "react"
import { useState } from "react"
import {  fetchProperties } from "../api/api"
import { Link, useSearchParams } from "react-router-dom"
import AddProperty from "./AddProperty"

function PropertyList() {
    const [isLoading,setIsLoading]=useState(true)
    const [listOfProperties,setListOfProperties]=useState([])
    const [clicked,setClicked]=useState(true)
    const [searchParams, setSearchParams]=useSearchParams()
    const query= searchParams.get('_sort')
    const order=searchParams.get('_order')
    
    useEffect(()=>{
        setIsLoading(true)
        
        fetchProperties(query).then(data=>{
            
            setListOfProperties(currentList=>{
                if(order==='desc'){
                 return   [...data]
                } else{
                    return [...data].reverse()
                }
               })
            setIsLoading(false)
        })
       
    },[setListOfProperties,query,order])
    //
    const handleChangeQuery=(e)=>{
        
        setSearchParams(currentParams=>{
            
            return {_order:order,_sort:e.target.value}
        })
    }
    const handleChangeOrder=(e)=>{
        
        setSearchParams(currentParams=>{
            return {_sort:query,_order:e.target.value}
        })
    }
    
    //
    return isLoading?<div>...is loading</div>:<div className="property-list-page">
        <h2>list of properties</h2>
        <div className="property-sort-querries">
            <label>sort by : 
                <select onChange={handleChangeQuery} value={query}>
                    <option value="bedroom">bedrooms</option>
                    <option value="bathroom">bathrooms</option>
                    <option value="price">price</option>
                    
                    </select></label>
                    <label>order : 
                <select onChange={handleChangeOrder} value={order}>
                    <option value="asc">accending</option>
                    <option value="desc">decending</option>
                    
                    </select></label>
            
        </div>
        <div className="property-list-container">{listOfProperties.map(property=>{
            return <ul key={property.address} className="property-list-item">
               
                <li><h3>address: {property.address}</h3></li>
                <li><h4>{property.status}</h4></li>
                <Link to={`/properties/${property.id}`}>
                <li><img src={`${property.image}`} width='100vw' height="100vh" alt={`image of property at ${property.address}`}/></li>
                </Link>
                <li>Bedrooms {property.bedroom}</li>
                <li>price £{property.price}</li>

            </ul>
        })}
        <div onClick={e=>{clicked?setClicked(false):null}}>{clicked?<div id="add-property-click">List Property Click here</div>:<AddProperty setListOfProperties={setListOfProperties} setClicked={setClicked}/>}</div>
        
        </div>
        
       
    </div>
}

export default PropertyList