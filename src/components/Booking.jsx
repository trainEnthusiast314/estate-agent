// imports
import { useEffect, useState } from "react";
import React from 'react';
import './Booking.css';
import TimeComponent from './TimeComponent'




import {  fetchBooking, postBooking , fetchBuyers} from "../api/api";


function Booking(props) {
    let bookings = [];
    const [isLoading, setIsLoading] = useState(true)
    const [listOfBookings, setListOfBookings] = useState([])
    const [listOfBuyers, setListOfBuyers] = useState([])
   
    useEffect(()=>{
        setIsLoading(true)
        fetchBooking().then((data)=>{
            setListOfBookings(data)
            setIsLoading(false)
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
    function handleSubmit(e){
        let prevent = false;
        
        //Would need a check to see if  the user exists and if the booking has already been taken
        let bookingsOfDay =[];
        for(let item in bookings){
             if(bookings[item].time.split(" ")[0] == document.getElementById("bookingDate").value){
                 bookingsOfDay.push(bookings[item])
             }
            // }
           console.log(bookingsOfDay)
        }
        
        for(let item in bookingsOfDay){
           if(bookingsOfDay[item].time.split(" ")[1]== document.getElementById("timeHour").value+":"+document.getElementById("timeMin").value){
            prevent = true;
           }
           // }
         
       }

       if(!prevent ){
        let newBooking ={
                buyerId:document.getElementById("buyerId").value,
                propertyId: props.propId,
                time : (document.getElementById("bookingDate").value + " "+ document.getElementById("timeHour").value+":"+document.getElementById("timeMin").value )
                }
            postBooking(newBooking)
       }
       else{
        e.preventDefault()
        alert("Time unavailable")
        prevent = false;

       }

    }

    function returnList(){
        return(<div className = "booking-list-container" ><h1>Make a booking</h1>{bookings.map(property =>{
            return(
                <div className = "booking-wrapper" key = {props.propId}>
                <div>Booking ID {property.id}</div>
                <div>Booking Date {((property.time).split(" "))[0]}</div> 
                <div>Booking Time {((property.time).split(" "))[1]}</div>
                <hr/>
                </div>
                )
        } )}
        </div>)
    }


    function returnForm(){
        if(props.comp =="list"){
        return(<div className = "bookingForm">
        <form  >
            <ul className = "bookingList">

               
                <li> 
                    <label>Buyer</label>
                    <div className = "buyer-dropdown">
                        <select id="buyerId" name="buyerId" required >{listOfBuyers.map(buyer => {
                            return(
                                <option value = {buyer.id}>{buyer.id}-{buyer.firstName} {buyer.surname}</option>
                            )
                        })}
                        
                        </select>
                    </div>
                </li>

               
                <li>
                    <div className = "calendar-booking">
                        <input id = "bookingDate" type = "date" required/>       
                    </div>
                </li>
                <li>
                <TimeComponent/>
                </li>
           
               </ul> 
             
         
            
            <button className = "bookBtn" onClick={handleSubmit}>Book</button>
        </form></div>)}


        else if(props.comp =="form"){
            return(<div className = "booking-list-container" ><h1>Make a booking</h1>{bookings.map(property =>{
                return(
                    <div className = "booking-wrapper" key = {props.propId}>
                    <div>Booking ID {property.id}</div>
                    <div>Booking Date {((property.time).split(" "))[0]}</div> 
                    <div>Booking Time {((property.time).split(" "))[1]}</div>
                    <hr/>
                    </div>
                    )
            } )}
            </div>)
        }
    }


        







        // let newBooking ={
        //     buyerId:document.getElementById("buyerId").value,
        //     propertyId: props.propId,
        //     time : (document.getElementById("bookingDate").value + " "+ document.getElementById("timeHour").value +":"+document.getElementById("timeMin").value )
        //     }
        // postBooking(newBooking)
    
    return(

        
        
        <div className = "returnDiv">

            {returnForm()}
        
{/*         
        <div className = "booking-list-container" ><h1>Make a booking</h1>{bookings.map(property =>{
            return(
                <div className = "booking-wrapper" key = {props.propId}>
                <div>Booking ID {property.id}</div>
                <div>Booking Date {((property.time).split(" "))[0]}</div> 
                <div>Booking Time {((property.time).split(" "))[1]}</div>
                <hr/>
                </div>
                )
        } )}
        </div> */}
{/*    
        <div className = "bookingForm">
        <form  >
            <ul className = "bookingList">

               
                <li> 
                    <label>Buyer</label>
                    <div className = "buyer-dropdown">
                        <select id="buyerId" name="buyerId" required >{listOfBuyers.map(buyer => {
                            return(
                                <option value = {buyer.id}>{buyer.id}-{buyer.firstName} {buyer.surname}</option>
                            )
                        })}
                        
                        </select>
                    </div>
                </li>

               
                <li>
                    <div className = "calendar-booking">
                        <input id = "bookingDate" type = "date" required/>       
                    </div>
                </li>
                <li>
                <TimeComponent/>
                </li>
           
               </ul> 
             
         
            
            <button className = "bookBtn" onClick={handleSubmit}>Book</button>
        </form></div> */}
                    
        </div>
            
  
     )
       
        {/* <form >
           
            <label>Buyer</label>
            <div className = "buyer-dropdown">
            <select id="buyerId" name="buyerId" required >{listOfBuyers.map(buyer => {
                return(
                    <option value = {buyer.id}>{buyer.id}-{buyer.firstName} {buyer.surname}</option>
                )
            })}
            
            </select>
            </div>
             */}
            {/*             
            <div className = "calendar-booking">
            <input id = "bookingDate" type = "date" required/></div> */}
            {/* <input id = "bookingTime"type = "time" min = "09:00" max = "17:00" required/> */}

            {/* <div className = "hour-container">
            <select id = "timeHour" name = "timeHour">{hours.map(hour =>{
                return(
                    <option value = {hour}>{hour}</option>
                    )
                })}
            </select>
                
           </div>

          <div className = "colon">
            <h1>:</h1>
           </div>

           <div className = "minute-container">
            <select id = "timeMin" name = "timeMin">{minutes.map(minute =>{
                return(
                    <option value = {minute}>{minute}</option>
                    )
                })}
            </select>

            </div>
            
            <button onClick={handleSubmit}>Book</button> */}
        {/* </form> */}
        
       

      
        
   
  

}

export default Booking