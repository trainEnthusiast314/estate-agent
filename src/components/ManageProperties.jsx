import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { deleteProperty, fetchProperties, updateListingStatus, updatePropertyStatus } from "../api/api"
import { Link } from "react-router-dom"
import './property-list-style.css'
import "../styles/sellerList.css"
import { fetchSellersbyID } from "../api/api"
import bedSVG from '../assets/bed.svg'
import bathroomSVG from '../assets/bath.svg'
import flat from '../assets/apartments.png'
import detached from '../assets/home.png'
import semiDetached from '../assets/semi-detached.png'
import terrace from '../assets/terraced-house.png'
function ManageProperties(){
    const {seller_id}=useParams()
    const [propertyList,setPropertyList]=useState([])
    const [sellerInfo, setSellerInfo]=useState({})

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
    const handleClickStatus=(id,status,e)=>{
        if(status==='FOR SALE'){
            e.target.style.backgroundColor='red'
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
            e.target.style.backgroundColor='green'
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
    const handleClickListing=(property,e)=>{
        let update=property.listed?false:true
        update?e.target.style.backgroundColor='green':e.target.style.backgroundColor='red'
        updateListingStatus(property.id,{listed:update})
        setPropertyList(currentList=>{
            return currentList.map(item=>{
                if (item.id==property.id){
                    item.listed=update
                    return item
                }else{return item}
            })
        })
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
            let propertyTypeIcon
            switch(property.type){
                case 'DETACHED':
                    propertyTypeIcon=detached
                    break
                case 'SEMI-DETACHED':
                    propertyTypeIcon=semiDetached
                    break
                case 'APARTMENT':
                    propertyTypeIcon=flat
                    break
                case 'TERRACE':
                    propertyTypeIcon=terrace
                    break
                
            }
            return (               
                <div className={property.status.replaceAll(' ', '')} key={property.id}>
                <div className="ppt title"><Link to={`/properties/${property.id}`}><h1>{property.address}</h1></Link></div>
                <div className="ppt image"><Link to={`/properties/${property.id}`}><img className="property-list-image" src={`${property.image}`} alt={`image of property at ${property.address}`}/></Link></div>
                <div className="ppt description">{property.description}</div>
                <div className="ppt content">
                    <h2>£{property.price}</h2>
                    <h3>{property.address}, {property.postcode}</h3>
                    <p><img src={bedSVG} className="property-list-svg" alt="icon for number of bedrooms"/> {property.bedroom}</p>
                    <p><img src={bathroomSVG} className="property-list-svg" alt='icon for number of bathrooms'/> {property.bathroom}</p>
                    <p> <img src={propertyTypeIcon} alt={`icon illustrating property type of ${property.type}`} className="property-list-svg"/> {property['type'].toLowerCase()}</p>
                    <h4><button onClick={e=>{handleClickStatus(property.id,property.status,e)}} className="manage-property-status">{property.status}</button></h4>
                    <button onClick={e=>{handleDelete(property)}} className="manage-property-delete">DELETE</button>
                    <button onClick={e=>{handleClickListing(property,e)}} className="manage-property-status">{property.listed?'listed':'unlisted'}</button>
                </div>
                </div>
                )

        })}
    </div>
}

export default ManageProperties