import React from 'react'
import { useState } from 'react'


const SearchBox = (props)=>{
   const [input, setInput] = useState([]);
   return ( 
   <div> 
      <div className='search'>
<input
   type="text"
   placeholder="Add Task"
   value={input}  
   onChange={(event)=>{
      setInput(event.target.value)
   }} />
   </div>
 <button  className='button' 
 onClick={()=>{
   props.addList(input)
   setInput('')
 }} >  AD
   </button>
   
   </div>
     
)}
export default SearchBox;