// imports

import React from 'react';
import './Booking.css';



function TimeComponent(props) {
   
    let  hours = ["09","10","11","12","13","14","15","16","17"]
    let  minutes = ["00","05","10","15","20","25","30","35","40","45","50","55"]
    
   
    
    return(
                    <div className = "time-container">
                        
                            <select id = "timeHour" name = "timeHour">{hours.map(hour =>{
                                return(
                                    <option value = {hour}>{hour}</option>
                                    )
                                })}
                            </select>
                        

                       

                        
                            <select id = "timeMin" name = "timeMin">{minutes.map(minute =>{
                                return(
                                    <option value = {minute}>{minute}</option>
                                    )
                                })}
                            </select>

                        
                        
                        
                    </div> 
                    )}

                    {/* <div className = "time-container">
                       
                            <select id = "timeHour" name = "timeHour">
                                
                                    <option value = "09">09</option>
                                    <option value = "10">10</option>
                                    <option value = "11">11</option>
                                    <option value = "12">12</option>
                                    <option value = "13">13</option>
                                    <option value = "14">14</option>
                                    <option value = "15">15</option>
                                    <option value = "16">16</option>
                                    <option value = "17">17</option>

                                    
                                
                            </select>
                        

                       
                        
                       


                        
                            <select id = "timeMin" name = "timeMin">
                               <option value = "00">00</option>
                               <option value = "05">05</option>
                               <option value = "15">15</option>
                               <option value = "20">20</option>
                               <option value = "25">25</option>
                               <option value = "30">30</option>
                               <option value = "35">35</option>
                               <option value = "40">40</option>
                               <option value = "45">45</option>
                               <option value = "50">50</option>
                               <option value = "55">55</option>
                           
                            </select></div> */}
                    
                    
       



        

             

                

                

            
  

       

      
        
   
  



export default TimeComponent