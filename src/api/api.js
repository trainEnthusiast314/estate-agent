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

export const fetchSellersbyID=(seller_id)=>{
    return estateApi.get(`/seller/${seller_id}`).then(res=>{
        return res.data
    }
    )
}

export const fetchBooking=()=>{
    return estateApi.get(`/booking/` ).then(res=>{
        
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

export const postBooking=(booking)=>{
    return estateApi.post(`/booking`,booking).then(res=>{
        console.log(res)
    }).catch(err=>{
        console.log(err)
    })
}

export const deleteProperty=(property_id)=>{
    return estateApi.delete(`/property/${property_id}`).then(res=>{
        console.log(res)
    }).catch(err=>{
        console.log(err)
        alert(err.status)
    })
}


export const deleteBuyer = (id) => {
    return estateApi.delete(`/buyer/${id}`).then(res => {
        console.log(res)
    })
}
export const deleteSeller = (id) => {
    return estateApi.delete(`/seller/${id}`).then(res => {
        console.log(res)})}

export const updatePropertyStatus=(property_id,update)=>{
    return estateApi.patch(`/property/${property_id}`,update).then((res)=>{
        console.log(res)
    }).catch(err=>{
        console.log(err)

    })
}