import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { deleteProperty, fetchProperties, updatePropertyStatus } from "../api/api"
import { Link } from "react-router-dom"
import './property-list-style.css'
import "../styles/sellerList.css"
import { fetchSellersbyID } from "../api/api"

function ManageProperties(){
    const {seller_id}=useParams()
    const [propertyList,setPropertyList]=useState([])
    const [sellerInfo, setSellerInfo]=useState([])

    //
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
   //

    useEffect(()=>{
        fetchSellersbyID(seller_id).then(data=>{
            setSellerInfo(data)
        })
    },[setSellerInfo])

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
    const handleClickStatus=(id,status)=>{
        if(status==='FOR SALE'){
            updatePropertyStatus(id,{status:'SOLD'})
            setPropertyList(currentList=>{
                return currentList.map(item=>{
                    if (item.id==id){
                        item.status='SOLD'
                        return item
                    } else{
                        return item
                    }
                })
            })
        } else{
            updatePropertyStatus(id,{status:'FOR SALE'})
            setPropertyList(currentList=>{
                return currentList.map(item=>{
                    if (item.id==id){
                        item.status='FOR SALE'
                        return item
                    } else{
                        return item
                    }
                })
            })
        }
        
    }
    //
    return <div>
                <div className="sellerCard">
                    <h1>Manage Properties for</h1>
                        <ul key={sellerInfo.id} className="seller-list-item">
                         <li className="head"><h2>{sellerInfo.firstName} {sellerInfo.surname}</h2><span className="uuid">Seller uid: {sellerInfo.id}</span></li>
                         <li><h3>Address: </h3> <span>{sellerInfo.address}</span></li>
                         <li><h3>Postcode:</h3><span>{sellerInfo.postcode}</span></li>
                         <li><h3>Phone:</h3><span>{sellerInfo.phone}</span></li>
                         </ul>
                </div>
        {propertyList.map(property=>{
            return (               
                <div className={property.status.replaceAll(' ', '')}>
                <div className="ppt title"><Link to={`/properties/${property.id}`}><h1>{property.address}</h1></Link></div>
                <div className="ppt image"><Link to={`/properties/${property.id}`}><img className="property-list-image" src={`${property.image}`} alt={`image of property at ${property.address}`}/></Link></div>
                <div className="ppt description">{property.description}</div>
                <div className="ppt content">
                    <h2>£{property.price}</h2>
                    <h3>{property.address}, {property.postcode}</h3>
                    <p>Bedrooms: {property.bedroom}</p>
                    <p>Bathrooms: {property.bathroom}</p>
                    <p>{property.type}</p>
                    <h4><button onClick={e=>{handleClickStatus(property.id,property.status)}}>{property.status}</button></h4>
                    <button onClick={e=>{handleDelete(property)}}>DELETE</button>
                    
                </div>
                </div>
                )

        })}
    </div>
}

export default ManageProperties