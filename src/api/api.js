import axios from "axios";

export const estateApi=axios.create(
    {baseURL:'http://localhost:3000'}
)

export const fetchProperties=()=>{
    return estateApi.get('/property').then(res=>{
        return res.data
    }
    )
}

export const fetchProperty=(property_id)=>{
    return estateApi.get(`/property/${property_id}`).then(res=>{
        return res.data
    }
    )
}