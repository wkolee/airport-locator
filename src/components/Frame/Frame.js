import React from 'react';
import Button from '../button/Button';
import Airport from '../airport/Airport';
import Alert from '../alert/Alert';
import Loader from '../loading/Loading';
import Map from '../map/Map';



const Frame = ()=>{
        return(
            <div className="container">
                <Button />
                <br></br>
                <Alert />
                <br></br>
                <Loader />
                <Airport />
                <br></br>
                <Map />
            </div>
        )
    
}
export default Frame;