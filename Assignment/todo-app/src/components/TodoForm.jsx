import React, {useState} from 'react'

function TodoForm({setNewTask}) {

    const [newTodo, setNewTodo] = useState({id:0, desc:'', status:''})


    function handleAddTodo(){
        console.log(newTodo)
        setNewTask({...newTodo})
    }

  return (
    <div>
      <form>
      <input type='text' placeholder='enter todo id'
        onChange={(e)=>{ setNewTodo({...newTodo, id: e.target.value})}} /> 
        { " "}
        <input type='text' placeholder='enter todo desc'
        onChange={(e)=>{ setNewTodo({...newTodo, desc: e.target.value})}} /> 
        { " "}
        <input type='text' placeholder='enter todo status' 
        onChange={(e)=>{ setNewTodo({...newTodo, status: e.target.value})}}/> 
        {" "}
        <button type='button' onClick={handleAddTodo}> Add Todo </button>
      </form>
    </div>
  )
}

export default TodoForm
