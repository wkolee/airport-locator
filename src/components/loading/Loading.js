import React from 'react';
import gif from '../loading/200.gif';


const Loader = ({loading})=>{
    
    return(
        loading ? <img src={gif} alt='loading...' style={{width: '200px', margin: 'auto', display: 'block'}}/> : false 
    )
}
export default Loader;