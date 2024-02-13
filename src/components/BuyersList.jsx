// imports
import React from "react"
import { useState, useEffect } from "react";
import { fetchBuyers } from "../api/api"
import "../styles/buyerList.css"
import RegisterForm from "./RegisterForm";


function BuyersList() {
    const [isLoading, setIsLoading] = useState(true)
    const [listOfBuyers, setListOfBuyers] = useState([])


    function handleInputDisplay(input) {
        return (input ? input : 'Data Unavailable')
    }

    function handleDelete() {
        alert("Deleted Buyer")
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
                    <h2>List of Buyers</h2>
                    <div className="buyer-list-container">
                        {listOfBuyers.map(buyer => {
                            return (
                                <div key={buyer.id} className="buyerCard">
                                    <ul className="buyer-list-item">
                                        <li className="head"><h2>{handleInputDisplay(buyer.firstName)} {buyer.surname}</h2><span className="uuid">Buyer uid: {buyer.id}</span></li>
                                        <li><h3>Address: </h3> <span>{handleInputDisplay(buyer.address)}</span></li>
                                        <li><h3>Postcode:</h3><span>{handleInputDisplay(buyer.postcode)}</span></li>
                                        <li><h3>Phone:</h3><span>{handleInputDisplay(buyer.phone)}</span></li>
                                        <li><button class="del-btn">Delete</button></li>
                                    </ul>
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