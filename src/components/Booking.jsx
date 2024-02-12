// imports
import { useEffect, useState } from "react";
import React from 'react';


import {Link} from 'react-router-dom';
import { fetchBooking } from "../api/api"


function Booking(props) {
    let bookings = [];
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
           
                if(listOfBookings[item].propertyId ==props.propId){
                    console.log("-----------------------------------------------")
                    bookings.push(listOfBookings[item])

                };

                }

        }
        
    
    function findBookingByBookingId(){
        
   
    }
    findBookingbyPropertyId()
   // console.log(bookings)

    return(
    <div>
        <h1>Make a booking</h1>
        
        
        <div className = "booking-list-container" >{bookings.map(property =>{
            return(
                <div className = "booking-wrapper" key = {props.propId}>
                <div>Booking ID {property.id}</div>
                <div>Property ID {property.time}</div>
                </div>)
        } )}
        </div>
        <form>
            <input type = "date"/>
            <input type = "time"/>
            <input type = "submit" value="Book"/>
        </form>
        
      

      
        
    </div>
    )

}

export default Booking