import React, { useState, Component } from 'react';
import Axios from 'axios';


class Map extends Component{
    state = {
        lat: '',
        lng: ''
    }
    render(){
         const {airportsTrue, airports} = this.props;
         const mapApi = async()=>{
            const lngs = airports[0].location.longitude;
            const lats = airports[0].location.latitude;
            const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lats},${lngs}&key=AIzaSyDa_dddwfJ8sDXiPe54Zszrjn6XpbOgvBA`;
            //mapquest - const url = `http://www.mapquestapi.com/geocoding/v1/reverse?key=PChvsI5BaSf8tgFVZyAEyS1ONGS645eI&location=${lat},${lng}&includeRoadMetadata=true&includeNearestIntersection=true`;
            const response = await Axios.get(url);
            //data = data.results[0].locations[0];
           const data = response.data.results[0].geometry.location;
           this.setState({lat: data.lat, lng: data.lng});
        }
        if(airportsTrue){
            mapApi();
        }
        return(
            airportsTrue ? 
            <iframe title='map'
            style={styles}
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDa_dddwfJ8sDXiPe54Zszrjn6XpbOgvBA
            &q=${this.state.lat},${this.state.lng}`} allowfullscreen>
            </iframe>
            : false
        )
    }
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
/*
const Map = ({airportsTrue, airports})=>{
    const [data, setData] = useState([
        {
            data: {}
        }
    ]);
    const mapApi = async()=>{
        const lngs = airports[0].location.longitude;
        const lats = airports[0].location.latitude;
        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lats},${lngs}&key=AIzaSyDa_dddwfJ8sDXiPe54Zszrjn6XpbOgvBA`;
        //mapquest - const url = `http://www.mapquestapi.com/geocoding/v1/reverse?key=PChvsI5BaSf8tgFVZyAEyS1ONGS645eI&location=${lat},${lng}&includeRoadMetadata=true&includeNearestIntersection=true`;
        const response = await Axios.get(url);
        //data = data.results[0].locations[0];
       const datas = response.data.results[0].geometry.location;

       setData(datas);
      
       console.log(data)
       
     
    }
    if(airportsTrue){ 
        mapApi();
    }
    return(
        airportsTrue ? 
        <iframe title='map'
        style={styles}
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDa_dddwfJ8sDXiPe54Zszrjn6XpbOgvBA

          &q=${data.lat},${data.lng}`} allowfullscreen>
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
*/
export default Map;