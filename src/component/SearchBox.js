import React from 'react'
import { useState } from 'react'
const SearchBox = ()=>{
    const  [searchInput, setSearchInput ] = useState([]);
    return <div >

<input
   className  ="search"
   placeholder="Add here"/>
   <h1 >To- do -list</h1>
   <button  className='button'> 
   ++
   
   </button>
   </div>
//    onChange={handleChange}
//    value={searchInput} />
   

}
export default SearchBox;