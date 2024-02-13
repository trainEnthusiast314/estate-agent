// imports

import { useEffect } from "react"
import { useState } from "react"
import {  fetchProperties } from "../api/api"
import { Link, useSearchParams } from "react-router-dom"
import AddProperty from "./AddProperty"
import './property-list-style.css'
import bedSVG from '../assets/bed.svg'
import bathroomSVG from '../assets/bath.svg'
function PropertyList() {
    const [isLoading,setIsLoading]=useState(true)
    const [listOfProperties,setListOfProperties]=useState([])
    const [clicked,setClicked]=useState(true)
    const [searchParams, setSearchParams]=useSearchParams()
    let query= searchParams.get('_sort')
    let order=searchParams.get('_order')
    let type=searchParams.get('type')
    let status=searchParams.get('status')
    //
    useEffect(()=>{
        setIsLoading(true)
        if(type===null){
            type=''
        }
        if(status===null){
            status=''
        }
        
         fetchProperties({query,type,status}).then(data=>{
            
            setListOfProperties(currentList=>{
                if(order==='desc'){
                 return   [...data]
                } else{
                    return [...data].reverse()
                }
               })
              
            setIsLoading(false)
        })
        
    },[setListOfProperties,query,order,type,status])
    //
    const handleChangeQuery=(e)=>{
        
        setSearchParams(currentParams=>{
            
            return {_order:order,_sort:e.target.value, type:type,status:status}
        })
    }
    const handleChangeOrder=(e)=>{
        
        setSearchParams(currentParams=>{
            return {_sort:query,_order:e.target.value,type:type,status:status}
        })
    }
    const handleChangeType=(e)=>{
        setSearchParams(currentParams=>{
            return {_sort:query,_order:order, type:e.target.value,status:status }
        })
    }
    const handleChangeStatus=(e)=>{
        setSearchParams(currentParams=>{
            return {_sort:query,_order:order, type:type, status:e.target.value }
        })
    }
    //
    return isLoading?<div>...is loading</div>:<div className="property-list-page">
        
        <div className="property-sort-querries">
            <label>sort by : 
                <select onChange={handleChangeQuery} value={query} className="property-sort-select">
                    <option value="bedroom">bedrooms</option>
                    <option value="bathroom">bathrooms</option>
                    <option value="price">price</option>
                    
                    </select></label>
                    <label>order : 
                <select onChange={handleChangeOrder} value={order} className="property-sort-select">
                    <option value="asc">accending</option>
                    <option value="desc">decending</option>
                    
                    </select></label>
                    <label>type : 
                <select onChange={handleChangeType} value={type} className="property-sort-select">
                 <option value="">All</option>
                    <option value="DETACHED">detached</option>
                    <option value="SEMI-DETACHED">semi detached</option>
                    <option value="TERRACE">terrace</option>
                    <option value="APARTMENT">apartment</option>
                    
                    </select></label>
                    <label>status : 
                <select onChange={handleChangeStatus} value={status} className="property-sort-select">
                 <option value="">All</option>
                    <option value="SOLD">Sold</option>
                    <option value="FOR SALE">For Sale</option>
                   
                    
                    </select></label>
            
        </div>
        <div className="property-list-container">{listOfProperties.map(property=>{
            return (
                <div className={property.status.replaceAll(' ', '')}>
                <div className="ppt title"><Link to={`/properties/${property.id}`}><h1>{property.address}</h1></Link></div>
                <div className="ppt image"><Link to={`/properties/${property.id}`}><img class="property-list-image" src={`${property.image}`} alt={`image of property at ${property.address}`}/></Link></div>
                <div className="ppt description">{property.description}</div>
                <div className="ppt content">
                    <h2>£{property.price}</h2>
                    <h3>{property.address}, {property.postcode}</h3>
                    <p><img src={bedSVG} className="property-list-svg" alt="icon for number of bedrooms"/> {property.bedroom}</p>
                    <p><img src={bathroomSVG} className="property-list-svg" alt='icon for number of bathrooms'/> {property.bathroom}</p>
                    <p>{property.type}</p>
                    <h4>{property.status}</h4>
                </div>
                </div>
                )

        })}
        <div onClick={e=>{clicked?setClicked(false):null}}>{clicked?<div id="add-property-click">List Property Click here</div>:<AddProperty setListOfProperties={setListOfProperties} setClicked={setClicked}/>}</div>
        
        </div>
        </div>
        
       

}

export default PropertyList