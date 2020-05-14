import React from 'react';
import './App.css';
import Frame from './components/Frame/Frame';
import AppState from './context/GlobalContext/GlobalState';

const App = ()=>{
  return(
    <AppState>
    <div className="container-fluid">
        <Frame />
    </div>
    </AppState>
    
  )
}

export default App;
