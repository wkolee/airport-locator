import React, {useContext} from 'react';
import AppConntext from '../../context/GlobalContext/GlobalContext';
import gif from '../loading/s.gif';


const Loader = ()=>{
    const appContext = useContext(AppConntext);
    return(
        appContext.loading ? <img src={gif} alt='loading...' style={{width: '200px', margin: 'auto', display: 'block'}}/> : false 
    )
}
export default Loader;