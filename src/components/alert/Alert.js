import React from 'react';


const Alert = ({alertMsg})=>{
    
    return(
        alertMsg ? <div className="alert alert-danger" style={{textAlign: 'center'}} role="alert">
            Your Browser do not support GeoLocation or You did not Active Geolocation.
        </div>: false
    )
}

export default Alert;