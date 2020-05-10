import React, { Component } from 'react';
import Proptype from 'prop-types';




class Button extends Component{
    state = {
        alert:'',
        loading: false
    }

    //propsType
    proptypes = {
        userLoc: Proptype.func.isRequired
    }
    
    getLoc = ()=> {this.props.userLoc();}
   
    render(){
        return(
            <div className='text-center'>
                <button type="button" style={{font:'28px'}} className="btn btn-outline-primary" onClick={this.getLoc}>GET AIRPORT NEAR ME</button>
            </div>
        )
    }
}

   

export default Button;