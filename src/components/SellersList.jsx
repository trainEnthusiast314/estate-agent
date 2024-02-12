// imports
import React from "react"
import { useState, useEffect } from "react";
import { fetchSellers } from "../api/api"
import "../styles/sellerList.css"
import RegisterForm from "./RegisterForm";


function SellersList() {
    const [isLoading, setIsLoading] = useState(true)
    const [listOfSellers, setListOfSellers] = useState([])


    function handleInputDisplay(input) {
        return (input ? input : 'Data Unavailable')
    }

    useEffect(() => {
        setIsLoading(true)
        fetchSellers().then(data => {
            setListOfSellers([...data])
            console.log(data)
            setIsLoading(false)
        })
    }, [setListOfSellers])

    return (
        <div className="seller-list-page">
            <h1>Register as a new seller:</h1>
            <RegisterForm user="seller" />

            {isLoading ?
                <div>Loading Sellers .....</div> :
                <>
                    <h2>List of Sellers</h2>
                    <div className="seller-list-container">
                        {listOfSellers.map(seller => {
                            seller
                            return (
                                <div className="sellerCard">
                                    <ul key={seller.id} className="seller-list-item">
                                        <li className="head"><h2>{handleInputDisplay(seller.firstName)} {seller.surname}</h2><span className="uuid">Seller uid: {seller.id}</span></li>
                                        <li><h3>Address: </h3> <span>{handleInputDisplay(seller.address)}</span></li>
                                        <li><h3>Postcode:</h3><span>{handleInputDisplay(seller.postcode)}</span></li>
                                        <li><h3>Phone:</h3><span>{handleInputDisplay(seller.phone)}</span></li>
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

export default SellersList