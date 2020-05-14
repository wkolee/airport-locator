import React, { useContext } from 'react';
import AppContext from '../../context/GlobalContext/GlobalContext'



const Button = ()=>{
   const appContext = useContext(AppContext);
    const getLoc = ()=> appContext.userLoc();
        return(
            <div className='text-center'>
                <button type="button" style={{font:'28px'}} className="btn btn-outline-primary" onClick={getLoc}>GET AIRPORT NEAR ME</button>
            </div>
        )
}

export default Button;