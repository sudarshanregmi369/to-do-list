import React, {useState} from 'react'
import './App.css'
import SearchBox from './component/SearchBox'
import TodoList from './component/TodoList'
const App=()=>{
  const [newTask, setNewTask]=useState([]);
  let addList=(input)=>{
    if (input!=='')
    setNewTask([...newTask, input])
    
  }
   const  deleteItem = (key) => {
    let newlist= [...newTask]
    newlist.splice(key,1)
    setNewTask([...newlist])

   }
  return(
    <div className='main-container '>
    <div className='central-container'>
    <h1 >To- do -list</h1>
    <SearchBox addList={addList}/>
    <h1 className='heading'>ToDo</h1>
   
    {newTask.map=((listItem, i)=>{
      return (<TodoList key ={i}  index ={i} item={listItem} deleteItem={deleteItem} />)
    })
      
    }
    <TodoList/>
    
    </div>
    
    </div>
  )
}

export default App;
