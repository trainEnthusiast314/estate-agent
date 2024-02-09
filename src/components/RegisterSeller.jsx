import './components.css'
import { useState } from 'react' 
import axios from 'axios';


// A complete function that has inputs (through HTML) - using state to save the info inputted. 
// On click of button all of the data inputted gets send straight to JSON server (if you are connected to the server)

// Does not currently check if seller is already registered (!!)


function RegisterSeller() {

    let [seller, setseller] = useState({firstname : '', surname : '', address : '', postcode : '', telephone : ''})

    return (
        <div className="form-container">
            <form>
            First Name: <div><input name="firstname" value={seller.firstname} 
            onChange={(e) =>
                setseller((seller) => ({ ...seller, firstname: e.target.value }))}></input></div>

            Surname: <div><input name="surname" value={seller.surname}
            onChange={(e) =>
                setseller((seller) => ({ ...seller, surname: e.target.value }))}></input></div>

            Address: <div><textarea name="address" value={seller.address}
            onChange={(e) =>
                    setseller((seller) => ({ ...seller, address: e.target.value }))}></textarea></div>

            Postcode: <div><input name="postcode" value={seller.postcode}
                onChange={(e) =>
                    setseller((seller) => ({ ...seller, postcode: e.target.value }))}></input></div>

            Telephone: <div><input name="telephone" value={seller.telephone}
                onChange={(e) =>
                    setseller((seller) => ({ ...seller, telephone: e.target.value }))}></input></div>

            <button className="form-button" onClick={(e)=> {
                axios.post('http://localhost:3000/seller', seller )
                .then(response => {
                  console.log(response.data);
                })
                .catch(error => {
                  console.error(error);
                });
            }}>Submit</button>
            </form>
        </div>
    )

}

export default RegisterSeller