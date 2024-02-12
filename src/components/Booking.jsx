// imports
import { useEffect, useState } from "react";
import React from 'react';


import {Link} from 'react-router-dom';
import { fetchBooking } from "../api/api"


function Booking() {
    let property = [];
    const [isLoading, setIsLoading] = useState(true)
    const [listOfBookings, setListOfBookings] = useState([])
    useEffect(()=>{
        setIsLoading(true)
        fetchBooking().then((data)=>{
            setListOfBookings(data)
            setIsLoading(false
                )
        })},[setListOfBookings])
 

    function findBookingbyPropertyId(){
        for(let item in listOfBookings){
           
                if(listOfBookings[item].propertyId ==2){
                    console.log("-----------------------------------------------")
                   property.push(listOfBookings[item])
                   
                };

                
                
                }
                
               
       
        }
        
    
    function findBookingByBookingId(){
        
   
    }
    findBookingbyPropertyId()
    let test = property.find(test => test.id === "2")
    return(
    <div>
        <h1>Make a booking</h1>
        
        
        {console.log(test)}
      

      
        
    </div>
    )

}

export default Booking