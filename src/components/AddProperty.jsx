// imports

import { useEffect, useState } from "react"
import { fetchSellers, postProperty } from "../api/api"

function AddProperty({setListOfProperties, setClicked}) {
    const [input,setInput]=useState({})
    const [postedProperty,setPostedProperty]=useState({})
    const [sellers,setSellers]=useState([])
    const handleChange=(e)=>{
        setInput(current=>{
            return {...current, [e.target.name]: e.target.value}
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
    
        if(sellers.filter(item=>{return item.id===input.sellerId}).length>0){
            if(Object.keys(input).length===9){
            
            setPostedProperty(current=>{
                return {...input, status:"FOR SALE" }
            })
           
            }
        else{alert('please fill in all details before proceeding')}
        } else{
            alert('this seller does not exsist')
            setClicked(true)
            setInput({})
        }
        
        
    }
    useEffect(()=>{
        fetchSellers().then(data=>{
            setSellers(data)
        })
        if(Object.keys(postedProperty).length===10){
             setListOfProperties(current=>{
                return [...current, postedProperty]
                
            })
            setClicked(true)
            setInput({})
            postProperty(postedProperty)
            
        }
        
    },[setPostedProperty,postedProperty])

   
    
    return <div className="add-property-container">
       <form className="add-property-form" onSubmit={handleSubmit}>
       <label>seller Id: <input onChange={handleChange} type="text" placeholder="12" required name="sellerId"/></label>

        <label>Address: <input type="text" name="address" placeholder="Somewhere House, Some Street, Some City" required onChange={handleChange} /></label>

        <label>Post Code: <input onChange={handleChange} type="text" placeholder="SO1 2ME" name="postcode" required/></label>

        <label >Property Type: <select required name="type" onChange={handleChange} >
            <option value="">-----</option>
            <option value="DETACHED">DETACHED</option>
            <option value="SEMI-DETACHED">SEMI-DETACHED</option>
            <option value="TERRACE">TERRACE</option>
            <option value="APARTMENT">APARTMENT</option>
        </select></label>
         
        <label>Price: £<input onChange={handleChange} type="number" placeholder="30000" required name="price" min='1'/></label>

        <label>Bedrooms: <input onChange={handleChange} type="number" placeholder="e.g. 2" min='1' max='30' required name="bedroom"/></label>

        <label>Bathrooms: <input onChange={handleChange} type="number" placeholder="e.g. 1" min='1' max='30' required name="bathroom"/></label>

        <label>add a description: <textarea onChange={handleChange} cols="30" rows="10" name="description"></textarea></label>

        <label>add property image: <input onChange={handleChange} type="url" name="image" placeholder="image address e.g.https://house-placeholder.png"/></label>
        
        <input type="submit" />
       </form>
    <button id='close-add-property' onClick={e=>{ setClicked(true)}}>Close</button>
    </div>

}

export default AddProperty