import axios from "axios";

const estateApi=axios.create(
    {baseURL:'http://localhost:3000'}
)

export const fetchProperties=()=>{
    return estateApi.get('/property').then(res=>{
        return res.data
    }
    )
}

export const fetchSellers=()=>{
    return estateApi.get('/seller').then(res=>{
        return res.data
    }
    )
}

