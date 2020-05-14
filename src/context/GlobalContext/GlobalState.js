import React, {useReducer} from 'react';
import GlobalContext from './GlobalContext';
import Reducer from './Reducer';
import Axios from 'axios';
import {
    SET_AIRPORT,
    SET_ALERT, 
    SET_LOADING,
} from '../types';


//state of the application
const AppState = props => {
    //initialize state
    const initialState = {
        airports: [],
        alertMsg:false,
        loading: false
       
    }

    const [state, dispatch] = useReducer(Reducer, initialState);



    const userLoc = ()=>{
        //get user current location
        if(!navigator.userAgent){
            setLoading()
            dispatch({type: SET_ALERT});
        }else if(navigator.userAgent){
            setLoading();
            navigator.geolocation.getCurrentPosition(async (position)=>{
                const lng = position.coords.longitude;
                const lat = position.coords.latitude;
                //get airport near by
                const options ={
                    "method": "GET",
                    "headers": {
                    "x-rapidapi-host": "cometari-airportsfinder-v1.p.rapidapi.com",
                    "x-rapidapi-key": `${process.env.REACT_APP_AIRPORT_CLIENT_ID}`}}
                    const response = await Axios.get(`https://cometari-airportsfinder-v1.p.rapidapi.com/api/airports/nearest?lng=${lng}&lat=${lat}`, options);
                    setLoading();
                    dispatch({type: SET_AIRPORT, payload: [response.data]});
                    
                    //console.log([response.data].length);
        });
   }  
}
//set loading to true
const setLoading = () => dispatch({type: SET_LOADING});

return <GlobalContext.Provider 
        value={{
            airports: state.airports,
            alertMsg:state.alertMsg,
            loading: state.loading,
            userLoc
        }}>

        {props.children}
        </GlobalContext.Provider>
}

export default AppState;