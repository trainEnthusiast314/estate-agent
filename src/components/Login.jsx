// imports
import './Login.css'
import React from 'react';



function Login() {
    return(
    <div className='loginPage'>
        <h1>Login</h1>
        <form>
        <div>
        <input 
            class = "dataField"
            id ="firstName" 
            name = "firstName" 
            type = "text" 
            placeholder = "First Name" 
            required/>
        </div>   

         <div>
        <input 
            class = "dataField"
            id ="surname" 
            name = "surname" 
            type = "text" 
            placeholder = "Surname" 
            required/>
        </div> 

        <div>
        <input 
            class = "dataField"
            id ="email" 
            name = "email" 
            type = "email" 
            placeholder = "properties@myemail.com" 
            required/>
        </div>  

        <div>
        <input 
            class = "dataField"
            id ="password" 
            name = "email" 
            type = "email" 
            placeholder = "Password" 
            required/>
        </div>

        <div>
        <select class = "dataField" id = "accountType" name = "accountType">
            <option value = "buyer">Buyer</option>
            <option value = "seller">Seller</option>
        </select>
        </div>
        <input class = "submitBtn" id= "loginButton" type = "submit" value = "Login"></input>
        
        </form>
    </div>)

}

export default Login