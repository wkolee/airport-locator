import {
    SET_AIRPORT,
    SET_ALERT, 
    SET_LOADING
  
} from '../types';

 const Reducer = (state, action) =>{
    switch (action.type) {
        case SET_LOADING:
            return{
                ...state,
                loading: true
            };
        case SET_ALERT:
            return{
                ...state, 
                alertMsg: true
               
            };
        case SET_AIRPORT:
            return{
                ...state,
                airports: action.payload,
                alertMsg: false,
                loading: false
            };
            
    
        default:
            return state;
    }
}

export default Reducer;