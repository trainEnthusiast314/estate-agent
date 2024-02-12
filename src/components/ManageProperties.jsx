import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { fetchProperties } from "../api/api"
import { Link } from "react-router-dom"
import './property-list-style.css'
function ManageProperties(){
    const {seller_id}=useParams()
    const [propertyList,setPropertyList]=useState([])
    
    useEffect(()=>{
        fetchProperties({query:'',type:'',status:''}).then(data=>{
            
            let arr=data.filter((property)=>{
                return property.sellerId==seller_id
            })
            
            return arr
        }).then(arr=>{
            setPropertyList(arr)
        })
    },[setPropertyList])
   

    return <div>
        {propertyList.map(property=>{
            return (

                <div className="property-wrapper" key={property.id}>
                <div className="ppt title"><Link to={`/properties/${property.id}`}><h1>{property.address}</h1></Link></div>
                <div className="ppt image"><Link to={`/properties/${property.id}`}><img className="property-list-image" src={`${property.image}`} alt={`image of property at ${property.address}`}/></Link></div>
                <div className="ppt description">{property.description}</div>
                <div className="ppt content">
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
    </div>
}

export default ManageProperties