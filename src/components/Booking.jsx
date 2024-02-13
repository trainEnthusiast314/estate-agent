// imports
import { useEffect, useState } from "react";
import React from 'react';




import {  fetchBooking, postBooking , fetchBuyers} from "../api/api";


function Booking(props) {
    let bookings = [];
    const [isLoading, setIsLoading] = useState(true)
    const [listOfBookings, setListOfBookings] = useState([])
    const [listOfBuyers, setListOfBuyers] = useState([])
    let  hours = ["09","10","11","12","13","14","15","16","17"]
    let  minutes = ["00","05","10","15","20","25","30","35","40","45","50","55"]
    useEffect(()=>{
        setIsLoading(true)
        fetchBooking().then((data)=>{
            setListOfBookings(data)
            setIsLoading(false
                )
        })},[setListOfBookings])

        useEffect(()=>{
            setIsLoading(true)
            fetchBuyers().then((data)=>{
                setListOfBuyers(data)
                setIsLoading(false
                    )
            })},[setListOfBuyers])
 

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
            propertyId: props.propId,
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
           <span>
            <label>Buyer</label>
            
            <select id="buyerId" name="buyerId" required >{listOfBuyers.map(buyer => {
                return(
                    <option value = {buyer.id}>{buyer.id}{buyer.firstName}</option>
                )
            })}
            
            </select>
            
            
          
            <input id = "bookingDate" type = "date" required/>
            {/* <input id = "bookingTime"type = "time" min = "09:00" max = "17:00" required/> */}

            
            <select id = "timeHour" name = "timeHour">{hours.map(hour =>{
                return(
                    <option value = {hour}>{hour}</option>
                    )
                })}
            </select>
                
           

          
            <h1>:</h1>
           

           
            <select id = "timeMin" name = "timeMin">{minutes.map(minute =>{
                return(
                    <option value = {minute}>{minute}</option>
                    )
                })}
            </select></span>
         
             <br/>
            <button onClick={handleSubmit}>Book</button>
        </form>
        
      

      
        
    </div>
    )

}

export default Booking