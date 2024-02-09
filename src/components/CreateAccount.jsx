// imports
import './Login.css'
import React from 'react';
import {useState} from 'react';


function CreateAccount() {
    let [input, setInputs] = useState({});
    let [userDetails, setUserDetails] = useState({});
    
    const handleChange = (e) =>{
        return setInputs((item) => {
            return { ...item, [e.target.name]: e.target.value };
          });
        };


    function handleSubmit(e){
        e.preventDefault();
        setUserDetails((items) => {
            return{...items,...input};
        })
        setInputs({});
    }

    console.log(userDetails)
    
    return(
    
    <div className = "grid-container">
    <div className='userPage' >
        <h1>Create an Account</h1>   
        
        <form onSubmit={handleSubmit}>
        <div>
        <input 
            className = "dataField"
            id ="firstName" 
            name = "firstName" 
            type = "text" 
            placeholder = "First Name" 
            required
            onChange = {handleChange}
            />
        </div>  
        <div>
        <input 
            className = "dataField"
            id ="surname" 
            name = "surname" 
            type = "text" 
            placeholder = "Surname" 
            required
            onChange = {handleChange}
            />
        </div>  
        <div>
        <input 
            className = "dataField"
            id ="email" 
            name = "email" 
            type = "email" 
            placeholder = "properties@myemail.com" 
            required
            onChange = {handleChange}
            />
        </div>  

        <div>
        <input 
            className = "dataField"
            id ="password" 
            name = "password" 
            type = "password" 
            placeholder = "Password" 
            required
            onChange = {handleChange}/>
        </div>

        <div>

        {/*Used for when the user creates their account*/}
       <select class = "dataField" id = "accountType" name = "accountType">
            <option value = "buyer">Buyer</option>
            <option value = "seller">Seller</option>
        </select>
        </div>

       
        <input className = "submitBtn" id= "createAccountBtn" type = "submit" value = "Create Account"></input>
        
        </form>
    </div></div>)

}

export default CreateAccount