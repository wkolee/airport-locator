import React, {useContext} from 'react';
import AppConntext from '../../context/GlobalContext/GlobalContext';


const Alert = ()=>{
    const appContext = useContext(AppConntext);
    const { airports} = appContext;
    
    
    return(
        airports.length <= 0 ? <div className="alert alert-danger" style={{textAlign: 'center'}} role="alert">
            Click button to active Geolocation, if that do not work sorry your browser do not support geolcation
        </div>: false
    )
}

export default Alert;