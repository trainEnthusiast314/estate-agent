import './components.css'
import { useState } from 'react' 
import { postSeller } from '../api/api';


// A complete function that has inputs (through HTML) - using state to save the info inputted. 
// On click of button all of the data inputted gets send straight to JSON server (if you are connected to the server)

// Does not currently check if seller is already registered (!!)


function RegisterSeller() {

    let [seller, setSeller] = useState({firstname : '', surname : '', address : '', postcode : '', telephone : ''})

    return (
        <div className="form-container">
            <form>
            First Name: <div><input name="firstname" value={seller.firstname} 
            onChange={(e) =>
                setSeller((seller) => ({ ...seller, firstname: e.target.value }))} required></input></div>

            Surname: <div><input name="surname" value={seller.surname}
            onChange={(e) =>
                setSeller((seller) => ({ ...seller, surname: e.target.value }))} required></input></div>

            Address: <div><textarea name="address" value={seller.address}
            onChange={(e) =>
                    setSeller((seller) => ({ ...seller, address: e.target.value }))} required></textarea></div>

            Postcode: <div><input name="postcode" value={seller.postcode}
                onChange={(e) =>
                    setSeller((seller) => ({ ...seller, postcode: e.target.value }))} required></input></div>

            Telephone: <div><input name="telephone" value={seller.telephone}
                onChange={(e) =>
                    setSeller((seller) => ({ ...seller, telephone: e.target.value }))} required></input></div>

            <button className="form-button" onClick={(e)=> {
                // prevents button from refreshing page
                e.preventDefault()
                // if statement to check values are put in the form before submitting to database
                if (seller.firstname, seller.surname, seller.address, seller.postcode, seller.telephone) {   
                    //calls the api and adds the seller information to the database
                    postSeller(seller)
                    //sets the data back to empty to clear form
                    setSeller({firstname : '', surname : '', address : '', postcode : '', telephone : ''})
                }
            }}>Submit</button>
            </form>
        </div>
    )

}

export default RegisterSeller