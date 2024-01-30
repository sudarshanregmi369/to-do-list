import React from 'react'
import './App.css'
import SearchBox from './component/SearchBox'
const App=()=>{
  return(
    <div className='main-container '>
    <div className='central-container'>
    <SearchBox />
    <addRemove/>
    </div>
    
    
    </div>
  )
}

export default App;
