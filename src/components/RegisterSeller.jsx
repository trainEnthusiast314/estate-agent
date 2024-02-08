import './components.css'
import { useState } from 'react' 


function RegisterSeller() {

    let [inputs, setInputs] = useState({firstname : '', surname : '', address : '', postcode : '', telephone : ''})

    return (
        <div className="form-container">

            First Name: <div><input name="firstname" value={inputs.firstname} 
            onChange={(e) =>
                setInputs((inputs) => ({ ...inputs, firstname: e.target.value }))}></input></div>

            Surname: <div><input name="surname" value={inputs.surname}
            onChange={(e) =>
                setInputs((inputs) => ({ ...inputs, surname: e.target.value }))}></input></div>

            Address: <div><textarea name="address" value={inputs.address}
            onChange={(e) =>
                    setInputs((inputs) => ({ ...inputs, address: e.target.value }))}></textarea></div>

            Postcode: <div><input name="postcode" value={inputs.postcode}
                onChange={(e) =>
                    setInputs((inputs) => ({ ...inputs, postcode: e.target.value }))}></input></div>

            Telephone: <div><input name="telephone" value={inputs.telephone}
                onChange={(e) =>
                    setInputs((inputs) => ({ ...inputs, telephone: e.target.value }))}></input></div>

            <p className="form-button" onClick={(e)=> {console.log(inputs)}}>Submit</p>
        </div>
    )

}

export default RegisterSeller