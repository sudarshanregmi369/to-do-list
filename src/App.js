import React from 'react'
import './App.css'
import SearchBox from './component/SearchBox'
import AddRemove from  './component/AddRemove'
const App=()=>{
  return(
    <div className='main-container '>
    <div className='central-container'>
    <SearchBox/>
    <AddRemove/>
    </div>
    
    </div>
  )
}

export default App;
