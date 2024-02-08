// imports

import { useParams } from "react-router"

function PropertyDetails() {
    const {property_id}=useParams()
    console.log(property_id)
    return <div>Hello</div>

}

export default PropertyDetails