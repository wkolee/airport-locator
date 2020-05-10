import React from 'react';


const Alert = ({alertMsg})=>{
    
    return(
        alertMsg ? <div className="alert alert-danger" style={{textAlign: 'center'}} role="alert">
            Your Browser do not support GeoLocation or You do not have Geolocation activated.
        </div>: false
    )
}

export default Alert;