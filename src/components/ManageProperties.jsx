import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { deleteProperty, fetchProperties } from "../api/api"
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
   
    const handleDelete=(property)=>{
        if(confirm(`This action will permenantly delete ${property.address}, Are you sure you want to proceed`)){

            deleteProperty(property.id).then(res=>{
            setPropertyList(currentList=>{
                return currentList.filter((listing)=>{
                    return listing.id != property.id
                })
            })
            alert('sucess')
        }).catch(err=>{
            alert('try again')
        })
        } else{

        }
        
    }
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
                    <button onClick={e=>{handleDelete(property)}}>DELETE</button>
                </div>
                </div>
                )

        })}
    </div>
}

export default ManageProperties