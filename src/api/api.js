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