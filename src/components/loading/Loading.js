import React from 'react';
import gif from '../loading/s.gif';


const Loader = ({loading})=>{
    
    return(
        loading ? <img src={gif} alt='loading...' style={{width: '200px', margin: 'auto', display: 'block'}}/> : false 
    )
}
export default Loader;