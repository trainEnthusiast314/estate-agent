// imports
import { useEffect, useState } from "react";
import React from 'react';




import {  fetchBooking, postBooking } from "../api/api";


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
                    bookings.push(listOfBookings[item]);
                }

                }

        }
        
    
    
    findBookingbyPropertyId()


   // console.log(bookings)
    function handleSubmit(){
        //Would need a check to see if  the user exists and if the booking has already been taken

        let newBooking ={
            buyerId:document.getElementById("buyerId").value,
            propertyId: parseInt(props.propId),
            time : (document.getElementById("bookingDate").value + " "+ document.getElementById("bookingTime").value)
            }
        postBooking(newBooking)
    }
    return(
    <div>
        <h1>Make a booking</h1>
        
        
        <div className = "booking-list-container" >{bookings.map(property =>{
            return(
                <div className = "booking-wrapper" key = {props.propId}>
                <div>Booking ID {property.id}</div>
                <div>Booking Date {((property.time).split(" "))[0]}</div> 
                <div>Booking Time {((property.time).split(" "))[1]}</div>
                <hr/>
                </div>)
        } )}
        </div>
        <form >
            <input id="buyerId" type = "text" required/>
            <input id = "bookingDate" type = "date" required/>
            <input id = "bookingTime"type = "time" required/>
            <button onClick={handleSubmit}>Book</button>
        </form>
        
      

      
        
    </div>
    )

}

export default Booking