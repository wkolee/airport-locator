import React, {  useContext } from 'react';
import AppContext from '../../context/GlobalContext/GlobalContext';

const Map = ()=>{
   const appContext = useContext(AppContext);
   const {airports} = appContext;
        return(

           airports.length >= 1 ? 
            <iframe title='map'
            style={styles}
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_MAP_CLIENT_ID}
            &q=${airports[0].location.latitude},${airports[0].location.longitude}`} allowfullscreen>
            </iframe>
            : false
        )
    
}


const styles = {
    width:"600px" ,
    textAlign: 'center',
    height:"450px" ,
    display: 'block',
    frameborder: '0',
    border: '0',
    scrolling:"no" ,
    marginheight:"0" ,
    marginwidth:"0" 
}

export default Map;