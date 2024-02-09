import './components.css'
import { useState } from 'react' 
import { postAccount } from '../api/api';


// A complete function that has inputs (through HTML) - using state to save the info inputted. 

// On click of button all of the data inputted gets send straight to JSON server (if you are connected to the server)

// Does not currently check if account is already registered (!!)

// On call needs user='buyer' or user='seller'



function RegisterForm(user) {

    let [account, setAccount] = useState({firstname : '', surname : '', address : '', postcode : '', telephone : ''})

    return (
        <div className="form-container">
            <form>
            First Name: <div><input name="firstname" value={account.firstname} 
            onChange={(e) =>
                setAccount((account) => ({ ...account, firstname: e.target.value }))} required></input></div>

            Surname: <div><input name="surname" value={account.surname}
            onChange={(e) =>
                setAccount((account) => ({ ...account, surname: e.target.value }))} required></input></div>

            Address: <div><textarea name="address" value={account.address}
            onChange={(e) =>
                    setAccount((account) => ({ ...account, address: e.target.value }))} required></textarea></div>

            Postcode: <div><input name="postcode" value={account.postcode}
                onChange={(e) =>
                    setAccount((account) => ({ ...account, postcode: e.target.value }))} required></input></div>

            Telephone: <div><input name="telephone" value={account.telephone}
                onChange={(e) =>
                    setAccount((account) => ({ ...account, telephone: e.target.value }))} required></input></div>

            <button className="form-button" onClick={(e)=> {
                // prevents button from refreshing page
                e.preventDefault()
                // if statement to check values are put in the form before submitting to database
                if (account.firstname, account.surname, account.address, account.postcode, account.telephone) {   
                    //calls the api and adds the account information to the database
                    postAccount(account, user.user)
                    //sets the data back to empty to clear form
                    setAccount({firstname : '', surname : '', address : '', postcode : '', telephone : ''})
                }
            }}>Submit</button>
            </form>
        </div>
    )

}

export default RegisterForm