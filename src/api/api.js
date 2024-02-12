import axios from "axios";

export const estateApi=axios.create(
    {baseURL:'http://localhost:3000'}
)

export const fetchProperties=(params)=>{
    
    return estateApi.get('/property',{params:{
        _sort:params.query,
        type:params.type,
        status:params.status
    }
        
    }).then(res=>{
        return res.data
    }
    )
}

export const postAccount=(account, url)=> {
    return estateApi.post(`/${url}`, account )
        .then(response => {
        console.log(response.data);})
        .catch(error => {console.error(error);})
}

export const fetchProperty=(property_id)=>{
    return estateApi.get(`/property/${property_id}`).then(res=>{
        return res.data
    }
    )
}

export const postProperty=(property)=>{
    return estateApi.post(`/property`,property).then(res=>{
        console.log(res)
    }).catch(err=>{
        console.log(err)
    })
}

export const fetchSellers=()=>{
    return estateApi.get('/seller').then(res=>{
        return res.data
    }
    )
}

export const fetchBuyers=()=>{
    return estateApi.get('/buyer').then(res=>{
        return res.data
    }
    )
}


