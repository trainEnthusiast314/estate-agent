 // imports
import React from "react"
import { useState, useEffect } from "react";
import { fetchBuyers, deleteBuyer } from "../api/api"
import "../styles/buyerList.css"
import RegisterForm from "./RegisterForm";
import {FaTrashAlt} from "react-icons/fa";


function BuyersList() {
    const [isLoading, setIsLoading] = useState(true)
    const [listOfBuyers, setListOfBuyers] = useState([])


    function handleInputDisplay(input) {
        return (input ? input : 'Data Unavailable')
    }

    function handleDelete(id) {
        if(confirm(`Are you sure you want to deleted Buyer ${id}?`)){
        deleteBuyer(id).then(res=>{setListOfBuyers(currentList=>{
            return currentList.filter((buyer)=>{return buyer.id!=id})
        })
        alert('Successfully deleted user!')
        }).catch(err=>{alert('Try again!')})    
        
        } else {}
    }

    useEffect(() => {
        setIsLoading(true)
        fetchBuyers().then(data => {
            console.log(data)
            setListOfBuyers([...data])
            setIsLoading(false)
        })
    }, [setListOfBuyers])

    return (
        <div className="buyer-list-page">
            <div className="register-form">
                <h1>Register as a New Buyer:</h1>
                <RegisterForm user="buyer" />
            </div>
            
            {isLoading ?
                <div>Loading Buyers .....</div> :
                <>
                    <h2 className="list-title">Current Buyers</h2>
                    <div className="buyer-list-container">
                        {listOfBuyers.map(buyer => {
                            return (
                                <div key={buyer.id} className="buyerCard">
                                    <ul className="buyer-list-item">
                                        <li className="head"><h2>{handleInputDisplay(buyer.firstName)} {buyer.surname}</h2><span className="uuid">Buyer uid: {buyer.id}</span></li>
                                        <li><h3>Address: </h3> <span>{handleInputDisplay(buyer.address)}</span></li>
                                        <li><h3>Postcode:</h3><span>{handleInputDisplay(buyer.postcode)}</span></li>
                                        <li><h3>Phone:</h3><span>{handleInputDisplay(buyer.phone)}</span></li>
                                        {/* <li><button onClick={()=>handleDelete(buyer.id)} className="del-btn"><FaTrashAlt/></button></li> */}
                                        
                                    </ul>
                                    <FaTrashAlt onClick={()=>handleDelete(buyer.id)} className="del-btn"/>
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

export default BuyersList