// imports
import React from "react"
import { useState, useEffect } from "react";
import { fetchSellers, deleteSeller } from "../api/api"
import "../styles/sellerList.css"
import RegisterForm from "./RegisterForm";
import { Link } from "react-router-dom";
import {FaTrashAlt} from "react-icons/fa";

function SellersList() {
    const [isLoading, setIsLoading] = useState(true)
    const [listOfSellers, setListOfSellers] = useState([])


    function handleInputDisplay(input) {
        return (input ? input : 'Data Unavailable')
    }

    function handleDelete(id) {
        if(confirm(`Are you sure you want to deleted Seller ${id}?`)){
        deleteSeller(id).then(res=>{setListOfSellers(currentList=>{
            return currentList.filter((seller)=>{return seller.id!=id})
        })
        alert('Successfully deleted user!')
        }).catch(err=>{alert('Try again!')})    
        
        } else {}
    }

    useEffect(() => {
        setIsLoading(true)
        fetchSellers().then(data => {
            setListOfSellers([...data])
            
            setIsLoading(false)
        })
    }, [setListOfSellers])

    return (
        <div className="seller-list-page">
            <div className="register-form">
                <h1>Register as a New Seller</h1>
                <RegisterForm user="seller" />
            </div>

            {isLoading ?
                <div>Loading Sellers .....</div> :
                <>
                    <h2 className="list-title">Current Sellers</h2>
                    <div className="seller-list-container">
                        {listOfSellers.map(seller => {
                            return (
                                <div key={seller.id} className="sellerCard">
                                    <ul className="seller-list-item">
                                        <li className="head"><h2>{handleInputDisplay(seller.firstName)} {seller.surname}</h2><span className="uuid">Seller uid: {seller.id}</span></li>
                                        <li><h3>Address: </h3> <span>{handleInputDisplay(seller.address)}</span></li>
                                        <li><h3>Postcode:</h3><span>{handleInputDisplay(seller.postcode)}</span></li>
                                        <li><h3>Phone:</h3><span>{handleInputDisplay(seller.phone)}</span></li>
                                        <li className="manage-btn"><Link to={`/sellers/${seller.id}`}><h3>Manage Properties</h3></Link></li>
                                    </ul>
                                    <FaTrashAlt className="del-btn" onClick={()=>handleDelete(seller.id)}/>
                                </div>
                            )
                        })
                        }
                    </div>
                </>
            }
        </div>
    )


}

export default SellersList