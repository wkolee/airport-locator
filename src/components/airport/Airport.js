import React, {  useContext } from 'react';
import AppContext from '../../context/GlobalContext/GlobalContext';

const Airport = ()=>{
    const appContext = useContext(AppContext);
    const {airports} = appContext;
    console.log(airports[0]);
    return(
        airports.length >= 1 ?
       <div style={{textAlign: 'center'}}>
           <h1 style={{color: 'blue'}}>{airports[0].name}</h1>
        </div>

       : false
    )
}

export default Airport;