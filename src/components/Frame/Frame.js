import React, {Component} from 'react';
import Button from '../button/Button';
import Airport from '../airport/Airport';
import Proptype from 'prop-types';
import Alert from '../alert/Alert';
import Loader from '../loading/Loading';
import Map from '../map/Map';
import Axios from 'axios';



class Frame extends Component{
    state = {
        airports: [],
        alertMsg:false,
        loading: false
    }
    //proptypes
    proptypes = {
        airport: Proptype.object.isRequired,
        alertMsg: Proptype.bool.isRequired,
        loading: Proptype.bool.isRequired
    }

    
 userLoc = ()=>{
        //get user current location
        if(!navigator.userAgent){
                this.setState({airports: [], loading: false, alertMsg: true});
        }else if(navigator.userAgent){
            this.setState({loading: true, alertMsg: false});
            navigator.geolocation.getCurrentPosition(async (position)=>{
                const lng = position.coords.longitude;
                const lat = position.coords.latitude;
                //get airport near by
                const options ={
                    "method": "GET",
                    "headers": {
                    "x-rapidapi-host": "cometari-airportsfinder-v1.p.rapidapi.com",
                    "x-rapidapi-key": "ee706ee66bmsh3ac5c2fd7d37ca5p14e280jsn689ff183fcd9"}}
                    const response = await Axios.get(`https://cometari-airportsfinder-v1.p.rapidapi.com/api/airports/nearest?lng=${lng}&lat=${lat}`, options)
                    this.setState({airports: [response.data], loading: false, alertMsg: false});       
        });
   }  
   //set alert if user did not active geolocation
       if(this.state.airports.length <= 0){
           this.setState({alertMsg: true});
       } 
    
}
    render(){
        const {airports, loading, alertMsg} = this.state;
        return(
            <div className="container">
                <Button userLoc={this.userLoc}/>
                <br></br>
                <Alert alertMsg={alertMsg}/>
                <br></br>
                <Loader loading={loading}/>
                <Airport airports={airports}/>
                <br></br>
                <Map airports={airports} airportsTrue={airports.length > 0 ? true: false }/>
            </div>
        )
    }
}
export default Frame;