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

export const postSeller=(seller)=> {
    return estateApi.post('/seller', seller )
        .then(response => {
        console.log(response.data);})
        .catch(error => {console.error(error);})
}